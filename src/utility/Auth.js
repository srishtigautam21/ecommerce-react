import axios from "axios";

const Auth = () => {
        try {
          const response = await axios.post(`/api/auth/signup`, {
            firstName: "Adarsh",
            lastName: "Balika",
            email: "adarshbalika@neog.camp",
            password: "adarshBalika",
          });
          // saving the encodedToken in the localStorage
          localStorage.setItem("token", response.data.encodedToken);
        } catch (error) {
          console.log(error);
        }
//   const encodedToken =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlMzIzZmY2MC1hMTUzLTQ0MTYtYmEyNS0zNDQ0ZGI1NjliOWMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._-fah2UEuueLmRHHl5uV4CYhiQdODX6neUkGbfTvtFM";
//   localStorage.setItem("token", encodedToken);
};
