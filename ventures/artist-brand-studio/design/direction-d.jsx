// Direction D — conversion-focused, BuzzCraft-logic adapted.
// Palette: periwinkle/indigo/yellow/navy. Typeface: Poppins.
// Inherits data from BRANDS.A but renders an entirely different system.

const D_BRAND = {
  name: "KRAVCHENKO",
  suffix: "STUDIO",
  city: "Barcelona",
  founderFirst: "Anya",
  founderLast: "Kravchenko",
  addressLine: "Carrer d'Avinyó 21, 2º · 08002 Barcelona",
  email: "studio@kravchenko.studio",
  ig: "@kravchenko.studio",
};

const CTA = "Get your image audit";

function DirectionD() {
  const [page, setPage] = React.useState("home");
  const nav = (p) => { setPage(p); window.scrollTo?.(0, 0); };
  return (
    <div className="dirD artboard-shell" data-screen-label="D · KRAVCHENKO — conversion-focused"
         style={{fontFamily:"'Poppins', system-ui, sans-serif", background:"#ECECFF", color:"#232448"}}>
      <DNav page={page} onNav={nav}/>
      {page === "home"    && <DHome onNav={nav}/>}
      {page === "work"    && <DWork onNav={nav}/>}
      {page === "services"&& <DServices onNav={nav}/>}
      {page === "about"   && <DAbout onNav={nav}/>}
      {page === "apply"   && <DApply onNav={nav}/>}
      <DFooter onNav={nav}/>
    </div>
  );
}

/* ---------- PRIMITIVES ---------- */

const C = {
  bg:      "#ECECFF",
  bgSoft:  "#DEDEFA",
  indigo:  "#3F3AFF",
  yellow:  "#FFD441",
  navy:    "#232448",
  white:   "#FFFFFF",
  grey:    "#CECECE",
  inkSoft: "rgba(35,36,72,0.72)",
};

function DButton({ children, onClick, variant = "primary", icon = true, size = "md", style = {} }) {
  const pad = size === "lg" ? "20px 28px" : size === "sm" ? "12px 18px" : "16px 22px";
  const styles = {
    primary:  { background: C.yellow, color: C.navy, border: `1px solid ${C.navy}` },
    dark:     { background: C.navy,   color: C.white, border: `1px solid ${C.navy}` },
    indigo:   { background: C.indigo, color: C.white, border: `1px solid ${C.indigo}` },
    ghost:    { background: "transparent", color: C.navy, border: `1px solid ${C.navy}` },
    white:    { background: C.white,  color: C.navy, border: `1px solid ${C.navy}` },
  }[variant];
  return (
    <button onClick={onClick}
      style={{
        ...styles, ...style,
        padding: pad, borderRadius: 999, fontWeight: 600, fontSize: 15,
        letterSpacing: 0, cursor: "pointer", display: "inline-flex",
        alignItems: "center", gap: 12, fontFamily: "inherit",
        transition: "transform .15s ease, box-shadow .15s ease",
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      {children}
      {icon && (
        <span style={{
          width: 28, height: 28, borderRadius: 999,
          background: variant === "primary" ? C.navy : (variant === "dark" ? C.yellow : C.navy),
          color: variant === "primary" ? C.white : (variant === "dark" ? C.navy : C.white),
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          fontSize: 14,
        }}>→</span>
      )}
    </button>
  );
}

function Chip({ children, tone = "light" }) {
  const map = {
    light: { bg: "rgba(35,36,72,0.08)", fg: C.navy },
    dark:  { bg: "rgba(255,255,255,0.12)", fg: C.white },
    yellow:{ bg: C.yellow, fg: C.navy },
  }[tone];
  return (
    <span style={{display:"inline-flex", alignItems:"center", gap:8, padding:"8px 14px", borderRadius:999,
                  background:map.bg, color:map.fg, fontSize:12, fontWeight:500, letterSpacing:0}}>
      {children}
    </span>
  );
}

function DImg({ src, alt, ratio = "3 / 4", radius = 28, style = {} }) {
  return (
    <div style={{width:"100%", aspectRatio: ratio, overflow:"hidden", borderRadius: radius, background:C.bgSoft, ...style}}>
      <img src={src} alt={alt || ""} loading="lazy"
           style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
    </div>
  );
}

/* ---------- NAV / FOOTER ---------- */

function DNav({ page, onNav }) {
  const items = [
    ["home", "Home"],
    ["work", "Work"],
    ["services", "Services"],
    ["about", "About"],
  ];
  return (
    <div style={{position:"sticky", top:0, zIndex:30, padding:"18px 28px", background:"rgba(236,236,255,0.82)", backdropFilter:"blur(12px)"}}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", background:C.white, borderRadius:999,
                   padding:"10px 14px 10px 22px", border:`1px solid ${C.navy}`, boxShadow:"0 10px 30px rgba(63,58,255,0.08)"}}>
        <button onClick={() => onNav("home")} style={{display:"flex", alignItems:"center", gap:10, background:"none", border:"none", cursor:"pointer", fontFamily:"inherit"}}>
          <span style={{width:28, height:28, borderRadius:8, background:C.indigo, color:C.white, display:"inline-flex", alignItems:"center", justifyContent:"center", fontWeight:700}}>K</span>
          <span style={{fontWeight:700, color:C.navy, fontSize:18}}>Kravchenko<span style={{color:C.indigo}}>.</span></span>
        </button>
        <nav style={{display:"flex", gap:6}}>
          {items.map(([k,l]) => (
            <button key={k} onClick={() => onNav(k)}
              style={{
                padding:"10px 16px", borderRadius: 999, border:"none", cursor:"pointer", fontFamily:"inherit", fontSize:14, fontWeight:500,
                background: page === k ? C.navy : "transparent", color: page === k ? C.white : C.navy
              }}>{l}</button>
          ))}
        </nav>
        <DButton size="sm" onClick={() => onNav("apply")}>{CTA}</DButton>
      </div>
    </div>
  );
}

