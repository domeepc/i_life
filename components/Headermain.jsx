import Image from 'next/image';
import { BiMenuAltRight, BiXCircle, BiInfoCircle } from 'react-icons/bi';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import { MdOutlineSpaceDashboard, MdOutlinePayments } from 'react-icons/md';
import { BiExit } from 'react-icons/bi';
import Link from 'next/link';
import DarkSwitch from './DarkSwitch';

export default function Headermain({ userlist }) {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  for (let i = 0; i < userlist.length; i++) {
    if (userlist[i].email === session.user.email) {
      var user = userlist[i];
    }
  }

  if (session.user.name.includes(' ')) {
    var user = {
      surname: '',
    };
  }

  return (
    <header className=" flex items-center justify-between px-7 py-9 mb-36">
      <Image src="/logo_white.svg" width={130} height={130} alt="logo" />
      <div className="relative w-28">
        <div className="flex gap-3 border rounded-full px-3 py-2 items-center">
          <div className="relative">
            <div className="rounded-full bg-green-500 animate-ping h-2.5 w-2.5 absolute right-0 bottom-0 "></div>

            <div className="rounded-full bg-green-500 h-2.5 w-2.5 absolute right-0 bottom-0 "></div>

            <img
              src={session.user.image ?? '/avatar.jpg'}
              className="w-9 h-9 rounded-full"
              alt="profile_pic"
              srcSet=""
            />
          </div>
          {open === false ? (
            <BiMenuAltRight
              className="absolute text-white w-10 h-10 right-2 cursor-pointer"
              onClick={() => toggle()}
            />
          ) : (
            <>
              <BiXCircle
                className="absolute text-white w-10 h-10 right-2 cursor-pointer "
                onClick={() => toggle()}
              />

              <nav className=" absolute right-0 font-base text-left bg-white dark:bg-card-dark w-max h-fit top-16 text-md rounded-md">
                <div className="relative font-semibold flex gap-4 items-center border-b-2 border-black dark:border-container-dark px-4 py-2">
                  <img
                    className="rounded-full w-10"
                    src={session.user.image ?? '/avatar.jpg'}
                  ></img>
                  <span>{session.user.name + ' ' + user.surname}</span>
                </div>
                <ul className="flex flex-col">
                  <li className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ease-linear p-6">
                    <Link
                      className="flex items-center gap-3"
                      href={`/dashboard/profile/`}
                    >
                      <MdOutlineSpaceDashboard className="text-2xl text-gray-500" />
                      Dashboard
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ease-linear p-6">
                    <Link
                      className="flex items-center gap-3"
                      href="/dashboard/payment"
                    >
                      <MdOutlinePayments className="text-2xl text-gray-500" />
                      Payment method
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ease-linear p-6">
                    <Link className="flex items-center gap-3" href="/faq">
                      <BiInfoCircle className="text-2xl text-gray-500" />
                      FAQ
                    </Link>
                  </li>
                  <li className="flex hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ease-linear p-6 gap-3">
                    <DarkSwitch />
                    <span>Switch theme</span>
                  </li>
                  <li className="p-6">
                    <button
                      className="flex items-center gap-2 bg-icons text-sm px-2 py-1 font-semibold text-white rounded-md hover:bg-blue-800 transition-all ease-linear"
                      onClick={() => {
                        signOut();
                      }}
                    >
                      <BiExit className="text-lg" /> Sign out
                    </button>
                  </li>
                </ul>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
