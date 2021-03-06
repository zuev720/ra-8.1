import {useEffect, useState} from 'react';

export function useJsonFetch(url, opt) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        setLoading({loading: true});
        try {
            fetch(url, opt)
                .then((result) => result.json())
                .then((result) => setData(result))
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [loading, data, error];
}
