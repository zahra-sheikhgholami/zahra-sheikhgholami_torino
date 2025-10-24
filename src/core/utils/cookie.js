// set cookie with name, value, and expiration in hours
const setCookie = (name, value, hour) => {
  document.cookie = `${name}=${value}; path=/; max-age=${hour * 60 * 60}; secure; samesite=strict`;
};

// get cookie by name
const getCookie = (cookieName) => {
  const cookies = document.cookie.split("; ").reduce((acc, curr) => {
    const [key, value] = curr.split("=");
    acc[key] = value;
    return acc;
  }, {});
  return cookies[cookieName];
};

//removes accessToken and refreshToken cookies
const removeCookie = () => {
  document.cookie = "accessToken=; path=/; max-age=0; secure; samesite=strict"
  document.cookie = "refreshToken=; path=/; max-age=0; secure; samesite=strict"
}

export { setCookie, getCookie, removeCookie };
