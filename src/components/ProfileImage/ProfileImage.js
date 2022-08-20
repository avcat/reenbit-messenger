import React from 'react';
import './ProfileImage.sass';
import { ReactComponent as ProfileImageDefault } from '@img/icons/profile_picture_default.svg';
import { ReactComponent as Check } from '@img/icons/check.svg';

const ProfileImage = ({profile_id, profile_image_url}) => {

  const profile_image_html = profile_id ? (
    <img
      className='profile_picture'
      src={`./assets/images/profile_pics/profile_${profile_id}.jpg`}
      alt='profile avatar'
    />
  ) : profile_image_url ? (
    <img
      className='profile_picture'
      src={profile_image_url}
      alt='profile avatar'
    />
  ) : <ProfileImageDefault className='profile_picture' />;

  return (
    <div className='ProfileImage'>
      <div className='image_wrapper'>
        {profile_image_html}
      </div>
      <Check className='check' width={17} height={17} />
    </div>
  );
}

export default ProfileImage;