function DFooter({ onNav }) {
  return (
    <footer style={{padding:"80px 28px 28px"}}>
      <div style={{
        position:"relative", overflow:"hidden", borderRadius:36,
        minHeight: 720, color:C.white,
        background: `linear-gradient(180deg, rgba(35,36,72,0.35) 0%, rgba(35,36,72,0.55) 45%, rgba(35,36,72,0.92) 80%, ${C.navy} 100%), url(${PHOTOS.heroPortrait}) center/cover no-repeat`,
      }}>
        {/* CTA block — centered, top half */}
        <div style={{padding:"90px 40px 80px", textAlign:"center", position:"relative"}}>
          <h2 style={{
            fontSize:"clamp(44px, 5.8vw, 92px)", fontWeight:700, lineHeight:1.02,
            margin:"0 auto 20px", maxWidth:"16ch", letterSpacing:"-0.02em",
          }}>
            Ready to upgrade how<br/>you're <span style={{color:C.yellow}}>perceived online</span>?
          </h2>
          <p style={{color:"rgba(255,255,255,0.85)", fontSize:16, lineHeight:1.55, margin:"0 auto 32px", maxWidth:"44ch"}}>
            Apply for a studio audit. Six minutes in, 48 hours to hear back, three weeks to a new public image.
          </p>
          <DButton variant="primary" size="lg" onClick={() => onNav("apply")}>{CTA}</DButton>
        </div>

        {/* 4-col footer grid — bottom half */}
        <div style={{padding:"0 48px 32px", display:"grid", gridTemplateColumns:"1.6fr 1fr 1fr 1fr", gap:40, alignItems:"start"}}>
          <div>
            <div style={{fontWeight:800, fontSize:30, letterSpacing:"-0.02em"}}>
              Kravchenko<span style={{color:C.yellow}}>.</span>
            </div>
            <p style={{color:"rgba(255,255,255,0.72)", fontSize:14, lineHeight:1.55, maxWidth:"38ch", marginTop:12}}>
              Closing the gap between the room version of you and the feed version — for founders, specialists and public-facing creatives in Barcelona and beyond.
            </p>
          </div>
          <FootColD title="STUDIO" items={[
            ["Services", "services"], ["Work", "work"], ["About", "about"], ["Apply", "apply"],
          ]} onNav={onNav}/>
          <FootColD title="COMPANY" items={[
            ["Process", "services"], ["Case studies", "work"], ["Journal"], ["Press kit"],
          ]} onNav={onNav}/>
          <FootColD title="CONNECT" items={[
            ["Instagram"], ["LinkedIn"], ["Email studio"], ["WhatsApp"],
          ]}/>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop:"1px solid rgba(255,255,255,0.14)",
          margin:"0 48px",
          padding:"20px 0 28px",
          display:"flex", justifyContent:"space-between", alignItems:"center",
          color:"rgba(255,255,255,0.55)", fontSize:12,
        }}>
          <span>© 2026 <strong style={{color:"rgba(255,255,255,0.85)", fontWeight:600}}>Kravchenko Studio</strong>. All rights reserved.</span>
          <div style={{display:"flex", gap:22}}>
            <a href="#" style={{color:"rgba(255,255,255,0.75)", textDecoration:"none"}}>Privacy</a>
            <a href="#" style={{color:"rgba(255,255,255,0.75)", textDecoration:"none"}}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
