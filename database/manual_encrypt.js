// change this, watch the console node manual_encrypt.js

const password = "adminpassword";

const bcrypt = require("bcryptjs");

async function genHash() {
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(password, salt);
  return hash;
}

genHash().then((hash) => {
  console.log(hash);
});
