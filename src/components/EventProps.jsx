//import "./EV.css";

export const EventProps = () => {
    const HandleWelcomeUser = (user) => {
        alert(`Hey..., ${user}`);
    };

    const handleHover = () => {
        alert(`Hey thanks for Hovering me...`);
    };

    return (
        <> 
        <WelcomeUser 
        onClick={() => HandleWelcomeUser("vinod")}
        onMouseEnter={handleHover}  
        />
        </>
    );
};

const WelcomeUser = (props) => {
    const { onClick, onMouseEnter } = props;
    const handleGreeting = () => {
        alert(`Hey User, Welcome`);
        onClick();
    };

    return (
        <>
        <button onClick={onClick}>Click</button>
        <button onMouseEnter={onMouseEnter}>Hover me</button>
        <button onClick={handleGreeting}>Greeting</button>
        </>
    );
};