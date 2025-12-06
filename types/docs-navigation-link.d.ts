export type DocsNavigationLinkType = {
  order: number;
  title: string;
  href: string;
  links?: DocsNavigationLinkType[];
};
