import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SignInView from "./view";
import { defaultCredentials, UserCredentials } from "./model";
import { RootState } from "src/redux";

const SignIn = ({
  signIn,
  loading,
  isLoggedIn,
  history,
}: {
  signIn: any;
  loading: boolean;
  isLoggedIn: boolean;
  history: any;
}) => {
  const [credentials, setCredentials] =
    useState<UserCredentials>(defaultCredentials);

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/dashboard");
    }
    return () => {
      setCredentials(defaultCredentials);
    };
  }, [isLoggedIn]);

  return (
    <SignInView
      loading={loading}
      handleSignIn={signIn}
      credentials={credentials}
    />
  );
};

const mapStateToProps = (state: RootState) => {
  const loading = state.loading.models.authentication;
  const { isLoggedIn } = state.authentication;
  return { loading, isLoggedIn };
};

const mapDispatchToProps = (dispatch: any) => ({
  signIn: (credentials: UserCredentials) =>
    dispatch.authentication.signIn(credentials),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
