export const formatVettingData = (data) => {
  return data.map((el) => ({
    id: el._id,
    status: el.status,
    employer: el.resume.work_experience[0].company,
    email: el.resume.work_experience[0].email_address,
    date: new Date(el.created_at).toDateString(),
  }));
};
