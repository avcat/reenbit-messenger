import React from 'react';
import './App.sass';

import SearchInChats from '../SearchInChats';
import ChatsList from '../ChatsList';
import CurrentChat from '../CurrentChat';

class App extends React.Component {
  state = {
    profiles: [
      {
        profile_id: 1,
        profile_picture: 'picture.png'
      }
    ],
    chats: [
      {
        with: 1,
        chat_id: 1,
        messages: [
          {
            message_id: 1,
            message_text: 'Text 1',
            message_date: Date()
          }
        ]
      }
    ],
    currentChat: null
  }

  render() {
    return (
      <div className="App">
        <div className='left'>
          <div className='my_profile'>My profile</div>
          <SearchInChats />
          <ChatsList />
        </div>
        <div className='right'>
          <CurrentChat />
        </div>
      </div>
    );
  }
}

export default App;
