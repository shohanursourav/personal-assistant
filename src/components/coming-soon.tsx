import type { LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function ComingSoon({
  icon: Icon,
  title,
  description,
  step,
}: {
  icon: LucideIcon
  title: string
  description: string
  step: string
}) {
  return (
    <Card className="border-dashed py-0">
      <CardContent className="flex flex-col items-center justify-center gap-3 py-16 text-center">
        <div className="bg-muted grid size-12 place-items-center rounded-full">
          <Icon className="text-muted-foreground size-6" />
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-muted-foreground max-w-sm text-sm">
            {description}
          </p>
        </div>
        <Badge variant="outline">{step}</Badge>
      </CardContent>
    </Card>
  )
}
