import {
  render,
  screen,
  waitFor,
  act,
  fireEvent,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { PrescoringForm } from "./prescoring-form";

describe("Prescoring Form", () => {
  const getButton = () => screen.getByTestId("form-button");
  const getErrors = () => screen.queryAllByTestId("input-error");
  const getLastName = () => screen.getByPlaceholderText("For Example Doe");
  const getFirstName = () => screen.getByPlaceholderText("For Example John");
  const getEmail = () => screen.getByPlaceholderText("test@gmail.com");
  const getBirthDate = () => screen.getByPlaceholderText("Select Date");
  const getPassportSeries = () =>
    screen.getByRole("spinbutton", {
      name: "Your passport series *",
    });
  const getPassportNumber = () =>
    screen.getByRole("spinbutton", {
      name: "Your passport number *",
    });

  it("Prescoring form should be rendered", () => {
    render(<PrescoringForm />, { wrapper: MemoryRouter });
    expect(screen.getByText("Step 1 of 5")).toBeInTheDocument();
  });

  it("Error element should not to be in the component by default", async () => {
    render(<PrescoringForm />, { wrapper: MemoryRouter });
    expect(screen.queryByTestId("input-error")).not.toBeInTheDocument();
  });

  it("Triggers errors when required fields are empty", async () => {
    render(<PrescoringForm />, { wrapper: MemoryRouter });
    user.click(getButton());
    await waitFor(() => {
      expect(getErrors()).toHaveLength(6);
    });
  });

  it("Check last name input", async () => {
    render(<PrescoringForm />, { wrapper: MemoryRouter });

    await act(async () => {
      fireEvent.click(getButton());
    });
    expect(screen.queryByText("Enter your last name")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getLastName(), { target: { value: "" } });
    });
    expect(screen.queryByText("Enter your last name")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getLastName(), { target: { value: "Smith" } });
    });
    expect(screen.queryByText("Enter your last name")).not.toBeInTheDocument();
  });

  it("Check first name input", async () => {
    render(<PrescoringForm />, { wrapper: MemoryRouter });

    await act(async () => {
      fireEvent.click(getButton());
    });
    expect(screen.queryByText("Enter your first name")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getFirstName(), { target: { value: "" } });
    });
    expect(screen.queryByText("Enter your first name")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getFirstName(), { target: { value: "Anna" } });
    });
    expect(screen.queryByText("Enter your first name")).not.toBeInTheDocument();
  });

  it("Check email input", async () => {
    render(<PrescoringForm />, { wrapper: MemoryRouter });

    await act(async () => {
      fireEvent.click(getButton());
    });
    expect(screen.queryByText("Enter your email address")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getEmail(), { target: { value: "test" } });
    });
    expect(
      screen.queryByText("Enter your email address"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Incorrect email address")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getEmail(), { target: { value: "test@test.test" } });
    });
    expect(
      screen.queryByText("Enter your email address"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Incorrect email address"),
    ).not.toBeInTheDocument();
  });

  it("Check date of birth input", async () => {
    render(<PrescoringForm />, { wrapper: MemoryRouter });

    await act(async () => {
      fireEvent.click(getButton());
    });
    expect(screen.queryByText("Enter your date of birth")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getBirthDate(), { target: { value: "2022-10-10" } });
    });
    expect(
      screen.queryByText("Enter your date of birth"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("You must be 18 y.o. or older"),
    ).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getBirthDate(), { target: { value: "1810-10-10" } });
    });
    expect(
      screen.queryByText("Enter your date of birth"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Invalid year of birth")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getBirthDate(), { target: { value: "1987-10-10" } });
    });
    expect(
      screen.queryByText("Enter your date of birth"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Invalid year of birth")).not.toBeInTheDocument();
  });

  it("Check passport series input", async () => {
    render(<PrescoringForm />, { wrapper: MemoryRouter });

    await act(async () => {
      fireEvent.click(getButton());
    });
    expect(screen.queryByText("Enter passport series")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getPassportSeries(), { target: { value: "12" } });
    });
    expect(screen.queryByText("Enter passport series")).not.toBeInTheDocument();
    expect(screen.queryByText("Series must be 4 digits")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getPassportSeries(), { target: { value: "123456" } });
    });
    expect(screen.queryByText("Enter passport series")).not.toBeInTheDocument();
    expect(screen.queryByText("Series must be 4 digits")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getPassportSeries(), { target: { value: "1234" } });
    });
    expect(screen.queryByText("Enter passport series")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Series must be 4 digits"),
    ).not.toBeInTheDocument();
  });

  it("Check passport number input", async () => {
    render(<PrescoringForm />, { wrapper: MemoryRouter });

    await act(async () => {
      fireEvent.click(getButton());
    });
    expect(screen.queryByText("Enter passport number")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getPassportNumber(), { target: { value: "12" } });
    });
    expect(screen.queryByText("Enter passport number")).not.toBeInTheDocument();
    expect(screen.queryByText("Number must be 6 digits")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getPassportNumber(), { target: { value: "1234567" } });
    });
    expect(screen.queryByText("Enter passport number")).not.toBeInTheDocument();
    expect(screen.queryByText("Number must be 6 digits")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getPassportNumber(), { target: { value: "123456" } });
    });
    expect(screen.queryByText("Enter passport number")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Number must be 6 digits"),
    ).not.toBeInTheDocument();
  });
});
