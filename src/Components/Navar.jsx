

const Navar = () => {
    return (
        <>
       <div className="navbar bg-fuchsia-200">
  <div className="flex-1">
<div className="flex gap-2 justify-center items-center">
    <img className="h-14" src="/logo.png" alt="" />
<h1 className="text-black font-semibold text-3xl ">Codcademy</h1>
</div>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="/user.png" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-lg  text-xl dropdown-content mt-3 z-[1] p-2 shadow bg-fuchsia-300 rounded-box w-52">
        <li className="text-xl rounded-lg transition-all duration-500 hover:bg-gray-50">
          <a className="justify-between">
            Profile
            <span className="badge bg-red-500 text-white">New</span>
          </a>
        </li>
        <li className="text-xl rounded-lg transition-all duration-500 hover:bg-gray-50"><a>Settings</a></li>
        <li className="text-xl rounded-lg transition-all duration-500 hover:bg-gray-50"><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>     
        </>
    );
};

export default Navar;