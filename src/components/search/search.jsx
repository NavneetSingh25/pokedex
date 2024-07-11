// CSS imports
import useDebounce from '../../hooks/useDebounce';
import './search.css';

function Search({ updateSearchTerm }) {
    const debounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value));
    return (
        <input 
            id='search-pokemon'
            type="text" 
            placeholder="which pokemon you're loooking for ? " 
            onChange={debounceUpdateSearch}
        />
    )
}

export default Search;