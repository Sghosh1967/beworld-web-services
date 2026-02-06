import SectionAnimator from "./SectionAnimator";

export default function FounderNote() {
  return (
    <SectionAnimator>
      <section id="founder" className="founder-section">
        <div className="container">
          <h2>Note from the Founder</h2>
          <div className="founder-note">
            <div className="founder-message">
              <p className="greeting">Dear Friends,</p>
              <p>
                When I started BeWorld Web Services, I had a simple vision: to ensure
                that technology speaks the language of every Indian, literally and
                culturally. Growing up, I watched many in our communities struggle with
                English-only digital platforms, feeling left behind in the digital
                revolution.
              </p>
              <p>
                Our apps aren&apos;t just translated versions of global platforms &ndash;
                they&apos;re built from the ground up with deep respect for regional
                cultures, traditions, and ways of life. Whether it&apos;s checking
                auspicious times in Bengali Panjika, connecting with your community on
                BeWorld, or finding opportunities through JobSafal, each product reflects
                our commitment to making technology truly inclusive.
              </p>
              <p>
                We believe that India&apos;s digital future should be written in all her
                languages, celebrate all her cultures, and empower every citizen
                regardless of their linguistic background. This isn&apos;t just our
                business model; it&apos;s our mission and our responsibility.
              </p>
              <p>
                Thank you for being part of this journey. Together, we&apos;re not just
                building apps &ndash; we&apos;re building bridges between tradition and
                technology, ensuring no one is left behind.
              </p>
              <p className="signature">
                With warm regards,
                <br />
                <strong>Ishana Ghosh</strong>
                <br />
                Founder &amp; MD
                <br />
                BeWorld Web Services Pvt. Ltd.
              </p>
            </div>
            <div className="founder-connect">
              <h3>Let&apos;s Connect</h3>
              <p>I&apos;d love to hear your thoughts and suggestions</p>
              <div className="connect-links">
                <a href="mailto:contact@mybeworld.com" className="connect-button">
                  Email Us
                </a>
                <a
                  href="https://www.linkedin.com/company/mybeworld/"
                  className="connect-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="company-contact">
                <p>
                  <strong>General Inquiries:</strong> contact@mybeworld.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionAnimator>
  );
}
