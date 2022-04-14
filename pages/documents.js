import { PlusCircleIcon } from "@heroicons/react/outline";
import { getSession } from "next-auth/react";
import Header from "../components/Header";
import MedData from "../components/MedData";
import MedForm from "../components/MedForm";
function documents({ user }) {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-1 md:max-w-3xl xl:grid-cols-1 xl:max-w-6xl mx-auto">
        <div className="p-2 pl-6 bg-gray-300 rounded-lg mt-10 m-2 w-44">
          <button className="">Add a New Form</button>
          <PlusCircleIcon className="pl-10 h-6  cursor-pointer  block" />
        </div>
        <div className="m-2">
          <MedData />
        </div>
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

export default documents;
