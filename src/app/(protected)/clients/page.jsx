import Navbar from "@/components/app/navbar";
import ClientsPanel from "@/components/app/panels/clients-panel";

export default function Clients () {
  return (
    <main className={"w-screen h-screen flex flex-col"}>
      <Navbar />
      <ClientsPanel />
    </main>
  )
}