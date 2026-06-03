import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <PageWrapper currentPath="/about" headerVariant="absolute">
      <PageBanner title="About Us" />
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="sec-title">
                <span className="sub-title">
                  <img className="icon-img animation__rotateY" src="/images/icons/sub-title-shape-1.png" alt="" />
                  About Company
                </span>
                <h2 className="title">We Help Teams Work Smarter Every Day</h2>
                <div className="text">
                  Axino is a modern SaaS platform built to simplify task management, improve collaboration, and help
                  businesses scale with confidence.
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <figure className="image">
                <img src="/images/resource/about1-1.jpg" alt="About Axino" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
