import { ShoppingCart } from "lucide-react"

import { ComingSoon } from "@/components/coming-soon"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"

export const metadata = { title: "Shopping" }

export default function ShoppingPage() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <PageHeader
        title="Shopping / Bazar List"
        description="Groceries and daily needs, ticked off as you shop."
        actions={
          <Button disabled>
            <ShoppingCart className="size-4" />
            Add item
          </Button>
        }
      />
      <ComingSoon
        icon={ShoppingCart}
        title="Bazar list arrives in Step 3"
        description="A fast checklist for groceries and daily needs with quick add, check-off and clear-completed — backed by Supabase."
        step="Step 3 of the build plan"
      />
    </div>
  )
}
