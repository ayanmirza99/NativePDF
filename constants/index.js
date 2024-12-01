export const showDateInvoice = (createdAt) => {
  const date = new Date(createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export const showDate = (createdAt) => {
  const date = new Date(createdAt);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
