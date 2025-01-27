import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ConfirmationCode } from "./confirmation-code";

afterEach(cleanup);

describe("Document sign", () => {
  const getInputs = () => screen.getAllByRole("textbox");

  it("Should render Confirmation code block", () => {
    render(
      <ConfirmationCode
        setIsLoading={() => {}}
        setIsSuccess={() => {}}
        length={4}
      />,
      { wrapper: MemoryRouter },
    );
    expect(
      screen.getByText("Please enter confirmation code"),
    ).toBeInTheDocument();
    expect(getInputs()).toHaveLength(4);
  });

  it("Should render as many inputs as lengh prop has", () => {
    render(
      <ConfirmationCode
        setIsLoading={() => {}}
        setIsSuccess={() => {}}
        length={8}
      />,
      { wrapper: MemoryRouter },
    );
    expect(
      screen.getByText("Please enter confirmation code"),
    ).toBeInTheDocument();
    expect(getInputs()).toHaveLength(8);
  });
});
