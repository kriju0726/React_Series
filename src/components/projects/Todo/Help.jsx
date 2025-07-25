// import "./Todo.css";
// import { useState } from "react";
// import { MdCheck } from "react-icons/md";
// import { MdDeleteForever } from "react-icons/md";
// import { useEffect } from "react";


// export const Todo = () => {
//     const [inputValue, setInputValue] = useState("");
//     const [task, setTask] = useState([]);
//     const [currentTime, setCurrentTime] = useState(new Date());

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     const handleInputChange = (value) => {
//         setInputValue(value);
//     };

//     const handleFormSubmit = (event) => {
//         event.preventDefault();

//         if(!inputValue) return;
//         if(task.includes(inputValue)){
//             setInputValue("");
//             return;
//         } 

//         setTask((prevTask) => [...prevTask, inputValue]);
//         setInputValue("");
//     };

//     return (
//         <section className="todo-container">
//             <header>
//                 <h1>Todo List</h1>
//                 <p className="date-time">{currentTime.toLocaleString()}</p>
//             </header>
//             <section className="form">
//                 <form onSubmit={handleFormSubmit}>
//                     <div>
//                         <input 
//                         type="text" 
//                         className="todo-input" 
//                         autoComplete="off"
//                         value={inputValue}
//                         onChange={(event) => handleInputChange(event.target.value)}
//                         >
//                         </input>
//                     </div>
//                     <div>
//                         <button type="submit" className="todo-btn">Add Task</button>
//                     </div>
//                 </form>
//             </section>
//             <section className="myUnOrdList">
//                 <ul>
//                     {task.map((curTask, index) => {
//                         return (
//                             <li key={index} className="todo-item">
//                                 <span>{curTask}</span>
//                                 <button className="check-btn"><MdCheck /></button>
//                                 <button className="delete-btn"><MdDeleteForever /></button>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </section>
//         </section>
//     )
// }