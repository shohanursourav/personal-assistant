import { ListTodo } from "lucide-react"

import { ComingSoon } from "@/components/coming-soon"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"

export const metadata = { title: "Tasks" }

export default function TasksPage() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <PageHeader
        title="Tasks"
        description="Personal & professional to-dos with deadlines."
        actions={
          <Button disabled>
            <ListTodo className="size-4" />
            New task
          </Button>
        }
      />
      <ComingSoon
        icon={ListTodo}
        title="Task manager arrives in Step 3"
        description="Add, edit, complete and delete tasks with due dates and Personal / Professional categories — backed by Supabase."
        step="Step 3 of the build plan"
      />
    </div>
  )
}
