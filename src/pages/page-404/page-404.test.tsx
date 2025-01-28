import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Page404 } from "./page-404";

afterEach(cleanup);

describe("Document sign", () => {
  it("Should render page 404 content", () => {
    render(<Page404 />, { wrapper: MemoryRouter });
    expect(screen.getByText("Page not found")).toBeInTheDocument();
    expect(
      screen.getByText(
        "This Page doesn`t exist or was removed! We suggest you go back.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByTestId("404-button")).toBeInTheDocument();
  });
});
