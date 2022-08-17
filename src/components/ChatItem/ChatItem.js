import './ChatItem.sass';
import { date_to_format } from '../../helpers/helper_functions.js';
// import ProfileImage from '../ProfileImage';

const ChatItem = ({chat}) => {
  const last_message = chat.messages[chat.messages.length - 1];
  const last_message_text = last_message.message_text.slice(0, 120);
  const last_message_time = date_to_format(last_message.message_date, 'date_shortened');

  return (
    <li className='ChatItem'>
      {/* <ProfileImage profile_id={chat.with} /> */}
      <h3 className='profile_name'>Profile Name</h3>
      <div className='last_message_text'>
        {last_message_text}
      </div>
      <time className='last_message_time' dateTime={last_message.message_date}>
        {last_message_time}
      </time>
    </li>
  );
}

export default ChatItem;
