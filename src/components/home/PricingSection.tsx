"use client";

import { useState } from "react";
import { pricingFeatures } from "@/lib/data/home";
import { SectionTitle } from "@/components/ui/SectionTitle";

function PricingCard({
  price,
  popular,
  columnClass = "col-md-6",
}: {
  price: string;
  popular?: boolean;
  columnClass?: string;
}) {
  return (
    <div className={`${columnClass} aos-init`} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
      <div className="pricing-card">
        <div className="inner-box">
          {popular ? <div className="popular-ribbon">Popular</div> : null}
          <div className="category">Growth</div>
          <div className="subtitle">
            For Growing Businesses <br />
            <span>And Marketers</span>
          </div>
          <div className="best-offer mb-20">
            <div className="price-area">
              <div className="price">
                {price} <span>/Mo</span>
              </div>
              <button type="button" className="get-started">
                Get Started <i className="fa-classic fa-light fa-angle-right" />
              </button>
            </div>
            <div>
              <div className="limited-offer">
                <div className="badge-bg me-1 mb-3 mb-md-0 me-3">
                  <span className="texts">50%</span>
                  <small>OFF</small>
                </div>
                <div className="limit">
                  Limited <br />
                  Time Offer
                </div>
              </div>
            </div>
          </div>
          <div className="feature-lists">
            <ul className="features-list">
              {pricingFeatures.slice(0, 4).map((feature) => (
                <li key={feature}>
                  <i className="icon fa-classic far fa-check" />
                  {feature}
                </li>
              ))}
            </ul>
            <ul className="features-list">
              {pricingFeatures.slice(4).map((feature) => (
                <li key={feature}>
                  <i className="icon fa-classic far fa-check" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingPlans() {
  return (
    <div className="row">
      <PricingCard price="$19.00" popular />
      <PricingCard price="$24.00" columnClass="col-md-6 aos-init" />
      <div className="col-xl-12 aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div className="pricing-card style-two mb-0">
          <div className="inner-box">
            <div className="row">
              <div className="col-lg-4">
                <div className="category">Custom</div>
                <div className="subtitle">For agencies & large-scale team</div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 offset-xl-1">
                <div className="feature-lists">
                  <ul className="features-list">
                    {pricingFeatures.slice(0, 4).map((feature) => (
                      <li key={feature}>
                        <i className="icon fa-classic far fa-check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 offset-xl-1">
                <div className="best-offer">
                  <div className="price-area">
                    <div className="price">
                      $30.11 <span>/ One Time Fee</span>
                    </div>
                    <button type="button" className="get-started">
                      Get Started <i className="fa-classic fa-light fa-angle-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="pricing-table-section-h1 pt-0">
      <div className="shape-one tm-gsap-img-parallax">
        <img src="/images/icons/shape-15.png" alt="" />
      </div>
      <div className="container">
        <SectionTitle
          subTitle=" Pricing Plan "
          title={
            <>
              Scale Your Productivity <br />
              With the Right Plan
            </>
          }
        />
        <div className="d-flex justify-content-center mt-3 mt-md-0">
          <div className="pricing-two__tab wow fadeInUp" data-wow-delay=".4s">
            <nav>
              <div className="nav nav-tabs" role="tablist">
                <button
                  type="button"
                  className={`nav-link${billing === "monthly" ? " active" : ""}`}
                  onClick={() => setBilling("monthly")}
                  role="tab"
                  aria-selected={billing === "monthly"}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  className={`nav-link${billing === "yearly" ? " active" : ""}`}
                  onClick={() => setBilling("yearly")}
                  role="tab"
                  aria-selected={billing === "yearly"}
                >
                  Yearly
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="pricing__tab-content">
          <div className="tab-content">
            <div className={`tab-pane fade${billing === "monthly" ? " show active" : ""}`} role="tabpanel">
              <PricingPlans />
            </div>
            <div className={`tab-pane fade${billing === "yearly" ? " show active" : ""}`} role="tabpanel">
              <PricingPlans />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
