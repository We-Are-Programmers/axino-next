type VariantStylesProps = {
  href: string;
};

export function VariantStyles({ href }: VariantStylesProps) {
  return <link href={href} rel="stylesheet" />;
}
