import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Router, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Header } from "./header";

afterEach(cleanup);

describe("Header", () => {
  it("Should render Online Bank button", () => {
    render(<Header />, { wrapper: MemoryRouter });
    const buttonText = screen.getByText("Online Bank");
    expect(buttonText).toBeInTheDocument();
  });

  it("Should navigate to loan page when credit card is clicked", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router navigator={history} location="/">
        <Header />
      </Router>,
    );
    expect(history.location.pathname).toBe("/");

    fireEvent.click(screen.getByText("Credit card"));
    expect(history.location.pathname).toBe("/loan");

    fireEvent.click(screen.getByText("Product"));
    expect(history.location.pathname).toBe("/product");

    fireEvent.click(screen.getByText("Account"));
    expect(history.location.pathname).toBe("/account");

    fireEvent.click(screen.getByText("Resources"));
    expect(history.location.pathname).toBe("/resources");
  });
});
