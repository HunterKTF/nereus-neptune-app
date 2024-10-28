'use client'

import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

export default function ForgotPassword() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="text">Forgot Password</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background border border-transparent">
        <DialogHeader>
          <DialogTitle>Retrieve Password</DialogTitle>
          <DialogDescription>
            Please enter the email you used to register. We will send you an email
            with the instructions to reset your password.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" placeholder={"your_email@email.com"} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}