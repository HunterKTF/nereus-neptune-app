import Navbar from "@/app/components/app/navbar";
import DashboardPanel from "@/app/components/app/panels/dashboard-panel";

export default function Dashboard() {
  return (
    <main className={"w-screen h-screen flex flex-col"}>
      <Navbar />
      <DashboardPanel />
    </main>
  )
}