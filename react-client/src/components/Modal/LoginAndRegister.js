import LoginModal from "./Login";
import RegisterModal from "./Register";
import { useDispatch } from "react-redux";
import { setLoginModalClose } from "../../store/modal";

const LoginAndRegister = (modals) => {
  const modal = modals.modal;

  const dispatch = useDispatch();

  const onClickLoginButton = () => {
    dispatch(setLoginModalClose());
  };

  return (
    <div>
      {modal.login.show ? (
        <div className="modalOutside">
          <div className="loginModal">
            <div className="head">
              <h5>{!modal.login.directLogin ? "회원가입" : "로그인"}</h5>

              <button className="closeBtn" onClick={onClickLoginButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {modal.register.directRegister ? (
              <div className="foot">
                <RegisterModal />
              </div>
            ) : null}

            {modal.login.directLogin ? (
              <div className="foot">
                <LoginModal />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LoginAndRegister;
