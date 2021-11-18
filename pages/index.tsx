import { Box } from "grommet";
import { initializeApp } from "firebase/app";

// Initialize Firebase
const app = initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
});

export default function Home() {
  return <Box></Box>;
}
