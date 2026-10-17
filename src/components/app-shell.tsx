"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BrainCircuit, Menu } from "lucide-react"

import { navGroups } from "@/lib/nav"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2.5 rounded-md px-1 py-1">
      <span className="bg-primary text-primary-foreground grid size-9 shrink-0 place-items-center rounded-lg">
        <BrainCircuit className="size-5" />
      </span>
      <span className="flex flex-col">
        <span className="text-sm leading-tight font-semibold">Second Brain</span>
        <span className="text-muted-foreground text-xs leading-tight">
          Life Assistant
        </span>
      </span>
    </Link>
  )
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-5">
      {navGroups.map((group) => (
        <div key={group.label} className="flex flex-col gap-1">
          <p className="text-muted-foreground/70 px-2.5 text-[11px] font-medium tracking-wider uppercase">
            {group.label}
          </p>
          {group.items.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon
                  className={cn("size-4 shrink-0", active && "text-primary")}
                />
                {item.title}
              </Link>
            )
          })}
        </div>
      ))}
    </nav>
  )
}

function UserChip() {
  return (
    <div className="flex items-center gap-2.5 px-1">
      <span className="bg-muted text-muted-foreground grid size-8 shrink-0 place-items-center rounded-full text-xs font-semibold">
        SB
      </span>
      <span className="flex flex-col">
        <span className="text-xs font-medium">Signed out</span>
        <span className="text-muted-foreground text-[11px]">
          Auth arrives with Supabase
        </span>
      </span>
    </div>
  )
}

function SidebarBody({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col gap-4 p-3">
      <Brand />
      <Separator />
      <div className="flex-1 overflow-y-auto">
        <SidebarNav onNavigate={onNavigate} />
      </div>
      <Separator />
      <UserChip />
    </div>
  )
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <div className="w-full">
      {/* Desktop sidebar */}
      <aside className="bg-sidebar fixed inset-y-0 left-0 z-40 hidden w-64 border-r md:block">
        <SidebarBody />
      </aside>

      <div className="flex min-h-svh flex-col md:pl-64">
        {/* Mobile top bar */}
        <header className="bg-background/80 sticky top-0 z-30 flex h-14 items-center gap-3 border-b px-4 backdrop-blur md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-sidebar w-72 p-0"
              showCloseButton={false}
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <SidebarBody onNavigate={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>
          <Brand />
        </header>

        <main className="flex-1 px-4 py-6 md:px-8 md:py-8">{children}</main>
      </div>
    </div>
  )
}
