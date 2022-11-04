/* eslint-disable */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SnackBar = ({ type, message, clearAlert }) => {

  let timer;
  function handleTimeout() {
    timer = setTimeout(() => {
      clearAlert();
    }, 5000);
  }

  useEffect(() => {
    if (type) {
      type === "Success" ? toast.success(message) : toast.error(message);
      handleTimeout();
    }
    return () => {
      clearTimeout(timer);
    };
  }, [type]);

  return (
    <div>
      {type ? (
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={true}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { type, message } = state.alert;
  return { type, message };
};

const mapDispatchToProps = (dispatch) => ({
  clearAlert: () => dispatch.alert.clearAlert("")
});

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);
