import { useState } from "react";
import Image from "next/image";
import poolImage from "../public/pool-image.jpg";
import logo from "../public/swimming-pool-svgrepo-com.svg";

function SignIn({ csrfToken }) {
  const [message, setMessage] = useState("");
  const [inputError, setInputError] = useState(false);
  const onIDChange = (e) => {
    const regex = /[A-ZA-Z]+-[A-ZA-Z][0-9]{1,2}/;
    const test = regex.test(e.target.value);
    if (!test) {
      setInputError(true);
      setMessage("❌ ID  format is incorrect, does not match case");
    } else {
      setInputError(false);
      setMessage("✅ ID format is correct");
    }
  };

  return (
    <>
      <div className="grid h-screen place-items-center prose pb-10 bg-gradient-to-tr from-pink-500 to-blue-600">
        <form method="post" action="/api/auth/callback/credentials">
          <figure>
            <Image
              className=" rounded-xl"
              src={logo}
              width="100vw"
              height="100vh"
              alt="pool image"
            />
          </figure>
          <h1 className="font-sans">Sign In</h1>

          <div className="form-control w-full">
            <div>
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="John"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Doe"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Referral ID</span>
              </label>

              <input
                id="referralID"
                type="text"
                onChange={onIDChange}
                placeholder="Your ID"
                className={`input ${
                  inputError && "input-error"
                } input-bordered w-full`}
              />
              <label className="label">
                <span className="label-text-alt">{message}</span>
              </label>
            </div>
            <button className="btn rounded-md" type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}

export { SignIn };
