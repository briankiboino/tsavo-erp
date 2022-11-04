/* eslint-disable */
import React, { useState } from "react";

import { connect } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";

import { RootState } from "src/redux";

const OffCanvas = (props: any) => {
  return (
    <Offcanvas
      show={props?.showOffCanvas}
      onHide={() => props?.setOffCanvasVisibility(false)}
      placement={props?.placement}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{props?.title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{props?.content}</Offcanvas.Body>
    </Offcanvas>
  );
};

const mapStateToProps = (state: RootState) => {
  const { showOffCanvas } = state.components;
  return { showOffCanvas };
};

const mapDispatchToProps = (dispatch: any) => ({
  setOffCanvasVisibility: (components: boolean) =>
    dispatch.components.setOffCanvasVisibility(components),
});

export default connect(mapStateToProps, mapDispatchToProps)(OffCanvas);
