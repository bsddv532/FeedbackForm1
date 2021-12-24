import React, {useState} from 'react';
import './style.css';

 const Feedback = () => {

    const[name ,setName] = useState("");
    const[department ,setDepartment] = useState("");
    const[rating ,setRating] = useState("");
    const[data ,setData] = useState([]);

    
    const handleSubmit = (details) =>{
        details.preventDefault();

        const info = {name , department , rating}
        if(name && department && rating){
            setData((total) => [...total, info])
            setName("")
            setDepartment("")
            setRating("")
        }
    }


    return (
        <div id="main-parent">
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                    <input type="text" name='E-name' id="E-name" value={name} onChange={ (details) => setName(details.target.value) }/><br/>

                <label>Department :</label>
                    <input type="text" name='E-department' id="E-department" value={department} onChange={(details) => setDepartment(details.target.value) }/><br/>

                <label>Rating : </label>
                    <input type="number" name='E-rating' id="E-rating" value={rating} onChange={(details) => setRating(details.target.value) }/><br/>

                <input type="submit" id='btn' value="SUBMIT"/>
            </form>


        <div id="feedbackResult">
            {
                data.map((val) => 
                    <div className='Information'>
                        <h3>Name : {val.name} | Department : {val.department} | Rating : {val.rating} </h3>
                    </div>    
                )
            }
        </div>

    </div>
    )
}

export default Feedback