import { useGetUsers } from "./hooks/useGetUsers";
import UserCard from "../Atoms/UserCard";
import "./index.css"
import {Link} from 'react-router-dom';

function Users(){
    const {users,error,loading} =useGetUsers();
    console.log({users});
    return(
        <div className="images">
            {loading && <h2>loading users ...</h2>}
            {error.length> 0 && <h2>{error}</h2>}
            {users.length > 0 ? (
                         <div className="users-grid">
                         {users.map((user) => (
                             <Link to={`/user/${user.id}`} key={user.id} className="user-link">
                                 <UserCard
                                     image={user.image}
                                     fullName={`${user.firstName} ${user.lastName}`}
                                     age = { `${user.age}`}
                                     gender = { `${user.gender}`}
                                     email = { `${user.email}`}
  
  
                                 />
                             </Link>
                         ))}
                     </div>
                 ) : (
                     !loading && <h2>No users found</h2>
                 )}
             </div>
         );
     };
  
          
  export default Users;