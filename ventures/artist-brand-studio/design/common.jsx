// Shared primitives + nav + footer used by all three directions.
// Exposes: Nav, Footer, Hero, SectionHeader, Ticker, ImgPlaceholder, Grain

const { useState, useEffect, useMemo, useRef } = React;

// ---- Brand identity per direction ----
const BRANDS = {
  A: {
    name: "KRAVCHENKO",
    suffix: "STUDIO",
    tagline: "A personal brand and image direction studio for people whose public face is their leverage.",
    city: "Barcelona",
    dirClass: "dirA",
    founderFirst: "Anya",
    founderLast: "Kravchenko",
    founderRole: "Founder · Creative Director",
    established: "MMXXV",
    addressLine: "Carrer d'Avinyó 21, 2º · 08002 Barcelona",
    email: "studio@kravchenko.studio",
    ig: "@kravchenko.studio",
    hero: {
      eyebrow: "Personal brand direction · Barcelona · Est. MMXXV",
      headline: ["You don't have a content problem.", "You have a ", "perception", " problem."],
      sub: "Kravchenko Studio is an image and positioning studio for founders, specialists, doctors, coaches, performers — anyone whose face earns the introduction. We close the gap between the person the room meets and the person the internet sees.",
      primaryCta: "Apply for a studio audit",
      secondaryCta: "Read the case work",
    }
  },
  B: {
    name: "PAREDES",
    suffix: "ATELIER",
    tagline: "An image atelier for people whose authority precedes them — and whose online presence doesn't.",
    city: "Barcelona",
    dirClass: "dirB",
    founderFirst: "Mateu",
    founderLast: "Paredes",
    founderRole: "Founder · Image Director",
    established: "ATELIER · MMXXV",
    addressLine: "Passatge Permanyer 9 · 08009 Barcelona",
    email: "atelier@paredes-barcelona.com",
    ig: "@paredes.atelier",
    hero: {
      eyebrow: "A Barcelona atelier · by appointment",
      headline: ["The room already believes in you.", "Make the ", "feed", " believe too."],
      sub: "Paredes is an image and positioning atelier for founders, doctors, consultants, performers and specialists. We build a public version of you that sounds, looks and costs the same as the person your clients already work with.",
      primaryCta: "Request an image audit",
      secondaryCta: "Atelier notes",
    }
  },
  C: {
    name: "MORENO",
    suffix: "& CO.",
    tagline: "Brand direction for operators, specialists and public-facing talent.",
    city: "Barcelona",
    dirClass: "dirC",
    founderFirst: "Julia",
    founderLast: "Moreno",
    founderRole: "Principal · Brand Direction",
    established: "EST. BCN 2025",
    addressLine: "Rambla del Poblenou 48 · 08005 Barcelona",
    email: "hello@moreno-co.studio",
    ig: "@moreno.and.co",
    hero: {
      eyebrow: "Brand direction · Barcelona · 2025",
      headline: ["Stop producing content.", "Start producing a ", "presence", "."],
      sub: "Moreno & Co. is a modern brand-direction studio for founders, operators, specialists and working creatives. We turn scattered posting into a coherent public figure — in one quarter, not three years.",
      primaryCta: "Begin the application",
      secondaryCta: "See the offer ladder",
    }
  },
};

// ---- Navigation bar ----
function Nav({ brand, current, onNav }) {
  const links = [
    { id: "home",     label: "Index" },
    { id: "services", label: "Offer" },
    { id: "portfolio",label: "Work" },
    { id: "about",    label: "Studio" },
    { id: "apply",    label: "Apply" },
  ];
  return (
    <nav className="nav">
      <button className="nav-brand" onClick={() => onNav("home")}>
        <span className="dot-mark" />
        <span>{brand.name}<span style={{opacity:0.55, marginLeft: 6}}>{brand.suffix}</span></span>
      </button>
      <div className="nav-links">
        {links.map(l => (
          <button key={l.id} className={current === l.id ? "active" : ""} onClick={() => onNav(l.id)}>
            {l.label}
          </button>
        ))}
      </div>
      <div style={{display:"flex", alignItems:"center", gap:16}}>
        <span className="mono" style={{fontSize:11, letterSpacing:"0.14em", color:"var(--fg-3)"}}>BCN · 41.38°N</span>
        <button className="btn btn-primary" style={{padding:"10px 16px"}} onClick={() => onNav("apply")}>
          {brand.hero.primaryCta.replace("Apply for a ", "").replace("Request an ", "").replace("Start the ", "")}
          <span style={{marginLeft:2}}>→</span>
        </button>
      </div>
    </nav>
  );
}

function Grain() { return <div className="film-grain" aria-hidden="true" />; }

