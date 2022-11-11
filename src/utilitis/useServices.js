import axios from 'axios';
import { useEffect } from 'react';

const useServices = (data, setData, url) => {
    useEffect(() => {
        axios.get(url)
            .then(data => setData(data.data.services))
    }, [setData, url])
    return {
        data
    }
};

export const useSingleServices = (data, setData, url) => {
    useEffect(() => {
        axios.get(url)
            .then(data => setData(data.data.service))
    }, [setData, url])
    return {
        data
    }
};

export default useServices;