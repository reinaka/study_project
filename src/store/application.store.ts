import { create } from "zustand";
import axios from "axios";
import { BASE_URL } from "@utils/const/const";
import { createSelectors } from "./utils/createSelectors";

export type StatusT =
  | "PREAPPROVAL"
  | "APPROVED"
  | "CC_APPROVED"
  | "DOCUMENT_CREATED"
  | "CREDIT_ISSUED"
  | "CLIENT_DENIED"
  | "CREDIT_ISSUED"
  | "CC_DENIED";

type ApplicationStateT = {
  loading: boolean;
  error: boolean;
  id: number | undefined;
  status: StatusT | undefined;
  schedule: null | [];
  code: number | undefined;
  access: boolean | undefined;

  fetchData: (
    applicationId: number,
    statusCode: number | undefined,
  ) => Promise<void>;
};

export const statusDict = {
  PREAPPROVAL: 0,
  APPROVED: 1,
  CC_APPROVED: 2,
  DOCUMENT_CREATED: 3,
  CREDIT_ISSUED: 5,
  CLIENT_DENIED: -1,
  CC_DENIED: -1,
};

export const applicationStore = create<ApplicationStateT>(set => ({
  loading: false,
  error: false,

  id: undefined,
  status: undefined,
  schedule: null,
  code: undefined,
  access: undefined,

  fetchData: async (applicationId: number, statusCode: number | undefined) => {
    set({ loading: true });
    try {
      const response = await axios.get(
        `${BASE_URL}/admin/application/${applicationId}`,
      );
      if (response.status === 200) {
        const data = response.data;
        if (
          data.status === "CLIENT_DENIED" ||
          data.status === "CREDIT_ISSUED"
        ) {
          localStorage.removeItem("id");
          localStorage.removeItem("status");
          set(state => ({
            ...state,
            id: undefined,
            status: undefined,
            schedule: null,
            code: undefined,
            access: false,
          }));
        } else {
          localStorage.setItem("id", data.id.toString());
          localStorage.setItem("status", data.status);
          set(state => ({
            ...state,
            id: data.id,
            status: data.status,
            code: data.sesCode,
            schedule: data.credit?.paymentSchedule,
            access:
              data.status === "DOCUMENT_CREATED" && data.sesCode
                ? statusCode !== undefined && statusCode <= 4
                : data.id && !data.status
                  ? statusCode !== undefined && statusCode <= 1
                  : data.status !== undefined &&
                      statusDict[data.status as StatusT]
                    ? statusCode !== undefined
                      ? statusCode <= statusDict[data.status as StatusT]
                      : false
                    : false,
          }));
        }
      }
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export const useApplicationStore = createSelectors(applicationStore);
