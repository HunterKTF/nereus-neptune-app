import Navbar from "@/components/app/navbar";
import SettingsPanel from "@/components/app/settings-panel";

export default function Settings() {
  return (
    <main className={"w-screen h-screen flex flex-col"}>
      <Navbar />
      <SettingsPanel />
    </main>
  )
}