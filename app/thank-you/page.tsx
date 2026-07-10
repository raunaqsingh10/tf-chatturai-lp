import LandingEffects from "@/components/LandingEffects";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Call confirmed · Chatturai",
  description:
    "Your Brand Film Fit Call is booked. Here is what to expect and how to prepare.",
};

const prepPoints = [
  "Your campaign, launch, occasion, or brand story.",
  "Any reference films, scripts, brand guidelines, or examples you like.",
  "Your timeline, budget context, and anyone else who needs to approve creative direction or spend.",
];

function LogoMark() {
  return (
    <Image
      src="/chatturai-logo.png"
      alt="Chatturai"
      className="logo-img"
      width="640"
      height="620"
      priority
    />
  );
}

export default function ThankYouPage() {
  return (
    <>
      <LandingEffects />

      <nav className="site-nav thank-nav" aria-label="Primary">
        <Link href="/" className="logo" aria-label="Chatturai home">
          <LogoMark />
        </Link>
      </nav>

      <main className="thank-page">
        <section className="thank-hero" aria-labelledby="thank-title">
          <div className="thank-wrap">
            <div className="thank-mark reveal" aria-hidden="true">
              <span />
            </div>
            <div className="eyebrow reveal">Call confirmed</div>
            <h1 id="thank-title" className="reveal">
              Your Brand Film Fit Call is booked.
            </h1>
            <p className="thank-sub reveal">
              We have reserved this time to understand your brand, the film you want to create, and
              whether Chatturai is the right team to build it.
            </p>
            <p className="thank-confirm reveal">
              You should receive a calendar invite and call details by email. Please add it to your
              calendar now.
            </p>
          </div>
        </section>

        <section className="thank-section thank-expect">
          <div className="thank-wrap">
            <div className="kicker center reveal">What to expect</div>
            <h2 className="reveal">This is a working conversation.</h2>
            <div className="thank-copy reveal">
              <p>
                On the call, we will look at what you are trying to communicate, why the usual
                production options have not worked, and what kind of cinematic brand film would make
                sense for your campaign, launch, or brand story.
              </p>
              <p>
                By the end, you should know whether Chatturai is the right fit, what the next step
                would look like, and what we would need from you to move forward.
              </p>
            </div>
          </div>
        </section>

        <section className="thank-section thank-prepare">
          <div className="thank-wrap">
            <div className="kicker center reveal">Before the call</div>
            <h2 className="reveal">Come prepared with three things.</h2>
            <div className="prep-list reveal">
              {prepPoints.map((point, index) => (
                <div className="prep-item" key={point}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
            <p className="decision-note reveal">
              If someone else needs to approve the project, invite them to the call now. The
              strongest calls happen when the person who owns the decision sees the work and the
              process directly.
            </p>
          </div>
        </section>

        <section className="thank-section thank-final">
          <div className="thank-wrap">
            <div className="kicker center reveal">Final note</div>
            <h2 className="reveal">Please treat the time as reserved.</h2>
            <div className="thank-copy reveal">
              <p>
                We take every Brand Film Fit Call seriously. If the project is no longer a priority
                or the timing no longer works, please use the calendar link to reschedule or cancel
                before the call.
              </p>
              <p className="closing-line">
                We look forward to understanding what your brand needs to say and whether we can
                help you turn it into a film people actually feel.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
