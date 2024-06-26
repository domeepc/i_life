import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import DarkSwitch from '../components/DarkSwitch';
export default function TermsOfUse() {
  return (
    <div>
      <Head>
        <title>Ilife: Terms of Use</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </Head>

      <nav className="flex justify-between px-4 py-6 md:px-10 lg:px-52 lg:py-6">
        <Link className="dark:hidden w-max" href="/">
          <Image src="/vibrant_logo.svg" width={130} height={130} />
        </Link>
        <Link className="dark:block" href="/">
          <Image src="/logo_white.svg" width={130} height={130} />
        </Link>
        <DarkSwitch />
      </nav>
      <div className="px-4 py-6 md:px-10 lg:px-52 lg:py-6">
        <h1 className="font-bold text-3xl mb-5">Terms of Use</h1>
        <div className="w-5/6">
          <p className="text-md">
            By accessing or using the Ilife website, mobile application, or any
            other services (collectively, the &quot;Services&quot;), you agree
            to be bound by the following terms of use (the &quot;Terms&quot;).
            If you do not agree to these Terms, you may not use the Services.
            Use of the Services The Services are intended for your personal,
            non-commercial use. You may not use the Services for any illegal or
            unauthorized purpose. You may not use the Services in a way that
            could damage, disable, overburden, or impair the Services or
            interfere with any other party&apos;s use of the Services. You may
            not attempt to gain unauthorized access to the Services, or any
            account, computer system, or network connected to the Services,
            through hacking, password mining, or any other means. You may not
            use the Services to transmit any spam, viruses, or other harmful
            code. Content on the Services The Services may contain text,
            graphics, images, music, software, audio, video, works of authorship
            of any kind, and information or other materials (collectively,
            &quot;Content&quot;).
          </p>
          <br></br>
          <p>
            The Content is protected by copyright and other intellectual
            property laws, and is owned or controlled by Ilife or its licensors.
            You may not use the Content in any way that is not expressly
            authorized in these Terms. User-Generated Content The Services may
            allow you to submit, upload, publish, or otherwise make available
            Content (including, but not limited to, comments, reviews, images,
            videos, and personal information) (collectively,
            &quot;User-Generated Content&quot;). By submitting User-Generated
            Content, you grant Ilife a non-exclusive, transferable,
            sub-licensable, royalty-free, worldwide license to use, copy,
            modify, create derivative works based on, distribute, publicly
            display, publicly perform, and otherwise exploit in any manner such
            User-Generated Content in all formats and distribution channels now
            known or hereafter devised (including in connection with the
            Services and Ilife&apos;s business and on third-party sites and
            services), without further notice to or consent from you, and
            without the requirement of payment to you or any other person or
            entity. Accounts Certain features or services offered on or through
            the Services may require you to open an account (including setting
            up a Ilife ID and password).
          </p>
          <br></br>
          <p>
            You are solely responsible for maintaining the confidentiality of
            your account information, including your password, and for any and
            all activity that occurs under your account. You agree to notify
            Ilife immediately of any unauthorized use of your account or
            password, or any other breach of security. You may be held liable
            for any losses incurred by Ilife or any other user of or visitor to
            the Services due to someone else using your Ilife ID, password or
            account as a result of your failing to keep account information
            secure and confidential. Third-Party Websites and Services The
            Services may contain links to third-party websites or services that
            are not owned or controlled by Ilife. Ilife has no control over and
            assumes no responsibility for the content, privacy policies, or
            practices of any third-party websites or services. You acknowledge
            and agree that Ilife shall not be responsible or liable, directly or
            indirectly, for any damage or loss caused or alleged to be caused by
            or in connection with the use of or reliance on any such content,
            goods or services available on or through any such websites or
            services. Termination Ilife may terminate or suspend your access to
            the Services at any time, for any reason, and without notice. Upon
            termination, your right to use the Services will immediately cease.
            Disclaimers The Services are provided &quot;AS IS&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
