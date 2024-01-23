function update_address_set() {
        return new Promise((resolve, reject) => {
            fetch(`/api/update_address`, {
                method: "GET",
                credentials: "include", // To include cookies in the request
                headers: {"Content-Type": "application/json"}
            })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then((data) => {
                if (data.address) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(() => {
                resolve(false);
            });
        });
    }
export default update_address_set;