function FootColD({ title, items, onNav }) {
  return (
    <div>
      <div style={{color:C.white, fontSize:13, fontWeight:700, letterSpacing:"0.16em", marginBottom:18}}>{title}</div>
      <div style={{display:"flex", flexDirection:"column", gap:12}}>
        {items.map(([l, key], i) => (
          <button key={i} onClick={() => key && onNav && onNav(key)}
            style={{background:"none", border:"none", color:"rgba(255,255,255,0.78)", fontFamily:"inherit", fontSize:14.5, textAlign:"left", cursor: key?"pointer":"default", padding:0}}>
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- HOME ---------- */

function DHome({ onNav }) {
  return (
    <div>
      {/* HERO */}
      <section style={{padding:"40px 28px 28px"}}>
        <div style={{background:C.indigo, borderRadius:36, padding:"56px 56px 40px", position:"relative", overflow:"hidden"}}>
          {/* faint background word */}
          <div aria-hidden style={{position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", pointerEvents:"none"}}>
            <span style={{fontSize:260, fontWeight:800, color:"rgba(255,255,255,0.06)", letterSpacing:"-0.03em", whiteSpace:"nowrap"}}>PRESENCE</span>
          </div>
          <div style={{position:"relative", display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:32, alignItems:"start"}}>
            <div>
              <Chip tone="dark">
                <span style={{width:8, height:8, borderRadius:999, background:C.yellow}}/>
                Now taking Q2 applications
              </Chip>
              <h1 style={{fontSize:"clamp(56px, 7.2vw, 108px)", lineHeight:0.98, color:C.white, fontWeight:700, margin:"22px 0 0", letterSpacing:"-0.02em"}}>
                Build a public image<br/>
                <span style={{color:C.yellow}}>that matches</span><br/>
                your level.
              </h1>
              <div style={{marginTop:32, display:"flex", gap:12, flexWrap:"wrap"}}>
                <DButton variant="primary" size="lg" onClick={() => onNav("apply")}>{CTA}</DButton>
                <DButton variant="ghost" size="lg" icon={false} onClick={() => onNav("work")}
                  style={{background:"rgba(255,255,255,0.08)", color:C.white, borderColor:"rgba(255,255,255,0.3)"}}>
                  See transformations
                </DButton>
              </div>
            </div>
            <div style={{color:"rgba(255,255,255,0.85)", fontSize:16, lineHeight:1.6, paddingTop:10}}>
              <p style={{margin:0}}>
                Your work is strong. Your online presence should be too. We close the gap between the person the room meets and the person the internet sees — in weeks, not years.
              </p>
            </div>
          </div>

          {/* Hero photo row */}
          <div style={{position:"relative", marginTop:40, display:"grid", gridTemplateColumns:"1.1fr 1.4fr", gap:16}}>
            <DImg src={PHOTOS.heroPortrait} ratio="4 / 3" radius={24} style={{border:`2px solid ${C.yellow}`}}/>
            <DImg src={PHOTOS.heroBroll} ratio="4 / 3" radius={24}/>
          </div>
        </div>
      </section>

      {/* Sub-headline band — "we don't just post" equivalent */}
      <section style={{padding:"56px 56px 0"}}>
        <div style={{display:"grid", gridTemplateColumns:"220px 1fr", gap:40, alignItems:"center"}}>
          <div>
            <DImg src={PHOTOS.heroStill} ratio="1 / 1" radius={200}/>
            <div style={{marginTop:14, fontSize:12, color:C.inkSoft, lineHeight:1.4}}>
              We don't just<br/>shoot — <span style={{color:C.indigo, fontWeight:600}}>we reposition.</span>
            </div>
          </div>
          <div>
            <h2 style={{fontSize:"clamp(32px, 3.4vw, 52px)", lineHeight:1.12, fontWeight:600, margin:0, letterSpacing:"-0.01em"}}>
              We help you look clearer, more credible and more premium online — <span style={{color:C.indigo}}>so people trust you before they meet you</span>.
            </h2>
          </div>
        </div>
      </section>

      {/* METRIC CARDS */}
      <section style={{padding:"64px 56px 0"}}>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:20}}>
          <MetricCard bg={C.yellow} fg={C.navy} label="Founder-led studio" val="1" tag="Est. MMXXV" note="Every engagement directed personally. No handoffs, no interns."/>
          <MetricCard bg="#FF7A59" fg={C.white} label="Selected early clients" val="12" tag="Private roster" note="Founders, doctors, coaches, performers — discipline across the board."/>
          <MetricCard bg="#8BEAB3" fg={C.navy} label="Built from real production" val="8 yrs" tag="Before launch" note="Backed by Social Dance TV production experience and a Barcelona editorial team."/>
        </div>
      </section>

      {/* ECOSYSTEM — "everything you need" */}
      <section style={{padding:"80px 56px 0"}}>
        <div style={{textAlign:"center"}}>
          <Chip>What we actually do</Chip>
          <h2 style={{fontSize:"clamp(36px, 4.2vw, 64px)", lineHeight:1.08, fontWeight:700, margin:"18px auto 8px", maxWidth:"18ch", letterSpacing:"-0.02em"}}>
            Everything your <span style={{color:C.indigo}}>public image</span> needs.
          </h2>
          <p style={{color:C.inkSoft, maxWidth:"56ch", margin:"0 auto", fontSize:16, lineHeight:1.55}}>
            Not a menu. An ecosystem. Five disciplines that only work because they ship together.
          </p>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"1fr 1.2fr", gap:32, marginTop:56, alignItems:"stretch"}}>
          <DImg src={PHOTOS.founderA} ratio="3 / 4" radius={28}/>
          <EcosystemList onNav={onNav}/>
        </div>
      </section>

      {/* CASE STUDIES — "Results that speak louder" */}
      <section style={{padding:"80px 28px 0"}}>
        <div style={{background:C.navy, color:C.white, borderRadius:36, padding:"56px 56px 64px"}}>
          <div style={{textAlign:"center", marginBottom:48}}>
            <Chip tone="dark"><span style={{width:8,height:8,background:C.yellow,borderRadius:999}}/> Transformations</Chip>
            <h2 style={{fontSize:"clamp(36px, 4.4vw, 64px)", lineHeight:1.08, fontWeight:700, margin:"16px auto 8px", letterSpacing:"-0.02em", maxWidth:"20ch"}}>
              Perception shifts that <span style={{color:C.yellow}}>changed the business</span>.
            </h2>
          </div>

          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:20}}>
            <CaseCardD
              img={PHOTOS.caseDoctorAfter}
              tag="Medicine · Signature"
              title="Cold search funnel  →  private waitlist"
              delta="+70% fees · 4-month waitlist"
            />
            <CaseCardD
              img={PHOTOS.caseFounderAfter}
              tag="Founder · Retainer"
              title="Invisible LinkedIn  →  oversubscribed round"
              delta="3 unsolicited senior hires in 60 days"
            />
            <CaseCardD
              img={PHOTOS.caseCoachAfter}
              tag="Coaching · Signature"
              title="Referral-only  →  two enterprise contracts"
              delta="Day rate +65% · inbound ×3 / week"
            />
            <CaseCardD
              img={PHOTOS.casePerformerAfter}
              tag="Performer · Signature"
              title="DM bookings  →  4-month waitlist"
              delta="Workshop fee ×2.3 · 2 festival invites"
            />
          </div>

          <div style={{textAlign:"center", marginTop:40}}>
            <DButton variant="primary" onClick={() => onNav("work")}>View all case studies</DButton>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 3 steps */}
      <section style={{padding:"90px 56px 0"}}>
        <div style={{textAlign:"center"}}>
          <Chip>The process</Chip>
          <h2 style={{fontSize:"clamp(36px, 4.2vw, 60px)", fontWeight:700, lineHeight:1.08, margin:"16px auto 0", maxWidth:"18ch", letterSpacing:"-0.02em"}}>
            Three steps. <span style={{color:C.indigo}}>Nothing wasted.</span>
          </h2>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:20, marginTop:48}}>
          <StepCard n="01" t="Apply & audit" d="Fill a 6-minute application. We reply in 48 hours with a yes, a maybe, or an honest no." pic={PHOTOS.team3}/>
          <StepCard n="02" t="Direct & shoot" d="One to two studio days. Positioning is settled before the first frame — the shoot ratifies the decision, it doesn't make it." pic={PHOTOS.team1}/>
          <StepCard n="03" t="Launch & track" d="We sit on the rollout. Four baseline questions at day zero, same four at day ninety. The delta is the deliverable." pic={PHOTOS.team4}/>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{padding:"100px 56px 0"}}>
        <div style={{textAlign:"center"}}>
          <Chip>Early clients</Chip>
          <h2 style={{fontSize:"clamp(36px, 4.2vw, 60px)", fontWeight:700, lineHeight:1.08, margin:"16px auto 0", maxWidth:"20ch", letterSpacing:"-0.02em"}}>
            What they say after <span style={{color:C.indigo}}>ninety days</span>.
          </h2>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:20, marginTop:48}}>
          <TestCard
            avatar={PHOTOS.team2} name="Dr. V." role="Aesthetic dermatologist"
            quote="Patients arrive already convinced. The consultation became easier — not the sales part, the actual medicine part."
          />
          <TestCard
            avatar={PHOTOS.team3} name="T." role="Fintech founder, seed"
            quote="My profile started doing the outbound I used to do. The round closed a week early."
          />
          <TestCard
            avatar={PHOTOS.team4} name="M." role="Executive coach"
            quote="I finally have something to send a cold prospect instead of my CV. Two enterprise contracts in six weeks."
          />
        </div>
      </section>

      {/* Final CTA now lives in the footer block */}

      <div style={{height:40}}/>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function MetricCard({ bg, fg, label, val, tag, note }) {
  return (
    <div style={{background:bg, color:fg, borderRadius:28, padding:"28px 28px 32px", position:"relative", minHeight:200}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div style={{fontSize:13, fontWeight:500, opacity:0.85}}>{label}</div>
        <div style={{width:34, height:34, borderRadius:10, background:C.navy, color:C.white, display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:16}}>↗</div>
      </div>
      <div style={{fontSize:72, fontWeight:700, lineHeight:1, marginTop:24, letterSpacing:"-0.03em"}}>{val}</div>
      <div style={{marginTop:14, fontSize:12, opacity:0.8, letterSpacing:"0.04em", textTransform:"uppercase"}}>{tag}</div>
      <div style={{marginTop:10, fontSize:13.5, lineHeight:1.5, opacity:0.88, maxWidth:"32ch"}}>{note}</div>
    </div>
  );
}

function EcosystemList({ onNav }) {
  const items = [
    ["01", "Image positioning", "A one-line pitch strangers can repeat. Category, promise, anchor phrases."],
    ["02", "Content direction",  "Monthly direction. What to shoot, post, and kill — defended on camera."],
    ["03", "Personal brand clarity", "One coherent version of you across feed, site, invoice and stage."],
    ["04", "Visual identity", "Type, colour, logotype, image rules. A working system, not a 40-page deck."],
    ["05", "Presence strategy", "A 90-day release plan that compounds instead of resets."],
  ];
  return (
    <div style={{background:C.white, borderRadius:28, padding:"18px", border:`1px solid ${C.navy}`}}>
      {items.map(([n, t, d], i) => (
        <EcoRow key={n} n={n} t={t} d={d} open={i === 1} onNav={onNav}/>
      ))}
    </div>
  );
}
function EcoRow({ n, t, d, open: openDefault, onNav }) {
  const [open, setOpen] = React.useState(!!openDefault);
  return (
    <div style={{borderBottom:`1px solid ${C.grey}`, padding:"6px 0"}}>
      <button onClick={() => setOpen(!open)}
        style={{width:"100%", display:"flex", alignItems:"center", gap:20, padding:"18px 12px", background: open ? C.navy : "transparent",
                color: open ? C.white : C.navy, borderRadius: 999, border:"none", cursor:"pointer", fontFamily:"inherit", textAlign:"left"}}>
        <span style={{fontSize:12, opacity:0.7, width:30}}>{n}</span>
        <span style={{flex:1, fontSize:20, fontWeight:600, letterSpacing:"-0.01em"}}>{t}</span>
        {open && <span style={{background:C.yellow, color:C.navy, padding:"4px 10px", borderRadius:999, fontSize:11, fontWeight:600}}>Most requested</span>}
        <span style={{width:30, height:30, borderRadius:999, background: open ? C.yellow : "transparent", color: open ? C.navy : C.navy, display:"inline-flex", alignItems:"center", justifyContent:"center", border: open ? "none" : `1px solid ${C.navy}`}}>{open ? "–" : "+"}</span>
      </button>
      {open && (
        <div style={{padding:"12px 54px 18px", color:C.inkSoft, fontSize:14, lineHeight:1.6}}>
          {d}
        </div>
      )}
    </div>
  );
}

function CaseCardD({ img, tag, title, delta }) {
  return (
    <div style={{background:"rgba(255,255,255,0.06)", borderRadius:24, overflow:"hidden", border:"1px solid rgba(255,255,255,0.1)"}}>
      <div style={{position:"relative"}}>
        <DImg src={img} ratio="16 / 10" radius={0}/>
        <div style={{position:"absolute", top:14, left:14}}>
          <Chip tone="yellow">{tag}</Chip>
        </div>
        <div style={{position:"absolute", top:14, right:14, width:34, height:34, borderRadius:999, background:C.white, color:C.navy, display:"inline-flex", alignItems:"center", justifyContent:"center"}}>↗</div>
      </div>
      <div style={{padding:"22px 24px 26px"}}>
        <div style={{fontSize:20, fontWeight:600, color:C.white, lineHeight:1.25, letterSpacing:"-0.01em"}}>{title}</div>
        <div style={{marginTop:10, color:C.yellow, fontSize:14, fontWeight:500}}>{delta}</div>
      </div>
    </div>
  );
}

function StepCard({ n, t, d, pic }) {
  return (
    <div style={{background:C.white, borderRadius:28, padding:20, border:`1px solid ${C.navy}`, display:"flex", flexDirection:"column", gap:18}}>
      <DImg src={pic} ratio="4 / 3" radius={18}/>
      <div style={{padding:"0 8px 10px"}}>
        <div style={{fontSize:12, color:C.indigo, fontWeight:600, letterSpacing:"0.1em"}}>STEP {n}</div>
        <div style={{fontSize:24, fontWeight:600, margin:"6px 0 10px", letterSpacing:"-0.01em"}}>{t}</div>
        <div style={{fontSize:14, color:C.inkSoft, lineHeight:1.6}}>{d}</div>
      </div>
    </div>
  );
}

function TestCard({ avatar, name, role, quote }) {
  return (
    <div style={{background:C.white, borderRadius:24, padding:"24px 24px 22px", border:`1px solid ${C.navy}`}}>
      <div style={{fontSize:30, color:C.indigo, fontWeight:700, lineHeight:0.8}}>"</div>
      <p style={{margin:"8px 0 22px", fontSize:15, lineHeight:1.55, color:C.navy}}>{quote}</p>
      <div style={{display:"flex", alignItems:"center", gap:12, paddingTop:14, borderTop:`1px solid ${C.grey}`}}>
        <div style={{width:40, height:40, borderRadius:999, overflow:"hidden", background:C.bgSoft}}>
          <img src={avatar} alt="" style={{width:"100%", height:"100%", objectFit:"cover"}}/>
        </div>
        <div>
          <div style={{fontSize:14, fontWeight:600}}>{name}</div>
          <div style={{fontSize:12, color:C.inkSoft}}>{role}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------- WORK (Portfolio) ---------- */

function DWork({ onNav }) {
  const cases = [
    { n:"014", tag:"Medicine · Signature", t:"Cold search funnel → private waitlist", d:"Dr. V. — Aesthetic dermatologist", delta:"+70% fees · 4-month waitlist · 4 press features",
      img: PHOTOS.caseDoctorAfter, before: PHOTOS.caseDoctorBefore },
    { n:"017", tag:"Founder · Retainer", t:"Invisible LinkedIn → oversubscribed round", d:"T. — Fintech founder", delta:"1.9× round demand · 3 inbound senior hires",
      img: PHOTOS.caseFounderAfter, before: PHOTOS.caseFounderBefore },
    { n:"021", tag:"Coaching · Signature", t:"Referral-only → two enterprise contracts", d:"M. — Executive coach, ex-McKinsey", delta:"+65% day rate · inbound ×3 / week",
      img: PHOTOS.caseCoachAfter, before: PHOTOS.caseCoachBefore },
    { n:"024", tag:"Specialist · Opening → Signature", t:"Peer-known → private-client booked", d:"J. — Architecture studio principal", delta:"2 private projects · ×1.8 project fee",
      img: PHOTOS.caseArchitectAfter, before: PHOTOS.caseArchitectBefore },
    { n:"027", tag:"Coaching · Positioning", t:"Three programs → one program, doubled close", d:"D. — Performance coach", delta:"Close rate ×2 · client LTV ×3",
      img: PHOTOS.caseOperatorAfter, before: PHOTOS.caseOperatorBefore },
    { n:"029", tag:"Performer · Signature", t:"DM bookings → 4-month waitlist", d:"N. — Dance instructor", delta:"Workshop fee ×2.3 · 2 festival invites",
      img: PHOTOS.casePerformerAfter, before: PHOTOS.casePerformerBefore },
  ];
  return (
    <div>
      <section style={{padding:"40px 28px 0"}}>
        <div style={{background:C.indigo, borderRadius:36, padding:"64px 56px", color:C.white, textAlign:"center"}}>
          <Chip tone="dark"><span style={{width:8,height:8,background:C.yellow,borderRadius:999}}/> Selected work</Chip>
          <h1 style={{fontSize:"clamp(48px, 6vw, 96px)", fontWeight:700, lineHeight:1, margin:"18px auto 12px", maxWidth:"18ch", letterSpacing:"-0.02em"}}>
            Transformations, in their <span style={{color:C.yellow}}>own numbers</span>.
          </h1>
          <p style={{color:"rgba(255,255,255,0.85)", fontSize:17, lineHeight:1.5, maxWidth:"60ch", margin:"0 auto"}}>
            Before and after, described the way our clients describe their own work. No vanity metrics.
          </p>
        </div>
      </section>

      <section style={{padding:"60px 56px 0"}}>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:20}}>
          {cases.map(c => (
            <div key={c.n} style={{background:C.white, borderRadius:28, border:`1px solid ${C.navy}`, overflow:"hidden"}}>
              <div style={{position:"relative"}}>
                <DImg src={c.img} ratio="4 / 3" radius={0}/>
                <div style={{position:"absolute", top:14, left:14}}>
                  <Chip tone="yellow">{c.tag}</Chip>
                </div>
                <div style={{position:"absolute", bottom:14, left:14, width:54, height:54, borderRadius:999, background:C.white, color:C.navy, display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:600, border:`1px solid ${C.navy}`}}>
                  C·{c.n}
                </div>
              </div>
              <div style={{padding:"22px 22px 24px"}}>
                <div style={{fontSize:11, color:C.indigo, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase"}}>{c.d}</div>
                <div style={{fontSize:20, fontWeight:600, margin:"8px 0 14px", letterSpacing:"-0.01em", lineHeight:1.2}}>{c.t}</div>
                <div style={{padding:"12px 16px", background:C.bgSoft, borderRadius:999, fontSize:13, fontWeight:500, color:C.navy, display:"inline-block"}}>
                  {c.delta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"90px 56px 0"}}>
        <div style={{background:C.navy, color:C.white, borderRadius:36, padding:"56px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:40, alignItems:"center"}}>
          <div>
            <Chip tone="dark">How we measure</Chip>
            <h2 style={{fontSize:"clamp(32px, 3.6vw, 54px)", fontWeight:700, lineHeight:1.08, margin:"18px 0 14px", letterSpacing:"-0.02em"}}>
              Four baseline questions. <span style={{color:C.yellow}}>Ninety-day delta.</span>
            </h2>
            <p style={{color:"rgba(255,255,255,0.78)", fontSize:15, lineHeight:1.6, maxWidth:"48ch"}}>
              We don't track vanity metrics. We track whether strangers describe you differently at day 90 than they did at day 0.
            </p>
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:12}}>
            {[
              ["01", "How do strangers describe you in one sentence?"],
              ["02", "What is your rate, and how often is it questioned?"],
              ["03", "How many unasked-for inbound leads per month?"],
              ["04", "When you look at your feed, what version of you do you see?"],
            ].map(([n, q]) => (
              <div key={n} style={{background:"rgba(255,255,255,0.06)", borderRadius:18, padding:"18px 20px", display:"grid", gridTemplateColumns:"40px 1fr", gap:14, alignItems:"center"}}>
                <div style={{color:C.yellow, fontSize:14, fontWeight:600}}>{n}</div>
                <div style={{fontSize:15}}>{q}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:"80px 28px 0"}}>
      </section>
      <div style={{height:40}}/>
    </div>
  );
}

/* ---------- SERVICES ---------- */

function DServices({ onNav }) {
  const tiers = [
    { n:"I", name:"The Opening", price:"€480", unit:"one studio day", lede:"Entry to the studio. A directed day that produces a coherent public signature in two weeks.",
      bullets:["Positioning audit · 90 min", "3 directed short films", "12 editorial stills", "14-day release plan"],
      cta:"Start with the Opening" },
    { n:"II", name:"The Signature", price:"€2,400", unit:"six weeks", featured:true,
      lede:"The full personal-brand build. Positioning, visual system, two studio days, 90-day architecture.",
      bullets:["Positioning intensive", "Visual system · type, colour, grid", "Two directed studio days", "90-day launch plan"],
      cta:"Apply for the Signature" },
    { n:"III", name:"The Positioning", price:"€1,200", unit:"strategy only",
      lede:"Pure strategy sprint when you already have production. Category, promise, language. No shoot.",
      bullets:["Async diagnostic", "Positioning document", "Content audit", "One 60-min direction call"],
      cta:"Book the Intensive" },
    { n:"IV", name:"The Retainer", price:"€1,600/mo", unit:"direction as a service",
      lede:"We run your brand the way a label runs an artist. Monthly direction, monthly shoots, quarterly re-audits.",
      bullets:["Monthly direction call", "Monthly content day", "Quarterly re-audit", "Priority creative response"],
      cta:"Enquire about the Retainer" },
  ];
  return (
    <div>
      <section style={{padding:"40px 28px 0"}}>
        <div style={{background:C.indigo, borderRadius:36, padding:"64px 56px", color:C.white, textAlign:"center"}}>
          <Chip tone="dark">Four doors in</Chip>
          <h1 style={{fontSize:"clamp(48px, 6vw, 96px)", fontWeight:700, lineHeight:1, margin:"18px auto 12px", maxWidth:"16ch", letterSpacing:"-0.02em"}}>
            Four ways to work with <span style={{color:C.yellow}}>the studio</span>.
          </h1>
          <p style={{color:"rgba(255,255,255,0.85)", fontSize:17, lineHeight:1.5, maxWidth:"60ch", margin:"0 auto"}}>
            Every engagement begins with the same audit. Prices below are final. No contact-for-quote.
          </p>
        </div>
      </section>

      <section style={{padding:"60px 56px 0"}}>
        <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:20}}>
          {tiers.map(t => (
            <div key={t.n} style={{
              background: t.featured ? C.navy : C.white,
              color: t.featured ? C.white : C.navy,
              borderRadius:28, padding:"32px 32px 28px",
              border: `1px solid ${C.navy}`,
              position:"relative",
            }}>
              {t.featured && (
                <div style={{position:"absolute", top:-12, right:20}}>
                  <Chip tone="yellow">Most chosen</Chip>
                </div>
              )}
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline"}}>
                <div>
                  <div style={{fontSize:12, opacity:0.6, letterSpacing:"0.12em"}}>TIER {t.n}</div>
                  <div style={{fontSize:34, fontWeight:700, marginTop:6, letterSpacing:"-0.02em"}}>{t.name}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:30, fontWeight:700, color: t.featured ? C.yellow : C.indigo, letterSpacing:"-0.01em"}}>{t.price}</div>
                  <div style={{fontSize:12, opacity:0.6, marginTop:2}}>{t.unit}</div>
                </div>
              </div>
              <p style={{margin:"18px 0 20px", fontSize:15, lineHeight:1.6, opacity: t.featured ? 0.88 : 0.78}}>{t.lede}</p>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10}}>
                {t.bullets.map(b => (
                  <div key={b} style={{padding:"12px 14px", borderRadius:14, background: t.featured ? "rgba(255,255,255,0.08)" : C.bgSoft, fontSize:13, display:"flex", gap:10, alignItems:"center"}}>
                    <span style={{width:18, height:18, borderRadius:999, background:C.yellow, color:C.navy, fontSize:11, display:"inline-flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>✓</span>
                    {b}
                  </div>
                ))}
              </div>
              <div style={{marginTop:24}}>
                <DButton variant={t.featured ? "primary" : "dark"} onClick={() => onNav("apply")}>{t.cta}</DButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"90px 28px 0"}}>
      </section>
      <div style={{height:40}}/>
    </div>
  );
}

/* ---------- ABOUT ---------- */

function DAbout({ onNav }) {
  return (
    <div>
      <section style={{padding:"40px 28px 0"}}>
        <div style={{background:C.bgSoft, borderRadius:36, padding:"64px 56px"}}>
          <Chip>The studio</Chip>
          <div style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:40, alignItems:"center", marginTop:24}}>
            <h1 style={{fontSize:"clamp(44px, 5.4vw, 84px)", fontWeight:700, lineHeight:1.04, margin:0, letterSpacing:"-0.02em"}}>
              A small studio for people whose <span style={{color:C.indigo}}>image has to carry weight</span>.
            </h1>
            <p style={{fontSize:17, lineHeight:1.6, color:C.inkSoft, margin:0}}>
              Six people, based between Barcelona and Lisbon. We direct personal brand and image work for founders, doctors, consultants, coaches, performers and creators — the kind of people whose authority in the room is already there, and whose online presence has to catch up.
            </p>
          </div>
        </div>
      </section>

      <section style={{padding:"60px 56px 0", display:"grid", gridTemplateColumns:"1fr 1.3fr", gap:40, alignItems:"start"}}>
        <div>
          <DImg src={PHOTOS.founderA} ratio="4 / 5" radius={28}/>
          <div style={{marginTop:18, padding:"14px 18px", background:C.white, borderRadius:16, border:`1px solid ${C.navy}`, display:"flex", justifyContent:"space-between", fontSize:12}}>
            <span style={{color:C.inkSoft}}>Anya Kravchenko</span>
            <span style={{color:C.indigo, fontWeight:600}}>Founder</span>
          </div>
        </div>
        <div>
          <Chip>Founder note</Chip>
          <h2 style={{fontSize:"clamp(28px, 3vw, 44px)", fontWeight:600, lineHeight:1.2, margin:"18px 0 22px", letterSpacing:"-0.01em"}}>
            "Most of our clients don't need more output. They need fewer, sharper decisions about what they put into the world — and someone to defend those decisions once made."
          </h2>
          <div style={{display:"grid", gridTemplateColumns:"1fr", gap:16, color:C.inkSoft, fontSize:15, lineHeight:1.7}}>
            <p>Before opening the studio, I spent eight years directing image and brand work for the kind of people whose names live on the inside of an industry — founders who close rounds in quiet rooms, doctors with private waitlists, performers festivals fight over.</p>
            <p>The pattern was always the same: the room knew one version of them; the internet kept meeting a smaller one. Kravchenko Studio exists to close that gap — deliberately, and on camera.</p>
          </div>
        </div>
      </section>

      <section style={{padding:"90px 56px 0"}}>
        <div style={{textAlign:"center"}}>
          <Chip>Principles</Chip>
          <h2 style={{fontSize:"clamp(36px, 4.2vw, 60px)", fontWeight:700, lineHeight:1.08, margin:"14px auto 8px", maxWidth:"18ch", letterSpacing:"-0.02em"}}>
            Six things we <span style={{color:C.indigo}}>don't negotiate</span>.
          </h2>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:20, marginTop:40}}>
          {[
            ["01","Positioning before production","No frame shot before we agree what it says. If we can't say it in a sentence, the shoot won't rescue it."],
            ["02","Fewer, sharper assets","Thirty mediocre pieces make you invisible. Four sharp ones make you legible."],
            ["03","Taste is not optional","Every reference, frame and caption is a decision. We don't outsource decisions."],
            ["04","The audit tells the truth","If the audit says you're not ready, we say so. We've turned down more than we've taken."],
            ["05","Deliverables are a side effect","You're hiring a direction. The files are the evidence."],
            ["06","Time is the rarest material","Ninety days, two studio days, six anchor pieces. Scope is a feature."],
          ].map(([n, t, d]) => (
            <div key={n} style={{background:C.white, borderRadius:24, padding:"24px 24px 26px", border:`1px solid ${C.navy}`}}>
              <div style={{fontSize:12, color:C.indigo, fontWeight:600, letterSpacing:"0.12em"}}>PRINCIPLE {n}</div>
              <div style={{fontSize:22, fontWeight:600, margin:"10px 0 10px", letterSpacing:"-0.01em"}}>{t}</div>
              <div style={{color:C.inkSoft, fontSize:14, lineHeight:1.6}}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"90px 28px 0"}}>
      </section>
      <div style={{height:40}}/>
    </div>
  );
}

