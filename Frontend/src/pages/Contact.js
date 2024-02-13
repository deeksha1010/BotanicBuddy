import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      Contact{" "}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Create another account
      </button>
    </div>
  );
}

export default Contact;