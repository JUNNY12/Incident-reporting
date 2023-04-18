import React from 'react';
import { IncidentType } from '../context/userIncidentContext';

interface UsePaginationProps {
    perPage?: number;
    incidents: IncidentType[];
}

export const usePagination = ({ perPage = 8 , incidents}: UsePaginationProps) => {
   
    const [currentPage, setCurrentPage] = React.useState<number>(0);

    const pageCount = Math.ceil(incidents.length / perPage);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const handlePageClick = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
        scrollToTop();
        
    };

    const startIndex = currentPage * perPage;
    const endIndex = startIndex + perPage;
    const currentIncidents = incidents.slice(startIndex, endIndex);

    return { currentIncidents, pageCount, handlePageClick,currentPage };
};
