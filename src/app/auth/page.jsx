import AuthDecorator from "@/components/app/auth-decor";
import AuthPanel from "@/components/app/auth-panel";

export default function Auth() {
  return (
    <main className={"w-screen h-screen flex bg-background"}>
      {/* Left side panel */}
      <AuthDecorator />
      
      {/* Right side panel */}
      <AuthPanel />
    </main>
  )
}