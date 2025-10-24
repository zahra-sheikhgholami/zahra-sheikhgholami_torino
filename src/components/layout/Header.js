"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  ArrowDown2,
  HamburgerMenu,
  Login,
  Logout,
  Profile,
} from "iconsax-reactjs";

import { navLinks } from "@/src/core/constants/navLinks";
import Sidebar from "./Sidebar";
import Logo from "@/src/components/modules/Logo";
import Modal from "@/src/components/modules/Modal";
import AuthForm from "@/src/components/modules/AuthForm";
import { useAuthMutations } from "@/src/hooks/useAuthMutations";
import { useUserProfile } from "@/src/hooks/useUserProfile";

function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const { logout } = useAuthMutations();
  const { data: user } = useUserProfile();

  const router = useRouter();

  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (!e.target.closest("#profile-user")) {
         setIsOpenProfile(false);
      }
      if (!e.target.closest("#header")) {
         setIsOpen(false);
      }
    };

    document.addEventListener("click", clickOutsideHandler);
    return () => document.removeEventListener("click", clickOutsideHandler);
  }, []);


  const logoutHandler = () => {
    logout();
    setIsOpenProfile(false);

    if (pathname.includes("dashboard") || pathname === "/checkout") {
      router.replace("/");
    }
  };

  return (
    <header id="header" className="w-screen h-[74px] shadow-[0_1px_4px_rgba(0,0,0,0.16)] sticky top-0 z-[101] bg-white">
      <div className="container mx-auto px-8 sm:px-0 md:px-4 h-full flex justify-between items-center">
        <div className="flex justify-start md:gap-x-7 lg:gap-x-20 items-center">
          <button className="block md:hidden cursor-pointer" onClick={() => setIsOpen(true)}>
            <HamburgerMenu size="32" />
          </button>
          <div className="hidden md:block cursor-pointer">
            <Logo />
          </div>
          <div className="hidden md:flex justify-around gap-x-6 xl:gap-x-20 font-normal">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-primary"
                    : "text-dark-900 hover:text-primary"
                }
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div id="profile-user">
          {user ? (
            <div className="relative">
              <div
                onClick={() => setIsOpenProfile(!isOpenProfile)}
                className="flex text-primary p-2 md:px-3 cursor-pointer "
              >
                <Profile size="24" variant="Bold" />
                <span className="font-vazirmatn-fd text-base lg:text-lg font-medium px-2">
                  {user.mobile}
                </span>
                <ArrowDown2 size="24" />
              </div>
              {isOpenProfile && (
                <div
                  className="absolute top-12 left-0 right-0 bg-white border border-zinc-100 rounded-xl 
              overflow-hidden"
                >
                  <div className=" bg-zinc-100 py-2 px-3 w-full flex items-center gap-x-4">
                    <div className="bg-stone-300 w-7 h-7 rounded-full flex justify-center items-center">
                      <Profile
                        size="16"
                        variant="Bold"
                        className=" text-gray-500"
                      />
                    </div>
                    <p className="font-vazirmatn-fd text-secondary font-medium text-sm">
                      {user.mobile}
                    </p>
                  </div>
                  <Link
                    onClick={() => setIsOpenProfile(false)}
                    href="/dashboard/profile"
                    className="flex items-center gap-x-4 text-dark-900 py-3 px-3"
                  >
                    <Profile size="16" />
                    <p className="text-xs">اطلاعات حساب کاربری</p>
                  </Link>
                  <button
                    onClick={logoutHandler}
                    className="flex items-center gap-x-4 text-rose-500 py-3 px-3 w-full border-t border-dark-100 cursor-pointer"
                  >
                    <Logout size="16" />
                    <p className="text-xs">خروج از حساب کاربری</p>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div
              onClick={() => setIsOpenModal(true)}
              className="flex text-primary cursor-pointer border-2 border-primary p-2 md:px-3 rounded-lg"
            >
              <Login className="w-6 h-6 block md:hidden" />
              <Profile className="w-6 h-6 md:block hidden" variant="Bold" />
              <span className="text-base lg:text-lg font-medium pr-1 md:block hidden">
                ورود | ثبت نام
              </span>
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="block md:hidden fixed inset-0 bg-black/50 backdrop-blur-[1px] z-40"
        ></div>
      )}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal}>
          <AuthForm setIsOpenModal={setIsOpenModal} />
        </Modal>
      )}
    </header>
  );
}
export default Header;
