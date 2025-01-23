import { useEffect } from "react";
import ReactDOM from "react-dom";
import { ModalOverlay } from "./modal-overlay/modal-overlay";
import { ModalWrapper } from "./modal-wrapper/modal-wrapper";

const modalRoot = document.getElementById("modalRoot");

export type ModalPropsT = {
  handleClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

export const Modal = ({ handleClose, title, children }: ModalPropsT) => {
  useEffect(() => {
    const closeByEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", closeByEsc);
    return () => document.removeEventListener("keydown", closeByEsc);
  }, [handleClose]);

  const element = (
    <>
      <ModalOverlay handleClose={handleClose} />
      <ModalWrapper
        title={title}
        handleClose={handleClose}
        children={children}
      />
    </>
  );

  return ReactDOM.createPortal(element, modalRoot!);
};
