import IncidentsContext from "../context/userIncidentContext";
import { useContext } from "react";
import { UseIncidentsContextType } from "../context/userIncidentContext";


const useIncident= ():UseIncidentsContextType => {
  const context = useContext(IncidentsContext);

  if(context === undefined) {
    throw new Error('useIncident must be used within its provider')
  }

  return context;
}

export default useIncident;