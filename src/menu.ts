export type MenuItem = {
  label: string;
  path?: string;
  fragment?: string;
  children?: MenuItem[];
  variant?: 'cta';
};

export const menu: MenuItem[] = [
  {
    label: 'Solutions',
    children: [
      {
        label: 'Software Development',
        path: '',
        fragment: 'software-development',
        children: [
          {
            label: 'Delivery Excellence',
            path: '',
            fragment: 'delivery-excellence',
          },
          {
            label: 'Analysis & Design',
            path: '',
            fragment: 'analysis-&-design',
          },
          { label: 'Implementation', path: '', fragment: 'implementation' },
          { label: 'Testing', path: '', fragment: 'testing' },
          { label: 'Maintenance', path: '', fragment: 'maintenance' },
        ],
      },
      { label: 'Advisory', path: 'advisory' },
      { label: 'Talent Acquisition', path: 'talent-acquisiton' },
      {
        label: 'Recruitment Proces Outsourcing',
        path: 'recruitment-proces-outsourcing',
      },
      { label: 'Umbrella', path: 'umbrella' },
    ],
  },
  {
    label: 'Industry',
    children: [
      { label: 'Banking & Finance', path: 'industry' },
      { label: 'Pharma', path: 'industry' },
      { label: 'Telecomunication', path: 'industry' },
      { label: 'Technology', path: 'industry' },
      { label: 'Manufacturing', path: 'industry' },
      { label: 'HRIS', path: 'industry' },
      { label: 'Warehousing', path: 'industry' },
      { label: 'Entertainment', path: 'industry' },
      { label: 'Transportation', path: 'industry' },
    ],
  },
  { label: 'About Us', path: 'about-us' },
  { label: 'Contact', path: 'contact' },
  { label: 'Careers', path: 'careers' },
  { label: 'Get in touch', path: 'contact', variant: 'cta' },
];
