const UserCard = ({gender,age,address,image,fullName})=>{
    return(
        <div>
            <img src={image} alt={`$fullName}profile`}/>
            <h3>{fullName} </h3>
            <h2>{gender}</h2>
            <h2>{age}</h2>
            <h2>{address}</h2>
        </div>
    )
}
export default UserCard;