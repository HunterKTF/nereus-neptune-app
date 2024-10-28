import Navbar from "@/app/components/app/navbar";
import ClientsPanel from "@/app/components/app/panels/clients-panel";

export default function Clients () {
  return (
    <main className={"w-screen h-screen flex flex-col"}>
      <Navbar />
      <ClientsPanel />
    </main>
  )
}