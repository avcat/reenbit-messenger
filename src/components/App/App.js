import React from 'react';
import './App.sass';

import ProfileImage from '../ProfileImage';
import SearchInChats from '../SearchInChats';
import ChatsList from '../ChatsList';
import CurrentChat from '../CurrentChat';

class App extends React.Component {
  state = {
    current_user: 0,
    currentChat: null,
    profiles: [
      { profile_id: 0, profile_name: 'Arkadii Vodolazskyi' },
      { profile_id: 1, profile_name: 'Alice Freeman' },
      { profile_id: 2, profile_name: 'Josefina' },
      { profile_id: 3, profile_name: 'Velazquez' },
      { profile_id: 4, profile_name: 'Barrera' },
    ],
    chats: [
      {
        chat_id: 0,
        with_user: 1,
        messages: [
          {
            message_id: 1,
            message_owner: 1,
            message_text: 'You are the worst!',
            message_date: new Date('2017-06-12')
          }
        ]
      },
      {
        chat_id: 1,
        with_user: 2,
        messages: [
          {
            message_id: 1,
            message_owner: 2,
            message_text: 'Quickly come to the meeting room 1B, we have a big server issue.',
            message_date: new Date('2017-04-22T04:00:00')
          },
          {
            message_id: 2,
            message_owner: 0,
            message_text: 'I\'m having breakfast right now, can\'t you wait for 10 minutes?',
            message_date: new Date('2017-04-22T04:05:00')
          },
          {
            message_id: 3,
            message_owner: 2,
            message_text: 'We are losing money! Quick!',
            message_date: new Date('2017-04-22T04:10:00')
          }
        ]
      },
      {
        chat_id: 2,
        with_user: 3,
        messages: [
          {
            message_id: 1,
            message_owner: 3,
            message_text: 'Quickly come to the meeting room 1B, we have a big server issue.',
            message_date: new Date('2017-03-18')
          }
        ]
      },
      {
        chat_id: 3,
        with_user: 4,
        messages: [
          {
            message_id: 1,
            message_owner: 4,
            message_text: 'Are there any bananas left in the dining room?',
            message_date: new Date('2017-02-18')
          }
        ]
      },
    ],
  }

  changeCurrentChat = chat_id => {
    console.log(chat_id);
    const currentChat = chat_id;
    this.setState({currentChat});
  }

  render() {

    const {
      profiles,
      chats,
      current_user
    } = this.state;

    return (
      <div className='App'>
        <div className='left'>
          <div className='top'>
            <ProfileImage />
            <SearchInChats />
          </div>
          <ChatsList
            profiles={profiles}
            chats={chats}
            changeCurrentChat={this.changeCurrentChat}
          />
        </div>
        <div className='right'>
          <CurrentChat
            chat={chats[1]}
            profile={profiles[2]}
            myProfile={current_user}
          />
        </div>
      </div>
    );
  }
}

export default App;
