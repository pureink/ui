"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { DemoCookieSettings } from "@/components/demo/cookie-settings"
import { DemoCreateAccount } from "@/components/demo/create-account"
import { DemoDatePicker } from "@/components/demo/date-picker"
import { DemoGithub } from "@/components/demo/github-card"
import { DemoNotifications } from "@/components/demo/notifications"
import { DemoPaymentMethod } from "@/components/demo/payment-method"
import { DemoReportAnIssue } from "@/components/demo/report-an-issue"
import { DemoShareDocument } from "@/components/demo/share-document"
import { DemoTeamMembers } from "@/components/demo/team-members"
import { Button } from "@/components/ui/button"

interface DemoContainerProps {
  children: React.ReactNode
}

function DemoContainer({ children }: DemoContainerProps) {
  return (
    <div className="flex items-center justify-center [&>div]:w-full">
      {children}
    </div>
  )
}

export function DemoComponents({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [selectedColor, setSelectedColor] = React.useState("")

  return (
    <>
      <style jsx>{``}</style>
      <div
        className={cn(
          "examples grid items-start justify-center gap-6 rounded-lg lg:grid-cols-2 xl:grid-cols-3",
          className
        )}
        {...props}
      >
        <div className="grid items-start gap-6">
          <DemoContainer>
            <DemoReportAnIssue />
          </DemoContainer>
          <DemoContainer>
            <DemoPaymentMethod />
          </DemoContainer>
        </div>
        <div className="grid items-start gap-6">
          <DemoContainer>
            <DemoTeamMembers />
          </DemoContainer>
          <DemoContainer>
            <DemoDatePicker />
          </DemoContainer>
          <DemoContainer>
            <DemoNotifications />
          </DemoContainer>
          <DemoContainer>
            <DemoShareDocument />
          </DemoContainer>
        </div>
        <div className="grid items-start gap-6">
          <DemoContainer>
            <DemoGithub />
          </DemoContainer>
          <DemoContainer>
            <DemoCreateAccount />
          </DemoContainer>
          <DemoContainer>
            <DemoCookieSettings />
          </DemoContainer>
        </div>
      </div>
    </>
  )
}