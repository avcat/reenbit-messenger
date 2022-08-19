import './ChatItem.sass';
import { date_to_format } from '../../helpers/helper_functions.js';
import ProfileImage from '../ProfileImage';

const ChatItem = ({chat, handle_chat_click}) => {

  const profile_name = chat.companion.profile_name;
  const last_message = chat.messages[chat.messages.length - 1];
  const last_message_text = last_message.message_text.slice(0, 120); // TODO: test
  const last_message_time = date_to_format(last_message.message_date, 'date_shortened');

  return (
    <li className='ChatItem' onClick={handle_chat_click}>
      <ProfileImage profile_id={chat.companion.profile_id} />
      <h3 className='profile_name'>
        {profile_name}
      </h3>
      <time className='last_message_time' dateTime={last_message.message_date}>
        {last_message_time}
      </time>
      <div className='last_message_text'>
        {last_message_text}
      </div>
    </li>
  );
}

export default ChatItem;
