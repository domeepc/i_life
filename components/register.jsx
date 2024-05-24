import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useFormik } from 'formik';
import { register_validate } from '../lib/validate';
import { useRouter } from 'next/router';

export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false });

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      cpassword: '',
      name: '',
      surname: '',
      mail_notf: false,
    },
    validate: register_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };

    await fetch('../api/auth/signup', options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push('/login');
      });
  }
  return (
    <form
      name="signup"
      className="grid col-span-2 grid-cols-2 mb-4"
      method="post"
      onSubmit={formik.handleSubmit}
    >
      <div className="col-span-2 mb-4 flex flex-col gap-4">
        <div className="border-2 dark:border-container-dark rounded-2xl p-3 text-sm">
          <label className="flex w-4/5 flex-col gap-2" htmlFor="email">
            Email address
            <input
              className="w-4/5 bg-transparent"
              type="email"
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
        <div className="relative border-2 dark:border-container-dark rounded-2xl p-3 text-sm">
          {show.cpassword === false ? (
            <AiOutlineEye
              className="absolute right-4 top-4 w-10 h-10 px-2 cursor-pointer dark:bg-container-dark bg-container-light rounded-3xl hover:rounded-xl transition-all ease-linear text-icons"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="absolute right-4 top-4 w-10 h-10 px-2 cursor-pointer dark:bg-container-dark bg-container-light rounded-3xl hover:rounded-xl transition-all ease-linear text-icons"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            />
          )}

          <label className="flex w-4/5 flex-col gap-2 " htmlFor="cpassword">
            Repeat Password
            <input
              className="w-4/5 bg-transparent"
              type={show.cpassword ? 'text' : 'password'}
              name="cpassword"
              id="cpassword"
              placeholder="Repeat your password"
              {...formik.getFieldProps('cpassword')}
            />
            {formik.errors.cpassword && formik.touched.cpassword ? (
              <span className="text-rose-700">{formik.errors.cpassword}</span>
            ) : (
              <></>
            )}
          </label>
        </div>
      </div>
      <div className="flex flex-row col-span-2 mb-4">
        <div className="border-2 dark:border-container-dark w-full rounded-tl-2xl rounded-bl-2xl p-3 text-sm">
          <label htmlFor="name" className="flex flex-col gap-2 ">
            First Name
            <input
              className="w-full bg-transparent"
              type="text"
              name="name"
              id="name"
              placeholder="Type your name"
              {...formik.getFieldProps('name')}
            />
            {formik.errors.name && formik.touched.name ? (
              <span className="text-rose-700">{formik.errors.name}</span>
            ) : (
              <></>
            )}
          </label>
        </div>
        <div className="w-full dark:border-container-dark border-t-2 border-r-2 border-b-2 rounded-tr-2xl rounded-br-2xl p-3 text-sm">
          <label htmlFor="surname" className=" flex flex-col gap-2 ">
            Last Name
            <input
              className="w-full bg-transparent"
              type="text"
              name="surname"
              id="surname"
              placeholder="Type your last name"
              {...formik.getFieldProps('surname')}
            />
            {formik.errors.surname && formik.touched.surname ? (
              <span className="text-rose-700">{formik.errors.surname}</span>
            ) : (
              <></>
            )}
          </label>
        </div>
      </div>
      <div className="col-span-2 mb-6">
        <label
          className="flex gap-2 items-start justify-center w-full text-sm text-primary-light dark:text-primary-dark"
          htmlFor="mail_notf"
        >
          <input
            className="w-6 h-6"
            type="checkbox"
            name="mail_notf"
            id="mail_notf"
            {...formik.getFieldProps('mail_notf')}
          />

          <p className="w-9/12 ">
            Email me exclusive Ilife promotions. I can unsubscribe at any time
            as stated in the Privacy Policy.
          </p>
        </label>
      </div>
      <button
        className="col-span-2 text-center cursor-pointer font-semibold bg-icons text-md rounded-md hover:bg-blue-800 transition-all ease-linear text-white py-3 lg:mx-16"
        formAction="submit"
        type="submit"
      >
        Sign up
      </button>
    </form>
  );
}
