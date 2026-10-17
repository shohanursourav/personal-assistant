import { Sparkles } from "lucide-react"

import { ComingSoon } from "@/components/coming-soon"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"

export const metadata = { title: "AI Content" }

export default function ContentPage() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <PageHeader
        title="AI Content Studio"
        description="Turn topic ideas into ready-to-post drafts."
        actions={
          <Button disabled>
            <Sparkles className="size-4" />
            Generate draft
          </Button>
        }
      />
      <ComingSoon
        icon={Sparkles}
        title="Content studio arrives in Step 4"
        description="Drop in a topic, generate LinkedIn-ready drafts via Groq/Gemini, then one-click copy and paste into any social app."
        step="Step 4 of the build plan"
      />
    </div>
  )
}
