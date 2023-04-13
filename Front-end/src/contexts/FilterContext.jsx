import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const FilterContext = createContext({});


function FilterProvider({ children}) {
    

    return (
        <FilterContext.Provider value={{}}>{ children }</FilterContext.Provider>
    )
}

export default FilterProvider;