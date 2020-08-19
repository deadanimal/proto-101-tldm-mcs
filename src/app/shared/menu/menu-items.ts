export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}

// Menu Items
export const USERPORTALROUTES: RouteInfo[] = [
  // {
  //   path: "/user-portal/dashboard",
  //   title: "Dashboard",
  //   type: "link",
  //   icontype: "fas fa-home text-default",
  // },
];
export const ROUTES: RouteInfo[] = [
  {
    path: "/admin/dashboard",
    title: "DASHBOARD",
    type: "link",
    icontype: "fas fa-home text-default",
  },
  {
    path: "/admin/weapon",
    title: "WEAPON",
    type: "sub",
    icontype: "fas fa-archive text-default",
    collapse: "TN",
    isCollapsed: true,
    children: [
      { path: "warnings", title: "ASSIGNMENT", type: "link" },
      { path: "forecasts", title: "FIRING CORRECTION", type: "link" },
      { path: "climate", title: "CHECK FIRING", type: "link" },
      { path: "observation", title: "TRAINING", type: "link" },
    ],
  },

  {
    path: "/admin/jarvis",
    title: "JARVIS",
    type: "link",
    icontype: "fas fas fa-bell text-default",
  },
  // {
  //   path: "/admin/observation",
  //   title: "Anti-Air Warfare",
  //   type: "link",
  //   icontype: "fas fa-file-alt text-default",
  // },
  {
    path: "/admin/academy",
    title: "ACADEMY",
    type: "sub",
    icontype: "fas fa-newspaper text-default",
    collapse: "AD",
    isCollapsed: true,
    children: [
      { path: "communication-and-corporate", title: "ACADEMY", type: "link" },
      { path: "education", title: "TRACK MANAGEMENT", type: "link" },
    ],
  },
  // {
  //   path: "/admin/climate",
  //   title: "Record and Replay Function",
  //   type: "link",
  //   icontype: "fas fa-chart-line text-default",
  // },

  {
    path: "/admin/communication-and-corporate",
    title: "Simulation and Training",
    type: "link",
    icontype: "fas fa-money-bill-alt text-default",
  },
  {
    path: "/admin/strategic-planning-and-international",
    title: "Maintenance Functionalities.",
    type: "link",
    icontype: "fas fa-stamp text-default",
  },
  {
    path: "/admin/publication",
    title: "Gun Predictor",
    type: "link",
    icontype: "fas fa-chart-bar text-default",
  },

  // {
  //   path: "/admin/automatic-content",
  //   title: "Automatic Content",
  //   type: "sub",
  //   icontype: "fas fas fa-newspaper text-default",
  //   collapse: "ac",
  //   isCollapsed: true,
  //   children: [
  //     { path: "warnings", title: "Warnings", type: "link" },
  //     { path: "forecasts", title: "Forecasts", type: "link" },
  //     {
  //       path: "earthquake-and-tsunami",
  //       title: "Earthquake and Tsunami",
  //       type: "link",
  //     },
  //     { path: "observation", title: "Observation", type: "link" },
  //     {
  //       path: "satellite-and-radar",
  //       title: "Satellite and Radar",
  //       type: "link",
  //     },
  //     {
  //       path: "climate",
  //       title: "Climate",
  //       type: "link",
  //     },
  //   ],
  // },
  // {
  //   path: "/admin/manual-content",
  //   title: "Manual Content",
  //   type: "sub",
  //   icontype: "fas fa-file-alt text-default",
  //   collapse: "mc",
  //   isCollapsed: true,
  //   children: [
  //     {
  //       path: "communication-and-corporate",
  //       title: "Communication and Corporate",
  //       type: "link",
  //     },
  //     {
  //       path: "strategic-planning-and-international",
  //       title: "Strategic Planning and International",
  //       type: "link",
  //     },
  //     {
  //       path: "procurement-and-administration",
  //       title: "Procurement and Administration",
  //       type: "link",
  //     },
  //     {
  //       path: "publication",
  //       title: "Publication",
  //       type: "link",
  //     },
  //     {
  //       path: "education",
  //       title: "Education",
  //       type: "link",
  //     },
  //   ],
  // },

  {
    path: "/admin/analytics",
    title: "Analytics",
    type: "link",
    icontype: "fas fa-chart-bar text-default",
  },
  {
    path: "/admin/report",
    title: "Report",
    type: "link",
    icontype: "fas fa-chart-bar text-default",
  },

  {
    path: "/admin/management",
    title: "System",
    type: "sub",
    icontype: "fas fa-cog text-default",
    collapse: "management",
    isCollapsed: true,
    children: [
      { path: "users", title: "Users", type: "link" },
      { path: "roles", title: "Roles", type: "link" },
      { path: "audit-trails", title: "Audit Trails", type: "link" },
    ],
  },
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: "/user/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-home text-default",
  },
  {
    path: "/user/maklumat",
    title: "Maklumat Peribadi",
    type: "sub",
    icontype: "fas fa-tasks text-default",
    collapse: "mk",
    isCollapsed: true,
    children: [
      {
        path: "maklumat-pemohon",
        title: "Pemohon",
        type: "link",
      },
      {
        path: "maklumat-keluarga",
        title: "Keluarga/Penjaga",
        type: "link",
      },
      {
        path: "maklumat-akademik",
        title: "Akademik",
        type: "link",
      },
    ],
  },
  {
    path: "/user/senarai-pemohon",
    title: "Senarai Pemohon",
    type: "link",
    icontype: "fas fa-bell text-default",
  },
  {
    path: "/user/tawaran",
    title: "Tawaran",
    type: "sub",
    icontype: "fas fa-chart-bar text-default",
    collapse: "tw",
    isCollapsed: true,
    children: [
      {
        path: "penyata-baki",
        title: "Penyata Baki",
        type: "link",
      },
      {
        path: "urusan-lain",
        title: "Urusan Lain",
        type: "link",
      },
      {
        path: "pembayaran",
        title: "Pembayaran",
        type: "link",
      },
    ],
  },
  // {
  //   path: "/admin/finance",
  //   title: "Finance Management",
  //   type: "sub",
  //   icontype: "fas fa-money-bill-alt text-default",
  //   collapse: "fm",
  //   isCollapsed: true,
  //   children: [
  //     {
  //       path: "transaction-management",
  //       title: "Transaction Management",
  //       type: "link",
  //     },
  //     { path: "tax-management", title: "Tax Management", type: "link" },
  //     { path: "fee-management", title: "Fee Management", type: "link" },
  //     { path: "receipt-management", title: "Receipt Management", type: "link" },
  //     {
  //       path: "payment-gateway-management",
  //       title: "Payment Gateway Management",
  //       type: "link",
  //     },
  //   ],
  // },
  // {
  //   path: "/admin/seal-management",
  //   title: "Seal Management",
  //   type: "link",
  //   icontype: "fas fa-stamp text-default",
  // },
  // {
  //   path: "/admin/complaint-management",
  //   title: "Complaint Management",
  //   type: "sub",
  //   icontype: "fas fa-building text-default",
  //   collapse: "reporting",
  //   isCollapsed: true,
  //   children: [
  //     { path: "faq", title: "FAQ", type: "link" },
  //     { path: "complaint", title: "Complaint Management", type: "link" },
  //   ],
  // },
  // {
  //   path: "/admin/reporting",
  //   title: "Reporting",
  //   type: "sub",
  //   icontype: "fas fa-chart-bar text-default",
  //   collapse: "management",
  //   isCollapsed: true,
  //   children: [
  //     { path: "audit-trails", title: "Audit Logs", type: "link" },
  //     { path: "report", title: "Reporting", type: "link" },
  //     { path: "users", title: "Users", type: "link" },
  //   ],
  // },
  // {
  //   path: "/admin/hierarchy-management",
  //   title: "Hierarchy Management",
  //   type: "link",
  //   icontype: "fas fa-building text-",
  // },
];
