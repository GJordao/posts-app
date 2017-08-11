const url = "http://posts-app.jordao.xyz/";
const methods = ["GET", "POST", "DELETE"];

const api = (method, endpoint, data) => {
    return new Promise((resolve, reject) => {
        const index = methods.indexOf(method.toUpperCase());
        if (index === -1) {
            reject("Invalid method introduced");
        } else {
            fetch(url + endpoint, {
                method: method.toUpperCase(),
                body: data
            })
                .then(response => response.json())
                .then(responseJson => {
                    resolve(JSON.parse(responseJson));
                })
                .catch(err => {
                    reject(err);
                });
        }
    });
};

export default api;
