import Link from "next/link";
import { footerLinks } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="main-footer footer-style-one">
      <div className="widgets-section">
        <div className="footer-top">
          <div className="container">
            <div className="outer-box-top">
              <div className="content-box">
                <h3 className="title">Sign up now or never!</h3>
                <div className="text">Stay up to date with the latest news, announcements, and articles.</div>
              </div>
              <div className="subscribe-widget">
                <div className="subscribe-form-one">
                  <form method="post" action="#">
                    <div className="form-group">
                      <label htmlFor="email" className="sr-only">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="email"
                        defaultValue=""
                        placeholder="Email Address"
                        required
                      />
                      <button type="submit" className="theme-btn" aria-label="Submit email">
                        <i className="icon flaticon-paper-plane" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="footer-widget about-widget">
                  <div className="logo">
                    <img src="/images/logo.png" alt="Axino" />
                  </div>
                  <div className="text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry&apos;s standard dummy text ever since
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 offset-xl-3">
                <div className="row">
                  <div className="footer-column col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
                      <h6 className="widget-title">Company</h6>
                      <div className="widget-content">
                        <ul className="user-links">
                          {footerLinks.company.map((link) => (
                            <li key={link.label}>
                              <Link href={link.href}>{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-column col-xxl-5 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="footer-widget links-widget ms-0 ms-xxl-4 wow fadeInLeft" data-wow-delay="200ms">
                      <h6 className="widget-title">Useful Link</h6>
                      <div className="widget-content">
                        <ul className="user-links">
                          {footerLinks.useful.map((link) => (
                            <li key={link.label}>
                              <Link href={link.href}>{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-column col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
                      <h6 className="widget-title">Product</h6>
                      <div className="widget-content">
                        <ul className="user-links">
                          {footerLinks.product.map((link) => (
                            <li key={link.label}>
                              <Link href={link.href}>{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-two">
          <div className="container">
            <div className="inner-container">
              <div className="copyright-text">© Copyright 2025 by Company.com</div>
              <ul className="policy-link">
                <li>
                  <Link href="#">Terms & Condition</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
