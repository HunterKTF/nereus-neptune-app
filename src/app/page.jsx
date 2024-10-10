import Image from "next/image";
import Link from "next/link";

import RegisterForm from "@/components/forms/register";

export default function Home() {
  return (
    <main className={"w-screen h-screen flex bg-background"}>
      
      {/* Left side panel */}
      <div className={"w-full h-full bg-foreground flex flex-col justify-between p-11"}>
        <div className={"w-full flex gap-2 items-end"}>
          <Image src={"img/Logo_44.svg"} width={"44"} height={"44"} alt={"Nereus AI Logo"} />
          <h4 className={"text-3xl"}>Neptune</h4>
          <span className={"text-lg"}>by NereusAI</span>
        </div>
        <div className={"w-full flex flex-col gap-2"}>
          <p className={"text-lg"}>
            &quot;This app has saved me countless hours of work and helped me deliver stunning designs to my clients
            faster than ever before.&quot;
          </p>
          <p className={"text-sm font-bold"}>
            Sofia Davis
          </p>
        </div>
      </div>
      
      {/* Right side panel */}
      <div className={"w-full h-full flex flex-col justify-between p-11"}>
        <div className={"w-full flex justify-end"}>
          <Link href={"/"} className={"text-md"}>
            Login
          </Link>
        </div>
        <div className={"w-full h-full flex flex-col justify-center items-center gap-11"}>
          <div className={"w-full flex flex-col items-center justify-center"}>
            <h2 className={"text-3xl"}>Create an Account</h2>
            <p>Enter your data below to create your account</p>
          </div>
          <div className={"w-80 flex flex-col gap-4"}>
            <RegisterForm />
          </div>
        </div>
        <div className={"w-full flex justify-end"}>
          <p className={"text-sm"}>
            Nereus AI Copyright © 2024
          </p>
        </div>
      </div>
      
    </main>
  );
}
