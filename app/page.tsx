import CalBooking from "@/components/CalBooking";
import LandingEffects from "@/components/LandingEffects";
import MuxVideo from "@/components/MuxVideo";
import { videos } from "@/lib/videos";
import Image from "next/image";

function LogoMark() {
  return (
    <Image
      src="/chatturai-logo.png"
      alt="Chatturai"
      className="logo-img"
      width="640"
      height="620"
    />
  );
}

function Cta({ centered = false }: { centered?: boolean }) {
  return (
    <div className={`cta-block${centered ? " center" : ""}`}>
      <a href="#book" className="btn" data-track-link>
        Apply for a Brand Film Fit Call <span className="btn-arrow">↗</span>
      </a>
    </div>
  );
}

const proofCards = [
  {
    video: videos.kibosh,
    tag: "Cybersecurity brand film",
    name: "Kibosh",
    desc: "A child clicks a phishing pop-up, and the threat escapes the screen. The room turns into the internet's worst-case scenario. An invisible risk becomes something you can feel.",
    feel: "fear, urgency, protection",
  },
  {
    video: videos.decathlon,
    tag: "Emotional sports concept film",
    name: "Decathlon",
    desc: "An old man climbs a mountain while people wonder why he keeps pushing. At the top, he releases his wife's ashes into the wind. Not a product ad. A story about why people keep moving.",
    feel: "grief, devotion, resilience",
  },
  {
    video: videos.activeFitness,
    tag: "Wellness and fitness brand film",
    name: "Home Gym Equipment",
    desc: "A man's life keeps getting fuller, and his health keeps getting pushed aside. Someone who cares notices, then finds a way to bring wellness into his life instead of asking him to chase time.",
    feel: "relief, care, renewal",
  },
];

const testimonialCards = [
  {
    video: videos.testimonialCarlos,
    name: "Carlos Reyes",
    role: "Construction and hardscaping founder · Nashville",
    desc: "He needed story-driven content, but live footage was difficult. Weather, travel, locations kept making traditional production painful. Chatturai created the emotional storytelling he needed without a shoot.",
    listen: "why the films felt heartfelt and human enough to move people close to him.",
  },
  {
    video: videos.testimonialJesse,
    name: "Jesse Navarro",
    role: "Founder · Solaris Media",
    desc: "Runs a full-service agency, 20+ years in the industry. Found Chatturai through a Meta ad and stopped scrolling. Got three videos in two months, quality beyond expectation, turnaround far faster than production.",
    listen: "how a long-term client thought the AI commercial was real, and became emotional watching it.",
  },
  {
    video: videos.testimonialBrand,
    name: "Brand-side marketing leader",
    role: "Ongoing Chatturai partner",
    desc: "The biggest confidence builder wasn't just the quality. It was the creative thinking behind it. Emotion, detail, storytelling, consumer insight, respect for the brand. It felt like people shaping every piece with intention.",
    listen: "why storytelling, honesty, and brand understanding earned an ongoing relationship.",
  },
];

const steps = [
  {
    n: "01",
    title: "Brief call",
    lines: [
      "You walk us through your brand, audience, campaign, references, and the feeling the film needs to create.",
      "We extract everything we need to start building in your world, not ours.",
    ],
  },
  {
    n: "02",
    title: "Concept and script",
    lines: [
      "We develop three to four creative directions and present them as a deck. You choose the strongest.",
      "Then we write the full script and screenplay, line by line. Nothing moves forward without your sign-off.",
    ],
  },
  {
    n: "03",
    title: "Storyboard and mood board",
    lines: [
      "You see the tone, frames, camera angles, pacing, and emotional rhythm before production begins, often with placeholder music, so you can feel the film before it exists.",
    ],
  },
  {
    n: "04",
    title: "Character and location design",
    lines: [
      "Every character and location is created visually and approved before production. You know exactly who and what will appear on screen.",
    ],
  },
  {
    n: "05",
    title: "AI production and post",
    lines: [
      "The film is built shot by shot. We generate, regenerate, composite, edit, colour, add music, design sound, and correct details until it feels real, cinematic, and emotionally precise.",
      "Not one prompt. A full production process.",
    ],
  },
  {
    n: "06",
    title: "First draft and delivery",
    lines: [
      "First draft in seven to ten working days. Because everything was pre-approved, revisions are usually refinements, not restarts.",
      "Final delivery includes every format, every cut-down, and everything your campaign needs from day one.",
    ],
  },
];

