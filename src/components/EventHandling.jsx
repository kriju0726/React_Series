import "./EV.css";

export const EventHandling = () => {

    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);

        alert("Hey!! I am ok");
    }

    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user}, Welcome`);
    }

    return (
        <>
          <button onClick={handleButtonClick}> Click Me</button>
          <br/>
          <button onClick={(event) => handleButtonClick(event)}> Click Me 2</button>
          <br />
          <button onClick={(event) => console.log(event)}> Inline Function</button>
          <br />
          <button onClick={() => handleWelcomeUser("krish")}> Me</button>
        </>
    );
};