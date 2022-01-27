import Typed from "react-typed";

const Main = () => {
    return(

        <>
            <h2>  
            < Typed 
             className= "typed-text"
             strings={[ "Астрахань", "Астаханская область", "ЮФО" ]}
             typeSpeed={40}
             backSpeed={60}
             loop
            />
            </h2>
            <div className="astimg"></div>

        </>
    );   
}

export { Main };