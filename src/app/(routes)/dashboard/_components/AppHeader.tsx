import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const menuItems = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },

  {
    id: 2,
    name: "History",
    path: "/history",
  },
  {
    id: 3,
    name: "Pricing",
    path: "/pricing",
  },
  {
    id: 4,
    name: "Profile",
    path: "/profile",
  },
];
const AppHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow px-10 md:px-20 lg:px-40">
      <Image src="./logo.svg" alt="Logo" width={180} height={90} />

      <div className="hidden md:flex items-center gap-12">
        {menuItems.map((item, idx) => (
          <div key={idx}>
            <h2 className="hover:font-bold cursor-pointer transition-all">
              {item.name}
            </h2>
          </div>
        ))}
      </div>

      <UserButton />
    </div>
  );
};

export default AppHeader;
