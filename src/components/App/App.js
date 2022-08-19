import React from 'react';
import './App.sass';

import ProfileImage from '../ProfileImage';
import SearchInChats from '../SearchInChats';
import ChatsList from '../ChatsList';
import CurrentChat from '../CurrentChat';

class App extends React.Component {
  state = {
    current_chat_id: null,
    search_query: null,
    chats: [
      {
        chat_id: 0,
        companion: { profile_id: 1, profile_name: 'Steve Jobs' },
        messages: [
          {
            message_owner: 1,
            message_text: 'You are the worst!',
            message_date: new Date('2017-06-12')
          }
        ]
      },
      {
        chat_id: 1,
        companion: { profile_id: 2, profile_name: 'Elon Musk' },
        messages: [
          {
            message_owner: 2,
            message_text: 'Quickly come to the meeting room 1B, we have a big server issue',
            message_date: new Date('2017-04-22T04:00:00')
          },
          {
            message_owner: 0,
            message_text: 'I\'m having breakfast right now, can\'t you wait for 10 minutes?',
            message_date: new Date('2017-04-22T04:05:00')
          },
          {
            message_owner: 2,
            message_text: 'We are losing money! Quick!',
            message_date: new Date('2017-04-22T04:10:00')
          }
        ]
      },
      {
        chat_id: 2,
        companion: { profile_id: 3, profile_name: 'Mark Zuckerberg' },
        messages: [
          {
            message_owner: 3,
            message_text: 'Quickly come to the meeting room 1B, we have a big server issue.',
            message_date: new Date('2017-03-18')
          }
        ]
      },
      {
        chat_id: 3,
        companion: { profile_id: 4, profile_name: 'Pavel Durov' },
        messages: [
          {
            message_owner: 4,
            message_text: 'Are there any bananas left in the dining room?',
            message_date: new Date('2017-02-18')
          }
        ]
      },
    ],
  }

  change_current_chat = chat_id => {
    this.setState({current_chat_id: chat_id});
  };

  get_current_chat = () => this.state.chats.find(chat => chat.chat_id === this.state.current_chat_id);

  add_to_messages = message_data => {
    const current_chat_id = this.state.current_chat_id;
    if (current_chat_id === null) { return; }

    const chats = this.state.chats.map(chat => {
      return chat.chat_id === this.state.current_chat_id ? ({
        chat_id: chat.chat_id,
        companion: chat.companion,
        messages: [...chat.messages, message_data]
      }) : chat;
    });

    this.setState({
      chats: chats
    })
  }

  change_search_query = search_query => this.setState({search_query});

  use_search_query = () => {
    const search_query = this.state.search_query;
    return search_query ? (
      this.state.chats.filter(chat => chat.companion.profile_name.toLowerCase().includes(search_query.toLowerCase()))
    ) : this.state.chats;
  }

  render() {

    return (
      <div className='App'>

        <div className='left'>
          <div className='top'>
            <div className='my_profile'>
              <ProfileImage />
            </div>
            <SearchInChats change_search_query={this.change_search_query} />
          </div>
          <ChatsList
            chats={this.use_search_query()}
            change_current_chat={this.change_current_chat}
          />
        </div>

        <div className='right'>
          <CurrentChat
            chat={this.get_current_chat()}
            add_to_messages={this.add_to_messages}
          />
        </div>

      </div>
    );

  }
}

export default App;
