import { createContext, useState } from 'react';

export const FilterContext = createContext({});

function FilterProvider({ children}) {
    const [ category, setCategory ] = useState('');
    const [ webSite, setWebSite ] = useState('');
    const [ search, setSearch ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);
    

    return (
        <FilterContext.Provider value={{
            category,
            setCategory,
            webSite,
            setWebSite,
            search,
            setSearch,
            searchResults,
            setSearchResults
        }}>{ children }</FilterContext.Provider>
    )
}

export default FilterProvider;