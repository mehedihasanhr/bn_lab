export type Category = {
  title: string;
  icon?: string;
  link: string;
  subSections?: {
    title: string;
    link: string;
  }[];
};

export const categories: Category[] = [
  {
    title: 'Reports',
    icon: '/icons/dashboard.png',
    link: '/reports',
  },
  {
    title: 'Inventory Management',
    icon: '/icons/medicine.png',
    link: '/inventories/medicines',
  },
  {
    title: 'Supplier Management',
    icon: '/icons/supplier.png',
    link: '/suppliers',
    subSections: [
      {
        title: 'View Suppliers',
        link: '/suppliers',
      },
      {
        title: 'Add Supplier',
        link: '/suppliers/add',
      },
    ],
  },
  {
    title: 'Sales Management',
    icon: '/icons/sales.png',
    link: '/sales',
    subSections: [
      {
        title: 'View Sales',
        link: '/sales',
      },
      {
        title: 'Create Invoice',
        link: '/sales/create',
      },
      {
        title: 'Sales Analytics',
        link: '/sales/analytics',
      },
    ],
  },
  {
    title: 'Purchase Management',
    icon: '/icons/purchase.png',
    link: '/purchases',
    subSections: [
      {
        title: 'View Purchases',
        link: '/purchases',
      },
      {
        title: 'Create Purchase Order',
        link: '/purchases/create',
      },
    ],
  },
  // {
  //   title: 'Expiry Management',
  //   icon: 'expiry-icon',
  //   link: '/expiry',
  // },
  // {
  //   title: 'Reports',
  //   icon: 'report-icon',
  //   link: '/reports',
  //   subSections: [
  //     {
  //       title: 'Inventory Report',
  //       icon: 'report-icon',
  //       link: '/reports/inventory',
  //     },
  //     {
  //       title: 'Sales Report',
  //       icon: 'report-icon',
  //       link: '/reports/sales',
  //     },
  //     {
  //       title: 'Purchase Report',
  //       icon: 'report-icon',
  //       link: '/reports/purchases',
  //     },
  //   ],
  // },
  // {
  //   title: 'User Management',
  //   icon: 'user-icon',
  //   link: '/users',
  // },
  {
    title: 'Settings',
    icon: '/icons/settings.png',
    link: '/settings',
    subSections: [
      {
        title: 'App Customization',
        link: '/settings/customization',
      },
      {
        title: 'Preferences',
        link: '/settings/preferences',
      },
      {
        title: 'Data Backup',
        link: '/settings/backup',
      },
    ],
  },
];
