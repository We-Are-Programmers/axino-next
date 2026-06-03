type SectionTitleProps = {
  subTitle: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  centered?: boolean;
  className?: string;
  subTitleIcon?: string;
};

export function SectionTitle({
  subTitle,
  title,
  description,
  centered = true,
  className = "",
  subTitleIcon = "/images/icons/sub-title-shape-1.png",
}: SectionTitleProps) {
  const alignClass = centered ? " text-center" : "";

  return (
    <div className={`sec-title${alignClass} aos-init ${className}`} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <span className="sub-title">
        <img className="icon-img animation__rotateY" src={subTitleIcon} alt="" />
        {subTitle}
      </span>
      <h2 className="title text-reveal-anim">{title}</h2>
      {description ? <div className="text">{description}</div> : null}
    </div>
  );
}
