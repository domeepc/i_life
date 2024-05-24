import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { MdOutlinePayments } from 'react-icons/md';
import { BiCalendarCheck } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { BiExit } from 'react-icons/bi';
import { signOut } from 'next-auth/react';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import { BsXLg } from 'react-icons/bs';
import DarkSwitch from './DarkSwitch';

export default function Dashboard() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <button
        className="fixed top-8 left-2 lg:hidden z-50 text-2xl text-white bg-icons p-3 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear"
        onClick={showSidebar}
      >
        {sidebar === false ? (
          <FiMenu />
        ) : (
          <>
            <BsXLg />
          </>
        )}
      </button>
      <div
        className={
          sidebar ? 'dashboard_navbar active_sidebar' : 'dashboard_navbar'
        }
      >
        <nav className="py-8 pt-28 lg:pt-8 flex flex-col items-center justify-between min-h-max h-full">
          <ul className="dashboard_list">
            <Link href="/dashboard/profile">
              <li className="bg-slate-400 dark:bg-container-dark p-3 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group relative flex items-center">
                <CgProfile className="text-2xl" />

                <span className="tooltip group-hover:scale-100">Profile</span>
              </li>
            </Link>
            <Link href="/dashboard/payment">
              <li className="bg-slate-400 p-3 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group relative flex items-center dark:bg-container-dark">
                <MdOutlinePayments className="text-2xl" />

                <span className="tooltip group-hover:scale-100">Payment</span>
              </li>
            </Link>
            <Link href="/dashboard/reservations">
              <li className="bg-slate-400 p-3 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group relative flex items-center dark:bg-container-dark">
                <BiCalendarCheck className="text-2xl" />

                <span className="tooltip group-hover:scale-100">
                  Reservations
                </span>
              </li>
            </Link>
            <Link href="/">
              <li className="bg-slate-400 p-3 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group relative flex items-center dark:bg-container-dark">
                <FaHome className="text-2xl" />

                <span className="tooltip group-hover:scale-100">Home</span>
              </li>
            </Link>

            <li className="p-3 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group relative flex items-center">
              <DarkSwitch />
            </li>
          </ul>
          <button
            className="bg-icons p-3 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear group flex items-center relative"
            onClick={() => {
              signOut();
            }}
          >
            <BiExit className="text-2xl text-white" />
            <span className="tooltip group-hover:scale-100">Sign Out</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
