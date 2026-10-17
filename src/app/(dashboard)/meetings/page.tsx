import { CalendarClock } from "lucide-react"

import { ComingSoon } from "@/components/coming-soon"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"

export const metadata = { title: "Meetings" }

export default function MeetingsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <PageHeader
        title="Meetings"
        description="Schedule, reschedule and cancel meetings."
        actions={
          <Button disabled>
            <CalendarClock className="size-4" />
            Schedule meeting
          </Button>
        }
      />
      <ComingSoon
        icon={CalendarClock}
        title="Meeting manager arrives in Step 3"
        description="Dedicated scheduling with time slots, cancellation and an upcoming-meetings timeline — backed by Supabase."
        step="Step 3 of the build plan"
      />
    </div>
  )
}
