import { db } from "../back_end/firebase";

export const salvarConsumo = (consumo, chave = "") => {
    if (chave === "") {
        return new Promise((resolve, reject) => {
            db.collection("consumos")
                .add(consumo)
                .then((result) => resolve(result.id))
                .catch((erro) => reject(erro));
        });
    } else {
        return new Promise((resolve, reject) => {
            db.collection("consumos")
                .doc(chave)
                .update(consumo)
                .then(() => resolve())
                .catch((erro) => reject(erro));
        });
    }
};

export const deletarConsumo = (consumos) => {
    return new Promise((resolve, reject) => {
        db.collection("consumos")
            .doc(consumos.key)
            .delete()
            .then(() => resolve())
            .catch((erro) => reject(erro));
    });
};

export const pegarConsumo = () => {
    return new Promise((resolve, reject) => {
        db.collection("consumos")
            .get()
            .then((snapchot) => {
                let consumosLista = [];
                snapchot.forEach((item) => {
                    consumosLista.push({
                        ...item.data(),
                        key: item.id,
                    });
                });
                resolve(consumosLista);
            })
            .catch((erro) => reject(erro));
    });
};
