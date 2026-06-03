"use client";

import Link from "next/link";
import { useState } from "react";
import { faqCategories, faqItems } from "@/lib/data/home";

const faqAnswer =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley";

function FaqAccordion({
  openIndex,
  onToggle,
}: {
  openIndex: number;
  onToggle: (index: number) => void;
}) {
  return (
    <ul className="accordion-box">
      {faqItems.map((question, index) => {
        const isOpen = openIndex === index;
        return (
          <li
            key={question}
            className={`accordion block${isOpen ? " active-block" : ""}${index > 0 ? " border-top-0" : ""}`}
          >
            <button
              type="button"
              className={`acc-btn${isOpen ? " active" : ""}`}
              onClick={() => onToggle(index)}
            >
              {index + 1}. {question}
              <div className="icon far fa-angle-down" />
            </button>
            <div className={`acc-content${isOpen ? " current" : ""}`}>
              <div className="content">
                <div className="text">{faqAnswer}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faqs-section-layout1 pt-0">
      <div className="outer-box">
        <div className="shape-19 tm-gsap-img-parallax">
          <img src="/images/icons/shape-19.png" alt="" />
        </div>
        <div className="container">
          <div className="sec-outer aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="sec-title">
              <span className="sub-title">
                <img className="icon-img animation__rotateY" src="/images/icons/sub-title-shape-1.png" alt="" /> FAQS{" "}
              </span>
              <h2 className="title text-reveal-anim">
                Have Questions in Your <br />
                Mind? Get the Answers Now
              </h2>
            </div>
            <div className="right-box">
              <h6>
                Still have question <Link href="/contact">Get in Touch</Link>
              </h6>
            </div>
          </div>
          <div className="faqs-outer aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            {faqCategories.map((category, index) => (
              <div key={category} className="faqs-block-layout1">
                <div
                  className={`inner-box${index === faqCategories.length - 1 ? " mb-0" : ""}${activeCategory === index ? " active" : ""}`}
                >
                  <button
                    type="button"
                    className="btn-faq"
                    onClick={() => {
                      setActiveCategory(index);
                      setOpenIndex(0);
                    }}
                  >
                    {category}
                  </button>
                  <div className="faqs-box" style={{ display: activeCategory === index ? "block" : "none" }}>
                    <FaqAccordion openIndex={openIndex} onToggle={setOpenIndex} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
