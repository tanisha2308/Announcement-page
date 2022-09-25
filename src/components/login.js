import React, {useState} from 'react'
import './login.css';
import swal from 'sweetalert';

// api
async function loginUser(credentials) {
  return fetch('https://www.melivecode.com/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
    if ('accessToken' in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = "/anouncement-page";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  }
  return (
        <>
            <div className="login-form mt-5">
                    <div className="section mt-1">
                      <h5>Log in</h5>
                    </div>
                    {/* Log in form */}
                    <form onSubmit={handleSubmit}>
                      <div class="form-group mt-4">
                        <label for="email">Email</label>
                        <input 
                          type="email" 
                          class="form-control" 
                          id="email" 
                          aria-describedby="emailHelp" 
                          placeholder="Enter your email address"
                          onChange={e => setUserName(e.target.value)}
                          required/>
                      </div><br></br>
                      <div class="form-group">
                        <label for="password">Password</label>
                      <input 
                        type="password" 
                        class="form-control" 
                        id="password1" 
                        placeholder="Enter your password"
                        onChange={e => setPassword(e.target.value)}
                        required/>
                     </div><br></br>
                      <button className='flex' type="submit" class="btn btn-primary">Log in</button>
                    </form>
                    {/*Log in form */}
            </div>
        </>
     
  );
}   
