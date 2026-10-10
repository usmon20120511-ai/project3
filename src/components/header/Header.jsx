import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <div className="">
      <header className="flex justify-between items-center text-center px-10">
        <nav className=" flex text-center items-center gap-5 text-[#150C01]">
          <img src={logo} alt="" />

          <a href="#">Home</a>
          <a href="#">About us </a>
          <a href="#">Menu</a>
          <a href="#">Features</a>
          <a href="#">Contact us</a>
        </nav>
        <button className="w-38 h-11 bg-[#DC780B] rounded-2xl text-white">
          Booking Now
        </button>
      </header>
    </div>
  );
}
