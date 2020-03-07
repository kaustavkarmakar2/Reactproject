import React from 'react';
import Select from 'react-select';
import StarRatingComponent from 'react-star-rating-component';
import AsyncSelect from 'react-select/async'

const Posts=({posts,loading,state,city}) =>{
  
  state = {
    rating: 1,
    posts:[],
    selectedOption: [],
    
   
  }
  var city =[
    {location:"KOLKATA"},
    {location:"MUMBAI"},
    {location:"DELHI"}
  ]
  const onStarClick=(nextValue, prevValue, name) =>{
    this.setState({rating: nextValue})
  }
  
  const { rating } = state;
  console.log("gugy",city);
  if(loading){
   return <h2>Loading....</h2>
  }
  let options = posts.map(function (post) {
    return post.city;
  })
  console.log("options",options);
//    const fetchData = (inputValue, callback) => {
//     if (!inputValue) {
      
//      callback([]);
//     } else {
//         setTimeout(() => {
//   fetch("https://vast-shore-74260.herokuapp.com/banks?city=" + inputValue, {
//     method: "GET",
//   })
//   .then((resp) => {
//     return resp.json()
    
//   }) 
//   .then((data) => {
//       const tempArray = [];
//      data.forEach((element) => {
//             tempArray.push({ label: `${element.city}`, value: element.city });
//      });
//     callback(tempArray);            
//   })
//   .catch((error) => {
//     console.log(error, "catch the hoop")
//   });
// });
// }
// }


// const onSearchChange = (selectedOption) => {
//     if (selectedOption) {

//     // this.setState({
//     //     selectedOption
//     //    });
//     }
//   };
  // console.log("gandu",data);
  return(
   <ul className='list-group mb-2'>
   <h2>Hello</h2>
   
   <div className='col-sm-4'>
   <select  
   value={options}
                
   placeholder="Admin Name"
   
  //  defaultOptions={false}
  >
   <option>Kolkata</option>
   <option>Bangalore</option>
  
   </select>
              
    </div>
    <table className="table">
    <thead>
      <tr>
        <th>
          Rating
        </th>
        <th>Bankname</th>
        <th>Branch</th>
        <th>IFSC</th>
      </tr>
    </thead>
    </table>
    {posts.map(post =>(<li key={post.id} className='list-group-item'>
   
           <div className='col-sm-4'>
      
    </div>  
  <table className="table">
    
    <tbody>
      <tr>
        <td>
          <StarRatingComponent 
          name="rate1" 
          starCount={1}
          value={rating}
          onClick={onStarClick}
          />
        </td>
        <td>{post.bank_name}</td>
        <td>{post.branch}</td>
        <td>{post.ifsc}</td>
      </tr>
    </tbody>
  </table></li>))}
   </ul>
  )
}
export default Posts;