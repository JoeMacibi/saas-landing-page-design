# Citable UI — Antigravity build brief

## Product direction
Citable is a dark, high-density AI visibility command center for brands. The experience is inspired by the information architecture of Searchable.com—AEO insights, citation graphs, technical audits, and a content studio—while using a distinct slate/zinc visual system with emerald health signals. Avoid generic gradients, glassmorphism, floating 3D icons, and oversized empty hero space.

## Information architecture
- **Overview:** agent command header, KPI cards, AEO trend, engine breakdown, citation flow, site health.
- **AEO Insights:** visibility trend by date and engine; prompt-level tracking; competitor comparison.
- **Content Studio:** readiness score, issues, Search Appearance / FAQ Schema / JSON-LD previews, fix dialogs.
- **Site Health:** SEO + AEO crawlability score, critical errors, audit rows.
- **Plans & billing:** Free, Individuals, Business, Enterprise.
- **Integrations:** GA4, Search Console, Shopify, Notion, Slack, MCP.

## Design tokens
```css
--shell: #090a0c; --surface: #101114; --surface-2: #0b0c0e;
--border: rgba(255,255,255,.10); --text: #f4f4f5; --muted: #8b8d94;
--signal: #6ee7b7; --warning: #fcd34d;
```
Use crisp 1px borders, 6–10px radii, compact 12–14px body type, and `font-mono` for scores, percentages, crawl limits, and shortcuts (`⌘ K`).

## Reusable React APIs
```tsx
type MetricCardProps = { label: string; value: string; delta?: string; icon: LucideIcon }
type PromptChipProps = { label: string; onSelect: (label: string) => void }
type VisibilityTrendProps = { score: number; delta: number; points: number[]; range: '7d'|'30d'|'90d' }
type EngineBreakdownProps = { engines: { name: string; score: number; color: string }[] }
type CitationFlowProps = { source: string; responseCount: number; brandShare: number }
type PricingCardProps = { name: string; price: string; target: string; limit: string; features: string[]; featured?: boolean }
type IntegrationTrayProps = { integrations: { name: string; connected: boolean }[] }
```
Recommended components: `AppShell`, `Sidebar`, `TopCommandBar`, `AgentCommandHeader`, `PromptChip`, `MetricCard`, `VisibilityTrend`, `EngineBreakdown`, `CitationFlow`, `ContentStudio`, `ReadinessGauge`, `TechnicalHealthCard`, `IntegrationTray`, `CommandPalette`, `FixIssueDialog`, `VpsHostingTeaser`, `PricingGrid`, `PricingCard`, `SectionTabs`.

## Required dashboard behavior
- Agent input accepts Enter and submit button; display a local response state confirming GA4/GSC context sync.
- Prompt chips populate the input.
- Command trigger opens a searchable modal; Escape/backdrop closes it.
- Overview sections are dense cards with hover borders and visible focus rings.
- Content Studio tabs switch between Search Appearance, FAQ Schema, and JSON-LD Markup.
- Fix issues opens a modal with a Generate fix action.
- Pricing monthly/annual toggle changes non-free prices; Business remains visually featured.
- Integration tray shows connected status for GA4 and GSC, plus available ecosystem destinations.

## Exact pricing
- **Free — $0/mo:** 50 pages; basic Technical SEO audit; Citable Visibility Score; 1 Website; manual recommendations preview.
- **Individuals — $49/mo:** 500 pages; 1 Website; 5 tracked prompts; Basic Content Studio; GSC sync; weekly automated audits.
- **Business — $80/mo:** 2,500 pages; 5 Websites; 25 tracked prompts; Citation Graphing; Product Schema engine; competitor intelligence; JSON-LD fix generator. Mark “Most popular”.
- **Enterprise — $250/mo:** 10,000+ pages; unlimited Websites; custom prompt tracking; dedicated MCP server; white-label reporting; priority crawl queues; dedicated account manager.

## Future roadmap
Show VPS renting and website hosting only as roadmap teasers, never as active functionality: “Citable VPS Cloud Hosting — High-performance automated deployment engine coming soon.”

## Responsive and accessibility rules
Use mobile-first CSS. Collapse the sidebar behind a menu under 1024px, stack dashboard grids under 768px, keep buttons at least 40px tall, use semantic headings/landmarks, label icon-only buttons, use `aria-label` on charts, and preserve `:focus-visible` outlines. Do not rely on color alone for status.

## Acceptance criteria
1. Dark slate/zinc shell with emerald signal accents and no AI cliches.
2. Dashboard contains all requested AEO, content, health, command, integration, and VPS modules.
3. Pricing grid matches exact tiers and feature lists.
4. Tabs, prompt submit, command palette, modal, pricing toggle, and links work.
5. React/Tailwind/shadcn-compatible components remain easy for Antigravity to copy and extend.
6. Standalone HTML preview is readable offline and mirrors the key layout.
