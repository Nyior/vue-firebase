//url to firebase users endpoint
const API_URL = process.env.VUE_APP_API_URL;

//flexible function that makes an API call to a default endpoint
//if one isn't provided
async function apiService(method, data, endpoint=API_URL) {

    const response = await fetch(
        endpoint, 
        {
            method: method,
            credentials:"include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data !== undefined ? JSON.stringify(data) : null,
        }
    );

    return response.json(); 
}

export { apiService };
