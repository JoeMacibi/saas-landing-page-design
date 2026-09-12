'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Code2,
  FileCode2,
  Globe2,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react'

const integrations = ['Google Analytics 4', 'Search Console', 'Shopify', 'Notion', 'Slack']
const engines = [
  { name: 'ChatGPT', score: '42.8%', width: '100%', color: 'bg-emerald-300' },
  { name: 'Claude', score: '38.4%', width: '90%', color: 'bg-amber-200' },
  { name: 'Perplexity', score: '31.9%', width: '75%', color: 'bg-sky-200' },
  { name: 'Gemini', score: '27.5%', width: '64%', color: 'bg-zinc-500' },
]

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>
}

function BentoCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <article className={`bento-card ${className}`}>{children}</article>
}

function StudioCard() {
  const [tab, setTab] = useState('Search Appearance')
  const tabs = ['Search Appearance', 'FAQ Schema', 'JSON-LD Markup']
  return (
    <BentoCard className="studio-card">
      <div className="card-heading"><div><Pill>Content Studio</Pill><h2>Make every page citable.</h2></div><FileCode2 className="card-icon" /></div>
      <p className="card-copy">Generate content engineered for AI citation, with the markup to make it legible to every crawler.</p>
      <div className="studio-layout">
        <div className="readiness"><div className="readiness-ring"><span>84</span><small>/100</small></div><strong>AI readiness</strong><span className="status">Ready to publish</span></div>
        <div className="code-window"><div className="code-tabs">{tabs.map((item) => <button key={item} className={tab === item ? 'active' : ''} onClick={() => setTab(item)}>{item}</button>)}</div><pre>{tab === 'Search Appearance' ? '<title>Acme — Simple analytics for teams</title>\n<meta name="description"\n  content="Analytics that keeps teams moving." />' : tab === 'FAQ Schema' ? '{\n  "@type": "FAQPage",\n  "mainEntity": [...]\n}' : '{\n  "@context": "https://schema.org",\n  "@type": "SoftwareApplication"\n}'}</pre></div>
      </div>
    </BentoCard>
  )
}

