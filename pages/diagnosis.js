import { getSession } from "next-auth/react";
import Header from "../components/Header";
function diagnosis({ user }) {
  return (
    <div>
      <Header />
      <h1>Protected Route diagnosis</h1>
      <p>Welcome {user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session.user,
    },
  };
}

export default diagnosis;
