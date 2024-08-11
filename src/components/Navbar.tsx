// components/Navbar.tsx
import Link from 'next/link'
import { FaHome, FaChartBar, FaBook, FaUser, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto  mt-10 rounded-full  justify-center items-center">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-4 md:space-x-8 py-3">
          <NavItem href="/" icon={<FaHome />} />
          <NavItem href="/projects" icon={<FaChartBar />} />
          <NavItem href="/experience" icon={<FaBook />} />
          <NavItem href="/about" icon={<FaUser />} />
          <NavItem href="/contact" icon={<FaEnvelope />} />
        </ul>
      </div>
    </nav>
  )
}

const NavItem = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <li>
      <Link href={href} className="text-2xl md:text-3xl hover:text-gray-300 transition-colors">
        {icon}
      </Link>
    </li>
  )
}

export default Navbar