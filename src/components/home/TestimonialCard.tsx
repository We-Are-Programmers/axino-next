type TestimonialCardProps = {
  name: string;
  role: string;
  image: string;
  text: string;
};

export function TestimonialCard({ name, role, image, text }: TestimonialCardProps) {
  return (
    <div className="testimonial-block-layout1">
      <div className="inner-box">
        <div className="author-info">
          <div className="info-box">
            <figure className="thumb">
              <img src={image} alt={name} />
            </figure>
            <div>
              <h6 className="name">{name}</h6>
              <span className="designation">{role}</span>
            </div>
          </div>
          <div className="review">
            {Array.from({ length: 5 }).map((_, i) => (
              <i key={i} className="fa-sharp fa-solid fa-star" />
            ))}
          </div>
        </div>
        <div className="content-box">
          <div className="text">{text}</div>
        </div>
      </div>
    </div>
  );
}
