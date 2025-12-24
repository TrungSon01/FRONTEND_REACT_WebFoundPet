import axios from "axios";

export const BASE_URL_NEST_JS = "https://nest.webfoundpet.io.vn";

export const SOCIAL_URLs = {
  google: `${BASE_URL_NEST_JS}/api/authentication/google`,
  facebook: `${BASE_URL_NEST_JS}/api/authentication/facebook`,
  github: `${BASE_URL_NEST_JS}/api/authentication/github`,
};

export const https_nest = axios.create({
  baseURL: BASE_URL_NEST_JS,
});
