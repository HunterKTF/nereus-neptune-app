import AuthDecorator from "@/app/components/app/auth-decor";
import AuthPanel from "@/app/components/app/panels/auth-panel";

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