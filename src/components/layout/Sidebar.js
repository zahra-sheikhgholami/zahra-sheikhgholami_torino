import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/src/core/constants/navLinks";

function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  return (
    <div
      className={`block md:hidden fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-50 transform 
        transition-transform duration-400 rounded-tl-xl rounded-bl-xl py-8 px-3 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex flex-col gap-y-6">
        {navLinks.map((link) => (
          <Link
            onClick={() => setIsOpen(false)}
            key={link.id}
            href={link.href}
            className={`flex gap-x-2 items-center ${
              pathname === link.href
                ? "text-primary"
                : "text-dark-900 hover:text-primary"
            }`}
          >
            {pathname === link.href ? link.iconBold : link.icon}
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
