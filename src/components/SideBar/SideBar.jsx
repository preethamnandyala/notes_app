import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArchiveIcon from "@mui/icons-material/Archive";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import DeleteIcon from "@mui/icons-material/Delete";
import NavItem from "../NavItem/NavItem";

const SideBar = () => {
  return (
    <aside className=" flex flex-col gap-5 w-[200px] border-emerald-600 border-r-2 p-2 py-5 pr-10 h-screen  ">
      <NavItem to={"/"} icon={HomeIcon} label={"Home"}/>
      <NavItem to={"/archive"} icon={ArchiveIcon} label={"Archive"}/>
      <NavItem to={"/important"} icon={LabelImportantIcon} label={"Important"}/>
      <NavItem to={"/bin"} icon={DeleteIcon} label={"Bin"}/>
    </aside>
  );
};
export default SideBar;
