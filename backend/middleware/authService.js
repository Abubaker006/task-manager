import bycrpt from "bcrypt";

const saltRounds = 10;
const hashValue = async (value) => {
  const salt = await bycrpt.genSalt(saltRounds);
  const hashedPassword = await bycrpt.hash(value, salt);

  return hashedPassword;
};

 const compareValue = async (value, hashedValue) => {
  const match = await bycrpt.compare(value, hashedValue);
  return match;
};

export { hashValue, compareValue };
