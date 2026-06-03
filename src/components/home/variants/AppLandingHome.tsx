import Link from "next/link";
import { ClientsSection } from "@/components/home/ClientsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { FaqSection } from "@/components/home/FaqSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { appLandingFeatures, clientLogosHome2 } from "@/lib/data/home-variants";

export function AppLandingHome() {
  return (
    <>
      <section className="banner-section-two">
        <div className="bg bg-image">
          <img src="/images/banner/banner-bg1-1.png" alt="" />
        </div>
        <div className="banner-slider">
          <div className="banner-slide">
            <div className="inner-container">
              <div className="content-box aos-init" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <div className="inner-box">
                  <h1 className="title">
                    Manage Your Business, <span>Smarter & Faster</span>
                  </h1>
                  <div className="text">
                    All-in-one business management app designed to streamline tasks, track performance, and keep your
                    team connected — anytime, anywhere.
                  </div>
                  <div className="button-box">
                    <Link href="/about" className="btn-style-five theme-btn">
                      Download Now <i className="fa-classic fa-light fa-angle-right ms-2" />
                    </Link>
                    <a
                      href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
                      className="play-now banner-play-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon fa-solid fa-play" />
                      See How It Works
                    </a>
                  </div>
                </div>
              </div>
              <div className="image-box aos-init" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <figure className="image mb-0">
                  <img src="/images/banner/banner2-1.png" alt="App preview" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientsSection logos={clientLogosHome2} />

      <section className="process-section-h2 pt-0">
        <div className="shape-dot-1 tm-gsap-img-parallax">
          <img src="/images/icons/shape-21.png" alt="" />
        </div>
        <div className="container">
          <SectionTitle
            className="home2"
            subTitle=" Step Process"
            subTitleIcon="/images/icons/sub-title-shape-2.png"
            title={
              <>
                Simple Setup, <br />
                Powerful Performance
              </>
            }
          />
          <div className="row g-24">
            {appLandingFeatures.map((feature) => (
              <div
                key={feature.title}
                className={`feature-block-h2 ${feature.col} aos-init`}
                data-aos={feature.aos}
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="inner-block pb-0">
                  <div className="content-box">
                    <div className="icon-box">
                      <div className="icon">
                        <img src={feature.icon} alt="" />
                      </div>
                    </div>
                    <h4 className="title">{feature.title}</h4>
                    <div className="text">{feature.text}</div>
                  </div>
                  <div className="image-box">
                    <figure className="image mb-0">
                      <img src={feature.image} alt={feature.title} />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <FaqSection />
    </>
  );
}
