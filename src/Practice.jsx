export const Practice = () => {
    
    const students = [5, 2, 3];
    return(
        <>

        <p>{students.length === 0 && "no students found"}</p>

        <p>Number of Students : {students.length}</p>

        </>
    );
};