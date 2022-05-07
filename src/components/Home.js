import React, { useEffect} from "react";
import { useLocation } from "react-router-dom";
import Users from "./Users";
import Paginations from "./Paginations";
import Filter from "./Filter";
import CurrentUsers from "./CurrentUsers";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../store/users_reducer";

const Home = React.memo(() => {
    const users = useSelector(state => state.users_reducer.users);

    const dispatch = useDispatch();
    
    const location = useLocation();

    useEffect(() => {
        dispatch(getUsersThunk(location));
    }, []);

    useEffect(() => {
        if (location.search.length) {
            dispatch(getUsersThunk(location));
        }
    }, [location]);

    const handleScroll = () => {
        window.scrollTo({ top: 0 });
    }

    console.log('Home');

    return ( 
        <div className="s-home">
            <div className="c-home__title">Home</div>

            <div className="c-home__items">
                <Filter />

                <CurrentUsers />

                {users.length ? <Users /> : (<div>No items</div>)}

                <button onClick={handleScroll}>Scroll top</button>

                <Paginations />
            </div>
        </div>
     );
});

export default Home;