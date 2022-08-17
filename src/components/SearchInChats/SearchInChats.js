import React from 'react';
import './SearchInChats.sass';
import { ReactComponent as Search } from '@img/icons/search.svg';

class SearchInChats extends React.Component {
  render() {
    return (
      <div className='SearchInChats'>
        <div className='search_wrapper'>
          <input type='text' placeholder='Search or start new chat' />
          <Search className='search' width={50} height={50} fill='#556080' />
        </div>
      </div>
    );
  }
}

export default SearchInChats;
