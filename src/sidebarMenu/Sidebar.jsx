import Menu from "./Menu";
import Logo from "./../components/logo/Logo";

const Sidebar = () => {
  return (
    <div>
      <div className="text-[#fff] border-[1px] border-[#0e0e0e] shadow-lg bg-[#081028] lg:w-[281px] h-screen py-[36px] ">
        <div className="flex justify-center">
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;
