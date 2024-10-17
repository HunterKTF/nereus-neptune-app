'use client'

import { useState } from 'react';

import { Button } from "@/components/ui/button";

import ProfileForm from "@/components/forms/profile";
import AccountForm from "@/components/forms/account";
import NotificationsForm from "@/components/forms/notifications";

export default function SettingsPanel() {
  const [active, setActive] = useState("profile");
  
  return (
    <div className={"p-8"}>
      <h3 className={"text-3xl py-3"}>Settings</h3>
      <div className={"flex w-fit gap-2 py-2"}>
        <Button variant={"filled"} className={"hover:bg-foreground"} onClick={() => setActive("profile")}>
          Profile
        </Button>
        <Button variant={"text"} className={"hover:bg-foreground"} onClick={() => setActive("account")}>
          Account
        </Button>
        <Button variant={"text"} className={"hover:bg-foreground"} onClick={() => setActive("notifications")}>
          Notifications
        </Button>
      </div>
      <div className={"flex flex-col p-5"}>
        {active === "profile" && <ProfileForm />}
        {active === "account" && <AccountForm />}
        {active === "notifications" && <NotificationsForm />}
      </div>
    </div>
  )
}