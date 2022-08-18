import React from 'react';
import './SearchInChats.sass';
import { ReactComponent as Search } from '@img/icons/search.svg';

class SearchInChats extends React.Component {
  render() {
    return (
      <div className='SearchInChats'>
        <div className='input_wrapper search_wrapper'>
          <input type='text' placeholder='Search or start new chat' />
          <span className='floating'>
            <Search className='search' width={40} height={40} />
          </span>
        </div>
      </div>
    );
  }
}

export default SearchInChats;
