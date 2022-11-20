const { questions, saveQuestions } = require("./contacts");

const main = async () => {
  const nama = await questions("Masukan nama anda: ");
  const email = await questions("Masukan email: ");
  const noHp = await questions("Masukan no Hp: ");
  saveQuestions(nama, email, noHp);
};
main();
