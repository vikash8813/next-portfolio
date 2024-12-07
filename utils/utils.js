export const getObjectKeys = (obj) => {
  const keys = Object.keys(obj);
  return keys;
};

export function calculateAge(dateOfBirth) {
  const today = new Date(); // Get the current date
  const dob = new Date(dateOfBirth); // Convert the input string to a Date object

  let age = today.getFullYear() - dob.getFullYear(); // Calculate the year difference
  const monthDifference = today.getMonth() - dob.getMonth();
  const dayDifference = today.getDate() - dob.getDate();

  // Adjust age if the birthday hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
}


