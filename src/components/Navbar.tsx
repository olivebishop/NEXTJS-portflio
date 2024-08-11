import Link from 'next/link';
import { FaHome, FaChartBar, FaBook, FaUser, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto mt-10 rounded-full bg-[#e5e5e5] border border-[#cecece] backdrop-blur-3xl z-10 dark:bg-[#373737] dark:border-[#373737] md:max-w-lg md:mx-auto">
      <div className="container mx-auto px-4">
        <ul className="flex justify-around md:justify-center md:max-w-3xl md:mx-auto space-x-2 md:space-x-8 py-3">
          <NavItem href="/" icon={<FaHome />} />
          {/* <NavItem href="/projects" icon={<FaChartBar />} /> */}
          <NavItem href="/experience" icon={<FaBook />} />
          <NavItem href="/about" icon={<FaUser />} />
          <NavItem href="/contact" icon={<FaEnvelope />} />
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <li>
      <Link href={href} className="flex items-center rounded-full px-3 py-1 border border-transparent text-xl sm:text-2xl md:text-3xl transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-zinc-900/10 hover:text-main hover:backdrop-blur-3xl text-[#979797] shadow-2xl shadow-white/50">
        {icon}
      </Link>
    </li>
  );
};

export default Navbar;
