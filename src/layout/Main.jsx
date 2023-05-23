import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
