import SprintsAxiosClient from "./clients/SprintsAxiosClient";
import { TokenService } from "./TokenService";
import axios from 'axios'
export const AuthenticationService = {
  login,
  logout,
  getRole,
  getUsername,
};

async function login(userCredentials) {
  try {
    const response = await SprintsAxiosClient.post(
      "http://localhost:8080/api/korisnici/login",
      userCredentials
    );
    
    const decoded_token = TokenService.decodeToken(response.data.accessToken);
    if (decoded_token) {
      TokenService.setToken(response.data.accessToken);
      window.location.assign("/home");
      console.log(response.data.username);

    } else {
      console.error("Invalid token");
    }
  } catch (error) {
    console.error(error);
  }
  //console.log(TokenService.getToken());

}

function logout() {
  TokenService.removeToken();
  window.location.assign("/");
}

function getRole() {
  const token = TokenService.getToken();
  const decoded_token = token ? TokenService.decodeToken(token) : null;
  if (decoded_token) {
    return decoded_token.role.authority;
  } else {
    return null;
  }
}
function getUsername() {
  const token = TokenService.getToken();
  const decoded_token = token ? TokenService.decodeToken(token) : null;
  if (decoded_token) {
    return decoded_token.sub.username
  } else {
    return null;
  }
}

