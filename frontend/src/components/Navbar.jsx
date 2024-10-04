import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>

            <div className="navbar bg-billingBgColor">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-2xl font-bold">
         <li>  <Link to="/billing" >Billing</Link></li>
      <li>
      </li>
      <li> <Link to="/">Dashboard</Link></li>
      </ul>
    </div>
    <a className="text-4xl text-white font-bold">SHOPNAME</a>
  </div>
  <div className="navbar-center hidden lg:flex text-bold text-xl text-white">
    <ul className="menu menu-horizontal px-1 text-2xl font-bold">
      <li>  <Link to="/billing">Billing</Link></li>
      <li>
      </li>
      <li> <Link to="/">Dashboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>  
<hr className="pb-1"/>
    </>
  );
}
