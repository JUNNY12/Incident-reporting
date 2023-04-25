import { createContext, useState, useEffect } from 'react';
import { getUserIncidents } from '../services';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

export type IncidentType = {
  id?:string;
  type?: string;
  description?: string;
  date?: string;
  time?: string;
  latitude?: number;
  longitude?: number;
  image?: string;
  [key: string]: any;
}

export const initialIncidentState: IncidentType[] = [];

export type UseIncidentsContextType = {
  incidents: IncidentType[],
  loading: boolean,
  setIncidents: React.Dispatch<React.SetStateAction<IncidentType[]>>,
};

export const initialContextState: UseIncidentsContextType = {
  incidents: initialIncidentState,
  loading: true,
  setIncidents: () => {},
};

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
      if (!user) return;

      setLoading(true)
      const fetchedIncidents = await getUserIncidents(user.uid);

      if (fetchedIncidents === undefined) return;

      setIncidents(fetchedIncidents);
      setLoading(false)
    };

    fetchIncidents();
  }, [user]);

  return (
    <IncidentsContext.Provider value={{ incidents, loading, setIncidents }}>
      {children}
    </IncidentsContext.Provider>
  )
}

export default IncidentsContext
