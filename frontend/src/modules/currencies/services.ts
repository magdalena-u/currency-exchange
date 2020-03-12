export const currencyServiceFactory = (apiProxy: string, apiBase: string) => {
    const getCurrency = () =>
        fetch(`${apiProxy}${apiBase}/currencies`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(async res => res.ok && res.json())
            .catch(err => {
                throw err;
            });

    return { getCurrency };
};
