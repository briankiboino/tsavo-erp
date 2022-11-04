import React from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";

export const UniversalModal = ({ showModal, content, closeModal, title }) => {
  return (
    <Modal
      show={showModal}
      onHide={closeModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  const { showModal } = state.components;
  return { showModal };
};

const mapDispatchToProps = (dispacth) => ({
    closeModal: () => dispacth.components.closeModal(),
});

export default connect(mapStateToProps, mapDispatchToProps)(UniversalModal);
