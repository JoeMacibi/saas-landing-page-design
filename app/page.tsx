import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
    </main>
  )
}
