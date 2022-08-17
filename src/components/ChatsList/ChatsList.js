import './ChatsList.sass';
import ChatItem from '../ChatItem';
import { find_user } from '../../helpers/helper_functions.js';

const ChatsList = ({profiles, chats, changeCurrentChat}) => {

  const chats_list = chats.length ? (
    <ul className='chats_list'>
      {chats.map(chat => {
        return <ChatItem
          key={chat.chat_id}
          profile={find_user(chat.with_user, profiles)}
          chat={chat}
          onClick={() => changeCurrentChat(chat.chat_id)}
        />
      })}
    </ul>
  ) : (
    <div className='no_chats'>
      You do not have any chats yet.
    </div>
  );

  return (
    <div className='ChatsList'>
      <h2 className='title_chats'>Chats</h2>
      <div className='chats'>
        {chats_list}
      </div>
    </div>
  );
}

export default ChatsList;