/* ---------- APPLY ---------- */

function DApply({ onNav }) {
  const steps = ["Who", "Work", "Gap", "Goals", "Tier", "Contact", "Sent"];
  const [step, setStep] = React.useState(0);
  const [d, setD] = React.useState({
    name:"", role:"", discipline:"", city:"Barcelona",
    ig:"", website:"",
    room_vs_feed:"",
    biggest_gap:"",
    goal:"",
    tier:"",
    timing:"",
    email:"",
    phone:"",
  });
  const up = (k, v) => setD(p => ({...p, [k]: v}));
  const next = () => setStep(s => Math.min(s+1, steps.length-1));
  const back = () => setStep(s => Math.max(s-1, 0));
  const pct = (step/(steps.length-1))*100;
  const canAdv = () => {
    if (step === 0) return d.name && d.role && d.discipline;
    if (step === 1) return d.ig || d.website;
    if (step === 2) return d.room_vs_feed.length > 10;
    if (step === 3) return d.biggest_gap.length > 10 && d.goal.length > 10;
    if (step === 4) return !!d.tier;
    if (step === 5) return d.email.includes("@");
    return true;
  };

  return (
    <div>
      <section style={{padding:"40px 28px 0"}}>
        <div style={{background:C.indigo, borderRadius:36, padding:"56px 56px 40px", color:C.white}}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"start", gap:20}}>
            <div>
              <Chip tone="dark"><span style={{width:8,height:8,background:C.yellow,borderRadius:999}}/> Studio audit · 6 min</Chip>
              <h1 style={{fontSize:"clamp(40px, 5vw, 76px)", fontWeight:700, lineHeight:1.02, margin:"18px 0 0", letterSpacing:"-0.02em"}}>
                {step === steps.length-1 ? <>Application <span style={{color:C.yellow}}>received</span>.</> : <>Six minutes.<br/><span style={{color:C.yellow}}>Then we talk.</span></>}
              </h1>
            </div>
            <div style={{textAlign:"right", fontSize:13, opacity:0.8}}>
              <div>STEP {String(step+1).padStart(2,"0")} / {String(steps.length).padStart(2,"0")}</div>
              <div style={{marginTop:6, color:C.yellow, fontWeight:600, letterSpacing:"0.08em"}}>{steps[step].toUpperCase()}</div>
            </div>
          </div>
          <div style={{marginTop:30, height:4, background:"rgba(255,255,255,0.18)", borderRadius:4, overflow:"hidden"}}>
            <div style={{width:`${pct}%`, height:"100%", background:C.yellow, transition:"width .3s ease"}}/>
          </div>
        </div>
      </section>

      <section style={{padding:"40px 56px 0"}}>
        <div style={{background:C.white, borderRadius:28, padding:40, border:`1px solid ${C.navy}`, minHeight: 420}}>
          {step === 0 && (
            <Step title="Who are you, plainly." sub="Name, role, discipline. One sentence each.">
              <TextField label="Name" value={d.name} onChange={v=>up("name",v)}/>
              <TextField label="Role (e.g. founder, coach, dermatologist)" value={d.role} onChange={v=>up("role",v)}/>
              <TextField label="Discipline / field" value={d.discipline} onChange={v=>up("discipline",v)}/>
            </Step>
          )}
          {step === 1 && (
            <Step title="Where does the internet meet you today?" sub="Instagram, personal site — whichever is the actual front door.">
              <TextField label="Instagram" value={d.ig} onChange={v=>up("ig",v)} placeholder="@handle"/>
              <TextField label="Website (optional)" value={d.website} onChange={v=>up("website",v)} placeholder="yourdomain.com"/>
            </Step>
          )}
          {step === 2 && (
            <Step title="The room version vs. the feed version." sub="What do clients who already work with you understand about you that your feed doesn't show? 2–4 sentences.">
              <TextArea value={d.room_vs_feed} onChange={v=>up("room_vs_feed",v)}/>
            </Step>
          )}
          {step === 3 && (
            <Step title="Your biggest perception gap. And the next 90 days.">
              <TextArea label="What's the biggest gap between how you're perceived and how you want to be?" value={d.biggest_gap} onChange={v=>up("biggest_gap",v)}/>
              <TextArea label="If the next 90 days go well, what's different?" value={d.goal} onChange={v=>up("goal",v)}/>
            </Step>
          )}
          {step === 4 && (
            <Step title="Which door feels like yours?" sub="Don't overthink — the audit sets the final scope.">
              <RadioList value={d.tier} onChange={v=>up("tier",v)} options={[
                ["opening","The Opening · €480","Studio day, quick upgrade"],
                ["signature","The Signature · €2,400","Full brand build, 6 weeks"],
                ["positioning","The Positioning · €1,200","Strategy only, no shoot"],
                ["retainer","The Retainer · €1,600/mo","Ongoing direction"],
                ["unsure","Not sure — audit me","We'll recommend after the call"],
              ]}/>
            </Step>
          )}
          {step === 5 && (
            <Step title="How do we reach you?" sub="We reply within 48 hours with yes, maybe, or an honest no.">
              <TextField label="Email" value={d.email} onChange={v=>up("email",v)}/>
              <TextField label="Phone / WhatsApp (optional)" value={d.phone} onChange={v=>up("phone",v)}/>
            </Step>
          )}
          {step === 6 && (
            <div style={{textAlign:"center", padding:"40px 0"}}>
              <div style={{width:80, height:80, borderRadius:999, background:C.yellow, color:C.navy, margin:"0 auto 20px", fontSize:36, display:"inline-flex", alignItems:"center", justifyContent:"center"}}>✓</div>
              <h2 style={{fontSize:40, fontWeight:700, letterSpacing:"-0.02em", margin:"0 0 14px"}}>We'll write in 48 hours.</h2>
              <p style={{color:C.inkSoft, fontSize:16, maxWidth:"48ch", margin:"0 auto"}}>
                Yes, maybe, or an honest no — and if no, we'll point you somewhere better. Check spam, occasionally we end up there.
              </p>
            </div>
          )}
          {step < 6 && (
            <div style={{display:"flex", justifyContent:"space-between", marginTop:40, paddingTop:24, borderTop:`1px solid ${C.grey}`}}>
              <DButton variant="ghost" icon={false} onClick={back} style={{visibility: step === 0 ? "hidden" : "visible"}}>← Back</DButton>
              <DButton variant="primary" onClick={next} style={{opacity: canAdv() ? 1 : 0.5, pointerEvents: canAdv() ? "auto" : "none"}}>
                {step === 5 ? "Send application" : "Continue"}
              </DButton>
            </div>
          )}
        </div>
      </section>
      <div style={{height:80}}/>
    </div>
  );
}

