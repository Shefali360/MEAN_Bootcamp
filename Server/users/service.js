const { userModel } = require("./model");
const bcrypt = require("bcrypt");
const compareHash = async (plaintext, hash) =>
  await bcrypt.compare(plaintext, hash);

module.exports.create = async ({ name, age, email, password }) => {
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      console.log("Existing");
      return { error: "email already taken" };
    } else {
      try {
        const user = await userModel.create({
          name,
          age,
          email,
          password,
        });
        return {
          user,
        };
      } catch (err) {
        return { err: "db operation failed" };
      }
    }
  } catch (error) {
    return { error: "db operation failed" };
  }
};

module.exports.login = async (username, password, done) => {
  try {
    const userData = await userModel.findOne({ email: username });
    if (!userData) {
      return done(null, false, { err: "Invalid username or password" });
    } else {
      const matched = await compareHash(password, userData.password);
      if (!matched) {
        return done(null, false, { err: "Invalid username or password" });
      } else {
        return done(null, userData);
      }
    }
  } catch (error) {
    return done(null, false, { err: "db operation failed" });
  }
};
