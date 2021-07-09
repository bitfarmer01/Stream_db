import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row  justify-between items-center h-auto">
      <div className="flex flex-grow  max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
      </div>
      <Image
        className=" text-center object-contain "
        src="https://freesvg.org/img/PopcornClip.png"
        height={100}
        width={100}
      />
    </header>
  );
}

export default Header;
