"use client";

import Link from "next/link";
import { useState } from "react";
import { ClientsSection } from "@/components/home/ClientsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

const automationFeatures = [
  { icon: "/images/icons/features4-1.png", title: "Drag & Drop Builder", image: "/images/resource/features4-1.png" },
  { icon: "/images/icons/features4-2.png", title: "Multi-App Integrations", image: "/images/resource/features4-2.png" },
  { icon: "/images/icons/features4-3.png", title: "Smart Triggers & Conditions", image: "/images/resource/features4-3.png" },
  { icon: "/images/icons/features4-4.png", title: "Real-Time Monitoring", image: "/images/resource/features4-4.png" },
];

export function AutomationSaasHome() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <>
      <section className="banner-section-four">
        <span className="bg-shape bg">
          <img className="animation__rotateY" src="/images/banner/banner4-2.png" alt="" />
        </span>
        <div className="banner-slider">
          <div className="banner-slide">
            <div className="inner-container">
              <div className="content-box aos-init" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <div className="inner-box">
                  <h1 className="title">
                    Automate Work. Save Time. <span>Scale Smarter.</span>
                  </h1>
                  <div className="text">
                    Connect your apps, streamline workflows, and focus on what matters —without writing a single line of
                    code.
                  </div>
                  <div className="button-box">
                    <Link href="/about" className="btn-style-five theme-btn">
                      Start Free Trial <i className="fa-classic fa-light fa-angle-right ms-2" />
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
              <div className="image-box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <img src="/images/banner/banner4-1.png" alt="Automation dashboard" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section-two-h4 pb-0 pt-40">
        <div className="outer-box">
          <div className="container">
            <SectionTitle
              className="home4"
              subTitleIcon="/images/icons/sub-title-shape-4.png"
              subTitle=" Our Features"
              title={
                <>
                  Powerful Features to <br />
                  Simplify Your Work Every Day
                </>
              }
            />
            <div className="row">
              <div className="content-colmun col-xl-5 col-lg-6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <div className="features-list">
                  {automationFeatures.map((feature, index) => (
                    <div
                      key={feature.title}
                      role="button"
                      tabIndex={0}
                      className={`features-block-h4${activeFeature === index ? " active" : ""}`}
                      onClick={() => setActiveFeature(index)}
                      onKeyDown={(e) => e.key === "Enter" && setActiveFeature(index)}
                    >
                      <div className="icon">
                        <img src={feature.icon} alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">{feature.title}</h4>
                        <div className="text">
                          It is a long established fact that a reader will be distracted by the readable content
                        </div>
                      </div>
                      <div className="arrow-icon">
                        <i className="icon fa-solid fa-angle-right" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="image-column col-xl-7 col-lg-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <div className="image-box">
                  <img id="service-image" src={automationFeatures[activeFeature].image} alt="Features" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientsSection />
      <FaqSection />
    </>
  );
}
