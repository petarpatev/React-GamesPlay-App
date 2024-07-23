import { useContext, useEffect } from 'react';
import * as authService from '../../api/auth';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export default function LogoutPage() {

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            authService.logout();
            setUser(null);
            navigate('/')
        })()
    }, [])
}

