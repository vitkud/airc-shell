import CFG from 'config.json';
import Axios from 'axios';

class UApi {
	static async loadManifest(token) {
		return new Promise((resolve) => {
            const data = { auth_token: token };

            fetch(`${CFG.API_HOST}/modules/manifest`, {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then((response) => {
                resolve(response);
            })
            .catch((e) => {
                throw new Error(e.message);
            }); 
		});
	}

	static async checkToken(token) {
		return new Promise((resolve, reject) => {
			if (!token) {
				reject(false);
			}

			const data = { auth_token: token };
    
            fetch(`${CFG.API_HOST}/registry/check`, {
                method: 'post',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    reject(res);
                } else {
                    resolve(res);
                }
            });
		});
    }
    
    static async authorize(login, password) {
        return new Promise((resolve, reject) => {
			const data = { 
                usr: login,
                pwd: password
            };

            console.log(data);

            fetch(`${CFG.API_HOST}/registry/auth`, {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    reject(res);
                } else {
                    resolve(res);
                }
            });
		});
    }

    static async invoke(queueId, path, token, params, method = 'GET') {
        console.log('invoke params', params);
        let data = {
            //auth_token: token  
        };

        if (params) {
            if (typeof params === 'string') {
                const parsedData = JSON.parse(params);

                if (parsedData) {
                    data = { ...data, ...parsedData};
                }
            } else if (typeof params === 'object') {
                data = { ...data, ...params};
            }
        }

        return new Promise((resolve, reject) => {
            const m = method ? method.toLowerCase() : 'get';

            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            console.log('invoke method is', m);

            if (m === 'get') config.params = data;

            if (Axios[m]) {
                let ax = null;
                switch (m) {
                    case 'get': ax = Axios.get(`${CFG.API_HOST}/${queueId}/${path}`, config); break;
                    case 'patch':
                    case 'put':
                    case 'post': ax = Axios[m](`${CFG.API_HOST}/${queueId}/${path}`, data, config); break;
                    default: break;
                }

                if (ax) return ax.then((e) => resolve(e.data));
            }
            
            throw new Error(`method "${m}" not alowed at Axios`);
            
            /*
            fetch(`${CFG.API_HOST}/${queueId}/${path}`, {
                method: method,
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    reject(res);
                } else {
                    resolve(res);
                }
            });
            */
		});
    }
}

export default UApi;