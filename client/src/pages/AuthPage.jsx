import SignupCard from "../components/SignupCard";
import LoginCard from "../components/LoginCard";
import authScreenAtom from "../atoms/authAtom";
import { useRecoilValue } from "recoil";

const AuthPage = () => {
    const authSceenState = useRecoilValue(authScreenAtom); 
  return (
    <>
      {authSceenState === "login" ? <LoginCard /> : <SignupCard />}
    </>
  );
};

export default AuthPage;
