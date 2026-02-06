import SectionAnimator from "./SectionAnimator";

const positions = [
  "Mobile Developers",
  "UI/UX Designers",
  "Backend Engineers",
  "Digital Marketers",
  "Content Creators",
  "Community Managers",
];

export default function Careers() {
  return (
    <SectionAnimator>
      <section id="careers" className="careers">
        <div className="container">
          <h2>Join Our Mission</h2>
          <div className="careers-content">
            <p>
              Be a part of the team shaping smart, scalable digital solutions across
              social, news, education, and utility platforms.
            </p>
            <div className="positions">
              {positions.map((pos) => (
                <div key={pos} className="position-tag">
                  {pos}
                </div>
              ))}
            </div>
            <a href="#contact" className="cta-button">
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </SectionAnimator>
  );
}
