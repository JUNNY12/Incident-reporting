import { createContext, useState, useEffect } from 'react';
import { getUserIncidents } from '../services';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

// Incident Type
export type IncidentType = {
  id?: number | string;
  type?: string;
  description?: string;
  date?: string;
  time?: string;
  latitude?: number;
  longitude?: number;
  image?: string;
  [key: string]: any;
}

// Initial State
export const initialIncidentState: IncidentType[] = []

//type for context
export type UseIncidentsContextType = { incidents: IncidentType[], loading: boolean }

//initial context state
export const initialContextState: UseIncidentsContextType = { incidents: [], loading: false }

export type childrenType = {
  children?: React.ReactElement | React.ReactElement[]
}

const IncidentsContext = createContext<UseIncidentsContextType>(initialContextState)

export const IncidentsProvider = ({ children }: childrenType): React.ReactElement => {
  const [user] = useAuthState(auth)
  const [incidents, setIncidents] = useState<IncidentType[]>(initialIncidentState)
  const [loading, setLoading] = useState<boolean>(true)



  useEffect(() => {
    const fetchIncidents = async () => {
      if (!user) return; // Exit if user is not defined

      setLoading(true)
      const fetchedIncidents = await getUserIncidents(user.uid);

      if (fetchedIncidents === undefined) return;

      setIncidents(fetchedIncidents);
      setLoading(false)

      // console.log(fetchedIncidents);
    };

    fetchIncidents();
  }, [user]);


  // console.log(incidents)

  return (
    <IncidentsContext.Provider value={{ incidents, loading }}>
      {children}
    </IncidentsContext.Provider>

  )
}

export default IncidentsContext
