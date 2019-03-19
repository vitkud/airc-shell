import CFG from 'config.json';

class UApi {
	static async loadManifest() {
		return new Promise((resolve) => {
            fetch(`${CFG.API_HOST}/api/get/plugins`)
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
            .then((response) => response.json())
            .then((response) => {
                resolve(response);
            })
		});
	}
}

export default UApi;