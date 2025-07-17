// web의 localStorage와 유사

import EncryptStorage from 'react-native-encrypted-storage';

const setEncryptStorage = async <T>(key: string, data: T) => {
  await EncryptStorage.setItem(key, JSON.stringify(data));
};

const getEncryptStorage = async (key: string) => {
  const storedData = await EncryptStorage.getItem(key);

  return storedData ? JSON.parse(storedData) : null;
};

const removeEncryptStorage = async (key: string) => {
  const data = await getEncryptStorage(key);

  if (data) {
    await EncryptStorage.removeItem(key);
  }
};

export {setEncryptStorage, getEncryptStorage, removeEncryptStorage};
