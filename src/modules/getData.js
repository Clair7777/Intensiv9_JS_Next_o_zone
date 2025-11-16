const getData = () => {
  return fetch(
    "https://test-4299f-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => {
    return response.json();
  });
};

export default getData;
