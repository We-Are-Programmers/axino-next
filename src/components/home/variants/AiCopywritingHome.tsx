import Link from "next/link";
import { FaqSection } from "@/components/home/FaqSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CountUpStat } from "@/components/ui/CountUpStat";

const aiFeatures = [
  { icon: "/images/icons/ai-feature-icon-1.png", title: "Blog & Article Writing" },
  { icon: "/images/icons/ai-feature-icon-2.png", title: "Ad Copy Generator" },
  { icon: "/images/icons/ai-feature-icon-3.png", title: "Email Sequences" },
  { icon: "/images/icons/ai-feature-icon-4.png", title: "Social Media Posts" },
];

export function AiCopywritingHome() {
  return (
    <>
      <section className="banner-section-three">
        <div className="container">
          <div className="hero-content aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <h1 className="hero-title">
              AI-Powered <span>Copywriting</span> for Business Need
            </h1>
            <p>
              Generate high-converting copy in seconds—ads, emails, blogs, and more. AI-powered, lightning-fast, and
              tailored to your brand voice.
            </p>
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
        <div className="hero-ai-thumb">
          <div className="banner-images1 aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <img src="/images/banner/ai-banner-shape1.png" alt="" />
          </div>
          <div className="banner-images4">
            <img src="/images/banner/ai-banner-shape2.png" alt="" />
          </div>
        </div>
        <div className="feature-outer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="hero-feature-box">
                  <div className="inner-box">
                    <div className="count-box">
                      <CountUpStat value={10} />x
                    </div>
                    <div className="text">
                      Write 10x faster <br />
                      without losing quality
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-feature-box2">
                  <div className="inner-box">
                    <div className="image">
                      <img src="/images/resource/feature1.png" alt="" />
                    </div>
                    <Link href="/contact" className="btn-style-five theme-btn">
                      Generate Idea <i className="fa-classic fa-light fa-angle-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="hero-feature-box style-2">
                  <div className="inner-box">
                    <div className="count-box">
                      <CountUpStat value={80} />%
                    </div>
                    <div className="text">
                      Save up to 80% in <br />
                      content creation costs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section-layout3">
        <div className="container">
          <SectionTitle
            className="home3"
            subTitleIcon="/images/icons/sub-title-shape-3.png"
            subTitle=" Features "
            title={
              <>
                Powerful Features to <br /> Simplify Your Work Every Day
              </>
            }
            description="Powerful AI Features for Every Writing Need"
          />
          <div className="row">
            {aiFeatures.map((feature, index) => (
              <div key={feature.title} className="col-xl-3 col-md-6">
                <div
                  className="feature-box-ai"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="inner-box">
                    <div className="icon">
                      <img src={feature.icon} alt="" />
                    </div>
                    <h6 className="title">
                      <Link href="/services/task-management">{feature.title}</Link>
                    </h6>
                    <div className="text">Lorem Ipsum is simply dummy text of the printing</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
