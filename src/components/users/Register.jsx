import { useState } from "react";

import NameSchema from "../../schemas/NameSchema";
import UsernameSchema from "../../schemas/UsernameSchema";
import AvatarUrlSchema from "../../schemas/AvatarUrlSchema";
import PasswordSchema from "../../schemas/PasswordSchema";
import ConfirmPasswordSchema from "../../schemas/ConfirmPasswordSchema";
import ValidatedField from "../forms/ValidatedField";

const Register = () => {
  return (
    <section>
      <h1 className="title">Register</h1>
      <h2 className="subtitle">
        Register as a user to be able to write articles and comments, and vote
        on articles and comments from others
      </h2>

      <aside>
        Long passwords are far better than complex passwords -{" "}
        <a href="https://xkcd.com/936" target="_blank" rel="noreferrer">
          Why?
        </a>
      </aside>

      <button className="button" onClick={submit}>
        Register
      </button>
    </section>
  );
};

export default Register;
