import React from 'react';
import './App.sass';

import SearchInChats from '../SearchInChats';
import ChatsList from '../ChatsList';
import CurrentChat from '../CurrentChat';

import prof_pic from '@prof_pics/profile_1.jpg';

class App extends React.Component {
  state = {
    profiles: [
      {
        profile_id: 1,
        profile_picture: prof_pic
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
    console.log(this.state);
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
