import { useContext, useEffect } from 'react';
import * as authService from '../../api/auth';
import { UserContext } from '../../contexts/user';
import { useNavigate } from 'react-router-dom';

export default function LogoutPage() {

    const { setUserWrapper } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            authService.logout();
            setUserWrapper(null);
            navigate('/')
        })()
    }, [])
}

