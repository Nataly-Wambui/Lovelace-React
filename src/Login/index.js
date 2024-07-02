import './index.css'
import { useState } from 'react';
import{login} from './utils'

function Login(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showModal,setShowModal] =useState(false);
    const [error,setError] =useState('')
    console.log({userName});

    const handleLogin = async (e)=>{
        e.preventDefault();
        console.log('are we here');
        const result = await login({username:userName, password});
        if(result.success){
            setShowModal(false);
            onLoginSuccess();
        }else{
            setError(result.message)
        }
      
        // console.log({result});
    };
    return(
        <div>
      <button onClick={() => setShowModal(true)} className="login-button">Login</button>




      {showModal && (
          <div className="modal">
              <div className="modal-content">
                  <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                  <form onSubmit={handleLogin}>
                      <h2>Login</h2>
                      {error && <p className="error">{error}</p>}
                      <input placeholder="Enter username" type="text" value={username} onChange={(event) => setUserName(event.target.value)}
                      />
                      <input placeholder="Enter password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}
                      />
                      <button type="submit">Login</button>
                  </form>
              </div>
          </div>
      )}
  </div>
);
}

export default Login;