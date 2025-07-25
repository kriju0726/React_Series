
import {useState} from "react";


export const DerivedState = () => {
    const [users, setUsers] = useState([
        {name:"alice ",  age: 32},
        {name:"bob ",  age: 26},
        {name:"charlie ",  age: 28},
        {name:"dmark ",  age: 29},
    ]);

    console.log(users);
    const userCount = users.length;
    const averageAge = users.reduce((accum, user) => accum + user.age, 0)/ userCount;


    return (
        <div className="main-div">
            <h1>Users List</h1>
        <ul>
            {users.map((user, index) => {
                return (
                    <li key={index}>{user.name} - {user.age} years old...</li>
                )
            })}
        </ul>
        <p>Total Users: {userCount}</p>
        <p>Average Age: {averageAge}</p>
        </div>
        
    )
}

