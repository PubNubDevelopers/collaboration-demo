const BASE_URL = 'https://devrel-demos-access-manager.netlify.app/.netlify/functions/api/collaboration'

async function login(UUID){
  try{
    const response = await fetch(`${BASE_URL}/grant`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "UUID": UUID })
    });

    const body = (await response.json()).body;

    console.log(body);

    const token = body.token;

    console.log(token);

    return token;
  }
  catch(e){
    return null;
  }
}

async function logout(token){
  try{
    await fetch(`${BASE_URL}/revoke`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "token": token })
    });
    return true
  }
  catch(e){
    console.log(e);
    return false;
  }
}