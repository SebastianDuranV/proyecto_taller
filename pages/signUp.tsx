import { NextPage } from "next";
import Router from "next/router";
import { useContext, useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { isEmail, isLength } from "validator";

import { AuthContext } from "../src/client/components/Auth/Context";

const SignUpPage: NextPage = () => {
  const { signUp, error, user, loading } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      Router.push("/");
    }
  }, [user]);
  const valid = isEmail(email) && isLength(password, { min: 3, max: 100 });

  if (loading || user) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {error && (
        <div>
          <Alert variant="danger">{error}</Alert>
        </div>
      )}
      <Form
        onSubmit={async (e: React.SyntheticEvent) => {
          e.preventDefault();
          signUp({ email, password });
        }}
      >
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          value={email}
          onChange={({
            target: { value },
          }: React.ChangeEvent<HTMLInputElement>) => setEmail(value)}
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          value={password}
          onChange={({
            target: { value },
          }: React.ChangeEvent<HTMLInputElement>) => setPassword(value)}
        />
        <Button disabled={!valid} type="submit">
          Sign Up
        </Button>
      </Form>
    </>
  );
};

export default SignUpPage;
