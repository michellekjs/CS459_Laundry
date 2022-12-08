import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleLoginButton = () => {
  return (
    <GoogleOAuthProvider clientId='536269962551-94rqvm4206q5tthq924t3diai5tvaphj.apps.googleusercontent.com'>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          window.open('/weather')
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
