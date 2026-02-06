import SectionAnimator from "./SectionAnimator";

export default function About() {
  return (
    <SectionAnimator>
      <section id="about" className="about">
        <div className="container">
          <h2>About BeWorld Web Services</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>The BeWorld Approach</h3>
              <p>
                At BeWorld Web Services Pvt. Ltd., we believe technology should be
                meaningful, inclusive, and built with purpose. We focus on creating
                digital products that are relevant, scalable, and adaptable across
                diverse use cases and audiences.
              </p>
              <p>
                Our mission is to deliver high-quality experiences through intuitive
                platforms that inform, connect, and empower users&mdash;regardless of
                language, location, or background.
              </p>
              <p>
                From community social apps and astrology tools to multilingual news
                platforms and educational portals, we are building a versatile digital
                ecosystem driven by innovation and impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionAnimator>
  );
}