function App() {
  const [url, setUrl] = useState('')
  const [submitted, setSubmitted] = useState(false)
  return (
    <main>
      <nav className="site-nav"><a className="brand" href="#top"><span className="brand-mark"><Zap /></span>citable</a><div className="nav-links"><a href="#platform">Platform</a><a href="#how-it-works">How it works</a><a href="#pricing">Pricing</a></div><div className="nav-actions"><button className="login">Sign in</button><a className="nav-cta" href="#report">Get your free report <ArrowRight /></a></div></nav>
      <section id="top" className="hero-section"><div className="hero-grid"><div className="hero-copy"><Pill><span className="live-dot" />AI visibility, with receipts</Pill><h1>Visibility & analytics from AI Search — <em>and the actions to drive growth.</em></h1><p>Track your brand mentions and citations across ChatGPT, Claude, Perplexity, and Google AI Overviews.</p><div id="report" className="report-form"><Globe2 /><input value={url} onChange={(e) => { setUrl(e.target.value); setSubmitted(false) }} placeholder="Enter your website URL" aria-label="Website URL" /><button onClick={() => setSubmitted(true)}>Start for free <ArrowRight /></button></div>{submitted && <div className="form-success"><Check /> Your free visibility report is queued for <strong>{url || 'your website'}</strong>.</div>}<div className="hero-note"><ShieldCheck /> No credit card required <span>·</span> Results in under 60 seconds</div></div><div className="hero-proof"><div className="proof-label">THE SIGNAL LAYER FOR AI SEARCH</div><div className="signal-card"><div className="signal-top"><span>citable / overview</span><span className="signal-live"><span className="live-dot" />Live data</span></div><div className="signal-score"><span>Visibility score</span><strong>35.1%</strong><small>↑ 11.9% <span>vs last month</span></small></div><div className="signal-bars">{engines.map((engine) => <div className="signal-row" key={engine.name}><span>{engine.name}</span><div className="bar"><i className={engine.color} style={{ width: engine.width }} /></div><b>{engine.score}</b></div>)}</div><div className="signal-foot"><span>Last synced 14 min ago</span><span>4 engines tracked <ChevronRight /></span></div></div></div></div></section>
      <div className="integration-ribbon"><span className="ribbon-label">Connect your signal stack</span>{integrations.map((name) => <span className="integration-badge" key={name}><span />{name}</span>)}</div>
      <section id="platform" className="platform-section"><div className="section-intro"><Pill>One platform. Every answer.</Pill><h2>Turn AI visibility into<br /><em>an operating system.</em></h2><p>Citable shows you where your brand appears, why it is trusted, and exactly what to fix next.</p></div><div className="bento-grid"><BentoCard className="insights-card"><div className="card-heading"><div><Pill>AEO Insights</Pill><h2>Know where you show up.</h2></div><BarChart3 className="card-icon" /></div><p className="card-copy">Measure your share of voice across the engines shaping your next customer.</p><div className="mini-chart"><div className="chart-line" /><span>JUN 12</span><span>JUL 12</span><span>AUG 12</span><span>SEP 12</span></div><div className="engine-list">{engines.slice(0, 3).map((e) => <div key={e.name}><span>{e.name}</span><b>{e.score}</b></div>)}</div></BentoCard><BentoCard className="citation-card"><div className="card-heading"><div><Pill>Citation Graph</Pill><h2>See the path to trust.</h2></div><Sparkles className="card-icon" /></div><p className="card-copy">Trace every source that turns an answer into a recommendation.</p><div className="citation-flow"><div><small>Source domain</small><b>acme.com</b></div><i>→</i><div><small>AI response</small><b>1,248 answers</b></div><i>→</i><div className="highlight"><small>Brand cited</small><b>35.1% share</b></div></div></BentoCard><StudioCard /><BentoCard className="health-card"><div className="card-heading"><div><Pill>Technical Site Health</Pill><h2>Fix the invisible blockers.</h2></div><ShieldCheck className="card-icon" /></div><p className="card-copy">One audit for traditional SEO and AI crawlability readiness.</p><div className="health-score"><strong>88.4</strong><span>/100</span><div><b>Good standing</b><small>3 issues need attention</small></div></div><div className="health-lines"><span><i className="ok" />Crawlability <b>94.1</b></span><span><i className="ok" />AI readability <b>86.7</b></span><span><i className="warn" />Critical errors <b>03</b></span></div></BentoCard></div></section>
      <section id="how-it-works" className="how-section"><div><Pill>Built for the next search layer</Pill><h2>The answer is changing.<br /><em>Your strategy should too.</em></h2></div><div className="how-steps"><div><span>01</span><h3>Connect your stack</h3><p>Bring your analytics, content, and commerce signals into one view.</p></div><div><span>02</span><h3>Track the answer layer</h3><p>See how AI engines describe and cite your brand in real time.</p></div><div><span>03</span><h3>Ship the right fixes</h3><p>Turn every gap into a clear action with validated markup and content.</p></div></div></section>
      <section id="pricing" className="pricing-section"><div className="section-intro centered"><Pill>Plans that scale with signal</Pill><h2>Start free. Grow with <em>proof.</em></h2><p>Everything you need to make AI search a measurable growth channel.</p></div><div className="price-grid">{[{name:'Free',price:'$0',desc:'Quick audits & trial',features:['50 pages crawl limit','Basic Technical SEO audit','Citable Visibility Score','1 Website']},{name:'Individuals',price:'$49',desc:'Solo founders & site owners',features:['500 pages crawl limit','5 tracked AI prompts','Content Studio editor','Search Console sync']},{name:'Business',price:'$80',desc:'Growing brands & stores',featured:true,features:['2,500 pages crawl limit','25 tracked AI prompts','Full Citation Graphing','Competitor intelligence']},{name:'Enterprise',price:'$250',desc:'Agencies & large catalogs',features:['10,000+ pages crawl limit','Unlimited websites','Dedicated MCP server','White-label reporting']}].map((plan) => <div className={`price-plan ${plan.featured ? 'featured' : ''}`} key={plan.name}>{plan.featured && <span className="popular">Most popular</span>}<h3>{plan.name}</h3><p>{plan.desc}</p><strong>{plan.price}<small>/mo</small></strong><button>{plan.name === 'Free' ? 'Start for free' : 'Choose ' + plan.name}<ArrowRight /></button><div className="price-features">{plan.features.map((feature) => <span key={feature}><Check />{feature}</span>)}</div></div>)}</div></section>
      <section className="final-cta"><Pill>Trusted by 12,000+ users</Pill><h2>Be the brand AI<br /><em>recommends next.</em></h2><a href="#report" className="primary-cta">Get your free visibility report <ArrowRight /></a><p>⚡ Citable VPS Cloud Hosting — high-performance automated deployment engine coming soon.</p></section>
      <footer><a className="brand" href="#top"><span className="brand-mark"><Zap /></span>citable</a><span>AI visibility, with receipts.</span><span>© 2026 Citable</span></footer>
    </main>
  )
}

export default App
