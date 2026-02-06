import Image from "next/image";
import Link from "next/link";
import SectionAnimator from "./SectionAnimator";
import { edtechApps, otherApps } from "@/data/apps";

const appSummaries: Record<string, string> = {
  JobSafal:
    "AI-driven career readiness platform for Indian government job aspirants with personalised job matching and exam notifications.",
  ExamSafal:
    "Revolutionary exam prep with 50,000+ AI-generated practice questions across 30+ exams, starting at just \u20B915 per test.",
  "Current Affairs":
    "Daily curated news and general knowledge updates essential for government exam preparation, powered by AI curation.",
  "AI-Sir":
    "Intelligent AI tutoring system providing real-time doubt resolution and personalised study plans for competitive exams.",
  BeWorld:
    "Bengali-language social networking platform connecting the Bengali community with culturally relevant content and discussions.",
  TelWorld:
    "Telugu-language social platform bringing together the Telugu-speaking community through regional content and networking.",
  "Bengali Panjika":
    "Traditional Bengali calendar and panchang with daily tithi, nakshatra, and cultural event information.",
  "Telugu Panchangam":
    "Traditional Telugu calendar providing daily panchangam details, muhurtham timings, and festival information.",
};

export default function EcosystemPreview() {
  return (
    <SectionAnimator>
      <section className="ecosystem-preview">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">Our EdTech Ecosystem</span>
          <h2 className="section-title">
            AI-Powered Platforms for Every Aspirant
          </h2>
          <p className="section-subtitle">
            Four integrated platforms covering the complete journey from career discovery to exam mastery.
          </p>
          <div className="ecosystem-grid">
            {edtechApps.map((app) => (
              <Link
                href={`/platforms#${app.name.toLowerCase().replace(/[\s-]+/g, "")}`}
                key={app.name}
                className="ecosystem-card"
              >
                <div className="ecosystem-card-header">
                  <div className="ecosystem-card-icon">
                    <Image
                      src={app.icon}
                      alt={app.name}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <h3>{app.name}</h3>
                    <span className="card-tagline">{app.description}</span>
                  </div>
                </div>
                <p className="card-desc">{appSummaries[app.name]}</p>
                <span className="card-link">Learn more &rarr;</span>
              </Link>
            ))}
          </div>

          <span className="section-label" style={{ marginTop: "3rem", display: "inline-block" }}>
            Social &amp; Cultural Apps
          </span>
          <h2 className="section-title">
            Regional-Language Platforms
          </h2>
          <p className="section-subtitle">
            Culturally rooted apps celebrating India&apos;s diverse languages and traditions.
          </p>
          <div className="ecosystem-grid">
            {otherApps.map((app) => (
              <Link
                href={`/platforms#${app.name.toLowerCase().replace(/[\s-]+/g, "")}`}
                key={app.name}
                className="ecosystem-card"
              >
                <div className="ecosystem-card-header">
                  <div className="ecosystem-card-icon">
                    <Image
                      src={app.icon}
                      alt={app.name}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <h3>{app.name}</h3>
                    <span className="card-tagline">{app.description}</span>
                  </div>
                </div>
                <p className="card-desc">{appSummaries[app.name]}</p>
                <span className="card-link">Learn more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SectionAnimator>
  );
}
