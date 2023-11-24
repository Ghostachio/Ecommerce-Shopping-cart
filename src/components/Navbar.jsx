  import { AiOutlineShoppingCart } from "react-icons/ai";
  import { FaUserCircle } from "react-icons/fa";

  const Navbar = ({show, cartData}) => {
    return (
      <nav className="flex justify-around p-4 items-center h-[70px]  shadow-lg flex-wrap">
        <div>
          <h1 className=" font-semibold text-2xl pb-1 pl-2 pr-2">Sneckers</h1>
        </div>
        <div >
          <ul className="flex gap-3 justify-center text-align pt-1 flex-wrap font-semibold">
            <li>Collections</li>
            <li>Man</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-6 pt-1 pl-2 relative">
          <AiOutlineShoppingCart onClick={show} className="text-2xl hover:cursor-pointer"/>
          <p className="bg-amber-200 pl-2 pr-2 scale-50 rounded-full absolute top-0 right-9 text-md font-semibold">{cartData.length}</p>
          <FaUserCircle className="text-2xl" />
        </div>
      </nav>
    )
  }

  export default Navbar;

