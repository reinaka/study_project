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
import { DocumentsSign } from "./documents-sign";
import { BASE_URL } from "@utils/const/const";

afterEach(cleanup);

describe("Document sign", () => {
  const getDownLoadLink = () =>
    screen.getByRole("link", {
      name: /download zip-file/i,
    });
  const getSubmitButton = () => screen.getByTestId("submit-button");
  const getCheckbox = () => screen.getByRole("checkbox");
  vi.mock("axios");

  it("Should render documents sign block", () => {
    render(
      <DocumentsSign
        setIsLoading={() => {}}
        setIsError={() => {}}
        setIsSuccess={() => {}}
      />,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText("Signing of documents")).toBeInTheDocument();
    expect(getDownLoadLink()).toBeInTheDocument();
    expect(getSubmitButton()).toBeInTheDocument();
  });

  it("Submit button should be disabled if not checked and abled if checked", async () => {
    render(
      <DocumentsSign
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
      <DocumentsSign
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
      `${BASE_URL}/document/${undefined}/sign`,
    );
  });
});
