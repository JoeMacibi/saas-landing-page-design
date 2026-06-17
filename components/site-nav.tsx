import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Engines", href: "#engines" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
]

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="size-4" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Citable</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button>Get started</Button>
        </div>
      </div>
    </header>
  )
}
