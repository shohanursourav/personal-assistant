import {
  BadgeCheck,
  CalendarClock,
  Circle,
  ListTodo,
  ShoppingCart,
  Sparkles,
} from "lucide-react"

import { DashboardHeader } from "@/components/dashboard-header"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata = { title: "Dashboard" }

const stats = [
  {
    label: "Tasks due",
    value: "—",
    hint: "Wired up in Step 3",
    icon: ListTodo,
  },
  {
    label: "Upcoming meetings",
    value: "—",
    hint: "Wired up in Step 3",
    icon: CalendarClock,
  },
  {
    label: "Shopping items",
    value: "—",
    hint: "Wired up in Step 3",
    icon: ShoppingCart,
  },
  {
    label: "AI drafts",
    value: "—",
    hint: "Wired up in Step 4",
    icon: Sparkles,
  },
]

const roadmap = [
  {
    step: "Step 1",
    title: "Scaffold, design system & dashboard shell",
    status: "done" as const,
  },
  {
    step: "Step 2",
    title: "Supabase schema, SQL & auth wiring",
    status: "next" as const,
  },
  {
    step: "Step 3",
    title: "Tasks, Meetings & Bazar List features",
    status: "planned" as const,
  },
  {
    step: "Step 4",
    title: "AI Content Studio (Groq/Gemini + copy to clipboard)",
    status: "planned" as const,
  },
  {
    step: "Step 5",
    title: "Cron reminders with Resend on Vercel",
    status: "planned" as const,
  },
]

const statusMeta = {
  done: {
    label: "Done",
    variant: "default" as const,
    icon: BadgeCheck,
    iconClass: "text-primary",
  },
  next: {
    label: "Next up",
    variant: "secondary" as const,
    icon: Circle,
    iconClass: "text-foreground",
  },
  planned: {
    label: "Planned",
    variant: "outline" as const,
    icon: Circle,
    iconClass: "text-muted-foreground",
  },
}

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <DashboardHeader />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="gap-3 py-5">
            <CardContent className="flex items-start justify-between px-5">
              <div className="space-y-1">
                <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
                <p className="text-3xl font-semibold tabular-nums">
                  {stat.value}
                </p>
                <p className="text-muted-foreground/70 text-[11px]">
                  {stat.hint}
                </p>
              </div>
              <span className="bg-muted text-muted-foreground grid size-9 shrink-0 place-items-center rounded-lg">
                <stat.icon className="size-4" />
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Build plan</CardTitle>
          <CardDescription>
            Where we are in the five-step build of your Second Brain.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {roadmap.map((item) => {
            const meta = statusMeta[item.status]
            return (
              <div
                key={item.step}
                className="flex items-center gap-3 rounded-lg border px-3 py-2.5"
              >
                <meta.icon
                  className={`size-4 shrink-0 ${meta.iconClass}`}
                />
                <div className="flex-1 text-sm">
                  <span className="text-muted-foreground mr-2 font-mono text-xs">
                    {item.step}
                  </span>
                  <span
                    className={
                      item.status === "planned" ? "text-muted-foreground" : ""
                    }
                  >
                    {item.title}
                  </span>
                </div>
                <Badge variant={meta.variant}>{meta.label}</Badge>
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
