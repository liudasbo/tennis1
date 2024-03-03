"use client";

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Dialog } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import Footer from "../Footer/Footer";

export default function Header() {
  const navigation = [
    { name: "Pagrindinis", href: "/" },
    { name: "Rezervacija", href: "/reservation" },
    { name: "Kontaktai", href: "/contacts" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="container mx-auto my-4">
      <nav className="w-full flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          Tennis1
        </a>

        <ul className="hidden md:flex gap-8 text-textColor">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:border-b-2 hover:border-textColor pb-1 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden md:flex button-secondary">Prisijungti</button>

        <RxHamburgerMenu
          className="flex md:hidden size-6 cursor-pointer"
          onClick={() => setMobileMenuOpen(true)}
        />
      </nav>

      {/* Mobile Menu */}
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-4 flex flex-col">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold">
              Tennis1
            </a>
            <IoClose
              className="flex md:hidden size-6 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
          <div className="mt-4 flow-root">
            <div className="-my-4 divide-y divide-gray-500/10">
              <div className="space-y-2 py-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-2 block rounded-3xl px-3 py-2 text-base font-medium leading-7 text-textColor hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-4">
                <a
                  href="#"
                  className="-mx-2 block rounded-3xl px-3 py-2.5 text-base font-medium leading-7 text-textColor hover:bg-gray-100"
                >
                  Prisijungti
                </a>
              </div>
            </div>
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
