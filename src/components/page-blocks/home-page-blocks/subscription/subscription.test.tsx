import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Subscription } from "./subscription";

describe("Subscription", () => {
  const getForm = () => screen.queryByTestId("subscription-form");
  const getSubscribedMessage = () =>
    screen.queryByText("You are already subscribed to the bank's newsletter");

  it("Elements should be rendered", () => {
    render(<Subscription />, { wrapper: MemoryRouter });
    expect(getForm()).toBeInTheDocument();
    expect(screen.getByText("Support")).toBeInTheDocument();
    expect(screen.getByText("Subscribe Newsletter & get")).toBeInTheDocument();
    expect(screen.getByText("Bank News")).toBeInTheDocument();
  });

  it("Render form if not subscribed", async () => {
    Storage.prototype.getItem = vi.fn(() => null);
    render(<Subscription />, { wrapper: MemoryRouter });
    expect(getSubscribedMessage()).not.toBeInTheDocument();
    expect(getForm()).toBeInTheDocument();
  });

  it("Render message if subscribed", async () => {
    Storage.prototype.getItem = vi.fn(() => "true");
    render(<Subscription />, { wrapper: MemoryRouter });
    expect(getSubscribedMessage()).toBeInTheDocument();
    expect(getForm()).not.toBeInTheDocument();
  });
});
