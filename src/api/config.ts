const loggedFetch: typeof fetch = async (url, params) => {
  // checa token
  //redirect para login se token não existe

  const data = await fetch(url, params);

  // Your own post-processing here

  return data;
};
