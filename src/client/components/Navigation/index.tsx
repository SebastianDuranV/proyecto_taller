import Link from "next/link";
import { FC, useContext } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";

import { AuthContext } from "../Auth/Context";

const Navigation: FC = () => {
  const { user, logout, loading } = useContext(AuthContext);

  if (loading) {
    return null;
  }
  return (
    <nav>
      {user ? (
        <>
          <p>Welcome {user.email}</p>
          <Button onClick={() => logout()}>Logout</Button>
        </>
      ) : (
        <ButtonToolbar>
          <Link href="/login" passHref>
            <Button variant="info">Login</Button>
          </Link>
          <Link href="/signUp" passHref>
            <Button variant="success">Sign Up</Button>
          </Link>
        </ButtonToolbar>
      )}
    </nav>
  );
};

export default Navigation;
