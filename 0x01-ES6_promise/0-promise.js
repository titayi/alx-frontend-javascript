function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve({ message: 'API response received successfully' });
    } else {
        reject(new Error('Failed to retrieve data from the API'))
    }
  });
}

export default getResponseFromAPI;
