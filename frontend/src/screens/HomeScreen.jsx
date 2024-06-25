import Hero from "../components/Hero";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return <>{userInfo ? <h1>Welcome Back!!</h1> : <Hero />}</>;
};

export default HomeScreen;
