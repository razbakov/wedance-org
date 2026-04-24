// Direction F — Conversion landing, BuzzCraft-logic pushed HARD.
// Palette: periwinkle bg, deep indigo blocks, yellow/coral/mint stat tiles, navy ink.
// Typeface: Poppins (ultra-bold 800). Reuses PHOTOS from common.jsx.

const F = {
  bg:       "#ECECFF",
  bgSoft:   "#DEDEFA",
  indigo:   "#3F3AFF",
  indigoLo: "#6B64FF",
  yellow:   "#FFD441",
  coral:    "#FF7A59",
  mint:     "#9EE8C1",
  lilac:    "#B8B2FF",
  navy:     "#0F1030",
  ink:      "#1A1B3A",
  white:    "#FFFFFF",
  black:    "#0A0A12",
};

const F_CTA = "Get your image audit";

function DirectionF() {
  const [page, setPage] = React.useState("home");
  const nav = (p) => { setPage(p); window.scrollTo?.(0, 0); };
  return (
    <div className="dirF artboard-shell" data-screen-label="F · KRAVCHENKO — conversion-maxed"
         style={{fontFamily:"'Poppins', system-ui, sans-serif", background:F.bg, color:F.ink, overflow:"hidden"}}>
      <FNav page={page} onNav={nav}/>
      {page === "home"     && <FHome onNav={nav}/>}
      {page === "work"     && <FWork onNav={nav}/>}
      {page === "services" && <FServicesPage onNav={nav}/>}
      {page === "about"    && <FAbout onNav={nav}/>}
      {page === "apply"    && <FApply onNav={nav}/>}
      <FFooter onNav={nav}/>
    </div>
  );
}

/* ---------- PRIMITIVES ---------- */

