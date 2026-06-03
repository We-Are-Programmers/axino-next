import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/layout/PageBanner";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { getTeamMember, teamMembers } from "@/lib/data/team";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  return { title: member.name };
}

export default async function TeamDetailsPage({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  return (
    <PageWrapper currentPath="/team" headerVariant="absolute">
      <PageBanner
        title={member.name}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Team", href: "/team" },
          { label: member.name },
        ]}
      />
      <section className="team-details pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <figure className="image">
                <img src={member.image} alt={member.name} />
              </figure>
            </div>
            <div className="col-lg-7">
              <h2>{member.name}</h2>
              <p className="designation">{member.role}</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s.
              </p>
              <Link href="/contact" className="theme-btn btn-style-one mt-3">
                Contact {member.name.split(" ")[0]}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
