import LoginModal from "./Login";
import RegisterModal from "./Register";

const LoginAndRegister = () => {
  return (
    <div v-if="modal.login.show" class="modal-outside">
      <div id="login-modal">
        <div class="head">
          {/* <h5>{{!modal.login.directLogin ? "회원가입": "로그인"}}</h5> */}

          <a class="close-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </a>
        </div>

        {/* <div v-if="modal.register.directRegister" class="foot">
        <RegisterModal/>
      </div>

      <div v-if="modal.login.directLogin" class="foot">
        <LoginModal/>
        
      </div> */}
      </div>
    </div>
  );
};

// import { mapState } from "vuex";

// export default {
//   components: {
//       LoginModal,
//       RegisterModal
//   },
//   computed: { ...mapState(["modal"]) },
//   data() {
//     return {
//       leftTime: 180,
//       displayTime: "3분",
//       email: null,
//       password: null,
//       otpYn : false
//       };
//   },

//   methods: {

//   }
// };

export default LoginAndRegister;
