import axios from "axios";

export const api = function() {
  // Create a custom axios instance
  if (process.browser) {
    const token = localStorage.getItem("token");
    const api = axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Set baseURL to something different
    api.setBaseURL(
      // process.env.NODE_ENV === "production"
      //   ? "http://fastcampusblindclone-env.eba-p687fdja.us-east-1.elasticbeanstalk.com/"
      //   : "http://localhost:8080"
      "http://localhost:8080"
    );
  }
};
