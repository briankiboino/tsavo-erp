import React, {  useState, useEffect } from "react";
import { connect } from "react-redux";
import ForgotPasswordView from "./view";

const ForgotPassword = ({ sendResetLink, loading, type }) => {
  return <ForgotPasswordView handleSubmit={sendResetLink} loading={loading} response={type}/>;
};

const mapStateToProps = (state) => {
  const loading = state.loading.models.authentication;
  const { type } = state.alert;
  return { loading, type };
};

const mapDispatchToProps = (dispacth) => ({
  signUp: (user) => dispacth.authentication.signUp(user),
  sendResetLink: (user) => dispacth.authentication.sendResetLink(user),
});
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
