

export const saveData  = async (container:any) => {
  const promise = new Promise<void>((resolve) => {
    try {
      console.log('Data saved:', container.data);
      resolve();
    } catch (error) {
      console.error('Error saving data:', error);
      throw error;
    }
  });

  return promise;
};
