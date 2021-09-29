import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Tables1 = () => {
    const [data, setData] = useState([])
    useEffect(() => {
    axios.get('http://localhost:3001/theimage/getall')
    .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data)
    })
    .catch(function (error) {
        // handle error
        console.log(error.response);
    })
    },[]);
    const [searchTerm, setTerm] = useState("")
    
    return (
        <div>
            <div className="input-group" id="searcharea">
                <input type="search" className="form-control rounded" placeholder="&#128270; Search" aria-label="Search" id="searchvalue"
                aria-describedby="search-addon" onChange={event => {setTerm(event.target.value)}} />
            </div>
          <table id="example" className="table table-striped" id="mytable1">
                <thead>
                     <tr>
                         <th scope="col">PHOTO</th>
                         <th scope="col">DESCRIPTION</th>
                         <th scope="col">PRICE</th>
                     </tr>
                 </thead>
            <tbody>
            {/* <Fragment> */}
                {data.filter((person) => {
                    if (searchTerm === "") {
                        return person
                        // filter by photo nane
                    }else if (person.photo.toLowerCase().includes(searchTerm.toLowerCase())){
                        return person
                    }
                         // filter by description
                    else if (person.description.toLowerCase().includes(searchTerm.toLowerCase())){
                        return person
                    }
                         // filter by price
                    else if (person.price.toLowerCase().includes(searchTerm.toLowerCase())){
                        return person
                    }
                }).map(person => {   
                    return(
                        <tr key={person.photo}>
                            <td>{person.photo}</td>
                            <td>{person.description}</td>
                            <td>{person.price}</td>
                        </tr>
                    );
                })}  
            {/* </Fragment>  */}
            </tbody>
        </table>   
        </div>
    )
}

export default Tables1