const deliverables = [
  {
    n: "01",
    title: "The hero film",
    body: "A cinematic brand film, finished to campaign-ready standard and built from the concept, script, storyboard, characters, and locations you approved.",
  },
  {
    n: "02",
    title: "Every format your campaign needs",
    format: (
      <>
        16:9 for YouTube and website
        <br />
        9:16 for Reels, Stories, Shorts
        <br />
        1:1 for social feeds
      </>
    ),
    body: "Ready from day one, without briefing another editor.",
  },
  {
    n: "03",
    title: "Short-form cut-downs",
    body: "15-second and 30-second versions for paid campaigns, retargeting, social posts, and launch teasers.",
  },
  {
    n: "04",
    title: "Timeline",
    body: "First draft in seven to ten working days. One brief. One production cycle. Everything your campaign needs to run.",
  },
];

const faqs = [
  {
    q: "Is this priced like normal AI video content?",
    a: [
      <>
        <strong>No.</strong> Chatturai is not built for cheap AI clips, avatar videos, or bulk
        content packages.
      </>,
      "Every film goes through concept, script, storyboard, character and location design, AI production, regeneration, compositing, editing, music, sound, colour, and post-production.",
      "The right comparison is not a freelancer or a tool subscription. It's the cost, time, and coordination of producing a serious brand film through a traditional shoot.",
      "If you want the lowest-cost way to make more content, this isn't the right fit. If you want a premium brand film your audience can actually feel, we can scope the right investment on the fit call.",
    ],
  },
  {
    q: "What if it doesn't feel right for my brand?",
    a: [
      "That's exactly what the process is designed to prevent. Before production begins, you approve the concept, script, storyboard, characters, locations, tone, and visual direction.",
      "You're not waiting for a final film and hoping it lands. You're approving the building blocks as we go. And if the final film looks AI-generated to an outside audience, you don't pay.",
    ],
  },
  {
    q: "How long does it take?",
    a: [
      "First draft in seven to ten working days from brief approval. Subsequent films are usually faster once we understand your brand, audience, tone, and creative standards.",
      "You're not waiting on a black box. Each stage moves through a clear approval before the next begins.",
    ],
  },
  {
    q: "Do I need to commit to a long contract upfront?",
    a: [
      <>
        <strong>No.</strong> Most relationships start with one film. Retainers and multi-film
        packages come after you've seen the quality, felt the process, and know Chatturai is the
        right creative partner.
      </>,
      "We'd rather earn the longer relationship than ask you to sign one before the first film proves itself.",
    ],
  },
  {
    q: "What do you need from us to start?",
    a: [
      "A clear sense of the story, campaign, launch, or brand moment you want to produce.",
      "You don't need a finished script. A rough idea, reference films, brand guidelines, audience context, and the feeling you want are enough for the first conversation. If you already have a concept or script, even better, and we can move faster.",
    ],
  },
  {
    q: "I need someone else on my team to sign off. What should I do?",
    a: [
      "Bring them into the call if they need to approve the budget or creative direction. If that's not possible, book only if you can seriously move the decision forward internally.",
      "After the call, we can send a proposal, samples, and a clear creative direction so your team isn't relying on a second-hand explanation. The strongest projects move fastest when the person with budget authority sees the work directly.",
    ],
  },
];

