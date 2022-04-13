const BASE_URI = 'http://myjson.dit.upm.es/api';

export const getProducts = () => {

    const promise = new Promise( async (response, reject) => {
        try {
            const res = await fetch(`${BASE_URI}/bins/huy5`);
            const body = await res.json();
            if (res.ok) {
                return response(body)
            } else {
                return reject(body)
            }
        } catch (error) {
            reject({err: [error]})
        }
    })
    return promise;
}