function Step({ title, sub, children }) {
  return (
    <div>
      <div style={{fontSize:"clamp(26px, 2.8vw, 38px)", fontWeight:700, letterSpacing:"-0.02em", lineHeight:1.15}}>{title}</div>
      {sub && <div style={{marginTop:10, color:C.inkSoft, fontSize:15, lineHeight:1.55, maxWidth:"64ch"}}>{sub}</div>}
      <div style={{display:"flex", flexDirection:"column", gap:16, marginTop:28}}>{children}</div>
    </div>
  );
}
function TextField({ label, value, onChange, placeholder }) {
  return (
    <label style={{display:"flex", flexDirection:"column", gap:8}}>
      <span style={{fontSize:12, color:C.inkSoft, fontWeight:500}}>{label}</span>
      <input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder || ""}
        style={{padding:"14px 18px", borderRadius:14, border:`1px solid ${C.grey}`, fontSize:15, fontFamily:"inherit", outline:"none", background:"#fff"}}
        onFocus={e => e.currentTarget.style.borderColor = C.indigo}
        onBlur={e => e.currentTarget.style.borderColor = C.grey}/>
    </label>
  );
}
function TextArea({ label, value, onChange }) {
  return (
    <label style={{display:"flex", flexDirection:"column", gap:8}}>
      {label && <span style={{fontSize:12, color:C.inkSoft, fontWeight:500}}>{label}</span>}
      <textarea value={value} onChange={e=>onChange(e.target.value)} rows={4}
        style={{padding:"14px 18px", borderRadius:14, border:`1px solid ${C.grey}`, fontSize:15, fontFamily:"inherit", outline:"none", resize:"vertical", background:"#fff"}}
        onFocus={e => e.currentTarget.style.borderColor = C.indigo}
        onBlur={e => e.currentTarget.style.borderColor = C.grey}/>
    </label>
  );
}
function RadioList({ value, onChange, options }) {
  return (
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
      {options.map(([k, t, sub]) => (
        <button key={k} onClick={() => onChange(k)}
          style={{
            padding:"18px 20px", borderRadius:18, border:`1px solid ${value===k ? C.indigo : C.grey}`,
            background: value===k ? C.bgSoft : C.white, textAlign:"left", cursor:"pointer", fontFamily:"inherit",
            display:"flex", flexDirection:"column", gap:4,
          }}>
          <span style={{fontSize:15, fontWeight:600, color:C.navy}}>{t}</span>
          <span style={{fontSize:13, color:C.inkSoft}}>{sub}</span>
        </button>
      ))}
    </div>
  );
}

