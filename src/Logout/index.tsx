import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "@/AuthContext";

export const Logout: React.FC = () => {
  const { onLogout, user } = useContext(AuthContext);
  return (
    (user && (
      <Button
        variant="danger"
        onClick={onLogout}
        className="position-absolute top-0 end-0 m-4"
        size="sm"
      >
        Log out
      </Button>
    )) || <></>
  );
};
