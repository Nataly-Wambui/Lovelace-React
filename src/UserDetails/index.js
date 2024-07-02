import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
const baseurl =process.env.REACT_APP_BASE_URL;
function UserDetails(){
  const { id } = useParams();
  const [user, setUser] = useState(null);


  useEffect(() => {
      const fetchUser = async () => {
          try {
              const response = await fetch(`${baseurl}/users/${id}`);
              if (!response.ok) {
                  throw new Error('User not found');
              }
              const userData = await response.json();
              setUser(userData);
          } catch (error) {
              console.error('Error fetching user:', error);
          }
      };
      fetchUser();
  }, [id]);




  if (!user) {
      return <h2>Loading user...</h2>;
  }




  return (
      <div className="user-details">
          <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
          <h2>{`${user.firstName} ${user.lastName}`}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address.address}, {user.address.city}, {user.address.state}, {user.address.country}</p>
      </div>
  );
};



export default UserDetails;
