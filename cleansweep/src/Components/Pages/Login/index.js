import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { login, loading } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    login(formData.get("username"), formData.get("password"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <label>
        Username
        <input name="username" />
      </label>

      <label>
        Password
        <input name="password" />
      </label>

      <button disabled={loading}>Submit</button>
    </form>
  );
};

export default Login;
