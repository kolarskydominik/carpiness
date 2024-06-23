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
    path: '',
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
            label: 'Analysis & Design',
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
    path: '',
    children: [
      { label: 'Banking & Finance', path: '' },
      { label: 'Pharma', path: '' },
      { label: 'Telecomunication', path: '' },
      { label: 'Technology', path: '' },
      { label: 'Manufacturing', path: '' },
      { label: 'HRIS', path: '' },
      { label: 'Warehousing', path: '' },
      { label: 'Entertainment', path: '' },
      { label: 'Transportation', path: '' },
    ],
  },
  { label: 'About Us', path: 'about-us' },
  { label: 'Contact', path: 'contact' },
  { label: 'Careers', path: 'careers' },
  { label: 'Get in touch', path: 'contact', variant: 'cta' },
];
