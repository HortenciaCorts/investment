const getApi = async (resources) => {
    const api = await fetch(`http://localhost:3000/${resources}`);
    const response = await api.json();
    return response;
}

export default getApi;