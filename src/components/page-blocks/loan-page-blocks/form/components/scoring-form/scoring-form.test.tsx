import {
  render,
  screen,
  waitFor,
  act,
  fireEvent,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { ScoringForm } from "./scoring-form";

describe("Scoring Form", () => {
  const getButton = () => screen.getByTestId("form-button");
  const getErrors = () => screen.queryAllByTestId("input-error");
  const getGender = () =>
    screen.getByRole("combobox", {
      name: "What's your gender * Select one of the options",
    });
  const getMaritalStatus = () =>
    screen.getByRole("combobox", {
      name: "Your marital status * Select one of the options",
    });
  const getDependents = () =>
    screen.getByRole("combobox", {
      name: "Your number of dependents * Select one of the options",
    });
  const getEmploymentStatus = () =>
    screen.getByRole("combobox", {
      name: "Your employment status * Select one of the options",
    });
  const getPosition = () =>
    screen.getByRole("combobox", {
      name: "Your position * Select your position",
    });
  const getDivisionCode = () =>
    screen.getByRole("spinbutton", {
      name: "Division code *",
    });
  const getInn = () =>
    screen.getByRole("spinbutton", {
      name: "Your employer INN *",
    });

  it("Scoring form should be rendered", () => {
    render(
      <ScoringForm
        setIsError={() => {}}
        setIsLoading={() => {}}
        setIsSuccess={() => {}}
      />,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText("Step 2 of 5")).toBeInTheDocument();
  });

  it("Error element should not to be in the component by default", async () => {
    render(
      <ScoringForm
        setIsError={() => {}}
        setIsLoading={() => {}}
        setIsSuccess={() => {}}
      />,
      { wrapper: MemoryRouter },
    );
    expect(screen.queryByTestId("input-error")).not.toBeInTheDocument();
  });

  it("Triggers errors when required fields are empty", async () => {
    render(
      <ScoringForm
        setIsError={() => {}}
        setIsLoading={() => {}}
        setIsSuccess={() => {}}
      />,
      { wrapper: MemoryRouter },
    );
    user.click(getButton());
    await waitFor(() => {
      expect(getErrors()).toHaveLength(11);
    });
  });

  it("Check selects", async () => {
    render(
      <ScoringForm
        setIsError={() => {}}
        setIsLoading={() => {}}
        setIsSuccess={() => {}}
      />,
      { wrapper: MemoryRouter },
    );

    await act(async () => {
      fireEvent.click(getButton());
    });
    expect(screen.queryAllByText("Select one of the options")).toHaveLength(4);
    expect(screen.queryByText("Select your position")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getGender(), { target: { value: "MALE" } });
    });
    expect(screen.queryAllByText("Select one of the options")).toHaveLength(3);

    await act(async () => {
      fireEvent.change(getMaritalStatus(), { target: { value: "SINGLE" } });
    });
    expect(screen.queryAllByText("Select one of the options")).toHaveLength(2);

    await act(async () => {
      fireEvent.change(getDependents(), { target: { value: "3" } });
    });
    expect(screen.queryAllByText("Select one of the options")).toHaveLength(1);

    await act(async () => {
      fireEvent.change(getEmploymentStatus(), {
        target: { value: "EMPLOYED" },
      });
    });
    expect(
      screen.queryByText("Select one of the options"),
    ).not.toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getPosition(), { target: { value: "WORKER" } });
    });
    expect(screen.queryByText("Select your position")).not.toBeInTheDocument();
  });

  it("Check division code", async () => {
    render(
      <ScoringForm
        setIsError={() => {}}
        setIsLoading={() => {}}
        setIsSuccess={() => {}}
      />,
      { wrapper: MemoryRouter },
    );

    await act(async () => {
      fireEvent.click(getButton());
    });
    expect(screen.queryByText("Enter division code")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getDivisionCode(), { target: { value: "12" } });
    });
    expect(screen.queryByText("Enter division code")).not.toBeInTheDocument();
    expect(screen.queryByText("Code must be 6 digits")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getDivisionCode(), { target: { value: "1234567" } });
    });
    expect(screen.queryByText("Enter division code")).not.toBeInTheDocument();
    expect(screen.queryByText("Code must be 6 digits")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getDivisionCode(), { target: { value: "123456" } });
    });
    expect(screen.queryByText("Enter division code")).not.toBeInTheDocument();
    expect(screen.queryByText("Code must be 6 digits")).not.toBeInTheDocument();
  });

  it("Check INN", async () => {
    render(
      <ScoringForm
        setIsError={() => {}}
        setIsLoading={() => {}}
        setIsSuccess={() => {}}
      />,
      { wrapper: MemoryRouter },
    );

    await act(async () => {
      fireEvent.click(getButton());
    });
    expect(screen.queryByText("Enter your employer INN")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getInn(), { target: { value: "12" } });
    });
    expect(
      screen.queryByText("Enter your employer INN"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("INN must be 12 digits")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getInn(), { target: { value: "1234567890123" } });
    });
    expect(
      screen.queryByText("Enter your employer INN"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("INN must be 12 digits")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getInn(), { target: { value: "123456789012" } });
    });
    expect(
      screen.queryByText("Enter your employer INN"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("INN must be 12 digits")).not.toBeInTheDocument();
  });
});
