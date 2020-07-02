import { db } from "../database/firebase";

export const salvarVeiculo = (veiculo, chave = "") => {
  if (chave === "") {
    return new Promise((resolve, reject) => {
      db.collection("veiculos")
        .add(veiculo)
        .then((result) => resolve(result.id))
        .catch((erro) => reject(erro));
    });
  } else {
    return new Promise((resolve, reject) => {
      db.collection("veiculos")
        .doc(chave)
        .update(veiculo)
        .then(() => resolve())
        .catch((erro) => reject(erro));
    });
  }
};

export const deletarVeiculo = (contato) => {
  return new Promise((resolve, reject) => {
    db.collection("veiculos")
      .doc(veiculo.key)
      .delete()
      .then(() => resolve())
      .catch((erro) => reject(erro));
  });
};

export const pegarVeiculos = () => {
  return new Promise((resolve, reject) => {
    db.collection("veiculos")
      .get()
      .then((snapchot) => {
        let veiculosLista = [];
        snapchot.forEach((item) => {
          veiculosLista.push({
            ...item.data(),
            key: item.id,
          });
        });
        resolve(veiculosLista);
      })
      .catch((erro) => reject(erro));
  });
};
