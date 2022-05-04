import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignInForm from "../../components/auth/SignInForm";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { RootState } from "../../modules";
import { checkMyInfo, login } from "../../modules/auth";

const SignInContainer = ({ history }: RouteComponentProps) => {
  const dispatch = useDispatch();

  const { accessToken, myInfo } = useSelector(({ auth }: RootState) => ({
    accessToken: auth.accessToken,
    myInfo: auth.myInfo,
  }));

  const onSignIn = (userId: string, password: string) => {
    try {
      dispatch(login({ userId, password }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (accessToken) {
      dispatch(checkMyInfo());
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    if (myInfo) {
      alert("로그인 되었습니다.");
      
      history.push("/");
    }
  }, [myInfo, history]);
  
  return <SignInForm onSignIn={onSignIn} />;
};

export default withRouter(SignInContainer);
