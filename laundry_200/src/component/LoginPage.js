import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import loginimg from '../image/login.png'
import useWindowDimensions from './WindowSize.js'
import GoogleLoginButton from './LoginButton.js'


const responseGoogle = (res) => {
  console.log(res);
}

const clientId = "536269962551-94rqvm4206q5tthq924t3diai5tvaphj.apps.googleusercontent.com"

const move = () => {
  this.props.history.push('localhost:3000/weather')
}
              
const LoginPage = () => {
  const { height, width } = useWindowDimensions();
  
  //styling with constants
  const loginformat = {display:"flex", flexDirection:"column", width: "80%", height:height , justifyContent:'center', alignItems:'center'}
  const idformat = {width: '400px', marginBottom:"30px"}
  const pwdformat = {width: '400px', marginBottom:"30px"}
  
  return (
    <>
      <div style={{display:"flex", flexDirection:"row"}}>
        <img src = {loginimg} style={{objectFit:"contain", height: height}} />
        <div style={loginformat}>
          <div style={{fontSize:'25pt', marginBottom:'40px'}}> Welcome to <b> Laundry 200 </b> </div>
          <TextField id="filled-basic" label="ID" variant="filled" style={idformat} />
          <TextField id="filled-basic" label="Password" variant="filled" style={pwdformat} />
          <div className="loginbtngroup" style={{display:"flex", flexDirection:"row", }}>
           <GoogleLoginButton/>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage;