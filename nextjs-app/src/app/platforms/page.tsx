import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionAnimator from "@/components/SectionAnimator";
import { appDetails } from "@/data/appDetails";

const navItems = [
  { label: "Home", href: "/" },
  { label: "EdTech", href: "#edtech" },
  { label: "Social & Cultural", href: "#social" },
];

export default function PlatformsPage() {
  const edtechApps = appDetails.filter((a) => a.category === "edtech");
  const otherApps = appDetails.filter((a) => a.category !== "edtech");

  return (
    <>
      <Header navItems={navItems} />

      <section className="platforms-hero">
        <div className="container">
          <span className="section-label">Our Platforms</span>
          <h1>The Ecosystem</h1>
          <p>
            Explore our complete suite of AI-powered EdTech platforms and
            culturally rooted regional-language apps.
          </p>
          <Link href="/" className="cta-button">
            &larr; Back to Home
          </Link>
        </div>
      </section>

      <section id="edtech" className="platforms-section">
        <div className="container">
          <span className="section-label">EdTech Ecosystem</span>
          <h2 className="section-title">AI-Powered Platforms for Every Aspirant</h2>
          <div className="platforms-list">
            {edtechApps.map((app) => (
              <SectionAnimator key={app.slug}>
                <div id={app.slug} className="platform-card">
                  <div className="platform-card-header">
                    <div className="platform-icon">
                      <Image
                        src={app.icon}
                        alt={app.name}
                        width={64}
                        height={64}
                        style={{ borderRadius: "12px" }}
                      />
                    </div>
                    <div>
                      <h3>{app.name}</h3>
                      <span className="platform-tagline">{app.tagline}</span>
                      <span className="platform-website">{app.website}</span>
                    </div>
                  </div>
                  <p className="platform-description">{app.description}</p>
                  <ul className="platform-features">
                    {app.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  {app.sections?.map((s) => (
                    <div key={s.heading} className="platform-subsection">
                      <h4>{s.heading}</h4>
                      <p>{s.content}</p>
                    </div>
                  ))}
                </div>
              </SectionAnimator>
            ))}
          </div>
        </div>
      </section>

      <section id="social" className="platforms-section platforms-section-alt">
        <div className="container">
          <span className="section-label">Social &amp; Cultural Apps</span>
          <h2 className="section-title">Regional-Language Platforms for Every Indian</h2>
          <div className="platforms-list">
            {otherApps.map((app) => (
              <SectionAnimator key={app.slug}>
                <div id={app.slug} className="platform-card">
                  <div className="platform-card-header">
                    <div className="platform-icon">
                      <Image
                        src={app.icon}
                        alt={app.name}
                        width={64}
                        height={64}
                        style={{ borderRadius: "12px" }}
                      />
                    </div>
                    <div>
                      <h3>{app.name}</h3>
                      <span className="platform-tagline">{app.tagline}</span>
                      <span className="platform-website">{app.website}</span>
                    </div>
                  </div>
                  <p className="platform-description">{app.description}</p>
                  <ul className="platform-features">
                    {app.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  {app.sections?.map((s) => (
                    <div key={s.heading} className="platform-subsection">
                      <h4>{s.heading}</h4>
                      <p>{s.content}</p>
                    </div>
                  ))}
                </div>
              </SectionAnimator>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
