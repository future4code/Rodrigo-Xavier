import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToFeedPage } from '../routes/coordinator';

function useUnprotectPage() {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token) {
            goToFeedPage(history)
        }

    }, [history]);
}

export default useUnprotectPage;