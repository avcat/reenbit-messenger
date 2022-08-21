import './LogInOutGoogle.sass';
import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import ProfileImage from '../ProfileImage';

const LogInOutGoogle = () => {

  const [profile, setProfile] = useState([]);
  const clientId = '509918767552-043nja3ged896s2oj5agqhm86oasmvdr.apps.googleusercontent.com';
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
          clientId: clientId,
          scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/plus.me'
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = res => setProfile(res.profileObj);
  const onFailure = err => console.log('failed', err);
  const logOut = () => setProfile(null);
  const is_logged_in = profile && !Array.isArray(profile);

  return (
    <div className={`my_profile ${is_logged_in ? 'logged_in' : ''}`}>

      {is_logged_in ? (
        <div className='profile_info'>
          <ProfileImage profile_image_url={profile.imageUrl} />
          <p className='name'>{profile.name}</p>
          <GoogleLogout className='log_out' clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
        </div>
      ) : (
        <div className='profile_info'>
          <ProfileImage />
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        </div>
      )}

    </div>
  );
}

export default LogInOutGoogle;