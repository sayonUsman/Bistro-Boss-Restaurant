import { Outlet } from "react-router-dom";

const Secondary = () => {
  return (
    <div className="container mx-auto">
      <Outlet></Outlet>
    </div>
  );
};

export default Secondary;
