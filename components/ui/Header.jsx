import Link from "next/link"; // Next.js Link for routing
import { Button } from "./button";

//COMPONENTS
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="px-8 sm:px-12 lg:px-24 w-auto flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="text-4xl font-semibold">
          Adrian<span className="text-green-600">.</span>
        </Link>

        {/*NAVBAR & HIRE ME BUTTON */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/*MOBILE NAVBAR */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
