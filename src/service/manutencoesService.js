import { db } from "../back_end/firebase";

export const salvarManutencao = (manutencao, chave = "") => {
  if (chave === "") {
    return new Promise((resolve, reject) => {
      db.collection("manutencoes")
        .add(manutencao)
        .then((result) => resolve(result.id))
        .catch((erro) => reject(erro));
    });
  } else {
    return new Promise((resolve, reject) => {
      db.collection("manutencoes")
        .doc(chave)
        .update(manutencao)
        .then(() => resolve())
        .catch((erro) => reject(erro));
    });
  }
};

export const deletarManutencao = (manutencao) => {
  return new Promise((resolve, reject) => {
    db.collection("manutencoes")
      .doc(manutencao.key)
      .delete()
      .then(() => resolve())
      .catch((erro) => reject(erro));
  });
};

export const pegarManutencao = () => {
  return new Promise((resolve, reject) => {
    db.collection("manutencoes")
      .get()
      .then((snapchot) => {
        let manutencoesLista = [];
        snapchot.forEach((item) => {
          manutencoesLista.push({
            ...item.data(),
            key: item.id,
          });
        });
        resolve(manutencoesLista);
      })
      .catch((erro) => reject(erro));
  });
};
