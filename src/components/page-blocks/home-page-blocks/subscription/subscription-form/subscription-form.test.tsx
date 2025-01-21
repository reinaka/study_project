import { render, screen, act, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SubscriptionForm } from "./subscription-form";

describe("Subscription Form", () => {
  const getInput = () => screen.getByPlaceholderText("Your email");
  const getButton = () => screen.getByText(/subscribe/i);

  it("Subscription form should be rendered", () => {
    render(<SubscriptionForm setIsSubscribed={() => {}} />, {
      wrapper: MemoryRouter,
    });
    expect(getInput()).toBeInTheDocument();
    expect(getButton()).toBeInTheDocument();
  });

  it("Check input", async () => {
    render(<SubscriptionForm setIsSubscribed={() => {}} />, {
      wrapper: MemoryRouter,
    });

    await act(async () => {
      fireEvent.click(getButton());
    });
    expect(screen.queryByText("Enter email")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getInput(), { target: { value: "test" } });
    });
    expect(screen.queryByText("Enter email")).not.toBeInTheDocument();
    expect(screen.queryByText("Incorrect email address")).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(getInput(), { target: { value: "test@test.test" } });
    });
    expect(screen.queryByText("Enter email")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Incorrect email address"),
    ).not.toBeInTheDocument();
  });
});
