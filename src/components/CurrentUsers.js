import { useSelector } from "react-redux";

const CurrentUsers = () => {
    const currentUsersId = useSelector(state => state.users_reducer.currentUsersId);
    
    return (
        <div>
           {currentUsersId.map(el => (
               <div key={el}>{el}</div>
           ))}
        </div>
    )
}

export default CurrentUsers;