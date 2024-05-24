import Link from 'next/link';

export default function Notificationlogin() {
  return (
    <section className="absolute bottom-0 w-full col-span-2">
      <div className="flex justify-between items-center px-5 py-5 rounded-b-2xl bg-container-light dark:bg-container-dark">
        <p className="font-semibold text-primary-light dark:text-primary-dark text-sm">
          Already have an account?
        </p>
        <Link
          className="bg-icons hover:bg-blue-800 transition-all ease-linear  rounded-md text-sm font-bold text-white py-2 px-6"
          href="/login"
        >
          Sign in
        </Link>
      </div>
    </section>
  );
}
