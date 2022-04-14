import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { signIn, useSession, signOut } from "next-auth/react";
import { db } from "../firebase";
import {useEffect} from 'react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
