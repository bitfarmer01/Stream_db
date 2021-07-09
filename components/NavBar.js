import requests from "../utils/requests";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex sm:px-10 text-xl whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white 
            active:text-yellow-500"
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
};
export default NavBar;
