import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import { useFormik } from 'formik';
import login_validate from '../lib/validate';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
export default function Login() {
  const [show, setShow] = useState({ password: false });
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/',
    });
    if (status.ok) router.push(status.url);
  }

  return (
    <form
      name="login"
      className="grid col-span-2 grid-cols-2 mb-6"
      method="post"
      onSubmit={formik.handleSubmit}
    >
      <div className="col-span-2 mb-4">
        <div className="border-2 rounded-2xl mb-4 p-3 text-sm dark:border-container-dark">
          <label className="flex w-4/5 flex-col gap-2 " htmlFor="email">
            Email address
            <input
              className="w-4/5 bg-transparent"
              type="text"
              name="email"
              id="email"
              placeholder="Type your email"
              {...formik.getFieldProps('email')}
            />
            {formik.errors.email && formik.touched.email ? (
              <span className="text-rose-700">{formik.errors.email}</span>
            ) : (
              <></>
            )}
          </label>
        </div>
        <div className="relative border-2 dark:border-container-dark rounded-2xl p-3 text-sm">
          {show.password === false ? (
            <AiOutlineEye
              className="absolute right-4 top-4 w-10 h-10 px-2 cursor-pointer dark:bg-container-dark bg-container-light rounded-3xl hover:rounded-xl transition-all ease-linear text-icons"
              onClick={() => setShow({ ...show, password: !show.password })}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="absolute right-4 top-4 w-10 h-10 px-2 cursor-pointer dark:bg-container-dark bg-container-light rounded-3xl hover:rounded-xl transition-all ease-linear text-icons"
              onClick={() => setShow({ ...show, password: !show.password })}
            />
          )}

          <label className="flex w-4/5 flex-col gap-2 " htmlFor="password">
            Password
            <input
              className="w-4/5 bg-transparent"
              type={show.password ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Type your password"
              {...formik.getFieldProps('password')}
            />
            {formik.errors.password && formik.touched.password ? (
              <span className="text-rose-700">{formik.errors.password}</span>
            ) : (
              <></>
            )}
          </label>
        </div>
      </div>
      <div className="col-span-2 flex justify-end mb-6">
        <Link
          className="text-sm text-icons hover:text-blue-800 transition-all ease-linear "
          href="/forgotpass"
        >
          Forgot password?
        </Link>
      </div>
      <div className="col-span-2 text-center text-sm mb-8">
        <p>
          By signing in, I agree to Ilife{' '}
          <Link
            className="text-icons hover:text-blue-800 transition-all ease-linear"
            href="/termsofuse"
          >
            Terms of Use
          </Link>{' '}
          and <br></br>
          <Link
            className="text-icons hover:text-blue-800 transition-all ease-linear"
            href="/policy"
          >
            Privacy Policy.
          </Link>
        </p>
      </div>

      <button
        className="col-span-2 text-center cursor-pointer font-semibold bg-icons rounded-md text-white py-3 w-full hover:bg-blue-800 transition-all ease-linear "
        formAction="submit"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
}
