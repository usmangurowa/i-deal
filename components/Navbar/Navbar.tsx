import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { sleep } from "../../utils";
import Button from "../Button";
import Modal from "../Modal";
import TextField from "../TextField";

type LinksType = {
  title: string;
  link: string;
};

const NavLinks: LinksType[] = [
  { title: "How It Works", link: "#" },
  { title: "Training", link: "#" },
  { title: "Consultation", link: "#" },
  { title: "Company", link: "#" },
];

const AuthLinks: LinksType[] = [
  { title: "Login", link: "#" },
  { title: "Sign Up", link: "#" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const [wallet, setWallet] = React.useState<boolean>(false);

  const handleConnectWallet = async () => {
    setLoading(true);
    await sleep(2000).then(() => {
      setLoading(false);
      setWallet(true);
      setOpen(true);
    });
  };

  const router = useRouter();

  return (
    <>
      <nav className="bg-primary h-fit py-2 w-full">
        <div className="container flex  items-center justify-between w-full h-full">
          <ul className="hidden md:flex items-center space-x-5">
            <Link href="/">
              <Image
                id="logo"
                src="/static/images/logo.png"
                width={125}
                height={85}
                alt="Direct Ed Logo"
              />
            </Link>
            {NavLinks.map((link: LinksType, index: number) => (
              <Link href={link.link} passHref>
                <a>
                  <li
                    className={`text-xl text-white ${
                      router.pathname === link.link
                        ? "font-semibold underline"
                        : "font-light"
                    }`}
                  >
                    {link.title}
                  </li>
                </a>
              </Link>
            ))}
          </ul>
          <div className="space-x-5 flex items-center">
            <TextField
              className="input-sm p-4 rounded-full"
              placeholder="Search..."
              type="search"
            />
            <ul className="hidden md:flex items-center space-x-5">
              {AuthLinks.map((link: LinksType, index: number) => (
                <Link href={link.link} passHref>
                  <a>
                    <li
                      className={`text-xl text-white w-20  ${
                        router.pathname === link.link
                          ? "font-semibold underline"
                          : "font-light"
                      }`}
                    >
                      {link.title}
                    </li>
                  </a>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
