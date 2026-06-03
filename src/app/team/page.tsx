import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { TeamCard } from "@/components/team/TeamCard";
import { teamMembers } from "@/lib/data/team";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <PageWrapper currentPath="/team" headerVariant="absolute">
      <PageBanner title="Team Grid" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Team" }]} />
      <section className="team-section-three pb-50 pt-100">
        <div className="container">
          <div className="row">
            {teamMembers.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
