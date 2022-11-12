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


export const useReviews = (data, setData, id) => {
    useEffect(() => {
        axios.get(`http://localhost:8000/photographer-portfolio/reviews/getPersonsReviews/${id}`)
            .then(data => setData(data.data))
    }, [setData, id])
    return {
        data
    }
}


export const usePersonsReviews = (data, setData, email) => {
    useEffect(() => {
        axios.get(`http://localhost:8000/photographer-portfolio/reviews/getSinglePersonsReviews/${email}`)
            .then(data => setData(data.data))
    }, [setData, email])
    return {
        data
    }
}

export default useServices;

