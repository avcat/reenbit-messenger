import './SearchInChats.sass';
import { ReactComponent as Search } from '@img/icons/search.svg';

const SearchInChats = ({change_search_query}) => {

  const on_search_change = e => change_search_query(e.target.value);

  return (
    <div className='SearchInChats'>
      <form className='input_wrapper search_wrapper'>
        <input type='text' placeholder='Search or start new chat' onChange={on_search_change} />
        <span className='floating'>
          <Search className='search' />
        </span>
      </form>
    </div>
  );
}

export default SearchInChats;