export default function Home() {
  return (
    <>
      <LandingEffects />

      <nav className="site-nav" aria-label="Primary">
        <a href="#top" className="logo" aria-label="Chatturai home">
          <LogoMark />
        </a>
        <a href="#book" className="btn nav-cta" data-track-link>
          Apply for a Brand Film Fit Call <span className="btn-arrow">↗</span>
        </a>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow reveal">
            For brands selling trust, transformation, expertise, or aspiration, not something you
            can simply point a camera at.
          </div>
          <h1 className="reveal">
            We turn your brand story into a cinematic film,{" "}
            <span className="dim">without a shoot.</span>
          </h1>
          <p className="hero-sub reveal">
            Built with AI, directed shot by shot by filmmakers, not generated from a prompt. So
            your audience feels the brand, not the technology.
          </p>
        </div>
        <div className="hero-film-wrap reveal">
          <MuxVideo video={videos.hero} section="hero" mode="autoplay" />
          <div className="film-caption">
            <span>Yes, this is AI.</span>
            <span>No, you won&apos;t be able to tell.</span>
          </div>
        </div>
        <div className="hero-cta">
          <div className="cta-block reveal">
            <a href="#book" className="btn" data-track-link>
              Apply for a Brand Film Fit Call <span className="btn-arrow">↗</span>
            </a>
            <span className="btn-sub">
              First draft in 7 to 10 working days. If it looks AI-generated, you don't pay.
            </span>
            <span className="btn-fit">
              For marketing leaders and founders with a real campaign, launch, or brand film to
              produce.
            </span>
          </div>
        </div>
      </header>

      <section className="proofstrip">
        <div className="wrap">
          <div className="kicker reveal">More films</div>
          <h2 className="reveal">
            It's not the visuals. <span className="dim">It's what it makes you feel.</span>
          </h2>
          <p className="subhead reveal">
            The point isn't just that they look real. It's that each film makes the viewer feel
            something before they ever think about the technology.
          </p>
        </div>
        <div className="proof-cards reveal">
          {proofCards.map((card) => (
            <div className="proof-card" key={card.name}>
              <MuxVideo video={card.video} section="proof" playLabel="Play film" />
              <div className="proof-cap">
                <div className="tag">{card.tag}</div>
                <div className="nm">{card.name}</div>
                <div className="desc">{card.desc}</div>
                <div className="feel">
                  <b>Feeling:</b> {card.feel}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pullquote reveal">
          <p>
            &ldquo;The storytelling moved people close to me emotionally. That&rsquo;s when I knew the
            film had done its job.&rdquo;
          </p>
          <cite>Carlos Reyes · concrete and hardscaping founder</cite>
        </div>
      </section>

      <section className="selfrec">
        <div className="wrap">
          <div className="kicker reveal">Is this you</div>
          <h2 className="reveal">
            This wasn't built for everyone. <span className="dim">It was built for you.</span>
          </h2>
          <p className="subhead reveal">
            For brands with something real to say, and nothing simple to show for it.
          </p>
          <div className="stack reveal">
            <p>You know your brand has more depth than your current content shows.</p>
            <p>
              You have a story, campaign, or idea that would matter if people could actually feel
              it.
            </p>
            <p>You've had a concept sitting in a folder for months, with no real way to make it.</p>
            <p>
              You've considered a shoot, but the cost, time, and logistics made it hard to justify.
            </p>
            <p>You tried cheap AI once already, and quietly never used what it made.</p>
            <p>
              You have a launch or brand moment coming up, and no real way to get something good
              enough made in time.
            </p>
            <p className="cost">
              Every week that gap between how your brand looks and what it actually is stays open,
              it costs something real.
            </p>
          </div>
          <div className="close reveal">
            If your brand's value is the kind of thing that lives in{" "}
            <span className="dim">someone's chest rather than on a shelf,</span> Chatturai was
            built for exactly that.
          </div>
        </div>
      </section>

      <section className="trap">
        <div className="wrap">
          <div className="kicker reveal">Why nothing has worked</div>
          <h2 className="reveal">
            You've had two ways to do this.{" "}
            <span className="dim">Neither one works for you.</span>
          </h2>
          <p className="subhead reveal">
            Real production is slow and expensive. Cheap AI is fast, but looks like cheap AI.
          </p>
          <div className="twocol reveal">
            <div className="trapcard">
              <div className="h">The real shoot</div>
              <p>
                Cinematic quality, with the cost, the crew, the casting, the locations, the shoot
                days, the reshoots, and a timeline that rarely makes sense for a film you may need
                again next quarter.
              </p>
            </div>
            <div className="trapcard">
              <div className="h">The cheap AI route</div>
              <p>
                Speed and a lower price. But what comes back usually looks exactly like what it is:
                plastic faces, lifeless movement, no real emotion, obvious within seconds.
              </p>
            </div>
            <div className="trapcard">
              <div className="h">Freelancers, DIY, generic agencies</div>
              <p>
                The same problem in a different form. Either the work is too expensive to repeat,
                or too weak to put in front of the audience you actually care about.
              </p>
            </div>
          </div>
          <div className="bridge reveal">Chatturai exists for the space in between.</div>
          <div className="resolve reveal">
            <p className="lead">
              The team behind Chatturai spent over a decade in real production before AI entered the
              picture. Filmmakers first, AI second.
            </p>
            <p>
              Every film is directed shot by shot. The story, the emotion, the pacing, the casting,
              the scenes, the music, the sound, and the final edit are all built with intention.
            </p>
            <p>
              <strong>That is the option that was missing.</strong>
            </p>
          </div>
          <div className="close reveal">
            If you can tell it's AI, it wasn't directed. <span className="dim">It was generated.</span>
          </div>
        </div>
      </section>

      <section className="stories">
        <div className="wrap">
          <div className="kicker reveal">What changed</div>
          <h2 className="reveal">
            They had the same problem <span className="dim">you're looking at right now.</span>
          </h2>
          <p className="subhead reveal">Here's what changed.</p>
          <div className="storycard reveal">
            <div className="storytag">Healthcare and fertility</div>
            <p>
              A large fertility brand in one of the most emotionally sensitive categories. They'd
              already tried another AI agency. After multiple revisions, the film reached only about
              twenty percent of the emotional depth they needed. The visuals existed. The feeling
              did not.
            </p>
            <p>
              Chatturai built a Father's Day film about what fathers silently carry through the
              fertility journey.
            </p>
            <p className="payoff">
              They committed to seven films across the year, because the first film proved
              Chatturai could clear the emotional bar their category demanded.
            </p>
          </div>
          <div className="storycard reveal">
            <div className="storytag">Beauty and personal care</div>
            <p>
              A fifteen-hundred-person beauty brand with a Marketing Head who had already tried
              other AI agencies. None had matched the premium, polished, realistic quality their
              brand needed.
            </p>
            <p className="quote">"This doesn't look like AI at all."</p>
            <p className="payoff">
              The film crossed 200,000+ Instagram views. Zero viewers identified it as AI. The brand
              signed a six-month contract off the strength of that one film.
            </p>
          </div>
        </div>
      </section>

      <div className="midcta reveal">
        <Cta centered />
      </div>

      <section className="testi">
        <div className="wrap">
          <div className="kicker reveal">In their words</div>
          <h2 className="reveal">
            "No, wait. <span className="dim">That's not AI."</span>
          </h2>
          <p className="subhead reveal">
            Founders, agency owners, and brand leaders watched the films, showed them to their teams
            and clients, and had the same reaction.
          </p>
        </div>
        <div className="tcards reveal">
          {testimonialCards.map((card) => (
            <div className="tcard" key={card.name}>
              <MuxVideo
                video={card.video}
                section="testimonial"
                playLabel="Watch story"
              />
              <div className="meta">
                <div className="nm">{card.name}</div>
                <div className="role">{card.role}</div>
                <div className="desc">{card.desc}</div>
                <div className="listen">
                  <b>Listen for</b>
                  {card.listen}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="wrap">
          <div className="close reveal">
            The reaction usually starts with disbelief. Then it becomes the question that matters:{" "}
            <span className="dim">"Can you do this for our brand?"</span>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="wrap">
          <div className="kicker reveal">How it works</div>
          <h2 className="reveal">
            By the time the film arrives, <span className="dim">you've already seen it.</span>
          </h2>
          <p className="subhead reveal">Every stage approved before the next one begins.</p>
          <div className="intro reveal">
            <p>
              Most creative work is a gamble. You brief someone, wait, and hope the result matches
              what you had in your head.
            </p>
            <p>
              <strong>This process is built so that never happens.</strong>
            </p>
          </div>
          <div className="steps reveal">
            {steps.map((step) => (
              <div className="step" key={step.n}>
                <div className="step-n">{step.n}</div>
                <div className="step-t">
                  <b>{step.title}</b>
                  {step.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="close reveal">
            You approved the concept. You approved the script. You approved the storyboard. You
            approved the characters.{" "}
            <b>By the time the film arrives, the only thing left is to use it.</b>
          </div>
        </div>
      </section>

      <section className="offer">
        <div className="wrap">
          <div className="kicker reveal">What you get</div>
          <h2 className="reveal">
            Here's what you're <span className="dim">actually getting.</span>
          </h2>
          <p className="subhead reveal">
            One project with Chatturai is not one video. It's a complete campaign asset package
            built from one production cycle.
          </p>
          <div className="deliverset reveal">
            {deliverables.map((item) => (
              <div className="dgroup" key={item.n}>
                <h3>
                  <span className="mk">{item.n}</span>
                  {item.title}
                </h3>
                {"format" in item ? <div className="fmt">{item.format}</div> : null}
                <p style={"format" in item ? { marginTop: 9 } : undefined}>{item.body}</p>
              </div>
            ))}
          </div>
          <div className="guarantee reveal">
            <div className="kicker">The guarantee</div>
            <div className="big">If the final film looks AI-generated, you don't pay.</div>
            <div className="rule">
              Show it to five people from outside your team. If the majority can identify it as
              AI-made, you do not pay.
            </div>
            <p>No complicated test. No vague standard. Five people, majority rule.</p>
            <p>
              We make this guarantee because your biggest fear is real: publishing something that
              looks fake can make a premium brand look cheap. We'd rather carry that risk than ask
              you to.
            </p>
          </div>
        </div>
        <div className="midcta reveal" style={{ marginTop: 56 }}>
          <Cta centered />
        </div>
      </section>

      <section className="faq">
        <div className="wrap">
          <div className="kicker reveal">Common questions</div>
          <div className="acc reveal">
            {faqs.map((faq) => (
              <div className="acc-item" key={faq.q}>
                <button className="acc-q">{faq.q}</button>
                <div className="acc-a">
                  <div className="acc-a-in">
                    {faq.a.map((answer, index) => (
                      <p key={`${faq.q}-${index}`}>{answer}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final" id="book">
        <div className="wrap">
          <div className="kicker center reveal">Ready to make the film?</div>
          <h2 className="reveal">
            Your brand already knows <span className="dim">what it needs to say.</span>
          </h2>
          <p className="subhead reveal">Let's make the film that says it.</p>
          <p className="body reveal">
            Every day your brand looks smaller than it actually is, it's not just content that's
            missing. It's trust, perception, and emotional connection your audience should already
            be building with you.
          </p>
          <div className="qualify reveal">
            <div className="qbox yes">
              <h4>This call is for you if</h4>
              <ul>
                <li>
                  <span className="mk">✓</span>
                  <span>You're a founder, marketing head, brand lead, or decision-maker</span>
                </li>
                <li>
                  <span className="mk">✓</span>
                  <span>You have a real campaign, launch, occasion, or brand story to produce</span>
                </li>
                <li>
                  <span className="mk">✓</span>
                  <span>
                    You want a premium cinematic brand film, not cheap content to fill a calendar
                  </span>
                </li>
                <li>
                  <span className="mk">✓</span>
                  <span>You have budget allocated for serious creative work if the fit is right</span>
                </li>
              </ul>
            </div>
            <div className="qbox no">
              <h4>This is not for</h4>
              <ul>
                <li>
                  <span className="mk">×</span>
                  <span>Talking-head avatar videos</span>
                </li>
                <li>
                  <span className="mk">×</span>
                  <span>Cheap bulk content</span>
                </li>
                <li>
                  <span className="mk">×</span>
                  <span>Exact mechanical product demos</span>
                </li>
                <li>
                  <span className="mk">×</span>
                  <span>$500 freelancer comparisons</span>
                </li>
                <li>
                  <span className="mk">×</span>
                  <span>Casual AI experiments</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="close reveal">
            If you're looking for the cheapest way to make more content, Chatturai is the wrong
            place.{" "}
            <strong>
              If you're looking for the right way to make your brand finally feel like what it
              actually is, apply below.
            </strong>
          </div>
          <div className="booking reveal">
            <CalBooking />
          </div>
          <div className="micro reveal">
            First draft in 7 to 10 working days. If the final film looks AI-generated, you do not
            pay.
          </div>
        </div>
      </section>

      <footer>
        <div className="logo">
          <LogoMark />
        </div>
        <div>Cinematic brand films, without a shoot.</div>
      </footer>
    </>
  );
}
