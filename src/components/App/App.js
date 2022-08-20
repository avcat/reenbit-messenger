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

  change_current_chat = chat_id => this.setState({current_chat_id: chat_id});

  hide_current_chat = () => this.setState({current_chat_id: null});

  get_current_chat = () => this.state.chats.find(chat => chat.chat_id === this.state.current_chat_id);

  sort_by_date_func = (chat_1, chat_2) => {
    const date_1 = new Date(chat_1.messages[chat_1.messages.length - 1].message_date);
    const date_2 = new Date(chat_2.messages[chat_2.messages.length - 1].message_date);
    return date_1.getTime() < date_2.getTime();
  };

  get_sorted_chats = chats => chats.sort(this.sort_by_date_func);

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

    const sorted_chats = this.get_sorted_chats(chats);

    this.setState({chats: sorted_chats}); // TODO: Rerender ChatsList
    this.write_into_local_storage();
  }

  change_search_query = search_query => this.setState({search_query});

  write_into_local_storage = () => {
    const chats = this.state.chats;
    localStorage.setItem('chats', JSON.stringify(chats));
  }

  componentDidMount() {
    if (localStorage.getItem('chats')) {
      const chats = JSON.parse(localStorage.getItem('chats'));
      this.setState({
        chats: chats
      });
    } else {
      this.write_into_local_storage();
    }
  }

  render() {

    const {
      current_chat_id,
      search_query,
      chats
    } = this.state;

    const get_filtered_chats = chats => {
      const searched_chats = search_query ? (
        chats.filter(chat => chat.companion.profile_name.toLowerCase().includes(search_query.toLowerCase()))
      ) : chats;
      return searched_chats;
    }
    const filtered_chats = get_filtered_chats(chats);

    return (
      <div className={`App ${current_chat_id === null ? '' : 'showing_chat'}`}>

        <div className='left'>
          <div className='top'>
            <div className='my_profile'>
              <ProfileImage />
            </div>
            <SearchInChats change_search_query={this.change_search_query} />
          </div>
          <ChatsList
            chats={filtered_chats}
            change_current_chat={this.change_current_chat}
          />
        </div>

        <div className='right'>
          <CurrentChat
            chat={this.get_current_chat()}
            add_to_messages={this.add_to_messages}
            hide_current_chat={this.hide_current_chat}
          />
        </div>

      </div>
    );

  }
}

export default App;
