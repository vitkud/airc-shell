import CFG from 'config.json';

class UApi {
	static async loadManifest(token) {
		return new Promise((resolve) => {

            const data = { auth_token: token };
            console.log(data);
            fetch(`${CFG.API_HOST}/api/get/plugins`, {
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
    
            fetch(`${CFG.API_HOST}/api/auth/check`, {
                method: 'post',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    console.log('error!!!');
                    reject(res);
                } else {
                    console.log('all clear');
                    resolve(res);
                }
            });
		});
    }
    
    static async authorize(login, password) {
        return new Promise((resolve, reject) => {

			const data = { 
                login,
                password
            };

            fetch(`${CFG.API_HOST}/api/auth/login`, {
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
}

export default UApi;