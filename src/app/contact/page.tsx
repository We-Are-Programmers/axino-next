import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageWrapper currentPath="/contact" headerVariant="absolute">
      <PageBanner title="Contact Us" />
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="sec-title">
                <span className="sub-title">
                  <img className="icon-img animation__rotateY" src="/images/icons/sub-title-shape-1.png" alt="" />
                  Get in Touch
                </span>
                <h2 className="title">We&apos;d Love to Hear From You</h2>
                <div className="text">Reach out for demos, support, or partnership inquiries.</div>
              </div>
              <ul className="contact-list">
                <li>
                  <i className="icon lnr-icon-phone" />
                  <span className="title">Phone</span>
                  <div className="text">
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                  </div>
                </li>
                <li>
                  <i className="icon lnr-icon-envelope1" />
                  <span className="title">Email</span>
                  <div className="text">
                    <a href="mailto:info@example.com">info@example.com</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-7">
              <form className="contact-form" method="post" action="#">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="email" name="email" placeholder="Email Address" required />
                  </div>
                  <div className="col-md-12 form-group">
                    <textarea name="message" placeholder="Message" required />
                  </div>
                  <div className="col-md-12 form-group">
                    <button type="submit" className="theme-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
