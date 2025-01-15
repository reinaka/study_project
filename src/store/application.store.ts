import { create } from "zustand";
import axios from "axios";
import { BASE_URL } from "@utils/const/const";

type StatusT =
  | "APPROVED"
  | "CC_APPROVED"
  | "DOCUMENT_CREATED"
  | "CREDIT_ISSUED";

type ApplicationStateT = {
  loading: boolean;
  error: boolean;
  id: number | undefined;
  status: StatusT | undefined;
  schedule: null | [];
  code: number | undefined;
  access: boolean | undefined;

  fetchData: (applicationId: number, statusCode: number) => Promise<void>;
};

const statusDict = {
  APPROVED: 1,
  CC_APPROVED: 2,
  DOCUMENT_CREATED: 3,
  CREDIT_ISSUED: 5,
};

export const selectApplicationStore = {
  loading: (state: ApplicationStateT) => state.loading,
  status: (state: ApplicationStateT) => state.status,
  id: (state: ApplicationStateT) => state.id,
  error: (state: ApplicationStateT) => state.error,
  schedule: (state: ApplicationStateT) => state.schedule,
  code: (state: ApplicationStateT) => state.code,
  access: (state: ApplicationStateT) => state.access,

  fetchData: (state: ApplicationStateT) => state.fetchData,
};

export const useApplicationStore = create<ApplicationStateT>(set => ({
  loading: false,
  error: false,

  id: undefined,
  status: undefined,
  schedule: null,
  code: undefined,
  access: undefined,

  fetchData: async (applicationId: number, statusCode: number) => {
    set({ loading: true });
    try {
      const response = await axios.get(
        `${BASE_URL}/admin/application/${applicationId}`,
      );
      if (response.status === 200) {
        const data = response.data;
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
              ? statusCode === 4
              : data.id && !data.status
                ? statusCode === 1
                : data.status !== undefined &&
                    statusDict[data.status as StatusT]
                  ? statusCode <= statusDict[data.status as StatusT]
                  : false,
        }));
      }
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
