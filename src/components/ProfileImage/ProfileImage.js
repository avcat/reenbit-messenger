import React from 'react';
import './ProfileImage.sass';
import { ReactComponent as ProfileImageDefault } from '@img/icons/profile_picture_default.svg';
import { ReactComponent as Check } from '@img/icons/check.svg';

const ProfileImage = ({profile_id}) => {
  const get_profile_image_url = async profile_id => {
    const url = await fetch(`../../img/profile_pics/profile_${profile_id}.jpg`);
    console.log(url);
    // require(`@img/profile_pics/profile_${profile_id}.jpg`)
  };
  console.log(get_profile_image_url(profile_id));

  return (
    <div className='ProfileImage'>
      <ProfileImageDefault className='profile_picture' width={50} height={50} fill='#556080' />
      <Check className='check' width={50} height={50} fill='#5AFF00' />
    </div>
  );
}

export default ProfileImage;
