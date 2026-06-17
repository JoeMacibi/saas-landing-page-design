"use client"

import { Check, Loader2, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

type EngineResult = {
  name: string
  badge: string
  mentioned: boolean
  rank: string
  quote: string
}

const engineResults: EngineResult[] = [
  {
    name: "ChatGPT",
    badge: "GPT-4o",
    mentioned: true,
    rank: "#2 of 6",
    quote:
      "For teams that need this, a few options stand out — including your brand, frequently cited for reliability and ease of setup.",
  },
  {
    name: "Claude",
    badge: "Sonnet 4",
    mentioned: false,
    rank: "Not cited",
    quote:
      "I'd typically recommend a handful of established players here, though your brand wasn't surfaced in this response.",
  },
  {
    name: "Perplexity",
    badge: "Sonar",
    mentioned: true,
    rank: "#1 of 5",
    quote:
      "Based on recent sources, your brand is the most referenced solution in this category, with strong citation density.",
  },
]

function ScoreRing({ score }: { score: number }) {
  const radius = 64
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="relative flex size-44 items-center justify-center">
      <svg className="size-full -rotate-90" viewBox="0 0 160 160" aria-hidden="true">
        <circle cx="80" cy="80" r={radius} fill="none" stroke="var(--border)" strokeWidth="10" />
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-5xl font-semibold tracking-tight tabular-nums">{score}</span>
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">out of 100</span>
      </div>
    </div>
  )
}

function EngineCard({ result }: { result: EngineResult }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-background/60 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{result.name}</span>
          <span className="rounded-md bg-secondary px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
            {result.badge}
          </span>
        </div>
        <span
          className={cn(
            "flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
            result.mentioned
              ? "bg-primary/15 text-primary"
              : "bg-muted text-muted-foreground",
          )}
        >
          {result.mentioned && <Check className="size-3" />}
          {result.rank}
        </span>
      </div>
      <div className="flex gap-2">
        <Quote className="mt-0.5 size-4 shrink-0 text-muted-foreground/60" />
        <p className="text-sm leading-relaxed text-muted-foreground">{result.quote}</p>
      </div>
    </div>
  )
}

export function ResultsPreview({ loading }: { loading: boolean }) {
  return (
    <div className="relative">
      {/* Glow behind the container */}
      <div
        aria-hidden="true"
        className="absolute -inset-x-8 -top-8 bottom-0 -z-10 rounded-[2rem] bg-primary/10 blur-3xl"
      />

      <div className="overflow-hidden rounded-2xl border border-border bg-card/70 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <span className="text-sm font-medium">AI Visibility Report</span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Live preview
          </span>
        </div>

        <div className="relative grid gap-6 p-5 sm:p-6 lg:grid-cols-[auto_1fr] lg:items-center">
          {/* Score */}
          <div className="flex flex-col items-center gap-3 lg:border-r lg:border-border lg:pr-6">
            <ScoreRing score={72} />
            <div className="text-center">
              <p className="text-sm font-medium">AI Visibility Score</p>
              <p className="text-xs text-muted-foreground">Cited in 2 of 3 engines</p>
            </div>
          </div>

          {/* Engine cards */}
          <div className="grid gap-3 sm:grid-cols-1">
            {engineResults.map((result) => (
              <EngineCard key={result.name} result={result} />
            ))}
          </div>

          {/* Loading overlay */}
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-card/80 backdrop-blur-md">
              <Loader2 className="size-7 animate-spin text-primary" />
              <p className="text-sm font-medium">Querying ChatGPT, Claude &amp; Perplexity…</p>
              <p className="text-xs text-muted-foreground">Analyzing brand citations across AI engines</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
