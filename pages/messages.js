import { getSession } from "next-auth/react";
import Header from "../components/Header";
function messages({ user }) {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
        <section className="col-span-1">
          <div>Hello</div>
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

export default messages;
