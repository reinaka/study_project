import axios from "axios";
import { vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
  act,
  cleanup,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PaymentSchedule, tableCols } from "./payment-schedule";
import { Table } from "@components/ui";
import { BASE_URL } from "@utils/const/const";

afterEach(cleanup);

describe("Payment Schedule", () => {
  const getDenyButton = () => screen.getByTestId("deny-button");
  const getSubmitButton = () => screen.getByTestId("submit-button");
  const getCheckbox = () => screen.getByRole("checkbox");
  vi.mock("axios");

  it("Should render table", () => {
    render(<Table data={[]} tableCols={tableCols} />, {
      wrapper: MemoryRouter,
    });
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText("NUMBER")).toBeInTheDocument();
    expect(screen.getByText("DATE")).toBeInTheDocument();
    expect(screen.getByText("TOTAL PAYMENT")).toBeInTheDocument();
    expect(screen.getByText("INTEREST PAYMENT")).toBeInTheDocument();
    expect(screen.getByText("DEBT PAYMENT")).toBeInTheDocument();
    expect(screen.getByText("REMAINING DEBT")).toBeInTheDocument();
  });

  it("Should render payment schedule block", () => {
    render(
      <PaymentSchedule
        setIsLoading={() => {}}
        setIsError={() => {}}
        setIsSuccess={() => {}}
      />,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText("Payment Schedule")).toBeInTheDocument();
    expect(getDenyButton()).toBeInTheDocument();
    expect(getSubmitButton()).toBeInTheDocument();
  });

  it("Submit button should be disabled if not checked and abled if checked", async () => {
    render(
      <PaymentSchedule
        setIsLoading={() => {}}
        setIsError={() => {}}
        setIsSuccess={() => {}}
      />,
      { wrapper: MemoryRouter },
    );
    expect(getSubmitButton()).toBeDisabled();

    await act(async () => {
      fireEvent.click(getCheckbox());
    });
    expect(getSubmitButton()).not.toBeDisabled();
  });

  it("Should send post request on submit", async () => {
    render(
      <PaymentSchedule
        setIsLoading={() => {}}
        setIsError={() => {}}
        setIsSuccess={() => {}}
      />,
      { wrapper: MemoryRouter },
    );

    await act(async () => {
      fireEvent.click(getCheckbox());
    });
    expect((getCheckbox() as HTMLInputElement).checked).toEqual(true);
    expect(getSubmitButton()).not.toBeDisabled();

    await act(async () => {
      fireEvent.click(getSubmitButton());
    });
    expect(axios.post).toHaveBeenCalledWith(
      `${BASE_URL}/document/${undefined}`,
    );
  });
});
