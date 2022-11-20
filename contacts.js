const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// create folder
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
// create file json
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}
// create questions
const questions = (quest) => {
  return new Promise((resolve, rejects) => {
    rl.question(quest, (nama) => {
      resolve(nama);
    });
  });
};
// save data quest
const saveQuestions = (nama, email, noHp) => {
  const data = { nama, email, noHp };

  try {
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);
    contacts.push(data);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log("data berhasil disimpan!");
  } catch (err) {
    console.log(err);
  }
  rl.close();
};

module.exports = {
  questions,
  saveQuestions,
};
