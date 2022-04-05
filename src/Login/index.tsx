import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "@/AuthContext";
import { useLocation, useNavigate } from "react-router";

type LocationState = {
  from: {
    pathname: string;
  };
};

export const Login: React.FC = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const { onLogin } = useContext(AuthContext);
  const location = useLocation();
  const state = location.state as LocationState;
  const navigate = useNavigate();
  const canSubmit = login && pass;
  let from = state?.from?.pathname || "/";
  const handleSubmit = () => {
    onLogin(login);
    navigate(from, { replace: true });
  };
  return (
    <Form className="w-25 d-flex flex-column">
      <Form.Group className="mb-3">
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="email"
          placeholder="username"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="***"
          onChange={(e) => setPass(e.target.value)}
        />
      </Form.Group>
      <Button
        disabled={!canSubmit}
        className="align-self-center w-100 mt-2"
        variant="primary"
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Form>
  );
};
