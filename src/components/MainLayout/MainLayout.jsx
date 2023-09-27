import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const MainLayout = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Header></Header>
      <div className="py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
