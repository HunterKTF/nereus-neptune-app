'use client'

import { useState } from 'react';

import RegisterForm from "@/app/components/forms/register";
import LoginForm from "@/app/components/forms/login";

export default function AuthForm() {
  const [active, setActive] = useState("RegisterCard");
  
  return (
    <div className={"w-full h-full flex flex-col justify-between p-11"}>
      <div className={"w-full flex justify-end gap-4"}>
        <button onClick={() => setActive("LoginCard")}
              className={"text-sm border border-white rounded-md px-3 py-1"}>
          Login
        </button>
        <button onClick={() => setActive("RegisterCard")}
              className={"text-sm text-black bg-white rounded-md px-2 py-1"}>
          Register
        </button>
      </div>
      { active === "RegisterCard" && <RegisterForm /> }
      { active === "LoginCard" && <LoginForm /> }
      { active === "ForgotPassword" && (
        <div className={""}>
          <p>You may now close this page</p>
        </div>
      ) }
      <div className={"w-full flex justify-end"}>
        <p className={"text-sm"}>
          Nereus AI Copyright © 2024
        </p>
      </div>
    </div>
  )
}