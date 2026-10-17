import type { Route } from "next"
import {
  CalendarClock,
  LayoutDashboard,
  ListTodo,
  ShoppingCart,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

export type NavItem = {
  title: string
  href: Route
  description: string
  icon: LucideIcon
}

export type NavGroup = {
  label: string
  items: NavItem[]
}

export const navGroups: NavGroup[] = [
  {
    label: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/",
        description: "Your monthly summary",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "Workspace",
    items: [
      {
        title: "Tasks",
        href: "/tasks",
        description: "To-dos & deadlines",
        icon: ListTodo,
      },
      {
        title: "Meetings",
        href: "/meetings",
        description: "Schedule & time slots",
        icon: CalendarClock,
      },
    ],
  },
  {
    label: "Daily life",
    items: [
      {
        title: "Shopping",
        href: "/shopping",
        description: "Bazar & grocery list",
        icon: ShoppingCart,
      },
    ],
  },
  {
    label: "Studio",
    items: [
      {
        title: "AI Content",
        href: "/content",
        description: "Draft social posts",
        icon: Sparkles,
      },
    ],
  },
]

export const allNavItems: NavItem[] = navGroups.flatMap((g) => g.items)

export function findNavItem(pathname: string): NavItem | undefined {
  return allNavItems.find((item) => item.href === pathname)
}
