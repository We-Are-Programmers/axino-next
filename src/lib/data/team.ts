export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  delay?: string;
};

export const teamMembers: TeamMember[] = [
  { slug: "wade-warren", name: "Wade Warren", role: "UX Designer, Research", image: "/images/resource/team3-1.png", delay: "200" },
  { slug: "leslie-alexander", name: "Leslie Alexander", role: "UX Designer, Research", image: "/images/resource/team3-2.png", delay: "400" },
  { slug: "eleanor-pena", name: "Eleanor Pena", role: "UX Designer, Research", image: "/images/resource/team3-3.png", delay: "600" },
  { slug: "leslie-alexander-2", name: "Leslie Alexander", role: "UX Designer, Research", image: "/images/resource/team3-2.png", delay: "400" },
  { slug: "eleanor-pena-2", name: "Eleanor Pena", role: "UX Designer, Research", image: "/images/resource/team3-3.png", delay: "600" },
  { slug: "wade-warren-2", name: "Wade Warren", role: "UX Designer, Research", image: "/images/resource/team3-1.png", delay: "200" },
];

export function getTeamMember(slug: string) {
  return teamMembers.find((m) => m.slug === slug) ?? teamMembers[0];
}
