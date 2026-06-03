import Link from "next/link";
import type { TeamMember } from "@/lib/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="team-block-three"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={member.delay ?? "200"}
      >
        <div className="inner-box text-center">
          <div className="image-box">
            <figure className="image">
              <Link href={`/team/${member.slug}`}>
                <img src={member.image} alt={member.name} />
              </Link>
              <svg
                className="shape-style1"
                width="304"
                height="543"
                viewBox="0 0 304 543"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z" />
              </svg>
              <ul className="social-icon-list1">
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </figure>
          </div>
          <div className="content-box">
            <h4 className="name">
              <Link href={`/team/${member.slug}`}>{member.name}</Link>
            </h4>
            <span className="designation">{member.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