/* ---------- FINAL CTA BANNER ---------- */

function DFinalCTA({ onNav }) {
  return (
    <div style={{background:`linear-gradient(135deg, ${C.indigo} 0%, #6B64FF 100%)`, borderRadius:36, padding:"72px 56px", position:"relative", overflow:"hidden"}}>
      <div style={{position:"absolute", right:-60, top:-60, width:380, height:380, borderRadius:"50%", background:"rgba(255,212,65,0.25)", filter:"blur(50px)"}}/>
      <div style={{position:"relative", display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:40, alignItems:"center"}}>
        <div>
          <h2 style={{fontSize:"clamp(40px, 5vw, 80px)", fontWeight:700, lineHeight:1.02, color:C.white, margin:0, letterSpacing:"-0.02em"}}>
            Ready to upgrade how you're <span style={{color:C.yellow}}>perceived online</span>?
          </h2>
          <p style={{color:"rgba(255,255,255,0.85)", fontSize:17, lineHeight:1.55, margin:"18px 0 28px", maxWidth:"54ch"}}>
            Apply for a studio audit. Six minutes in, 48 hours to hear back, three weeks to a new public image.
          </p>
          <DButton variant="primary" size="lg" onClick={() => onNav("apply")}>{CTA}</DButton>
        </div>
        <DImg src={PHOTOS.founderB} ratio="4 / 5" radius={24}/>
      </div>
    </div>
  );
}

Object.assign(window, { DirectionD });
