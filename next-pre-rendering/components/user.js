function User({user}) {
    return (
        <div>
            <p><strong>User {user.id}</strong></p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <hr/>
        </div>
    );
}

export default User;