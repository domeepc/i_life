import Image from 'next/image';
import DarkSwitch from './DarkSwitch';

export default function Headerlogin() {
  return (
    <header className="dark flex items-center justify-between px-4 py-6 md:px-10 lg:px-52 lg:py-6">
      <div>
        <Image
          className="hidden md:block"
          src="/vibrant_logo.svg"
          width={130}
          height={130}
          alt="logo"
        />
        <Image
          className="block md:hidden"
          src="/logo_white.svg"
          width={130}
          height={130}
          alt="logo"
        />
      </div>
      <div>
        <DarkSwitch />
      </div>
    </header>
  );
}
