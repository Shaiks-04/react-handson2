import React,{useState} from "react";
import "../style.css";

function FeedBack(props){
    const [data,setData]=useState([]);

    const handleData=(e)=>{
        e.preventDefault();
        const values={
            name:e.target.name.value,
            dept:e.target.dept.value,
            rating:e.target.rate.value,
        };
        setData([...data,values]);
        e.target.reset();
    };
    console.log(data);
    return (
        <div>
            <h1>Employee FeedBack Form</h1>
            <form onSubmit={handleData}>
                <label className="txt">Name : </label>
                <input type="text" name="name" placeholder="Enter ename" className="name" required/>
                <br/>
                <label className="txt">Department : </label>
                <input type="text" name="dept" placeholder="Enter Edept" className="dept" />
                <br/>
                <label className="txt">Rating:</label>
                <input type="number"  name="rate" placeholder="Give Rating" className="rate" /><br/>
                <button >Submit</button>
            </form>
            <hr/>
            <div className="box">
                {data.map((item,i)=>(
                    <h4 className="details" id={i}>Name : {item.name} | Dept : {item.dept} | Rating : {item.rating}</h4>
                ))}
            </div>
        </div>
    )
}

export default FeedBack;