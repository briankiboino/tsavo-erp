export const SUPER_ADMIN_ROUTES = [
    {
      mega: false,
      title: "Dashboard",
      path: "/dashboard",
      icon: "bx bxs-dashboard mr-2",
    },
    {
      mega: false,
      title: "Risk Management",
      icon: "bx bx-cog mr-2",
      children: [
        { title: "My Cases", path: "/risk-management/my-cases" },
        { title: "Case Management", path: "/risk-management/case-management" },
        { title: "Customers", path: "/risk-management/customers" },
        { title: "Statistics", path: "/risk-management/statistics" },
      ],
    },
    {
      mega: false,
      title: "Collection Management",
      icon: "bx bx-cog mr-2",
      children: [
        { title: "Customers", path: "/risk-management/customers" },
        {
          title: "User Management",
          path: "/admin/new",
          children: [
            { title: "Roles", path: "/admin/user/roles" },
            { title: "Permissions", path: "/admin/user/permissions" },
          ],
        },
        { title: "Departments", path: "/admin/departments" },
        { title: "Branches", path: "/admin/branches" },
        { title: "Doctor", path: "/admin/doctor" },
  
        { title: "Account Settings", path: "/admin/account-settings" },
      ],
    },
    {
      mega: false,
      title: "Order Management",
      icon: "bx bx-cog mr-2",
      children: [
        { title: "Customers", path: "/risk-management/customers" },
        {
          title: "User Management",
          path: "/admin/new",
          children: [
            { title: "Roles", path: "/admin/user/roles" },
            { title: "Permissions", path: "/admin/user/permissions" },
          ],
        },
        { title: "Departments", path: "/admin/departments" },
        { title: "Branches", path: "/admin/branches" },
        { title: "Doctor", path: "/admin/doctor" },
  
        { title: "Account Settings", path: "/admin/account-settings" },
      ],
    },
    {
      mega: false,
      title: "Users Management",
      icon: "bx bx-cog mr-2",
      children: [
        { title: "Customers", path: "/risk-management/customers" },
        {
          title: "User Management",
          path: "/admin/new",
          children: [
            { title: "Roles", path: "/admin/user/roles" },
            { title: "Permissions", path: "/admin/user/permissions" },
          ],
        },
        { title: "Departments", path: "/admin/departments" },
        { title: "Branches", path: "/admin/branches" },
        { title: "Doctor", path: "/admin/doctor" },
  
        { title: "Account Settings", path: "/admin/account-settings" },
      ],
    },
    {
      mega: false,
      title: "Users",
      icon: "bx bx-cog mr-2",
      children: [
        { title: "View Users", path: "/admin/users" },
        { title: "New User", path: "/admin/user/new" },
      ],
    },
    {
      mega: false,
      title: "Settings",
      icon: "bx bx-cog mr-2",
      children: [
        { title: "Company Details", path: "/admin/company" },
        {
          title: "User Management",
          path: "/admin/new",
          children: [
            { title: "Roles", path: "/admin/user/roles" },
            { title: "Permissions", path: "/admin/user/permissions" },
          ],
        },
        { title: "Departments", path: "/admin/departments" },
        { title: "Branches", path: "/admin/branches" },
        { title: "Doctor", path: "/admin/doctor" },
  
        { title: "Account Settings", path: "/admin/account-settings" },
      ],
    },
  ];
  