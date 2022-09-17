async function login(username, password) {
  // For FastAPI account services, use this one
  const url = `${process.env.REACT_APP_FASTAPI_SERVICE}/token`;

  const form = new FormData();
  form.append("username", username);
  form.append("password", password);

  const response = await fetch(url, {
    method: "post",
    credentials: "include",
    body: form,
  });
  if (response.ok) {
    // For FastAPI services, use this one
    const tokenUrl = `${process.env.REACT_APP_FASTAPI_SERVICE}/token`;

    try {
      const response = await fetch(tokenUrl, {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        // DO SOMETHING WITH THE TOKEN SO YOU CAN USE IT
        // IN REQUESTS TO YOUR NON-ACCOUNTS SERVICES
      }
    } catch (e) {}
    return false;
  }
  let error = await response.json();
  // DO SOMETHING WITH THE ERROR, IF YOU WANT
}