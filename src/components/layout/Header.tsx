"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { mainNavigation } from "@/lib/navigation";
import { Navigation } from "./Navigation";

type HeaderProps = {
  currentPath?: string;
  variant?: "default" | "absolute";
};

export function Header({ currentPath = "/", variant = "default" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const openMobile = useCallback(() => {
    setMobileOpen(true);
    document.body.classList.add("mobile-menu-visible");
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    document.body.classList.remove("mobile-menu-visible");
  }, []);

  const headerClass =
    variant === "absolute"
      ? "main-header header-style-one position-absolute"
      : "main-header header-style-one";

  return (
    <header className={headerClass}>
      <div className="container">
        <div className="header-lower">
          <div className="inner-container">
            <div className="main-box">
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo.png" alt="Axino Logo" />
                  </Link>
                </div>
              </div>

              <div className="nav-outer">
                <nav className="nav main-menu">
                  <Navigation items={mainNavigation} currentPath={currentPath} />
                </nav>
              </div>

              <div className="action-box">
                <div className="header-btn">
                  <Link className="header-btn-main theme-btn" href="/">
                    <span className="btn-text">Sign Up</span>
                  </Link>
                </div>
                <button
                  type="button"
                  className="mobile-nav-toggler"
                  aria-label="Open menu"
                  aria-expanded={mobileOpen}
                  onClick={openMobile}
                >
                  <div className="shape-line-img">
                    <i className="fas fa-bars" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`mobile-menu${mobileOpen ? " visible" : ""}`}>
        <div className="menu-backdrop" onClick={closeMobile} role="presentation" />
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link href="/" onClick={closeMobile}>
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>
            <button type="button" className="close-btn" aria-label="Close menu" onClick={closeMobile}>
              <i className="icon fa fa-times" />
            </button>
          </div>
          <ul className="navigation clearfix">
            <Navigation items={mainNavigation} currentPath={currentPath} />
          </ul>
          <ul className="contact-list-one">
            <li>
              <i className="icon lnr-icon-envelope1" />
              <span className="title">Send Email</span>
              <div className="text">
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
            </li>
          </ul>
          <ul className="social-links">
            <li>
              <a href="#">
                <i className="icon fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon fab fa-pinterest-p" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon fab fa-vimeo-v" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="search-popup">
        <span className="search-back-drop" />
        <button type="button" className="close-search" aria-label="Close search">
          <span className="fa fa-times" />
        </button>
        <div className="search-inner">
          <form method="post" action="/">
            <div className="form-group">
              <input type="search" name="search-field" defaultValue="" placeholder="Search..." required />
              <button type="submit" aria-label="Search">
                <i className="fa fa-search" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="sticky-header">
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <Link href="/">
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>
            <div className="nav-outer">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix">
                    <Navigation items={mainNavigation} currentPath={currentPath} />
                  </ul>
                </div>
              </nav>
              <button type="button" className="mobile-nav-toggler" aria-label="Open menu" onClick={openMobile}>
                <span className="icon lnr-icon-bars" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
