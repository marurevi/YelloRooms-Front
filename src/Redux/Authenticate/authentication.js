const REGISTER_USER = "Authentication/authentication/REGISTER_USER";
import { sendPost, setToken } from "../../API/api";
export const registerUser = (data, navigation) => (dispatch) => {
  sendPost("register", data)
    .then((response) => {
      const token = response.headers.authorization;
      const user = response.data.data.user;
      if (token) {
        dispatch({ type: REGISTER_USER, payload: { ...user, token } });
        setToken(token);
        navigation();
      }
    })
    .catch((error) => {
      console.error("fail to sign in", error);
    });
};
const handleUser = (state = null, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return action.payload;
    default:
      return state;
  }
};

export default handleUser;