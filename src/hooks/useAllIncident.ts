import AllIncidentsContext from "../context/AllIncidentContext";
import { useContext } from "react";
import { UseIncidentsContextType } from "../context/userIncidentContext";

const useAllIncident= ():UseIncidentsContextType => {
  const context = useContext(AllIncidentsContext);

  if(context === undefined) {
    throw new Error('useIncident must be used within its provider')
  }

  return context;
}

export default useAllIncident;