'use client'

import { useState } from 'react';

import { Button } from "@/components/ui/button";

import ProfileForm from "@/components/forms/profile";
import AccountForm from "@/components/forms/account";
import NotificationsForm from "@/components/forms/notifications";

export default function SettingsPanel({ props }) {
  const [active, setActive] = useState("profile");
  
  // console.log(props.sub);
  
  return (
    <div className={"p-8"}>
      <h3 className={"text-3xl py-3"}>Settings</h3>
      <div className={"flex w-fit gap-2 py-2"}>
        {active === "profile" ? (
          <Button variant={"text"} className={"bg-black text-white"} onClick={() => setActive("profile")}>
            Profile
          </Button>
        ) : (
          <Button variant={"text"} className={"hover:bg-foreground"} onClick={() => setActive("profile")}>
            Profile
          </Button>
        )}
        {active === "account" ? (
          <Button variant={"text"} className={"bg-black text-white"} onClick={() => setActive("account")}>
            Account
          </Button>
        ) : (
          <Button variant={"text"} className={"hover:bg-foreground"} onClick={() => setActive("account")}>
            Account
          </Button>
        )}
        {active === "notifications" ? (
          <Button variant={"text"} className={"bg-black text-white"} onClick={() => setActive("notifications")}>
            Notifications
          </Button>
        ) : (
          <Button variant={"text"} className={"hover:bg-foreground"} onClick={() => setActive("notifications")}>
            Notifications
          </Button>
        )}
      </div>
      <div className={"flex flex-col p-5"}>
        {active === "profile" && <ProfileForm u_name={props.name} u_email={props.email} />}
        {active === "account" && <AccountForm u_username={props.username} u_language={props.language} u_id={props.sub} />}
        {active === "notifications" && <NotificationsForm notify={props.notify} toggle={props.toggle} />}
      </div>
    </div>
  )
}