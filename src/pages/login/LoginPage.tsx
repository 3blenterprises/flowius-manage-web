import googleLogo from "../../assets/google.svg";
import { useEffect, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
  signOut,
} from "firebase/auth";

import logo from "../../assets/logo.png";
import Spinner from "../../components/Spinner";
import firebase from "../../services/firebaseInit";
import { toast } from "react-toastify";
import { validUsers } from "../../services/authService";

const { auth } = firebase;

interface ILoginProps {
  setUser: (user: User | null) => void;
}

const LoginPage = ({ setUser }: ILoginProps) => {
  const [loading, setLoading] = useState(true);

  let timeout: boolean;

  const loginUser = async (u: User | null) => {
    if (timeout) return;
    if (!u) {
      setLoading(false);
      return;
    }
    timeout = true;
    const validUser = await validUsers(u?.email ?? "");
    if (validUser) {
      setUser(u);
      toast.success("Sign in successful");
    } else {
      signOut(auth);
      setLoading(false);
      toast.error("No User with this email address");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loginUser);
    return () => unsubscribe();
  }, []);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
      toast.error("Cant sign in");
    }
    setLoading(false);
  };

  return (
    <div className=" login-bg grid grid-col md:grid-cols-5 md:grid-rows-1 h-screen">
      <div className="md:col-span-3 col-span-1">
        <div className="md:ml-12 md:mt-14 mx-6 mt-7">
          <span className="w-24">
            <img
              style={{ width: "100px" }}
              className="w-24"
              src={logo}
              alt="white logo"
            />
          </span>
          <h1 className="mt-14 font-sans text-white text-5xl font-semibold max-w-xl">
            Welcome to Flowius Manage
          </h1>
          <span>
            <p className="mt-4 text-white capitalize text-lg font-normal">
              Building Greener infrastructure for the globally under served
            </p>
          </span>
        </div>
      </div>
      <div className="col-span-2 bg-[#f8fafc] ">
        <div className="w-full h-full flex justify-center">
          <div className="hover:scale-105 my-auto md:w-1/3 flex flex-col">
            <button
              onClick={login}
              className="sign-in-with-microsoft h-[41px] font-semibold text-base border justify-center border-[#5e5e5e] px-3 items-center flex text-[#8c8c8c]"
            >
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <img
                    className="h-6 pr-3"
                    src={googleLogo}
                    alt="Microsoft Logo"
                  />
                  Sign in
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
