import useAxios from "axios-hooks";
import { NextPage } from "next";
import { FC, useContext } from "react";
import { ListGroup } from "react-bootstrap";

import { AuthContext } from "../src/client/components/Auth/Context";
import { User } from "../src/interfaces";

const UsersList: FC = () => {
  const [{ data, loading, error }] = useAxios<User[]>("/api/users");

  if (loading) {
    return <p>Loading Users...</p>;
  }
  if (error) {
    console.error(error);
    return <p>Error! {error.message}</p>;
  }

  return (
    <div>
      <ListGroup>
        {data.map(({ email, password }, key) => (
          <ListGroup.Item key={key}>
            <ListGroup>
              <ListGroup.Item>Email: {email}</ListGroup.Item>
              <ListGroup.Item>Password: {password}</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

const Index: NextPage = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return <UsersList />;
  }
  return <div>You need to be authenticated!</div>;
};

export default Index;
