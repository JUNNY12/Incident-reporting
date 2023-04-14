import { createContext, useReducer } from 'react';
import searchReducer from '../reducers/SearchReducer';
import { IncidentType } from './userIncidentContext';
import { SearchAction } from '../reducers/SearchReducer';


type searchContextType = {
    searchState: {
        query: string,
        searchResults: IncidentType[]
    };
    searchDispatch: React.Dispatch<SearchAction>;
}

const initialSearchState = {
    query: '',
    searchResults: []
}

export const SearchContext = createContext<searchContextType>({
    searchState: initialSearchState,
    searchDispatch: () => null
})

type ChildrenType = {
    children: React.ReactNode
}

export const SearchProvider = ({ children }: ChildrenType) => {
    const [searchState, searchDispatch] = useReducer(searchReducer, initialSearchState);

    return (
        <SearchContext.Provider value={{ searchState, searchDispatch }}>
            {children}
        </SearchContext.Provider>
    )
}