import React from 'react';
import './CurrentChat.sass';
import ProfileImage from '../ProfileImage';
import { ReactComponent as Send } from '@img/icons/send.svg';
import { date_to_format, get_random_int_inclusive } from '../../helpers/helper_functions.js';

const CurrentChat = ({chat, add_to_messages}) => {

  const companion = chat ? chat.companion : null;
  const messages = chat ? chat.messages : null;

  const messages_html = messages ? (
    messages.length ? (
      <ul className='messages'>
        {
          messages.map((message, index) => {
            const is_mine = message.message_owner === 0;
            const profile_image = is_mine ? null : <ProfileImage profile_id={message.message_owner} />;

            return <li
              key={index}
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
    ) : (<div className='no_messages'>There are no messages in this chat.</div>)
  ) : (<div className='no_chat_selected'>No chat selected.</div>);

  const companion_html = companion ? (
    <div className='companion'>
      <ProfileImage profile_id={companion.profile_id} />
      <h3 className='profile_name'>
        {companion.profile_name}
      </h3>
    </div>
  ) : (<div className='no_companion'></div>);

  const get_response = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();

      const message_data = {
        message_owner: companion.profile_id,
        message_text: data.value,
        message_date: new Date()
      };
      const delay_seconds = get_random_int_inclusive(10, 15);
      setTimeout(() => {
        add_to_messages(message_data)
      }, delay_seconds * 1000);
    } catch (err) {
      console.log(err.message);
    }
  }

  const on_message_submit = e => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const message_text = form_data.get('message');

    const message_data = {
      message_owner: 0,
      message_text: message_text,
      message_date: new Date()
    };
    add_to_messages(message_data);
    get_response();
  }

  return (
    <div className='CurrentChat'>

      <div className='top'>
        {companion_html}
      </div>

      <div className='chat_body'>
        {messages_html}
      </div>

      <div className='chat_message'>
        <form className='input_wrapper chat_message_wrapper' onSubmit={on_message_submit}>
          <input type='text' name='message' placeholder='Type your message' />
          <button className='floating'>
            <Send className='send' />
          </button>
        </form>
      </div>
    </div>
  );

}

export default CurrentChat;
