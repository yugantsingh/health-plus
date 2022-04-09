import { getProviders, signIn as signInto } from "next-auth/react";
import Header from "../../components/Header";
import logo from "../../assets/health-plus-logo.svg";
import Image from "next/image";

function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="w-40 items-center justify-center pl-2">
          <Image
            src={logo}
            className=""
            layout="intrinsic"
            objectFit="contain"
          />
        </div>
        <div className="italic items-center max-w-md justify-center p-4">
          <p>
            This is an Educational build for EPICS (Engineering Project in
            community service) by the students of VIT Bhopal 2023
            <br />
            This Application works as a platform to :
          </p>
          <>
            <li>Seggregate your Medical History and Bills</li>
            <li>Connect with Doctors</li>
            <li>AI based self-diagnosis</li>
            <li>Adding Emergency contacts using AADHAR</li>
          </>
        </div>

        <div className="mt-10">
          {Object.values(providers).map((provider) => (
            <div key={provider.id}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => signInto(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.id}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
