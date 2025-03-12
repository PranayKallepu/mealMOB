import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  Button,
  ModalContainer,
  DetailsContainer,
  Form,
} from "./styledComponent";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/data";

const LoginPopUp = () => {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_URL}/login`, inputData);
      if (response.data.success) {
        Cookies.set("token", response.data.token, {
          expires: 30,
        });
        Cookies.set("username", response.data.username, { expires: 30 });
        navigate("/", { replace: true });
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Popup
      modal
      trigger={<Button type="button">Login</Button>}
      contentStyle={{
        background: "none",
        border: "none",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {(close) => (
        <ModalContainer>
          <DetailsContainer>
            <Form onSubmit={handleLogin}>
              <h3>User Login</h3>
              <input
                type="text"
                name="username"
                onChange={handleInput}
                placeholder="USERNAME"
                aria-label="Username"
                required
              />
              <input
                type="password"
                name="password"
                onChange={handleInput}
                placeholder="PASSWORD"
                aria-label="Password"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                aria-label="Login Button"
              >
                {isLoading ? "Logging..." : "Login"}
              </button>
            </Form>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </DetailsContainer>
          <button
            type="button"
            onClick={() => close()}
            aria-label="Close Modal"
          >
            Close
          </button>
        </ModalContainer>
      )}
    </Popup>
  );
};
export default LoginPopUp;
