import { useContext } from 'react';
import * as authService from '../../api/auth';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export default function LogoutPage() {

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const confirmHandler = async () => {
        authService.logout();
        setUser(null);
        navigate('/');
    }

    return (
        <div>
            <div>Are you sure you want to logout?</div>
            <button onClick={confirmHandler}>Yes</button>
            <button>No</button>
        </div>

    )
}

