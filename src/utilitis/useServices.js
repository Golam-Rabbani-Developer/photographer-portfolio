import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import setAuthToken from './setAuthtoken';

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


export const handleDelte = (id) => {
    axios.delete(`http://localhost:8000/photographer-portfolio/reviews/deleteReview/${id}`)
        .then(res => {
            if (res.statusText === "OK") {
                toast.success("You have Successfully Deleted the Review")
            }
        })
}


export const handleRegister = (data, setMessage, navigate, from) => {

    axios.post(`http://localhost:8000/photographer-portfolio/users/registration`, data)
        .then(res => {
            if (res.data.message === "User Already Exist") {
                setMessage(res.data.message)
            }
            if (res.data.token) {
                toast.success('Welcome to Shohans Digital Eye')
                localStorage.setItem('token', JSON.stringify(res.data.token))
                navigate(from, { replace: true })
                setAuthToken(res.data.token)
            }
        })
        .catch(err => console.log(err))
}


export const handleLogin = (data, setMessage, navigate, from) => {

    axios.post(`http://localhost:8000/photographer-portfolio/users/login`, data)
        .then(res => {
            if (res.data.message) {
                setMessage(res.data.message)
            }
            if (res.data.user) {
                toast.success('Welcome to Shohans Digital Eye')
                navigate(from, { replace: true })
            }
        })
        .catch(err => console.log(err))
}

export default useServices;

