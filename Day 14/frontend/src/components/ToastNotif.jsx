/* eslint-disable no-unused-vars */
import { useState } from "react";
import { ToastContainer, Toast, Image } from "react-bootstrap";

const ToastNotif = ({ ...props }) => {
  return (
    <ToastContainer
      className="p-3"
      position="middle-center"
      style={{ zIndex: 1 }}
    >
      <Toast show={showDisplayMsg} onClose={handleCloseMsg}>
        <Toast.Header closeButton={handleCloseMsg}>
          <Image
            src="holder.js/20x20?text=%20"
            className="me-2"
            alt=""
            rounded
          />
          <strong className="me-auto">Message</strong>
        </Toast.Header>
        <Toast.Body>{displayMessage}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastNotif;
