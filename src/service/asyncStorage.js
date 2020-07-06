import { AsyncStorage, Alert } from "react-native";

const saveStorage = async (propertyName, property) => {
    try {
        await AsyncStorage.setItem(propertyName, property);
    } catch (error) {
        console.log(error);
        Alert.alert(
            "Não foi possível salvar seus dados",
            "Ocorreu um erro ao manter seus dados de login"
        );
    }
};

const loadStorage = async (propertyName) => {
    try {
        return await AsyncStorage.getItem(propertyName);
    } catch (error) {
        console.log(error);
        Alert.alert(
            "Não foi possível obter seus dados",
            "Ocorreu um erro ao obter seus dados de login"
        );
        return {};
    }
};

const removeStorage = async (property) => {
    try {
        await AsyncStorage.removeItem(property);
    } catch (error) {
        console.log(error);
        Alert.alert(
            "Não foi possível remover seus dados",
            "Ocorreu um erro ao remover seus dados de login"
        );
    }
}

export default {
    saveStorage,
    loadStorage,
    removeStorage
};
