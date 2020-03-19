export const authServiceFactory = (apiBase: string) => {
    const login = (values: Credential) =>
        fetch(`${apiBase}/auth/login`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(values),
        })
            .then(async res => res.ok && res.json())
            .catch(err => {
                throw err;
            });

    return { login };
};
