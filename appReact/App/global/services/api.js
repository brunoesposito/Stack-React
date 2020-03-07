const Api = async (url, method, body) => {
    return await fetch(url, { method, body });
}

export default Api;
