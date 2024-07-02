import './index.css'
function UserCard({image, fullName, id}){
    return(
        
        <div className="users">
        <div className='user'>
            <img src={image} alt={`${fullName} profile`} />
            <h3>{fullName}</h3>
        </div>
        </div>
    );
};

export default UserCard;