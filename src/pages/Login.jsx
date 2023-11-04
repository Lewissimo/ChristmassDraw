import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [loadingLogin, setLoadingLogin] = useState(false);
  return (
    <div className='mainForm'>
        <form>
            <label>
                <span>Login</span>
                <input type='text' required maxLength={20} />
            </label>
            <label>
                <span>Hasło</span>                
                <input type="password" required maxLength={20} />
            </label>
            <button type='submit'>{loadingLogin ? <FontAwesomeIcon icon={faGift} spin size='2xl' /> : <ArrowForwardIosIcon />}</button>
        </form>
    </div>
  )
}

export default Login