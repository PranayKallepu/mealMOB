import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  Button,
  ModalContainer,
  DetailsContainer,
  Form,
} from "../LoginPopUp/styledComponent";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/data";

const SignupPopUp = () => {
  //states
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, close) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (inputData.password !== inputData.confirmPassword) {
      setError("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/signup`, inputData);
      if (response.data.success) {
        alert("User Registered Successfully!");
        setIsLoading(false);
        close(); // Close signup popup
      }
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="popup-container">
      <Popup modal trigger={<Button type="button">Signup</Button>}>
        {(close) => (
          <ModalContainer>
            <DetailsContainer>
              <Form onSubmit={(e) => handleSubmit(e, close)}>
                <h3>User Signup</h3>
                <input
                  type="text"
                  name="username"
                  onChange={handleInput}
                  placeholder="USERNAME"
                  required
                />
                <input
                  type="email"
                  name="email"
                  onChange={handleInput}
                  placeholder="EMAIL"
                  required
                />
                <input
                  type="password"
                  name="password"
                  onChange={handleInput}
                  placeholder="PASSWORD"
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleInput}
                  placeholder="CONFIRM PASSWORD"
                  required
                />
                <button type="submit" disabled={isLoading}>
                  {isLoading ? "Signing up..." : "Signup"}
                </button>
              </Form>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </DetailsContainer>
            <button type="button" onClick={() => close()}>
              Close
            </button>
          </ModalContainer>
        )}
      </Popup>
    </div>
  );
};

export default SignupPopUp;
