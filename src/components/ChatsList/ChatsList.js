import './ChatsList.sass';
import ChatItem from '../ChatItem';

const ChatsList = ({chats}) => {

  const chats_list = chats.length ? (
    <ul className='chats_list'>
      {chats.map(chat => <ChatItem key={chat.chat_id} chat={chat} />)}
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
