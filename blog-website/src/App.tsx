import { useSelector } from "react-redux";
import { selectIsSignedIn } from "./features/appSlice";
import Navbar from "./component/Navbar";
import LandingPage from "./component/LandingPage";
import HomePage from "./component/HomePage";

export default function App() {
  const isSignedIn = useSelector(selectIsSignedIn);

  return (
    <>
      {isSignedIn && <Navbar />}
      {isSignedIn ? <HomePage /> : <LandingPage />}
    </>
  );
}