// Curated Unsplash photography. Keys map to conceptual slots used across pages.
// All editorial, moody, high-contrast, human-focused — no stock clichés.
const PHOTOS = {
  // Hero / portrait anchors — expressive, cinematic, not smiling into the camera
  heroPortrait:  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1600&q=80&auto=format&fit=crop",
  heroBroll:     "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80&auto=format&fit=crop",
  heroStill:     "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&q=80&auto=format&fit=crop",

  // Founder portraits per direction (mature, composed, editorial)
  founderA: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1200&q=80&auto=format&fit=crop",
  founderB: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=1200&q=80&auto=format&fit=crop",
  founderC: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80&auto=format&fit=crop",

  // Team / studio
  team1: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&q=80&auto=format&fit=crop",
  team2: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=900&q=80&auto=format&fit=crop",
  team3: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=80&auto=format&fit=crop",
  team4: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80&auto=format&fit=crop",
  team5: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80&auto=format&fit=crop",

  // Studio interior
  studio1: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop",
  studio2: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80&auto=format&fit=crop",

  // Portfolio case imagery — by archetype, not by specific person
  caseFounderBefore:   "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1200&q=80&auto=format&fit=crop",
  caseFounderAfter:    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80&auto=format&fit=crop",
  caseDoctorBefore:    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&q=80&auto=format&fit=crop",
  caseDoctorAfter:     "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80&auto=format&fit=crop",
  caseCoachBefore:     "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80&auto=format&fit=crop",
  caseCoachAfter:      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop",
  caseArchitectBefore: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&auto=format&fit=crop",
  caseArchitectAfter:  "https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&q=80&auto=format&fit=crop",
  caseOperatorBefore:  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&q=80&auto=format&fit=crop",
  caseOperatorAfter:   "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=1200&q=80&auto=format&fit=crop",
  casePerformerBefore: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1200&q=80&auto=format&fit=crop",
  casePerformerAfter:  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=80&auto=format&fit=crop",
};

function Img({ src, alt, ratio = "3 / 4", style = {}, tint = true }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: ratio,
        overflow: "hidden",
        background: "var(--bg-3)",
        border: "1px solid var(--line)",
        ...style
      }}
    >
      <img src={src} alt={alt || ""} loading="lazy"
           style={{width:"100%", height:"100%", objectFit:"cover", display:"block",
                   filter: tint ? "grayscale(0.15) contrast(1.05) brightness(0.92)" : "none"}}/>
      {tint && <div style={{
        position:"absolute", inset: 0, pointerEvents:"none",
        background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%)"
      }}/>}
    </div>
  );
}

// Back-compat: some older callers use ImgPlaceholder; redirect to a themed Img
// when a `src` is passed, otherwise render the striped placeholder.
function ImgPlaceholder({ label, ratio = "3 / 4", style = {}, src }) {
  if (src) return <Img src={src} alt={label} ratio={ratio} style={style} />;
  return (
    <div className="img-placeholder" data-label={label}
         style={{ aspectRatio: ratio, width: "100%", ...style }} />
  );
}

function Ticker({ items }) {
  // Duplicated inline for seamless loop
  const doubled = [...items, ...items];
  return (
    <div style={{overflow:"hidden", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)", padding:"14px 0"}}>
      <div className="marquee">
        {doubled.map((t, i) => (
          <span key={i} style={{display:"inline-flex", alignItems:"center", gap:12}}>
            <span style={{width:5, height:5, borderRadius:"50%", background:"var(--accent)", display:"inline-block"}} />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ num, kicker, title, note }) {
  return (
    <div style={{display:"grid", gridTemplateColumns:"1fr 2fr", gap:40, alignItems:"end", paddingBottom:40, borderBottom:"1px solid var(--line)"}}>
      <div>
        <div className="num">{num}</div>
        <div className="eyebrow" style={{marginTop:10}}>{kicker}</div>
      </div>
      <div>
        <h2 className="h-display" style={{fontSize:56, margin:0, maxWidth: "18ch"}}>{title}</h2>
        {note && <div className="mono" style={{fontSize:11, color:"var(--fg-3)", marginTop:14, maxWidth:"44ch", letterSpacing:"0.06em", lineHeight:1.7}}>{note}</div>}
      </div>
    </div>
  );
}

function Footer({ brand }) {
  return (
    <footer className="footer">
      <div>
        <div className="brand-big">{brand.name}<span style={{opacity:0.55}}> {brand.suffix}</span></div>
        <div style={{maxWidth:"38ch", color:"var(--fg-2)", fontFamily:"var(--font-body)", fontSize:13, lineHeight:1.6, letterSpacing:0, textTransform:"none"}}>
          {brand.tagline}
        </div>
        <div style={{marginTop:24, fontSize:10, letterSpacing:"0.16em"}}>{brand.established} · {brand.city.toUpperCase()}</div>
      </div>
      <div>
        <h4>Studio</h4>
        <ul>
          <li>Offer ladder</li>
          <li>Work · transformations</li>
          <li>About the founder</li>
          <li>Journal</li>
        </ul>
      </div>
      <div>
        <h4>Enquiries</h4>
        <ul>
          <li>Apply</li>
          <li>{brand.email}</li>
          <li>WhatsApp · Mon–Fri</li>
          <li>{brand.ig}</li>
        </ul>
      </div>
      <div>
        <h4>Atelier</h4>
        <ul>
          <li>{brand.addressLine.split("·")[0].trim()}</li>
          <li>{brand.addressLine.split("·")[1]?.trim() || ""}</li>
          <li>By appointment</li>
          <li>© {brand.name} 2025</li>
        </ul>
      </div>
    </footer>
  );
}

Object.assign(window, { BRANDS, Nav, Footer, Grain, ImgPlaceholder, Img, PHOTOS, Ticker, SectionHeader });
