import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Paginations = React.memo(() => {
    const [page, setPage] = useState(1);

    const pages = useSelector(state => state.users_reducer.pages);

    const navigate = useNavigate();

    const location = useLocation();

    let numberPage = new URLSearchParams(location.search).get('page') || 1;

    useEffect(() => {
        setPage(Number(numberPage));
    }, [numberPage]);

    const handleClick = (value) => {
        let name = new URLSearchParams(location.search).get('name') || '';
        let gender = new URLSearchParams(location.search).get('gender') || '';
        let species = new URLSearchParams(location.search).get('species') || '';

        navigate(`/home?page=${value}&name=${name}&gender=${gender}&species=${species}`)
    };

    console.log('Paginations');

    return ( 
        <div>
            <Pagination>
                <Pagination.Prev 
                    disabled={pages.prev ? false : true} 
                    onClick={() => handleClick(page - 1)}
                />

                {Array.from({ length: pages.pages }).map((el, index) => (
                    <Pagination.Item 
                        key={index}
                        active={(index + 1) === page}
                        onClick={() => handleClick(index + 1)} 
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}	

                {/* <Pagination.Ellipsis /> */}

                <Pagination.Next 
                    disabled={pages.next ? false : true} 
                    onClick={() => handleClick(page + 1)} 
                />
            </Pagination>
        </div>
     );
});

export default Paginations;