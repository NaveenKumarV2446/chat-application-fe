export const wsConnect = (username, password) => ({
  type: "WS_CONNECT",
  username,
  password,
});
export const wsDisconnect = () => ({ type: "WS_DISCONNECT" });
