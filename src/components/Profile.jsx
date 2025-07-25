function Profile(){
    return(
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
               name="Alice"
               age={30}
               greeting={
                <div>
                    <strong>hII kRISH, hAVE A WONDERFUL DAY!!</strong>
                </div>
               }
            >
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
               name="Bob"
               age={33}
               greeting={
                <div>
                    <strong>hII kRISH, Nice To Meet you!!!</strong>
                </div>
               }
            >
                <p>Hobbies: Writting, Cycling</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    );
}

export default Profile;


function ProfileCard({name, age, greeting, children}){
 //   const {name, age, greeting, children} = props;
    return (
        <>
        <h2>Name: {name} </h2>
        <h3>Age: {age}</h3>
        <p>{greeting}</p>
        <div>{children}</div>

        </>
    )
}