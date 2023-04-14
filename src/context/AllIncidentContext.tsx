import { createContext, useState, useEffect } from 'react';
import { getAllIncidents } from '../services';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import {  } from './userIncidentContext';
import { 
  childrenType,
  initialIncidentState,
  initialContextState,
  UseIncidentsContextType,
  IncidentType
} from './userIncidentContext';


const AllIncidentsContext = createContext<UseIncidentsContextType>(initialContextState)

export const AllIncidentsProvider = ({ children }: childrenType): React.ReactElement => {
  const [user] = useAuthState(auth)
  const [incidents, setIncidents] = useState<IncidentType[]>(initialIncidentState)
  const [loading, setLoading] = useState<boolean>(true)



  useEffect(() => {
    const fetchIncidents = async () => {
      if (!user) return; // Exit if user is not defined

      setLoading(true)

      const fetchedAll = await getAllIncidents();

      if (fetchedAll === undefined) return;

      setIncidents(fetchedAll);
      setLoading(false)

      console.log(fetchedAll);
    };

    fetchIncidents();
   
  }, [user]);


  console.log(incidents)


  return (
    <AllIncidentsContext.Provider value={{ incidents, loading }}>
      {children}
    </AllIncidentsContext.Provider>

  )
}

export default AllIncidentsContext