function FBtn({ children, onClick, variant="yellow", size="md" }) {
  const pad = size==="lg" ? "20px 28px" : size==="sm" ? "12px 18px" : "16px 24px";
  const styles = {
    yellow: { bg: F.yellow, fg: F.navy, dotBg: F.navy,   dotFg: F.yellow },
    dark:   { bg: F.navy,   fg: F.white, dotBg: F.yellow, dotFg: F.navy   },
    white:  { bg: F.white,  fg: F.navy, dotBg: F.navy,   dotFg: F.white  },
    indigo: { bg: F.indigo, fg: F.white, dotBg: F.yellow, dotFg: F.navy   },
  }[variant];
  return (
    <button onClick={onClick}
      style={{
        background: styles.bg, color: styles.fg,
        padding: pad, borderRadius: 999, fontWeight: 700, fontSize: 15,
        border: "none", cursor: "pointer", display: "inline-flex",
        alignItems: "center", gap: 10, fontFamily: "inherit",
        boxShadow: "0 8px 24px rgba(15,16,48,0.18)",
        transition: "transform .15s ease",
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
      {children}
      <span style={{
        width:24, height:24, borderRadius:999, background:styles.dotBg, color:styles.dotFg,
        display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700,
      }}>→</span>
    </button>
  );
}

function FImg({ src, ratio="3 / 4", radius=20, style={} }) {
  return (
    <div style={{width:"100%", aspectRatio:ratio, overflow:"hidden", borderRadius:radius, background:F.bgSoft, ...style}}>
      <img src={src} loading="lazy" style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
    </div>
  );
}

function FTag({ children, tone="light" }) {
  const m = {
    light: { bg:"rgba(15,16,48,0.08)", fg:F.navy },
    dark:  { bg:"rgba(255,255,255,0.15)", fg:F.white },
    yellow:{ bg:F.yellow, fg:F.navy },
    mint:  { bg:F.mint, fg:F.navy },
    coral: { bg:F.coral, fg:F.white },
  }[tone];
  return (
    <span style={{display:"inline-flex", alignItems:"center", gap:6, padding:"7px 12px",
                  borderRadius:999, background:m.bg, color:m.fg, fontSize:11.5, fontWeight:600, letterSpacing:"0.02em"}}>
      {children}
    </span>
  );
}

/* ---------- NAV ---------- */

function FNav({ page, onNav }) {
  const items = [["home","Home"],["work","Work"],["services","Services"],["about","About"]];
  return (
    <div style={{position:"sticky", top:0, zIndex:30, padding:"18px 28px"}}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between",
                   background:F.white, borderRadius:999, padding:"10px 12px 10px 22px",
                   boxShadow:"0 10px 40px rgba(63,58,255,0.12)"}}>
        <button onClick={() => onNav("home")}
          style={{display:"flex", alignItems:"center", gap:10, background:"none", border:"none", cursor:"pointer", fontFamily:"inherit"}}>
          <span style={{width:30, height:30, borderRadius:8, background:F.navy, color:F.yellow,
                        display:"inline-flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:16}}>K</span>
          <span style={{fontWeight:800, fontSize:18, letterSpacing:"-0.01em", color:F.navy}}>
            Kravchenko<span style={{color:F.indigo}}>.</span>
          </span>
        </button>
        <div style={{display:"flex", alignItems:"center", gap:4}}>
          {items.map(([k,l]) => (
            <button key={k} onClick={() => onNav(k)}
              style={{
                background: page===k ? F.navy : "transparent",
                color: page===k ? F.white : F.navy,
                border:"none", padding:"10px 16px", borderRadius:999,
                fontSize:14, fontWeight:500, cursor:"pointer", fontFamily:"inherit",
              }}>{l}</button>
          ))}
          <FBtn variant="yellow" size="sm" onClick={() => onNav("apply")}>Apply</FBtn>
        </div>
      </div>
    </div>
  );
}

/* ---------- HOME ---------- */

function FHome({ onNav }) {
  return (
    <div>
      <FHero onNav={onNav}/>
      <FTrustBar/>
      <FValueIntro/>
      <FStatStrip/>
      <FEcosystem onNav={onNav}/>
      <FResults onNav={onNav}/>
      <FServices onNav={onNav}/>
      <FTransformation/>
      <FTestimonials/>
      <FProcess/>
      <FMeasurement/>
      <div style={{height:20}}/>
    </div>
  );
}

/* --- TRUST BAR --- */
function FTrustBar() {
  const logos = [
    "El País", "Monocle", "Kinfolk", "The Gentlewoman", "Forbes", "Cereal", "Apartamento",
  ];
  return (
    <section style={{padding:"56px 56px 0"}}>
      <div style={{background:F.white, borderRadius:24, padding:"28px 40px",
                   display:"flex", alignItems:"center", gap:32, flexWrap:"wrap",
                   boxShadow:"0 8px 30px rgba(15,16,48,0.06)"}}>
        <div style={{fontSize:11, fontWeight:700, letterSpacing:"0.18em", color:"rgba(15,16,48,0.55)", whiteSpace:"nowrap"}}>
          AS SEEN IN
        </div>
        <div style={{flex:1, display:"flex", alignItems:"center", justifyContent:"space-around", gap:24, flexWrap:"wrap"}}>
          {logos.map(l => (
            <span key={l} style={{fontSize:18, fontWeight:700, color:F.navy, letterSpacing:"-0.01em",
                                  fontFamily:"'Fraunces', serif", opacity:0.72}}>
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- HERO: indigo block, giant headline, portrait tiles below --- */

function FHero({ onNav }) {
  return (
    <section style={{padding:"0 28px"}}>
      <div style={{
        position:"relative", borderRadius:36, overflow:"hidden",
        background:`linear-gradient(160deg, ${F.indigo} 0%, ${F.indigoLo} 55%, #8079FF 100%)`,
        color:F.white, padding:"56px 56px 48px",
      }}>
        {/* Giant outline word echo */}
        <div aria-hidden style={{
          position:"absolute", left:"-1%", top:"6%", right:"-1%",
          fontSize:"clamp(160px, 20vw, 320px)", fontWeight:800, lineHeight:0.9,
          color:"transparent", WebkitTextStroke:"1.5px rgba(255,255,255,0.18)",
          letterSpacing:"-0.04em", pointerEvents:"none", whiteSpace:"nowrap", textAlign:"center",
        }}>STUDIO · IMAGE</div>

        {/* Top row: tag + right-side mini copy */}
        <div style={{position:"relative", display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:40}}>
          <FTag tone="dark">● Booking · Cohort 08 · Feb 2026</FTag>
          <p style={{color:"rgba(255,255,255,0.85)", fontSize:14, lineHeight:1.55, maxWidth:"30ch", margin:0, textAlign:"right"}}>
            A personal-brand & image studio turning founders, specialists and public-facing creatives into <strong style={{color:F.yellow}}>the obvious choice</strong> in their field.
          </p>
        </div>

        {/* Main headline */}
        <h1 style={{
          position:"relative",
          fontSize:"clamp(80px, 11vw, 180px)", fontWeight:800, lineHeight:0.92,
          margin:"40px 0 0", letterSpacing:"-0.035em",
          textShadow:"0 20px 60px rgba(15,16,48,0.25)",
        }}>
          Turn the scroll<br/>
          <span style={{color:F.yellow}}>into the sale.</span>
        </h1>

        {/* CTA row */}
        <div style={{position:"relative", marginTop:36, display:"flex", alignItems:"center", gap:16}}>
          <FBtn variant="yellow" size="lg" onClick={() => onNav("apply")}>{F_CTA}</FBtn>
          <FBtn variant="dark" size="lg" onClick={() => onNav("work")}>See transformations</FBtn>
          <div style={{marginLeft:"auto", display:"flex", alignItems:"center", gap:10}}>
            <AvatarRow/>
            <div style={{fontSize:12, color:"rgba(255,255,255,0.8)", lineHeight:1.4}}>
              <strong style={{color:F.white}}>82 founders · 14 countries</strong><br/>since 2021
            </div>
          </div>
        </div>

        {/* Photo tiles */}
        <div style={{position:"relative", marginTop:44, display:"grid", gridTemplateColumns:"1fr 1.35fr", gap:16}}>
          <FImg src={PHOTOS.heroPortrait} ratio="4 / 5" radius={28}
                style={{boxShadow:"0 30px 60px rgba(15,16,48,0.35)"}}/>
          <div style={{display:"grid", gridTemplateRows:"1fr auto", gap:16}}>
            <FImg src={PHOTOS.heroBroll} ratio="16 / 10" radius={28}/>
            <div style={{
              background:F.yellow, color:F.navy, borderRadius:24, padding:"22px 28px",
              display:"flex", alignItems:"center", justifyContent:"space-between", gap:20,
            }}>
              <div style={{fontSize:14, fontWeight:600, lineHeight:1.4, maxWidth:"40ch"}}>
                We take on four clients each month.<br/>
                <span style={{opacity:0.7, fontWeight:500}}>Apply, and within 48h you'll get our recommendation for the best next step.</span>
              </div>
              <div style={{textAlign:"right", lineHeight:1, flexShrink:0}}>
                <div style={{fontSize:64, fontWeight:800, letterSpacing:"-0.04em"}}>4</div>
                <div style={{fontSize:10, fontWeight:500, opacity:0.55, letterSpacing:"0.14em", textTransform:"uppercase", marginTop:6, whiteSpace:"nowrap"}}>client slots / month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AvatarRow() {
  const urls = [PHOTOS.founderA, PHOTOS.founderB, PHOTOS.team2, PHOTOS.team3];
  return (
    <div style={{display:"flex"}}>
      {urls.map((u,i) => (
        <img key={i} src={u}
          style={{width:32, height:32, borderRadius:"50%", border:`2px solid ${F.indigo}`,
                  objectFit:"cover", marginLeft:i===0?0:-10}}/>
      ))}
    </div>
  );
}

/* --- VALUE INTRO: left small label+portrait, right huge paragraph --- */

function FValueIntro() {
  return (
    <section style={{padding:"110px 56px 0"}}>
      <div style={{display:"grid", gridTemplateColumns:"340px 1fr", gap:60, alignItems:"start"}}>
        <div>
          <div style={{fontSize:12, fontWeight:700, letterSpacing:"0.14em", color:F.indigo, marginBottom:18}}>
            WE DON'T JUST SHOOT —<br/>WE REPOSITION.
          </div>
          <FImg src="./uploads/Founder.jpg" ratio="4 / 5" radius={20}/>
          <div style={{marginTop:14, fontSize:12, color:"rgba(15,16,48,0.6)", lineHeight:1.5}}>
            <strong style={{color:F.navy, fontWeight:700}}>Kirill Korshikov</strong><br/>
            Creative director · Studio founder
          </div>
        </div>
        <div style={{marginTop:10}}>
          <p style={{
            fontSize:"clamp(32px, 3.4vw, 54px)", fontWeight:600, lineHeight:1.12,
            color:F.navy, letterSpacing:"-0.02em", margin:"0 0 28px", textWrap:"pretty",
          }}>
            We help founders and experts build an image that matches the level they operate at.
          </p>
          <p style={{
            fontSize:"clamp(32px, 3.4vw, 54px)", fontWeight:600, lineHeight:1.12,
            color:F.navy, letterSpacing:"-0.02em", margin:0, textWrap:"pretty",
          }}>
            From brand clarity to content direction and production, we build a presence<br/><span style={{background:F.yellow, padding:"0 6px"}}>people trust before the first call</span>.
          </p>
          <div style={{marginTop:36, display:"flex", gap:12, flexWrap:"wrap"}}>
            <FTag tone="yellow">● Positioning</FTag>
            <FTag>Photography</FTag>
            <FTag>Content system</FTag>
            <FTag>Launch & track</FTag>
            <FTag tone="mint">● Private clients since '21</FTag>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- STAT STRIP: colored tiles, giant numerals --- */

function FStatStrip() {
  const stats = [
    { label:"Founders scaled",  value:"82+",  bg:F.yellow, fg:F.navy, note:"Since 2021" },
    { label:"Audience growth",  value:"3M+",  bg:F.coral,  fg:F.white, note:"Aggregate reach" },
    { label:"Avg lead quality", value:"5×",   bg:F.mint,   fg:F.navy, note:"Pre vs. post" },
    { label:"Press features",   value:"47",   bg:F.navy,   fg:F.yellow, note:"Tier-1 outlets" },
  ];
  return (
    <section style={{padding:"56px 56px 0"}}>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:14}}>
        {stats.map((s, i) => (
          <div key={i} style={{
            background:s.bg, color:s.fg, borderRadius:24, padding:"24px 24px 22px",
            position:"relative", minHeight:180,
            display:"flex", flexDirection:"column", justifyContent:"space-between",
          }}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start"}}>
              <div style={{fontSize:13, fontWeight:600, opacity:0.85}}>{s.label}</div>
              <div style={{
                width:32, height:32, borderRadius:10,
                background:s.bg===F.navy?"rgba(255,255,255,0.12)":"rgba(15,16,48,0.12)",
                display:"inline-flex", alignItems:"center", justifyContent:"center",
                fontSize:14, fontWeight:700,
              }}>↗</div>
            </div>
            <div>
              <div style={{fontSize:72, fontWeight:800, lineHeight:0.9, letterSpacing:"-0.04em"}}>{s.value}</div>
              <div style={{fontSize:11, opacity:0.7, marginTop:6, fontWeight:500}}>{s.note}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --- RESULTS: black block, case tiles --- */

function FResults({ onNav }) {
  const cases = [
    { img: PHOTOS.caseFounderAfter,   tag:"Fintech Founder · Retainer",  delta:"0 → 100K followers", note:"Invisible → oversubscribed round" },
    { img: PHOTOS.caseDoctorAfter,    tag:"Aesthetic Derm · Signature",  delta:"3× revenue growth", note:"Cold search → 4-month waitlist" },
    { img: PHOTOS.caseCoachAfter,     tag:"Executive Coach · Signature", delta:"2 enterprise contracts", note:"Referral-only → inbound leader" },
    { img: PHOTOS.casePerformerAfter, tag:"Performer · Signature",       delta:"Fee ×2.3", note:"DM bookings → festival invites" },
  ];
  return (
    <section style={{padding:"110px 28px 0"}}>
      <div style={{
        background:F.black, color:F.white, borderRadius:36, padding:"72px 56px",
        position:"relative", overflow:"hidden",
      }}>
        {/* Big ghost word */}
        <div aria-hidden style={{
          position:"absolute", right:-20, top:60, fontSize:260, fontWeight:800, lineHeight:0.8,
          color:"transparent", WebkitTextStroke:"1px rgba(255,255,255,0.08)",
          letterSpacing:"-0.04em", pointerEvents:"none",
        }}>RESULTS</div>

        <div style={{position:"relative", textAlign:"center", marginBottom:48}}>
          <FTag tone="dark">● Case studies</FTag>
          <h2 style={{
            fontSize:"clamp(48px, 5.8vw, 88px)", fontWeight:800, lineHeight:1.02,
            margin:"18px auto 0", letterSpacing:"-0.025em", maxWidth:"16ch",
          }}>
            Results that speak<br/>
            louder than <span style={{color:F.yellow}}>words.</span>
          </h2>
        </div>

        <div style={{position:"relative", display:"grid", gridTemplateColumns:"1fr 1fr", gap:18}}>
          {cases.map((c, i) => (
            <div key={i} style={{position:"relative", borderRadius:24, overflow:"hidden"}}>
              <FImg src={c.img} ratio="16 / 11" radius={24}/>
              <div style={{
                position:"absolute", inset:0, borderRadius:24,
                background:"linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.82) 100%)",
              }}/>
              <div style={{position:"absolute", top:18, right:18}}>
                <div style={{width:40, height:40, borderRadius:12, background:F.yellow, color:F.navy,
                             display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:18, fontWeight:700}}>↗</div>
              </div>
              <div style={{position:"absolute", top:18, left:18}}>
                <FTag tone="dark">{c.tag}</FTag>
              </div>
              <div style={{position:"absolute", left:22, right:22, bottom:20}}>
                <div style={{fontSize:32, fontWeight:800, lineHeight:1.05, letterSpacing:"-0.02em"}}>{c.delta}</div>
                <div style={{fontSize:13, color:"rgba(255,255,255,0.7)", marginTop:4}}>{c.note}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{position:"relative", textAlign:"center", marginTop:40}}>
          <FBtn variant="yellow" size="lg" onClick={() => onNav("work")}>View all 29 case studies</FBtn>
        </div>
      </div>
    </section>
  );
}

/* --- SERVICES: offer ladder as 3 fat cards --- */

function FServices({ onNav }) {
  const tiers = [
    {
      tag:"01 · Entry",
      name:"Opening",
      price:"€6 500",
      bg:F.bgSoft, fg:F.navy, accent:F.indigo,
      bullets:[
        "90-min positioning session",
        "Half-day studio shoot — 30 finals",
        "Brand voice one-pager",
        "48h rapid turnaround",
      ],
      outcome:"One clear message. One consistent face.",
    },
    {
      tag:"02 · Flagship",
      name:"Signature",
      price:"€18 000",
      bg:F.navy, fg:F.white, accent:F.yellow,
      badge:"Most chosen",
      bullets:[
        "2-day strategy & positioning intensive",
        "Full production day — team of 5",
        "120+ finals across 4 settings",
        "12-week content rollout plan",
        "Weekly review for 90 days",
      ],
      outcome:"A personal brand that books meetings while you sleep.",
    },
    {
      tag:"03 · Ongoing",
      name:"Retainer",
      price:"€4 800/mo",
      bg:F.yellow, fg:F.navy, accent:F.indigo,
      bullets:[
        "Monthly shoot day",
        "Content strategy & review",
        "Press & podcast pitching",
        "Quarterly re-positioning audit",
      ],
      outcome:"You show up. We handle visibility.",
    },
  ];
  return (
    <section style={{padding:"110px 56px 0"}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:40}}>
        <div>
          <FTag tone="yellow">● Services</FTag>
          <h2 style={{fontSize:"clamp(40px, 4.8vw, 72px)", fontWeight:800, lineHeight:1.02,
                      margin:"18px 0 0", color:F.navy, letterSpacing:"-0.025em", maxWidth:"18ch"}}>
            Three ways in.<br/>One outcome: <span style={{color:F.indigo}}>you, obvious.</span>
          </h2>
        </div>
        <FBtn variant="dark" onClick={() => onNav("services")}>Compare in detail</FBtn>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:18}}>
        {tiers.map((t, i) => (
          <div key={i} style={{
            background:t.bg, color:t.fg, borderRadius:28, padding:"28px 28px 32px",
            display:"flex", flexDirection:"column", gap:20, minHeight:560, position:"relative",
          }}>
            {t.badge && (
              <div style={{position:"absolute", top:18, right:18,
                           background:t.accent, color:F.navy, padding:"6px 12px", borderRadius:999,
                           fontSize:11, fontWeight:700, letterSpacing:"0.06em"}}>{t.badge}</div>
            )}
            <div style={{fontSize:12, fontWeight:700, letterSpacing:"0.12em", opacity:0.7}}>{t.tag}</div>
            <div>
              <div style={{fontSize:48, fontWeight:800, lineHeight:1, letterSpacing:"-0.025em"}}>{t.name}</div>
              <div style={{fontSize:28, fontWeight:700, marginTop:6, color:t.accent}}>{t.price}</div>
            </div>
            <div style={{height:1, background:t.fg===F.white?"rgba(255,255,255,0.15)":"rgba(15,16,48,0.15)"}}/>
            <ul style={{listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:10}}>
              {t.bullets.map((b, j) => (
                <li key={j} style={{display:"flex", gap:10, alignItems:"flex-start", fontSize:14, lineHeight:1.5}}>
                  <span style={{color:t.accent, fontWeight:700, marginTop:2}}>✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div style={{marginTop:"auto"}}>
              <div style={{fontSize:13, lineHeight:1.4, opacity:0.8, marginBottom:16, fontStyle:"italic"}}>
                "{t.outcome}"
              </div>
              <FBtn variant={t.fg===F.white ? "yellow" : "dark"} onClick={() => onNav("apply")}>Choose {t.name}</FBtn>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --- TRANSFORMATION: before/after showcase --- */

function FTransformation() {
  return (
    <section style={{padding:"110px 56px 0"}}>
      <div style={{textAlign:"center", marginBottom:40}}>
        <FTag tone="yellow">● Transformations</FTag>
        <h2 style={{fontSize:"clamp(44px, 5.2vw, 80px)", fontWeight:800, lineHeight:1.02,
                    margin:"18px auto 0", color:F.navy, letterSpacing:"-0.025em", maxWidth:"18ch"}}>
          Before we work together.<br/>
          <span style={{color:F.indigo}}>After three weeks.</span>
        </h2>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:18}}>
        <BATile before={PHOTOS.caseFounderBefore} after={PHOTOS.caseFounderAfter}
                name="T., Fintech Founder" metric="+1.9× round demand"/>
        <BATile before={PHOTOS.caseDoctorBefore} after={PHOTOS.caseDoctorAfter}
                name="Dr. V., Dermatologist" metric="+70% fees"/>
        <BATile before={PHOTOS.caseCoachBefore} after={PHOTOS.caseCoachAfter}
                name="M., Executive Coach" metric="+65% day rate"/>
      </div>
    </section>
  );
}

function BATile({ before, after, name, metric }) {
  return (
    <div style={{background:F.white, borderRadius:24, padding:16, boxShadow:"0 12px 40px rgba(15,16,48,0.08)"}}>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, position:"relative"}}>
        <div style={{position:"relative"}}>
          <FImg src={before} ratio="3 / 4" radius={16} style={{filter:"grayscale(0.4) brightness(0.88)"}}/>
          <div style={{position:"absolute", top:10, left:10, background:"rgba(15,16,48,0.88)", color:F.white,
                       padding:"4px 10px", borderRadius:999, fontSize:10, fontWeight:700, letterSpacing:"0.1em"}}>BEFORE</div>
        </div>
        <div style={{position:"relative"}}>
          <FImg src={after} ratio="3 / 4" radius={16}/>
          <div style={{position:"absolute", top:10, left:10, background:F.yellow, color:F.navy,
                       padding:"4px 10px", borderRadius:999, fontSize:10, fontWeight:700, letterSpacing:"0.1em"}}>AFTER</div>
        </div>
      </div>
      <div style={{padding:"16px 6px 4px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div style={{fontSize:13, fontWeight:600, color:F.navy}}>{name}</div>
        <div style={{fontSize:14, fontWeight:800, color:F.indigo}}>{metric}</div>
      </div>
    </div>
  );
}

/* --- TESTIMONIALS --- */

function FTestimonials() {
  const quotes = [
    { av:PHOTOS.team2, name:"Dr. V.",  role:"Aesthetic dermatologist, Madrid",
      q:"Patients arrive already convinced. The consultation became easier — not the sales part, the actual medicine part." },
    { av:PHOTOS.team3, name:"T.",      role:"Fintech founder, seed → Series A",
      q:"My profile started doing the outbound I used to do. The round closed a week early and I fired two investors." },
    { av:PHOTOS.team4, name:"M.",      role:"Executive coach, ex-McKinsey",
      q:"I finally have something to send a cold prospect instead of my CV. Two enterprise contracts in six weeks." },
  ];
  return (
    <section style={{padding:"110px 56px 0"}}>
      <div style={{textAlign:"center", marginBottom:40}}>
        <FTag tone="mint">● Voices</FTag>
        <h2 style={{fontSize:"clamp(44px, 5.2vw, 80px)", fontWeight:800, lineHeight:1.02,
                    margin:"18px auto 0", color:F.navy, letterSpacing:"-0.025em", maxWidth:"16ch"}}>
          Loved by founders<br/>
          <span style={{color:F.indigo}}>who ship.</span>
        </h2>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:18}}>
        {quotes.map((qq, i) => (
          <div key={i} style={{
            background:F.white, borderRadius:24, padding:"32px 28px 28px",
            boxShadow:"0 12px 40px rgba(15,16,48,0.08)",
            display:"flex", flexDirection:"column", gap:20, minHeight:320,
          }}>
            <div style={{fontSize:56, fontWeight:800, color:F.indigo, lineHeight:0.6, height:28}}>"</div>
            <p style={{fontSize:17, lineHeight:1.5, color:F.navy, margin:0, fontWeight:500}}>
              {qq.q.split(" ").map((w, j) => {
                const hl = j > 4 && j < 12;
                return <span key={j} style={hl?{background:F.yellow, padding:"0 2px"}:{}}>{w} </span>;
              })}
            </p>
            <div style={{marginTop:"auto", display:"flex", alignItems:"center", gap:12, paddingTop:20,
                         borderTop:"1px solid rgba(15,16,48,0.1)"}}>
              <img src={qq.av} style={{width:44, height:44, borderRadius:"50%", objectFit:"cover"}}/>
              <div>
                <div style={{fontSize:14, fontWeight:700, color:F.navy}}>{qq.name}</div>
                <div style={{fontSize:12, color:"rgba(15,16,48,0.6)"}}>{qq.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --- PROCESS: 3 steps, colorful --- */

function FProcess() {
  const steps = [
    { n:"01", t:"Apply & Audit",  d:"A 6-minute form, then a 30-min call. We reply within 48h — yes, maybe, or honest no.", bg:F.yellow, fg:F.navy, pic:PHOTOS.team3 },
    { n:"02", t:"Direct & Shoot", d:"Positioning is settled before the first frame. 1–2 studio days in Barcelona (or we fly).", bg:F.coral, fg:F.white, pic:PHOTOS.team1 },
    { n:"03", t:"Launch & Track", d:"We sit on the rollout. Four baseline questions day 0, same four day 90. Delta is the deliverable.", bg:F.mint, fg:F.navy, pic:PHOTOS.team4 },
  ];
  return (
    <section style={{padding:"110px 56px 0"}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:40}}>
        <div>
          <FTag>● Process</FTag>
          <h2 style={{fontSize:"clamp(40px, 4.8vw, 72px)", fontWeight:800, lineHeight:1.02,
                      margin:"18px 0 0", color:F.navy, letterSpacing:"-0.025em", maxWidth:"18ch"}}>
            Three steps.<br/>Three weeks. <span style={{color:F.indigo}}>One decision.</span>
          </h2>
        </div>
        <div style={{fontSize:14, color:"rgba(15,16,48,0.6)", maxWidth:"32ch", textAlign:"right"}}>
          No strategy decks, no 40-page brand books. Every deliverable is tied to a measurable outcome.
        </div>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:18}}>
        {steps.map((s, i) => (
          <div key={i} style={{background:s.bg, color:s.fg, borderRadius:28, padding:"28px 28px 0",
                               display:"flex", flexDirection:"column", gap:20, overflow:"hidden", minHeight:440}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start"}}>
              <div style={{fontSize:64, fontWeight:800, lineHeight:1, letterSpacing:"-0.03em", opacity:0.85}}>{s.n}</div>
              <div style={{width:40, height:40, borderRadius:12,
                           background:s.fg===F.white?"rgba(255,255,255,0.18)":"rgba(15,16,48,0.12)",
                           display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:16}}>→</div>
            </div>
            <div>
              <div style={{fontSize:26, fontWeight:800, letterSpacing:"-0.015em", marginBottom:8}}>{s.t}</div>
              <p style={{fontSize:14, lineHeight:1.55, margin:0, opacity:0.85}}>{s.d}</p>
            </div>
            <FImg src={s.pic} ratio="16 / 9" radius={16} style={{marginTop:"auto"}}/>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --- ECOSYSTEM: five disciplines as an interactive accordion --- */

function FEcosystem({ onNav }) {
  return (
    <section style={{padding:"110px 56px 0"}}>
      <div style={{textAlign:"center", marginBottom:48}}>
        <FTag>● What we actually do</FTag>
        <h2 style={{fontSize:"clamp(44px, 5.2vw, 80px)", fontWeight:800, lineHeight:1.02,
                    margin:"18px auto 12px", color:F.navy, letterSpacing:"-0.025em", maxWidth:"18ch"}}>
          Everything your <span style={{color:F.indigo}}>public image</span> needs.
        </h2>
        <p style={{color:"rgba(15,16,48,0.65)", maxWidth:"56ch", margin:"0 auto", fontSize:16, lineHeight:1.6}}>
          Not a menu. An ecosystem. Five disciplines that only work because they ship together.
        </p>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"1fr 1.3fr", gap:32, alignItems:"stretch"}}>
        <div style={{position:"relative"}}>
          <FImg src="./uploads/Founder.jpg" ratio="3 / 4" radius={28}/>
          <div style={{
            position:"absolute", bottom:-22, right:-22,
            width:132, height:132, borderRadius:"50%",
            background:F.yellow, color:F.navy,
            display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
            textAlign:"center", padding:"14px",
            boxShadow:"0 10px 30px rgba(15,16,48,0.18)",
          }}>
            <div style={{fontSize:38, fontWeight:800, lineHeight:1, letterSpacing:"-0.03em"}}>05</div>
            <div style={{width:30, height:1.5, background:F.navy, opacity:0.4, margin:"8px 0"}}/>
            <div style={{fontSize:9, fontWeight:600, lineHeight:1.35, letterSpacing:"0.14em", textTransform:"uppercase"}}>
              Levers of<br/>Public Trust
            </div>
          </div>
        </div>
        <FEcoList/>
      </div>
    </section>
  );
}

function FEcoList() {
  const items = [
    ["01","Positioning","So people stop guessing what you do and start understanding your value faster."],
    ["02","Content direction","So your content stops feeling random and starts strengthening your reputation."],
    ["03","Brand clarity","So every touchpoint feels like the same credible person, not five different versions of you."],
    ["04","Visual identity","So your image looks more premium, more intentional, and more aligned with your level."],
    ["05","Presence strategy","So your new positioning shows up in the market instead of staying a good idea."],
  ];
  return (
    <div style={{background:F.white, borderRadius:28, padding:18,
                 boxShadow:"0 12px 40px rgba(15,16,48,0.08)"}}>
      {items.map(([n,t,d], i) => (
        <FEcoRow key={n} n={n} t={t} d={d} openDefault={i===1} last={i===items.length-1}/>
      ))}
    </div>
  );
}

function FEcoRow({ n, t, d, openDefault, last }) {
  const [open, setOpen] = React.useState(!!openDefault);
  return (
    <div style={{borderBottom: last ? "none" : "1px solid rgba(15,16,48,0.08)", padding:"4px 0"}}>
      <button onClick={() => setOpen(!open)}
        style={{width:"100%", display:"flex", alignItems:"center", gap:20, padding:"18px 14px",
                background: open ? F.navy : "transparent",
                color: open ? F.white : F.navy, borderRadius: 999, border:"none",
                cursor:"pointer", fontFamily:"inherit", textAlign:"left"}}>
        <span style={{fontSize:12, opacity:0.65, width:28, fontWeight:600}}>{n}</span>
        <span style={{flex:1, fontSize:20, fontWeight:700, letterSpacing:"-0.01em"}}>{t}</span>
        {open && <span style={{background:F.yellow, color:F.navy, padding:"4px 10px",
                               borderRadius:999, fontSize:11, fontWeight:700, letterSpacing:"0.06em"}}>MOST REQUESTED</span>}
        <span style={{width:30, height:30, borderRadius:999,
                      background: open ? F.yellow : "transparent",
                      color: F.navy,
                      display:"inline-flex", alignItems:"center", justifyContent:"center",
                      border: open ? "none" : `1px solid rgba(15,16,48,0.2)`, fontSize:18, fontWeight:600}}>
          {open ? "–" : "+"}
        </span>
      </button>
      {open && (
        <div style={{padding:"10px 58px 18px", color:"rgba(15,16,48,0.7)", fontSize:14.5, lineHeight:1.6}}>
          {d}
        </div>
      )}
    </div>
  );
}

/* --- MEASUREMENT: four baseline questions, navy block --- */

function FMeasurement() {
  const Q = [
    ["01","How do strangers describe you in one sentence?"],
    ["02","What is your rate, and how often is it questioned?"],
    ["03","How many unasked-for inbound leads per month?"],
    ["04","When you look at your feed, what version of you do you see?"],
  ];
  return (
    <section style={{padding:"110px 56px 0"}}>
      <div style={{background:F.navy, color:F.white, borderRadius:36, padding:"64px 56px",
                   display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"center"}}>
        <div>
          <FTag tone="dark">● How we measure</FTag>
          <h2 style={{fontSize:"clamp(36px, 4vw, 58px)", fontWeight:800, lineHeight:1.05,
                      margin:"18px 0 18px", letterSpacing:"-0.02em"}}>
            Four baseline questions.<br/>
            <span style={{color:F.yellow}}>Ninety-day delta.</span>
          </h2>
          <p style={{color:"rgba(255,255,255,0.78)", fontSize:15.5, lineHeight:1.65, maxWidth:"48ch", margin:0}}>
            We don't track vanity metrics. We track whether strangers describe you differently at day 90 than they did at day 0. The delta <em>is</em> the deliverable.
          </p>
        </div>
        <div style={{display:"flex", flexDirection:"column", gap:12}}>
          {Q.map(([n,q]) => (
            <div key={n} style={{background:"rgba(255,255,255,0.06)", borderRadius:18,
                                 padding:"20px 22px", display:"grid",
                                 gridTemplateColumns:"40px 1fr", gap:16, alignItems:"center"}}>
              <div style={{color:F.yellow, fontSize:14, fontWeight:700, letterSpacing:"0.1em"}}>{n}</div>
              <div style={{fontSize:15.5, fontWeight:500}}>{q}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SUB-PAGES
   ============================================================ */

/* --- WORK / PORTFOLIO --- */

function FWork({ onNav }) {
  const cases = [
    { n:"014", tag:"Medicine · Signature", t:"Cold search funnel → private waitlist",
      who:"Dr. V. — Aesthetic dermatologist",
      delta:"+70% fees · 4-month waitlist · 4 press features",
      img: PHOTOS.caseDoctorAfter, accent:F.coral },
    { n:"017", tag:"Founder · Retainer", t:"Invisible LinkedIn → oversubscribed round",
      who:"T. — Fintech founder",
      delta:"1.9× round demand · 3 inbound senior hires",
      img: PHOTOS.caseFounderAfter, accent:F.yellow },
    { n:"021", tag:"Coaching · Signature", t:"Referral-only → two enterprise contracts",
      who:"M. — Executive coach, ex-McKinsey",
      delta:"+65% day rate · inbound ×3 / week",
      img: PHOTOS.caseCoachAfter, accent:F.mint },
    { n:"024", tag:"Specialist · Opening → Signature", t:"Peer-known → private-client booked",
      who:"J. — Architecture studio principal",
      delta:"2 private projects · ×1.8 project fee",
      img: PHOTOS.caseArchitectAfter, accent:F.lilac },
    { n:"027", tag:"Coaching · Positioning", t:"Three programs → one program, doubled close",
      who:"D. — Performance coach",
      delta:"Close rate ×2 · client LTV ×3",
      img: PHOTOS.caseOperatorAfter, accent:F.yellow },
    { n:"029", tag:"Performer · Signature", t:"DM bookings → 4-month waitlist",
      who:"N. — Dance instructor",
      delta:"Workshop fee ×2.3 · 2 festival invites",
      img: PHOTOS.casePerformerAfter, accent:F.coral },
  ];
  return (
    <div>
      {/* HERO */}
      <section style={{padding:"0 28px"}}>
        <div style={{
          position:"relative", borderRadius:36, overflow:"hidden",
          background:`linear-gradient(160deg, ${F.indigo} 0%, ${F.indigoLo} 60%, #8079FF 100%)`,
          color:F.white, padding:"80px 56px 72px", textAlign:"center",
        }}>
          <div aria-hidden style={{position:"absolute", left:0, right:0, top:"50%", transform:"translateY(-50%)",
                                    fontSize:"clamp(160px, 20vw, 320px)", fontWeight:800, lineHeight:0.9,
                                    color:"transparent", WebkitTextStroke:"1.5px rgba(255,255,255,0.12)",
                                    letterSpacing:"-0.04em", pointerEvents:"none", whiteSpace:"nowrap"}}>
            CASE · STUDY
          </div>
          <div style={{position:"relative"}}>
            <FTag tone="dark">● 29 case studies</FTag>
            <h1 style={{fontSize:"clamp(60px, 7.4vw, 128px)", fontWeight:800, lineHeight:0.95,
                        margin:"22px auto 16px", maxWidth:"18ch", letterSpacing:"-0.03em"}}>
              Transformations,<br/>in their <span style={{color:F.yellow}}>own numbers.</span>
            </h1>
            <p style={{color:"rgba(255,255,255,0.85)", fontSize:17, lineHeight:1.55, maxWidth:"60ch", margin:"0 auto"}}>
              Before and after, described the way our clients describe their own work. No vanity metrics.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section style={{padding:"60px 56px 0"}}>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:18}}>
          {cases.map(c => (
            <div key={c.n} style={{background:F.white, borderRadius:24, overflow:"hidden",
                                    boxShadow:"0 12px 40px rgba(15,16,48,0.08)"}}>
              <div style={{position:"relative"}}>
                <FImg src={c.img} ratio="4 / 3" radius={0}/>
                <div style={{position:"absolute", top:14, left:14}}>
                  <span style={{background:c.accent, color: c.accent===F.coral ? F.white : F.navy,
                                padding:"7px 12px", borderRadius:999,
                                fontSize:11.5, fontWeight:700, letterSpacing:"0.02em"}}>
                    {c.tag}
                  </span>
                </div>
                <div style={{position:"absolute", bottom:14, left:14,
                             background:F.white, color:F.navy, padding:"8px 14px", borderRadius:999,
                             fontSize:12, fontWeight:700, letterSpacing:"0.08em",
                             border:`1px solid rgba(15,16,48,0.12)`}}>
                  C · {c.n}
                </div>
                <div style={{position:"absolute", top:14, right:14,
                             width:36, height:36, borderRadius:10, background:F.navy, color:F.yellow,
                             display:"inline-flex", alignItems:"center", justifyContent:"center",
                             fontSize:16, fontWeight:700}}>↗</div>
              </div>
              <div style={{padding:"22px 22px 26px"}}>
                <div style={{fontSize:11.5, color:F.indigo, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase"}}>
                  {c.who}
                </div>
                <div style={{fontSize:21, fontWeight:700, margin:"8px 0 14px", letterSpacing:"-0.015em",
                             lineHeight:1.2, color:F.navy}}>
                  {c.t}
                </div>
                <div style={{padding:"10px 14px", background:F.bgSoft, borderRadius:999,
                             fontSize:13, fontWeight:600, color:F.navy, display:"inline-block"}}>
                  {c.delta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FMeasurement/>
      <div style={{height:40}}/>
    </div>
  );
}

/* --- SERVICES PAGE --- */

function FServicesPage({ onNav }) {
  const tiers = [
    { n:"I", name:"The Opening", price:"€480", unit:"one studio day",
      bg:F.white, fg:F.navy, accent:F.indigo,
      lede:"Entry to the studio. A directed day that produces a coherent public signature in two weeks.",
      bullets:["Positioning audit · 90 min","3 directed short films","12 editorial stills","14-day release plan"],
      cta:"Start with the Opening" },
    { n:"II", name:"The Signature", price:"€2,400", unit:"six weeks",
      bg:F.navy, fg:F.white, accent:F.yellow, badge:"MOST CHOSEN",
      lede:"The full personal-brand build. Positioning, visual system, two studio days, 90-day architecture.",
      bullets:["Positioning intensive","Visual system · type, colour, grid","Two directed studio days","90-day launch plan"],
      cta:"Apply for the Signature" },
    { n:"III", name:"The Positioning", price:"€1,200", unit:"strategy only",
      bg:F.yellow, fg:F.navy, accent:F.indigo,
      lede:"Pure strategy sprint when you already have production. Category, promise, language. No shoot.",
      bullets:["Async diagnostic","Positioning document","Content audit","One 60-min direction call"],
      cta:"Book the Intensive" },
    { n:"IV", name:"The Retainer", price:"€1,600/mo", unit:"direction as a service",
      bg:F.coral, fg:F.white, accent:F.yellow,
      lede:"We run your brand the way a label runs an artist. Monthly direction, monthly shoots, quarterly re-audits.",
      bullets:["Monthly direction call","Monthly content day","Quarterly re-audit","Priority creative response"],
      cta:"Enquire about the Retainer" },
  ];
  return (
    <div>
      <section style={{padding:"0 28px"}}>
        <div style={{
          position:"relative", borderRadius:36, overflow:"hidden",
          background:`linear-gradient(160deg, ${F.indigo} 0%, ${F.indigoLo} 60%, #8079FF 100%)`,
          color:F.white, padding:"80px 56px 72px", textAlign:"center",
        }}>
          <div aria-hidden style={{position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center",
                                    pointerEvents:"none",
                                    fontSize:"clamp(160px, 22vw, 360px)", fontWeight:800, lineHeight:0.9,
                                    color:"transparent", WebkitTextStroke:"1.5px rgba(255,255,255,0.12)",
                                    letterSpacing:"-0.04em", whiteSpace:"nowrap"}}>
            FOUR · DOORS
          </div>
          <div style={{position:"relative"}}>
            <FTag tone="dark">● Four doors in</FTag>
            <h1 style={{fontSize:"clamp(60px, 7.4vw, 128px)", fontWeight:800, lineHeight:0.95,
                        margin:"22px auto 16px", maxWidth:"16ch", letterSpacing:"-0.03em"}}>
              Four ways to work<br/>with <span style={{color:F.yellow}}>the studio.</span>
            </h1>
            <p style={{color:"rgba(255,255,255,0.85)", fontSize:17, lineHeight:1.55, maxWidth:"60ch", margin:"0 auto"}}>
              Every engagement begins with the same audit. Prices below are final. No contact-for-quote.
            </p>
          </div>
        </div>
      </section>

      <section style={{padding:"60px 56px 0"}}>
        <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:18}}>
          {tiers.map(t => (
            <div key={t.n} style={{background:t.bg, color:t.fg, borderRadius:28, padding:"32px 32px 28px",
                                   position:"relative", boxShadow:"0 12px 40px rgba(15,16,48,0.08)"}}>
              {t.badge && (
                <div style={{position:"absolute", top:-10, right:24,
                             background:t.accent, color:F.navy, padding:"6px 14px", borderRadius:999,
                             fontSize:11, fontWeight:700, letterSpacing:"0.1em"}}>
                  {t.badge}
                </div>
              )}
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start"}}>
                <div>
                  <div style={{fontSize:11.5, opacity:0.65, letterSpacing:"0.14em", fontWeight:600}}>TIER {t.n}</div>
                  <div style={{fontSize:40, fontWeight:800, marginTop:6, letterSpacing:"-0.025em", lineHeight:1}}>{t.name}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:32, fontWeight:800, color:t.accent, letterSpacing:"-0.02em", lineHeight:1}}>{t.price}</div>
                  <div style={{fontSize:12, opacity:0.6, marginTop:4}}>{t.unit}</div>
                </div>
              </div>
              <p style={{margin:"20px 0 22px", fontSize:15, lineHeight:1.6, opacity: t.fg===F.white ? 0.88 : 0.78}}>
                {t.lede}
              </p>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10}}>
                {t.bullets.map(b => (
                  <div key={b} style={{padding:"12px 14px", borderRadius:14,
                                       background: t.fg===F.white ? "rgba(255,255,255,0.1)" : "rgba(15,16,48,0.06)",
                                       fontSize:13, fontWeight:500, display:"flex", gap:10, alignItems:"center"}}>
                    <span style={{width:18, height:18, borderRadius:999, background:t.accent,
                                  color:F.navy, fontSize:11, fontWeight:700,
                                  display:"inline-flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>✓</span>
                    {b}
                  </div>
                ))}
              </div>
              <div style={{marginTop:26}}>
                <FBtn variant={t.fg===F.white ? "yellow" : "dark"} onClick={() => onNav("apply")}>{t.cta}</FBtn>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FProcess/>
      <div style={{height:40}}/>
    </div>
  );
}

/* --- ABOUT --- */

function FAbout({ onNav }) {
  const principles = [
    ["01","Positioning before production","No frame shot before we agree what it says. If we can't say it in a sentence, the shoot won't rescue it."],
    ["02","Fewer, sharper assets","Thirty mediocre pieces make you invisible. Four sharp ones make you legible."],
    ["03","Taste is not optional","Every reference, frame and caption is a decision. We don't outsource decisions."],
    ["04","The audit tells the truth","If the audit says you're not ready, we say so. We've turned down more than we've taken."],
    ["05","Deliverables are a side effect","You're hiring a direction. The files are the evidence."],
    ["06","Time is the rarest material","Ninety days, two studio days, six anchor pieces. Scope is a feature."],
  ];
  return (
    <div>
      <section style={{padding:"0 28px"}}>
        <div style={{
          background:F.bgSoft, borderRadius:36, padding:"72px 56px 64px",
        }}>
          <FTag tone="yellow">● The studio</FTag>
          <div style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:48, alignItems:"end", marginTop:20}}>
            <h1 style={{fontSize:"clamp(56px, 6.6vw, 112px)", fontWeight:800, lineHeight:0.98,
                        margin:0, color:F.navy, letterSpacing:"-0.028em"}}>
              A small studio for<br/>people whose image<br/>
              <span style={{color:F.indigo}}>has to carry weight.</span>
            </h1>
            <p style={{fontSize:17, lineHeight:1.65, color:"rgba(15,16,48,0.72)", margin:0}}>
              Six people, based between Barcelona and Lisbon. We direct personal brand and image work for founders, doctors, consultants, coaches, performers and creators — the kind of people whose authority in the room is already there, and whose online presence has to catch up.
            </p>
          </div>
        </div>
      </section>

      <section style={{padding:"60px 56px 0", display:"grid", gridTemplateColumns:"1fr 1.3fr", gap:48, alignItems:"start"}}>
        <div>
          <FImg src="./uploads/Founder.jpg" ratio="4 / 5" radius={28}/>
          <div style={{marginTop:16, padding:"14px 20px", background:F.white, borderRadius:16,
                       boxShadow:"0 8px 30px rgba(15,16,48,0.08)",
                       display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:13}}>
            <span style={{color:F.navy, fontWeight:700}}>Kirill Korshikov</span>
            <span style={{color:F.indigo, fontWeight:600, fontSize:12, letterSpacing:"0.08em"}}>FOUNDER</span>
          </div>
        </div>
        <div>
          <FTag>● Founder note</FTag>
          <h2 style={{fontSize:"clamp(28px, 3vw, 44px)", fontWeight:700, lineHeight:1.2,
                      margin:"18px 0 24px", color:F.navy, letterSpacing:"-0.015em"}}>
            "Most of our clients don't need more output. They need <span style={{background:F.yellow, padding:"0 6px"}}>fewer, sharper decisions</span> about what they put into the world — and someone to defend those decisions once made."
          </h2>
          <div style={{display:"flex", flexDirection:"column", gap:16,
                       color:"rgba(15,16,48,0.72)", fontSize:15.5, lineHeight:1.75}}>
            <p style={{margin:0}}>Before opening the studio, I spent eight years directing image and brand work for the kind of people whose names live on the inside of an industry — founders who close rounds in quiet rooms, doctors with private waitlists, performers festivals fight over.</p>
            <p style={{margin:0}}>The pattern was always the same: the room knew one version of them; the internet kept meeting a smaller one. Kravchenko Studio exists to close that gap — deliberately, and on camera.</p>
          </div>
        </div>
      </section>

      <section style={{padding:"110px 56px 0"}}>
        <div style={{textAlign:"center", marginBottom:48}}>
          <FTag tone="yellow">● Principles</FTag>
          <h2 style={{fontSize:"clamp(44px, 5vw, 80px)", fontWeight:800, lineHeight:1.02,
                      margin:"18px auto 0", color:F.navy, letterSpacing:"-0.025em", maxWidth:"18ch"}}>
            Six things we <span style={{color:F.indigo}}>don't negotiate.</span>
          </h2>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:18}}>
          {principles.map(([n,t,d]) => (
            <div key={n} style={{background:F.white, borderRadius:24, padding:"26px 26px 28px",
                                 boxShadow:"0 10px 30px rgba(15,16,48,0.06)"}}>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16}}>
                <div style={{fontSize:11.5, color:F.indigo, fontWeight:700, letterSpacing:"0.14em"}}>PRINCIPLE {n}</div>
                <div style={{width:32, height:32, borderRadius:10, background:F.bgSoft, color:F.navy,
                             display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:14}}>✦</div>
              </div>
              <div style={{fontSize:22, fontWeight:700, margin:"0 0 10px", letterSpacing:"-0.01em",
                           color:F.navy, lineHeight:1.15}}>{t}</div>
              <div style={{color:"rgba(15,16,48,0.65)", fontSize:14, lineHeight:1.6}}>{d}</div>
            </div>
          ))}
        </div>
      </section>
      <div style={{height:40}}/>
    </div>
  );
}

/* --- APPLY (multi-step funnel) --- */

function FApply({ onNav }) {
  const steps = ["Who","Work","Gap","Goals","Tier","Contact","Sent"];
  const [step, setStep] = React.useState(0);
  const [d, setD] = React.useState({
    name:"", role:"", discipline:"",
    ig:"", website:"",
    room_vs_feed:"",
    biggest_gap:"", goal:"",
    tier:"",
    email:"", phone:"",
  });
  const up = (k,v) => setD(p => ({...p, [k]:v}));
  const next = () => setStep(s => Math.min(s+1, steps.length-1));
  const back = () => setStep(s => Math.max(s-1, 0));
  const pct = (step/(steps.length-1))*100;
  const canAdv = () => {
    if (step===0) return d.name && d.role && d.discipline;
    if (step===1) return d.ig || d.website;
    if (step===2) return d.room_vs_feed.length > 10;
    if (step===3) return d.biggest_gap.length > 10 && d.goal.length > 10;
    if (step===4) return !!d.tier;
    if (step===5) return d.email.includes("@");
    return true;
  };

  return (
    <div>
      <section style={{padding:"0 28px"}}>
        <div style={{position:"relative", overflow:"hidden", borderRadius:36,
                     background:`linear-gradient(160deg, ${F.indigo} 0%, ${F.indigoLo} 60%, #8079FF 100%)`,
                     color:F.white, padding:"64px 56px 40px"}}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:40}}>
            <div>
              <FTag tone="dark">● Studio audit · 6 min</FTag>
              <h1 style={{fontSize:"clamp(48px, 6vw, 96px)", fontWeight:800, lineHeight:0.98,
                          margin:"18px 0 0", letterSpacing:"-0.03em", maxWidth:"16ch"}}>
                {step === steps.length-1
                  ? <>Application <span style={{color:F.yellow}}>received.</span></>
                  : <>Six minutes.<br/><span style={{color:F.yellow}}>Then we talk.</span></>}
              </h1>
            </div>
            <div style={{textAlign:"right", fontSize:13}}>
              <div style={{opacity:0.8}}>STEP {String(step+1).padStart(2,"0")} / {String(steps.length).padStart(2,"0")}</div>
              <div style={{marginTop:6, color:F.yellow, fontWeight:700, letterSpacing:"0.1em"}}>{steps[step].toUpperCase()}</div>
            </div>
          </div>
          <div style={{marginTop:28, height:6, background:"rgba(255,255,255,0.18)", borderRadius:6, overflow:"hidden"}}>
            <div style={{width:`${pct}%`, height:"100%", background:F.yellow, transition:"width .3s ease"}}/>
          </div>
        </div>
      </section>

      <section style={{padding:"40px 56px 0"}}>
        <div style={{background:F.white, borderRadius:28, padding:44, minHeight:440,
                     boxShadow:"0 20px 60px rgba(15,16,48,0.08)"}}>
          {step===0 && (
            <FStep title="Who are you, plainly." sub="Name, role, discipline. One sentence each.">
              <FField label="Name" value={d.name} onChange={v=>up("name",v)}/>
              <FField label="Role (e.g. founder, coach, dermatologist)" value={d.role} onChange={v=>up("role",v)}/>
              <FField label="Discipline / field" value={d.discipline} onChange={v=>up("discipline",v)}/>
            </FStep>
          )}
          {step===1 && (
            <FStep title="Where does the internet meet you today?" sub="Instagram, personal site — whichever is the actual front door.">
              <FField label="Instagram" value={d.ig} onChange={v=>up("ig",v)} placeholder="@handle"/>
              <FField label="Website (optional)" value={d.website} onChange={v=>up("website",v)} placeholder="yourdomain.com"/>
            </FStep>
          )}
          {step===2 && (
            <FStep title="Room version vs. feed version." sub="What do clients who already work with you understand about you that your feed doesn't show? 2–4 sentences.">
              <FArea value={d.room_vs_feed} onChange={v=>up("room_vs_feed",v)}/>
            </FStep>
          )}
          {step===3 && (
            <FStep title="Your biggest perception gap. And the next 90 days.">
              <FArea label="Biggest gap between how you're perceived vs. how you want to be" value={d.biggest_gap} onChange={v=>up("biggest_gap",v)}/>
              <FArea label="If the next 90 days go well — what's different?" value={d.goal} onChange={v=>up("goal",v)}/>
            </FStep>
          )}
          {step===4 && (
            <FStep title="Which door feels like yours?" sub="Don't overthink — the audit sets the final scope.">
              <FRadio value={d.tier} onChange={v=>up("tier",v)} options={[
                ["opening","The Opening · €480","Studio day · quick upgrade"],
                ["signature","The Signature · €2,400","Full brand build · 6 weeks"],
                ["positioning","The Positioning · €1,200","Strategy only · no shoot"],
                ["retainer","The Retainer · €1,600/mo","Ongoing direction"],
                ["unsure","Not sure — audit me","We'll recommend after the call"],
              ]}/>
            </FStep>
          )}
          {step===5 && (
            <FStep title="How do we reach you?" sub="We reply within 48 hours — yes, maybe, or an honest no.">
              <FField label="Email" value={d.email} onChange={v=>up("email",v)}/>
              <FField label="Phone / WhatsApp (optional)" value={d.phone} onChange={v=>up("phone",v)}/>
            </FStep>
          )}
          {step===6 && (
            <div style={{textAlign:"center", padding:"48px 0"}}>
              <div style={{width:88, height:88, borderRadius:999, background:F.yellow, color:F.navy,
                           margin:"0 auto 24px", fontSize:40, fontWeight:800,
                           display:"inline-flex", alignItems:"center", justifyContent:"center"}}>✓</div>
              <h2 style={{fontSize:48, fontWeight:800, letterSpacing:"-0.025em", margin:"0 0 16px", color:F.navy}}>
                We'll write in 48 hours.
              </h2>
              <p style={{color:"rgba(15,16,48,0.7)", fontSize:16, maxWidth:"48ch", margin:"0 auto", lineHeight:1.6}}>
                Yes, maybe, or an honest no — and if no, we'll point you somewhere better. Check spam, occasionally we end up there.
              </p>
            </div>
          )}
          {step < 6 && (
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",
                         marginTop:36, paddingTop:24, borderTop:"1px solid rgba(15,16,48,0.1)"}}>
              <button onClick={back}
                style={{background:"none", border:"none", color:F.navy, fontFamily:"inherit",
                        fontSize:14, fontWeight:600, cursor:"pointer", padding:"10px 0",
                        visibility: step===0 ? "hidden" : "visible"}}>
                ← Back
              </button>
              <FBtn variant="yellow" onClick={next}
                    >
                <span style={{opacity: canAdv() ? 1 : 0.5}}>{step===5 ? "Send application" : "Continue"}</span>
              </FBtn>
            </div>
          )}
        </div>
      </section>
      <div style={{height:60}}/>
    </div>
  );
}

function FStep({ title, sub, children }) {
  return (
    <div>
      <div style={{fontSize:"clamp(26px, 2.8vw, 40px)", fontWeight:800,
                   letterSpacing:"-0.02em", lineHeight:1.15, color:F.navy}}>{title}</div>
      {sub && <div style={{marginTop:12, color:"rgba(15,16,48,0.65)", fontSize:15.5,
                            lineHeight:1.55, maxWidth:"64ch"}}>{sub}</div>}
      <div style={{display:"flex", flexDirection:"column", gap:16, marginTop:30}}>{children}</div>
    </div>
  );
}
function FField({ label, value, onChange, placeholder }) {
  return (
    <label style={{display:"flex", flexDirection:"column", gap:8}}>
      <span style={{fontSize:12, color:"rgba(15,16,48,0.6)", fontWeight:600, letterSpacing:"0.04em"}}>{label}</span>
      <input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder || ""}
        style={{padding:"14px 18px", borderRadius:14, border:"1px solid rgba(15,16,48,0.15)",
                fontSize:15, fontFamily:"inherit", outline:"none", background:F.white,
                color:F.navy, transition:"border-color .15s"}}
        onFocus={e=>e.currentTarget.style.borderColor=F.indigo}
        onBlur={e=>e.currentTarget.style.borderColor="rgba(15,16,48,0.15)"}/>
    </label>
  );
}
function FArea({ label, value, onChange }) {
  return (
    <label style={{display:"flex", flexDirection:"column", gap:8}}>
      {label && <span style={{fontSize:12, color:"rgba(15,16,48,0.6)", fontWeight:600, letterSpacing:"0.04em"}}>{label}</span>}
      <textarea value={value} onChange={e=>onChange(e.target.value)} rows={4}
        style={{padding:"14px 18px", borderRadius:14, border:"1px solid rgba(15,16,48,0.15)",
                fontSize:15, fontFamily:"inherit", outline:"none", resize:"vertical", background:F.white,
                color:F.navy, transition:"border-color .15s"}}
        onFocus={e=>e.currentTarget.style.borderColor=F.indigo}
        onBlur={e=>e.currentTarget.style.borderColor="rgba(15,16,48,0.15)"}/>
    </label>
  );
}
function FRadio({ value, onChange, options }) {
  return (
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
      {options.map(([k, t, sub]) => (
        <button key={k} onClick={() => onChange(k)}
          style={{
            padding:"18px 20px", borderRadius:18,
            border: value===k ? `2px solid ${F.indigo}` : "2px solid rgba(15,16,48,0.1)",
            background: value===k ? F.bgSoft : F.white,
            textAlign:"left", cursor:"pointer", fontFamily:"inherit",
            display:"flex", flexDirection:"column", gap:4, transition:"all .15s",
          }}>
          <span style={{fontSize:15, fontWeight:700, color:F.navy}}>{t}</span>
          <span style={{fontSize:13, color:"rgba(15,16,48,0.6)"}}>{sub}</span>
        </button>
      ))}
    </div>
  );
}

/* --- FOOTER: merged final-CTA + footer on photo --- */

function FFooter({ onNav }) {
  return (
    <footer style={{padding:"110px 28px 28px"}}>
      <div style={{
        position:"relative", overflow:"hidden", borderRadius:36,
        background:`linear-gradient(160deg, ${F.indigo} 0%, ${F.indigoLo} 60%, #8079FF 100%)`,
        color:F.white,
      }}>
        {/* Large portrait on the right, faded */}
        <div style={{position:"absolute", right:-40, top:-40, bottom:-40, width:"45%",
                     background:`linear-gradient(270deg, rgba(63,58,255,0) 0%, rgba(63,58,255,0.7) 100%), url(${PHOTOS.founderB}) center/cover`,
                     opacity:0.85}}/>

        {/* CTA block */}
        <div style={{position:"relative", padding:"88px 56px 60px", maxWidth:"70%"}}>
          <FTag tone="dark">● Apply for Cohort 08</FTag>
          <h2 style={{
            fontSize:"clamp(52px, 6.2vw, 108px)", fontWeight:800, lineHeight:0.98,
            margin:"20px 0 22px", letterSpacing:"-0.03em",
          }}>
            Ready to grow your<br/>
            <span style={{color:F.yellow}}>public image</span> faster?
          </h2>
          <p style={{color:"rgba(255,255,255,0.85)", fontSize:17, lineHeight:1.55, margin:"0 0 32px", maxWidth:"52ch"}}>
            Six minutes in. Reply within 48 hours. Three weeks to a new public image — or an honest no.
          </p>
          <div style={{display:"flex", gap:14}}>
            <FBtn variant="yellow" size="lg" onClick={() => onNav("apply")}>{F_CTA}</FBtn>
            <FBtn variant="dark" size="lg" onClick={() => onNav("work")}>See results</FBtn>
          </div>
        </div>

        {/* Footer row */}
        <div style={{position:"relative", padding:"0 56px 32px",
                     display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:40,
                     borderTop:"1px solid rgba(255,255,255,0.2)", paddingTop:40, marginTop:40}}>
          <div>
            <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:14}}>
              <span style={{width:36, height:36, borderRadius:10, background:F.yellow, color:F.navy,
                            display:"inline-flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:18}}>K</span>
              <span style={{fontWeight:800, fontSize:26, letterSpacing:"-0.02em"}}>
                Kravchenko<span style={{color:F.yellow}}>.</span>
              </span>
            </div>
            <p style={{color:"rgba(255,255,255,0.75)", fontSize:14, lineHeight:1.55, margin:0, maxWidth:"36ch"}}>
              A personal-brand & image studio turning founders, specialists and public-facing creatives into the obvious choice in their field.
            </p>
          </div>
          <FootCol title="SERVICES" items={[
            ["Opening","services"],["Signature","services"],["Retainer","services"],["Audit","apply"],
          ]} onNav={onNav}/>
          <FootCol title="COMPANY" items={[
            ["About","about"],["Work","work"],["Press"],["Contact"],
          ]} onNav={onNav}/>
          <FootCol title="CONNECT" items={[
            ["Instagram"],["LinkedIn"],["studio@kravchenko.studio"],["+34 600 000 000"],
          ]}/>
        </div>

        <div style={{position:"relative", margin:"0 56px", padding:"18px 0 28px",
                     borderTop:"1px solid rgba(255,255,255,0.15)",
                     display:"flex", justifyContent:"space-between", alignItems:"center",
                     color:"rgba(255,255,255,0.55)", fontSize:12}}>
          <span>© 2026 <strong style={{color:"rgba(255,255,255,0.85)", fontWeight:600}}>Kravchenko Studio</strong> · Carrer d'Avinyó 21, Barcelona</span>
          <div style={{display:"flex", gap:22}}>
            <a href="#" style={{color:"rgba(255,255,255,0.75)", textDecoration:"none"}}>Privacy</a>
            <a href="#" style={{color:"rgba(255,255,255,0.75)", textDecoration:"none"}}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ title, items, onNav }) {
  return (
    <div>
      <div style={{color:F.yellow, fontSize:11.5, fontWeight:700, letterSpacing:"0.18em", marginBottom:18}}>{title}</div>
      <div style={{display:"flex", flexDirection:"column", gap:10}}>
        {items.map(([l, key], i) => (
          <button key={i} onClick={() => key && onNav && onNav(key)}
            style={{background:"none", border:"none", color:"rgba(255,255,255,0.8)", fontFamily:"inherit",
                    fontSize:14, textAlign:"left", cursor: key?"pointer":"default", padding:0}}>
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { DirectionF });
