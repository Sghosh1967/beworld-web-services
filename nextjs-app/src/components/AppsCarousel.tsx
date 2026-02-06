import Image from "next/image";
import SectionAnimator from "./SectionAnimator";
import { allApps } from "@/data/apps";

interface AppsCarouselProps {
  showNewsTale?: boolean;
}

const newsTaleApp = {
  name: "NewsTale",
  description: "News & Stories",
  icon: "/images/nt c logo.jpg",
  url: "#",
};

export default function AppsCarousel({ showNewsTale = false }: AppsCarouselProps) {
  const items = showNewsTale
    ? [...allApps, newsTaleApp]
    : [...allApps];
  const doubled = [...items, ...items];

  return (
    <SectionAnimator>
      <section id="apps" className="apps">
        <div className="container">
          <h2>Our Apps</h2>
        </div>
        <div className="apps-carousel-container">
          <div className="apps-carousel">
            {doubled.map((app, i) => (
              <a
                key={`${app.name}-${i}`}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="carousel-item"
              >
                <div className="carousel-icon">
                  <Image
                    src={app.icon}
                    alt={app.name}
                    width={180}
                    height={80}
                    style={{
                      maxHeight: "80px",
                      maxWidth: "180px",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="carousel-text">
                  <h3>{app.name}</h3>
                  <p>{app.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SectionAnimator>
  );
}
