import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetFacebookInsights = () => {
    const [response, setResponse] = useState(null);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchFacebookInsights = async () => {
            setIsLoading(true);
            setIsError(false);
            setErrorMessage('');

            try {
                const res = await axios.get('http://localhost:5000/facebook_insights'); // Updated URL for Facebook insights
                setResponse(res.data);
            } catch (error) {
                setIsError(true);
                setErrorMessage(error.message || 'Something went wrong');
            } finally {
                setIsLoading(false);
            }
        };

        fetchFacebookInsights();
    }, []);

    return { response, isError, errorMessage, isLoading };
};

export default useGetFacebookInsights;