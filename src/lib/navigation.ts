export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

export const mainNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Task Management SaaS", href: "/" },
      { label: "App Landing", href: "/home/app-landing" },
      { label: "AI-Powered Copywriting", href: "/home/ai-copywriting" },
      { label: "Automation SaaS", href: "/home/automation-saas" },
    ],
  },
  {
    label: "Pages",
    children: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Testimonial", href: "/testimonial" },
      {
        label: "Team",
        children: [
          { label: "Team List", href: "/team" },
          { label: "Team Details", href: "/team/wade-warren" },
        ],
      },
      {
        label: "Shop",
        children: [
          { label: "Products", href: "/shop" },
          { label: "Products with Sidebar", href: "/shop/sidebar" },
          { label: "Product Details", href: "/shop/product-1" },
          { label: "Cart", href: "/shop/cart" },
          { label: "Checkout", href: "/shop/checkout" },
        ],
      },
      { label: "FAQ", href: "/faq" },
      { label: "Page 404", href: "/not-found-page" },
    ],
  },
  {
    label: "Service",
    children: [
      { label: "Services List", href: "/services" },
      { label: "Service Details", href: "/services/task-management" },
    ],
  },
  {
    label: "Projects",
    children: [
      { label: "Projects", href: "/projects" },
      { label: "Project Details", href: "/projects/details" },
    ],
  },
  {
    label: "Blog",
    children: [
      { label: "Blog Grid", href: "/blog" },
      { label: "Blog Details", href: "/blog/getting-started" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Our Blogs", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
  useful: [
    { label: "Resources", href: "#" },
    { label: "Features", href: "/#features" },
    { label: "Services", href: "/services" },
    { label: "Help Center", href: "/faq" },
    { label: "Team", href: "/team" },
  ],
  product: [
    { label: "Live Chat", href: "#" },
    { label: "Analyze", href: "#" },
    { label: "Keyword", href: "#" },
    { label: "Case Studies", href: "/projects" },
    { label: "Pricing", href: "/pricing" },
  ],
};
