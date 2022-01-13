import React,{useState} from 'react'
import './Login.css';

function LoginPage() {

const [Username, setUsername] = useState()
const [Password, setPassword] = useState()



    return (
       <>
       <div className='mainareas'>
       <img src='masque.jpg' width='100%' height='650px'/>
       <div className='imgcover'>
 <form name="login-form" class="login-form" action="" method="post">
    <div class="header">
  <h1>Login Form</h1>
    <span>Fill out the form below to login to my super awesome imaginary control panel.</span>
    </div>
    <div class="content">
	<input name="username" type="text" class="input username" value={Username} />
   <input name="password" type="password" class="input password" value={Password} />
    </div>
    <div class="footer">





<input type="submit" name="submit" value="Login" class="button"/>

    </div>
</form>
</div>
<div class="gradient"></div></div>
       </>
    )
}

export default LoginPage
