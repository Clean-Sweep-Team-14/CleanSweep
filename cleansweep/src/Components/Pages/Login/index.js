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
        <input type="password" name="password" />
      </label>

      <button disabled={loading}>Submit</button>
      {/* {error && <p>Error</p>} */}
    </form>
  );
};

export default Login;
