import React, { useContext, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import AuthContext, { loginReturnedStatesEnum } from '../context/authContext/AuthContext';

const Login = () => {
    const auth = useContext(AuthContext);
    const [loadingLogin, setLoadingLogin] = useState(false);
    const navigate = useNavigate();

    const handleFocus = () => {
      document.body.style.touchAction = 'none'; // zamiast trikow z document.body.style.touchAction = 'none'; możesz zrobić css'em tak żeby strona logowania wypełniała przeglądarkę na 100%, wtedy nie będzie się przesuwać

    };
  
    const handleBlur = () => {
      document.body.style.touchAction = 'auto';
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoadingLogin(true);
      // first element is fieldset thats why I've started colect elemets from 1 not from 0
        const form = e.target as HTMLFormElement;
        const mail = form[0] as HTMLInputElement; // uzyj state'ów do trzymania informacji z formularza
        const password = form[1] as HTMLInputElement;
        console.log(password);

        const res = await auth?.signIn(`${mail.value}@pla.pla`, password.value).then((res)=>{
          setLoadingLogin(false);
          console.log(res);
            if (res === loginReturnedStatesEnum.EVERYTHINGCORRECT) {
              navigate('/');
            }
          }
       );
      }


  return (
    <div className='mainForm'>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Login</span>
                <input type='text' required maxLength={20} onFocus={handleFocus} onBlur={handleBlur} /> 
            </label>
            <label>
                <span>Hasło</span>                
                <input type="password" required maxLength={20} onFocus={handleFocus} onBlur={handleBlur} />
            </label>
            <button type='submit'>{loadingLogin ? <FontAwesomeIcon icon={faGift} spin size='2xl' /> : <ArrowForwardIosIcon />}</button>
        </form>
    </div>
  )
}

export default Login