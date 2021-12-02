const BASE_URL = 'http://localhost:5000';
const RESOURCE_URL = `${BASE_URL}/turtle`;

const baseRequest = async ({urlPath = "", method = 'GET', body = null}) => {
    try {
        const reqParams = {
            method, 
            headers: {
                "Content-Type": "application/json",
            },
        };
            if (body) {
                reqParams.body = JSON.stringify(body);
            }
            console.log(body);

        return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
    }catch (error) {
        console.error("HTTP ERROR: " , error)
    }
}

export const getAllTurtles = async () => {
    const rawRes = await baseRequest({method: "GET"});
    return rawRes.json();
}

export const postTurtle = (body) => baseRequest({method: "POST", body});

export const deleteTurtle = (id) => baseRequest({urlPath: `/${id}`, method: "DELETE"});

export const editTurtle = (id, body) => baseRequest({urlPath: `/${id}`, method: "PUT", body});