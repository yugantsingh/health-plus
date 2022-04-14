import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { db } from "../firebase";
function profile({ user }) {
  useEffect(() => {
    if (user) {
      setDoc(doc(db, "Users", user.id), {
        userUserName: user.username,
        userEmail: user.email,
        userImg: user.image,
        userName: user.name,
      });
    }
  }, [user]);
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
        <section className="col-span-1">
          <h1>Protected Route Profile</h1>
          <p>Welcome {user.name}</p>
          <p>{user.email}</p>
        </section>

        <section className="col-span-2">
          <div>Small Hello</div>
        </section>
      </div>
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

export default profile;
