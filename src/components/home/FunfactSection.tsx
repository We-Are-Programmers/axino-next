"use client";

import { funfacts } from "@/lib/data/home";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CountUpStat } from "@/components/ui/CountUpStat";

export function FunfactSection() {
  return (
    <section className="funfact-section-home1">
      <div className="container">
        <div className="row">
          <div className="sec-title-column mt-20 col-lg-5">
            <div className="inner-column">
              <SectionTitle
                centered={false}
                subTitle=" Fun Facts"
                title={
                  <>
                    Milestones That <br />
                    Showcase Our Growth
                  </>
                }
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
              />
              <div className="video-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <div className="inner-box">
                  <div className="bg bg-image">
                    <img src="/images/resource/video1-bg1.jpg" alt="" />
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
                    className="play-now"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon fa-solid fa-play" />
                    <span className="ripple" />
                  </a>
                  <h4 className="title mb-0">
                    See how our platform helps you <br />
                    go from idea to campaign
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 offset-xl-1">
            <div className="funfact-wrap">
              {funfacts.map((item, index) => (
                <div
                  key={item.title.join("-")}
                  className="ks_fade_anim"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="funfact-item">
                    <div className="ff-head">
                      <span className="icon">
                        <img src={item.icon} alt="" />
                      </span>
                      <div className="count-box">
                        <CountUpStat value={item.value} />
                        {item.suffix}
                      </div>
                    </div>
                    <h6 className="title">
                      {item.title[0]} <br />
                      {item.title[1]}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
