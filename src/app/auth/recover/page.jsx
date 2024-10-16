import AuthDecorator from "@/components/app/auth-decor";
import RecoverPanel from "@/components/app/recover-panel";

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