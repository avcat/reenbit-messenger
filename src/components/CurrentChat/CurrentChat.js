import React from 'react';
import './CurrentChat.sass';
import ProfileImage from '../ProfileImage';
import { ReactComponent as Send } from '@img/icons/send.svg';
import { ReactComponent as ArrowLeft } from '@img/icons/arrow_left.svg';
import { get_random_int_inclusive } from '../../helpers/helper_functions.js';
import Messageitem from '../MessageItem/MessageItem';

const CurrentChat = ({chat, add_to_messages, hide_current_chat}) => {

  const companion = chat ? chat.companion : null;
  const messages = chat ? chat.messages : null;

  const messages_html = messages ? (
    messages.length ? (
      <ul className='messages'>
        {messages.map((message, index) => <Messageitem key={index} message={message} is_mine={message.message_owner === 0} />)}
      </ul>
    ) : (<div className='no_messages'>There are no messages in this chat.</div>)
  ) : (<div className='no_chat_selected'>No chat selected.</div>);

  const companion_html = companion ? (
    <div className='companion'>
      <button className='back_to_chats' onClick={hide_current_chat}>
        <ArrowLeft width={24} height={24} />
      </button>
      <ProfileImage profile_id={companion.profile_id} />
      <h3 className='profile_name'>
        {companion.profile_name}
      </h3>
    </div>
  ) : (<div className='no_companion'></div>);

  const get_response = async delay_seconds => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();

      const date = new Date();
      date.setSeconds(date.getSeconds() + delay_seconds);

      const message_data = {
        message_owner: companion.profile_id,
        message_text: data.value,
        message_date: date
      };

      setTimeout(() => {
        add_to_messages(message_data, chat.chat_id);
      }, delay_seconds * 1000);

    } catch (err) {
      console.log(err.message);
    }
  }

  const on_message_submit = e => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const message_text = form_data.get('message');

    const date = new Date();
    const message_data = {
      message_owner: 0,
      message_text: message_text,
      message_date: date
    };
    e.target.querySelector("[name=message]").value = '';

    add_to_messages(message_data, chat.chat_id);

    const delay_seconds = get_random_int_inclusive(1, 5);
    get_response(delay_seconds);
  }

  return (
    <div className='CurrentChat'>
      <div className='top'>{companion_html}</div>
      <div className='chat_body'>{messages_html}</div>
      <div className={`chat_message ${chat ? '' : 'disabled'}`}>
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
