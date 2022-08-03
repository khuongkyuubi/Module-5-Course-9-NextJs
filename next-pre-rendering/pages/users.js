import User from "../components/user";

function UserList({users}) { // users from props
    return (
        <div>
            <h1>List of users</h1>
            {
                users.map(user => (
                    <div key={user.id}>
                        <User user={user}/>
                    </div>
                ))
            }
        </div>
    );
}

export default UserList;

export async function getStaticProps() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data)
        // async function getStaticProps return object with key props is props pass to UserList
        // Phaỉ đặt đúng tên getStaticProps
        return {
            props: {
                users: data,
            }
        }
    } catch (e) {
        console.log(e.message)

    }
}