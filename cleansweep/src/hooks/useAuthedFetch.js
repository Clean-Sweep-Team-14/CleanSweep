import useAuth from "./useAuth";

export default useAuthedFetch = (apiCall, body) => {
  const { user } = useAuth();
  if (!user) return null;

  const authHeader = {
    headers: {
      Authorization: `token ${user.auth_token}`,
    },
  };

  if (body) return apiCall(body, authHeader);

  return apiCall(authHeader);
};
