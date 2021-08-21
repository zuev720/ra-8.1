import {useEffect, useState} from 'react';

export function useJsonFetch(url, opt) {
    const [status, setStatus] = useState({
        loading: false,
        data: undefined,
        error: undefined
    })

    useEffect(() => {
        setStatus({ loading: true })
        fetch(url, opt)
            .then((result) => result.json())
            .then((result) => {
                setStatus({ loading: false, data: result })
            })
            .catch((error) => {
                setStatus({ loading: false, error })
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [status.loading, status.data, status.error];
}
