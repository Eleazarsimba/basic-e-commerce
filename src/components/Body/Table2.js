import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ReactPaginate from 'react-paginate'

const Table2 = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState([1]);
    const [postsPerPage] = useState([3]);

    useEffect(() => {
    axios.get('http://localhost:3001/theimage/getall')
    .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data)
    })
    .catch(function (error) {
        // handle errors
        console.log(error.response);
    })
    },[]);

    //get current item
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentItem = data.slice(indexOfFirstPost, indexOfLastPost);

    //creating pagination
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(data.length / postsPerPage); i++){
        pageNumbers.push(i)
    }

    //change page 
        // const paginate = (pageNumber) => {
        //     setCurrentPage(pageNumber)
        // }
    //change page
    const handlePage = (number) => {
        setCurrentPage(number.selected + 1)
    }
    const [searchTerm, setTerm] = useState([])

    return (
        <div>
            <div className="input-group" id="searcharea">
                <form>
                    <input type="search" className="form-control rounded" placeholder="&#128270; Search" aria-label="Search" id="searchvalue"
                    aria-describedby="search-addon" onChange={event => {setTerm(event.target.value)}} />
                    <input type="submit" value="Submit" />
                </form>
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
                {currentItem.map(person => {   
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

        <div>
            <ReactPaginate 
                previousLabel={'Previous'}
                nextLabel={'next'}
                breakLabel={''}
                marginPagesDisplayed={0}
                pageCount={Math.ceil(data.length / postsPerPage)}
                pageRangeDisplayed={3}
                onPageChange={handlePage}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
            />
  
           {/* <ul className="pagination" id="paginationT2">
               {pageNumbers.map(number => {
                   return(
                   <li key={number} className="page-items">
                       <a onClick={() => paginate(number)} className="page-link" style={{cursor:'pointer'}}>
                           {number}
                       </a>
                   </li>)
               })}
           </ul> */}
       </div>
        
        </div>
    )
}

export default Table2
