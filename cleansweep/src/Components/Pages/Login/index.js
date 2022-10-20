import useAuth from "../../../hooks/useAuth";
import Button from "react-bootstrap/button";
import Register from "../Register";

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
      <Button component={Register} to="/register">
        Register!
      </Button>
    </form>
  );
};

export default Login;
