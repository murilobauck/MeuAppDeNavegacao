import AsyncStorage from '@react-native-async-storage/async-storage';

const LOGIN_KEY = '@App:userLogin';

export const saveLogin = async (usuario, senha) => {
  try {
    const loginData = { usuario, senha };
    await AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(loginData));
    console.log('Login salvo com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao salvar o login:', error);
    return false;
  }
};

export const loadLogin = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(LOGIN_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Erro ao carregar o login:', error);
    return null;
  }
};

export const clearLogin = async () => {
  try {
    await AsyncStorage.removeItem(LOGIN_KEY);
    console.log('Login removido com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao remover o login:', error);
    return false;
  }
};

export const checkLoginStatus = async () => {
  try {
    const loginData = await loadLogin();
    return loginData !== null;
  } catch (error) {
    console.error('Erro ao verificar status do login:', error);
    return false;
  }
};