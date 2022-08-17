import React from 'react';
import './App.sass';

import ProfileImage from '../ProfileImage';
import SearchInChats from '../SearchInChats';
import ChatsList from '../ChatsList';
import CurrentChat from '../CurrentChat';

class App extends React.Component {
  state = {
    profiles: [
      {
        profile_id: 1,
        profile_name: 'Arkadii Vodolazskyi'
      },
      {
        profile_id: 2,
        profile_name: 'Alice Freeman'
      },
    ],
    chats: [
      {
        with: 1,
        chat_id: 1,
        messages: [
          {
            message_id: 1,
            message_text: 'Text 1',
            message_date: new Date()
          }
        ]
      }
    ],
    currentChat: null
  }

  render() {

    const {
      chats
    } = this.state;

    return (
      <div className='App'>
        <div className='left'>
          <div className='top'>
            <ProfileImage profile_id={1} />
            <ProfileImage profile_id={2} />
            {/* <SearchInChats /> */}
          </div>
          {/* <ChatsList chats={chats} /> */}
        </div>
        <div className='right'>
          {/* <CurrentChat /> */}
        </div>
      </div>
    );
  }
}

export default App;
