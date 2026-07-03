export interface NavItem {
  label: string;
  desc: string;
  icon?: string; // You can add icons later if you want
}

export interface NavCategory {
  id: string;
  title: string;
  products: NavItem[];
  plugins?: NavItem[];
}
