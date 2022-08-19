import React from 'react';
import './CurrentChat.sass';
import ProfileImage from '../ProfileImage';
import { ReactComponent as Send } from '@img/icons/send.svg';
import { date_to_format } from '../../helpers/helper_functions.js';

class CurrentChat extends React.Component {

  state = {
    messages: [],
    profile: [],
    my_profile: null
  }

  componentDidMount() {
    this.setState({
      messages: this.props.chat.messages,
      profile: this.props.profile,
      my_profile: this.props.my_profile
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
            const is_mine = message.message_owner === this.state.my_profile;
            const profile_image = is_mine ? null : <ProfileImage profile_id={profile.profile_id} />;

            return <li
              key={message.message_id}
              className={`message ${is_mine ? 'mine' : ''}`}
            >
              {profile_image}

              <div className='text_wrapper'>
                <p className='text'>
                  {message.message_text}
                </p>
              </div>
              <time className='time' dateTime={message.message_date}>
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
            <ProfileImage profile_id={profile.profile_id} />
            <h3 className='profile_name'>
              {profile_name}
            </h3>
          </div>
        </div>

        <div className='chat_body'>
          {messages_html}
        </div>

        <div className='chat_message'>
          <div className='input_wrapper chat_message_wrapper'>
            <input type='text' placeholder='Type your message' />
            <button className='floating'>
              <Send className='send' width={40} height={40} />
            </button>
          </div>
        </div>

      </div>
    );
  }
}

export default CurrentChat;
