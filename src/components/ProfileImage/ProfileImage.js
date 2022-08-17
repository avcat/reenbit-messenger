import React from 'react';
import './ProfileImage.sass';
import { ReactComponent as ProfileImageDefault } from '@img/icons/profile_picture_default.svg';
import { ReactComponent as Check } from '@img/icons/check.svg';

const ProfileImage = () => {
  return (
    <div className='ProfileImage'>
      <ProfileImageDefault className='profile_picture' width={50} height={50} />
      <Check className='check' width={17} height={17} />
    </div>
  );
}

export default ProfileImage;
