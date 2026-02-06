import SectionAnimator from "./SectionAnimator";

export default function Hero() {
  return (
    <SectionAnimator>
      <section id="home" className="hero">
        <div className="container">
          <h1>Building India&apos;s Digital Future in Every Native Tongue</h1>
          <p>
            Creating culturally rooted mobile apps in regional Indian languages,
            connecting communities through technology that speaks their language.
          </p>
          <a href="#apps" className="cta-button">
            Explore Our Apps
          </a>
        </div>
      </section>
    </SectionAnimator>
  );
}
