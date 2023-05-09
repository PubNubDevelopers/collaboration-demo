const BASE_URL_DEMO = 'https://devrel-demos-access-manager.netlify.app/.netlify/functions/api/collaboration'
const BASE_URL_HOMEPAGE = 'https://devrel-demos-access-manager.netlify.app/.netlify/functions/api/collaboration-homepage'

async function loginDemo(UUID)
{
  return await login(UUID, BASE_URL_DEMO)
}

async function loginHomepage(UUID)
{
  return await login(UUID, BASE_URL_HOMEPAGE)
}

async function logoutDemo(UUID)
{
  return await logout(UUID, BASE_URL_DEMO)
}

async function logoutHomepage(UUID)
{
  return await logout(UUID, BASE_URL_HOMEPAGE)
}

async function login(UUID, url){
  try{
    const response = await fetch(`${url}/grant`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "UUID": UUID })
    });

    const token = (await response.json()).body.token;

    return token;
  }
  catch(e){
    return null;
  }
}

async function logout(token, url){
  try{
    await fetch(`${url}/revoke`, {
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