export const get_header = async () => {
  let header = {};

  const token = await localStorage.getItem("DD_access");
  if (token) {
    header = { Authorization: `Bearer ${token}` };
  }
  return header;
};
