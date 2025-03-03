import React, { useState } from "react";
import { signUp } from "@/backend/Auth";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      setMessage("Sign-up successful!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUpForm;
