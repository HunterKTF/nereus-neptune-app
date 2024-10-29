'use client'

import { useState } from 'react';

import { Button } from "@/app/components/ui/button";

import ProfileForm from "@/app/components/forms/profile";
import AccountForm from "@/app/components/forms/account";
import NotificationsForm from "@/app/components/forms/notifications";

export default function SettingsPanel() {
  const [active, setActive] = useState("profile");
  
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
        {active === "profile" && <ProfileForm />}
        {active === "account" && <AccountForm />}
        {active === "notifications" && <NotificationsForm />}
      </div>
    </div>
  )
}