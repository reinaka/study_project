import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
}

export { customRender as render };
