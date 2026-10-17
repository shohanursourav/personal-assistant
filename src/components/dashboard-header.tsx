"use client"

import * as React from "react"

const subscribeNoop = () => () => {}

/**
 * Returns the current time on the client, or null during SSR/hydration.
 * Avoids both hydration mismatches and setState-in-effect.
 */
function useNow(): Date | null {
  const ms = React.useSyncExternalStore(
    subscribeNoop,
    () => Date.now(),
    () => 0
  )
  return ms === 0 ? null : new Date(ms)
}

export function DashboardHeader() {
  const now = useNow()

  const greeting = React.useMemo(() => {
    if (!now) return "Welcome back"
    const h = now.getHours()
    if (h < 5) return "Up late"
    if (h < 12) return "Good morning"
    if (h < 17) return "Good afternoon"
    return "Good evening"
  }, [now])

  const dateLabel = React.useMemo(() => {
    if (!now) return "Here is your day at a glance."
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(now)
  }, [now])

  return (
    <div className="mb-8 space-y-1">
      <h1 className="text-2xl font-semibold tracking-tight">
        {greeting}, Shohan <span className="align-middle">👋</span>
      </h1>
      <p className="text-muted-foreground text-sm">{dateLabel}</p>
    </div>
  )
}
