export const formatCompaniesData = (data) => {
  return data.map((el) => ({
    id: el.id,
    name: el.fullname,
    email: el.local.email,
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    date: new Date(el.created_at).toDateString(),
    status: "7/7",
    substype: "Yearly",
    duration: "20th Feb, 2022 - 20th Feb, 2023",
  }));
};
