import Link from "next/link";

import { CheckIcon } from "@radix-ui/react-icons";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const notifications = [
  {
    title: "This does not represent the final product.",
    description: "We want to prototype and bring the representation of our idea to life.",
  },
  {
    title: "We are continuously progressing!",
    description: "This MVP will have constant updates throughout our development, before releasing an official beta.",
  },
  {
    title: "We are open to feedback!",
    description: "Any review, positive and negative, will help us grow.",
  },
]

export default function Home() {
  return (
    <main className={"w-screen h-screen flex justify-center items-center"}>
      
      <Card className={"w-[380px] p-2 drop-shadow-xl"}>
        <CardHeader>
          <CardTitle>Important Message</CardTitle>
          <CardDescription className={"text-wrap w-full"}>
            This is a product MVP. The beta of this product is a work-in-progress project.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Link href={"/auth"} className="w-full">
            <Button className="w-full">
              <CheckIcon /> Go to MVP
            </Button>
          </Link>
        </CardFooter>
      </Card>
      
    </main>
  );
}
