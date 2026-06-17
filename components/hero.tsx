"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Globe, Loader2, Search, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ResultsPreview } from "@/components/results-preview"

export function Hero() {
  const [url, setUrl] = useState("")
  const [keyword, setKeyword] = useState("")
  const [loading, setLoading] = useState(false)
  const [hasRun, setHasRun] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setHasRun(true)
    // Simulate the audit running
    setTimeout(() => setLoading(false), 2600)
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10rem] -z-10 size-[40rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,oklch(1_0_0/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]"
      />

      <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            AI Search visibility, measured
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Are you invisible to AI Search Engines?
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            See how ChatGPT, Claude, and Perplexity rank your brand in seconds.
          </p>
        </div>

        {/* Audit form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card/60 p-4 shadow-xl backdrop-blur-xl sm:p-5"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2 text-left">
              <Label htmlFor="website-url" className="text-xs font-medium text-muted-foreground">
                Your Website URL
              </Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="website-url"
                  type="text"
                  inputMode="url"
                  placeholder="acme.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="h-11 pl-9"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 text-left">
              <Label htmlFor="keyword" className="text-xs font-medium text-muted-foreground">
                Target Product Category or Keyword
              </Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="keyword"
                  type="text"
                  placeholder="project management software"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="h-11 pl-9"
                />
              </div>
            </div>
          </div>

          <Button type="submit" size="lg" disabled={loading} className="mt-4 h-12 w-full text-base">
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Running audit…
              </>
            ) : (
              <>
                Run Free AI Audit
                <ArrowRight className="size-4" />
              </>
            )}
          </Button>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            No credit card required. Results in under 30 seconds.
          </p>
        </form>

        {/* Results preview */}
        <div className="mx-auto mt-12 max-w-3xl">
          {hasRun ? (
            <ResultsPreview loading={loading} />
          ) : (
            <div className="relative">
              <ResultsPreview loading={false} />
              {/* Pre-run blurred / inactive overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-background/60 backdrop-blur-md">
                <span className="flex size-12 items-center justify-center rounded-full border border-border bg-card">
                  <Search className="size-5 text-primary" />
                </span>
                <p className="text-sm font-medium">Your AI Visibility Score appears here</p>
                <p className="max-w-xs text-center text-xs text-muted-foreground">
                  Enter your website and a keyword above, then run the free audit.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
