import { db } from "./firebase";

export const salvarContato = (contato, chave = "") => {
  if (chave === "") {
    return new Promise((resolve, reject) => {
      db.collection("contatos")
        .add(contato)
        .then((result) => resolve(result.id))
        .catch((erro) => reject(erro));
    });
  } else {
    return new Promise((resolve, reject) => {
      db.collection("contatos")
        .doc(chave)
        .update(contato)
        .then(() => resolve())
        .catch((erro) => reject(erro));
    });
  }
};

export const deletarContato = (contato) => {
  return new Promise((resolve, reject) => {
    db.collection("contatos")
      .doc(contato.key)
      .delete()
      .then(() => resolve())
      .catch((erro) => reject(erro));
  });
};

export const pegarContatos = () => {
  return new Promise((resolve, reject) => {
    db.collection("contatos")
      .get()
      .then((snapchot) => {
        let contatosLista = [];
        snapchot.forEach((item) => {
          contatosLista.push({
            ...item.data(),
            key: item.id,
          });
        });
        resolve(contatosLista);
      })
      .catch((erro) => reject(erro));
  });
};
