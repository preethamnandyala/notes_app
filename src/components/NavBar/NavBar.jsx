import React from "react";
import logo from '../../assets/images/notes_img.png'

const NavBar = () => {

  return(

    <header className="flex px-5 py-2 gap-3 border-b-2 border-emerald-600">
      <div className="w-12 h-12">
        <img className="w-full h-full rounded-full " src={logo} alt="logo"/>
      </div>
      <h1 className="text-emerald-600 text-4xl font-bold">YourNotes</h1>
    </header>


  )


}
export default NavBar