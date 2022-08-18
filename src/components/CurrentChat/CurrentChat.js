import React from 'react';
import './CurrentChat.sass';
import ProfileImage from '../ProfileImage';
import { ReactComponent as Send } from '@img/icons/send.svg';
import { date_to_format } from '../../helpers/helper_functions.js';

class CurrentChat extends React.Component {

  state = {
    messages: [],
    profile: [],
    myProfile: null
  }

  componentDidMount() {
    this.setState({
      messages: this.props.chat.messages,
      profile: this.props.profile,
      myProfile: this.props.myProfile
    })
  }

  render() {

    const {
      messages,
      profile,
    } = this.state;

    const profile_name = profile.profile_name;

    const messages_html = messages.length ? (
      <ul className='messages'>
        {
          messages.map(message => {
            const is_mine = message.message_owner === this.state.myProfile;
            const profile_image = is_mine ? null : <ProfileImage />;

            return <li
              key={message.message_id}
              className={`message ${is_mine ? 'mine' : ''}`}
            >
              {profile_image}

              <p className='text'>
                {message.message_text}
              </p>
              <time dateTime={message.message_date}>
                {date_to_format(message.message_date, 'date_short_time_full')}
              </time>
            </li>;
          })
        }
      </ul>
    ) : (
      <div className='no_messages'>
        There are no messages in this chat yet.
      </div>
    );

    return (
      <div className='CurrentChat'>

        <div className='top'>
          <div className='companion'>
            <ProfileImage />
            <h3 className='profile_name'>
              {profile_name}
            </h3>
          </div>
        </div>

        <div className='chat_body'>
          {messages_html}
        </div>

        <div className='chat_meesage'>
          <div className='chat_meesage_wrapper'>
            <input type='text' placeholder='Type your message' />
            <Send className='send' width={50} height={50} />
          </div>
        </div>

      </div>
    );
  }
}

export default CurrentChat;
