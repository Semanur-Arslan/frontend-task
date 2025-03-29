 const tabs = [
    {
      name: "profileScreen",
      label: "Profile",
      path: "/profile/profileScreen",
      icon: "person",
    },
    { name: "users", label: "Users", path: "/profile/users", icon: "group" },
    {
      name: "products",
      label: "Products",
      path: "/profile/products",
      icon: "shopping-cart",
    },
    {
      name: "seller",
      label: "Seller",
      path: "/profile/seller",
      icon: "storefront",
    },
  ] as const;

  export default tabs;