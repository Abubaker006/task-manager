import bycrpt from "bcrypt";
import env from "dotenv";

env.config();

// const saltRounds = parseInt(process.env.SALT_ROUNDS, 10) || 10; 
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
