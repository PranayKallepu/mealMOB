import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { Button,ModalContainer, DetailsContainer, Form } from '../LoginPopUp/styledComponent';
import { useState } from 'react';
import Cookies from 'js-cookie'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPopUp = e =>{
  const navigate = useNavigate()

  const [inputData, setInputData] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading]= useState(false)
  
  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  
  const handleLogin = async(e) =>{
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await axios.post('/login', inputData)
      console.log(response.data);
      if(response.data.success){
        Cookies.set('token', response.data.token, { expires: 1 })
        Cookies.set('username', response.data.username, {expires: 1})
        navigate('/', {replace: true})
      }
    } catch (error) {
      setError(error.response?.data?.message)
    } finally{
      setIsLoading(false)
    }
  }

  return(
      <Popup
        modal
        trigger={
          <Button type="button">
            Login
          </Button>
        }
      >
        {close => (
          <ModalContainer>
            <DetailsContainer>
              <Form onSubmit={handleLogin}>
                <h3>User Login</h3>
                <input  type="text" name="username" onChange={handleInput} placeholder="USERNAME" />
                <input type="password" name="password" onChange={handleInput} placeholder="PASSWORD" />
                <button type="submit" disabled={isLoading}>
                  {isLoading ? 'Logging...' : 'Login'}
                </button>
                </Form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </DetailsContainer>
            <button
              type="button"
              onClick={() => close()}
            >
              Close
            </button>
            
          </ModalContainer>
        )}
      </Popup>
   )
  }
   export default LoginPopUp