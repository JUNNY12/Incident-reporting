import { IncidentType } from "../context/userIncidentContext";

type SearchState = {
    query: string,
    searchResults: IncidentType[]
}

//indicating that searchAction have two different types of actions
export type SearchAction =
    | { type: 'SET_QUERY', payload: string }
    | { type: 'SEARCH_RESULTS', payload: IncidentType[] };

const searchReducer = (state: SearchState, action: SearchAction): SearchState => {
    switch (action.type) {
        case 'SET_QUERY':
            return { ...state, query: action.payload };
        case 'SEARCH_RESULTS':
            return { ...state, searchResults: action.payload };
        default:
            return state;
    }
};

export default searchReducer;