import AuthDecorator from "@/app/components/app/auth-decor";
import RecoverPanel from "@/app/components/app/panels/recover-panel";

export default function RecoverPage() {
  return (
    <main className={"w-screen h-screen flex bg-background"}>
      {/* Left side panel */}
      <AuthDecorator />
      
      {/* Right side panel */}
      <RecoverPanel />
    </main>
  )
}