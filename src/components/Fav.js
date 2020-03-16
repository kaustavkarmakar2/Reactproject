import React from 'react';

import StarRatingComponent from 'react-star-rating-component';

class Posts extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        city: []
    };    
};
render(){
 

  
  let city =[
    {location:"KOLKATA"},
    {location:"MUMBAI"},
    {location:"DELHI"}
  ]
  console.log("state",city);
  // const {cityf} = state
  // const handleChange =(event) => {
  //   this.setState({city: event.target.value });
  //   console.log(event.target.value);
  // }
  



  
  const onStarClick=(nextValue, prevValue, name) =>{
    this.setState({rating: nextValue})
  }
  
  const { rating } = this.state;
  // console.log("gugy",city[0]);
  if(this.loading){
   return <h2>Loading....</h2>
  }
 
  return(
   <ul className='list-group mb-2'>
   <h2>Hello</h2>
   
   <div className='col-sm-4'>
   <select  
   value={['KOLKATA','MUMBAI']} 
   onChange={this.props.useEffect} 
                
   placeholder="Select city"
   
  //  defaultOptions={false}
  >
   <option value="KOLKATA">Kolkata</option>
   <option value="MUMBAI">Mumbai</option>
  
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
    {this.props.posts.map(post =>(<li key={post.id} className='list-group-item'>
   
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

}
  
// const Posts=({posts,loading,state}) =>{
  
// }
export default Posts;