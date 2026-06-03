import Link from "next/link";
import { heroContent } from "@/lib/data/home";
import { ThemeButton } from "@/components/ui/ThemeButton";

export function BannerSection() {
  return (
    <section className="banner-section-one">
      <div className="outer-box">
        <div className="shape-2 tm-gsap-img-parallax">
          <img src="/images/icons/shape-10.png" alt="" />
        </div>
        <div className="banner-slider">
          <div className="banner-slide">
            <div className="inner-container">
              <div className="content-box aos-init" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <div className="inner-box">
                  <div className="sub-title">{heroContent.subTitle}</div>
                  <h1 className="title">
                    {heroContent.title}
                    <span>{heroContent.titleHighlight}</span>
                  </h1>
                  <div className="text">{heroContent.text}</div>
                  <div className="button-box">
                    <ThemeButton href={heroContent.primaryCta.href} label={heroContent.primaryCta.label} />
                    <ThemeButton
                      href={heroContent.secondaryCta.href}
                      label={heroContent.secondaryCta.label}
                      variant="dark"
                    />
                  </div>
                  {heroContent.shapeButtons.map((btn, index) => (
                    <div key={btn.label} className={`shape-btn${index === 1 ? "2" : ""} icon-bounce`}>
                      <Link className={`shape-btn-main${index === 1 ? "2" : ""} theme-btn`} href={btn.href}>
                        <span className="btn-text">{btn.label}</span>
                      </Link>
                      <img className="shape-btn-img" src={btn.image} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="image-box aos-init" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <div className="shape-1" />
                <figure className="image mb-0">
                  <img src={heroContent.bannerImage} alt="Dashboard preview" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
