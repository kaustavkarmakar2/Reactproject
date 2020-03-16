import React,{useState,useEffect} from 'react';

import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Fav from './components/Fav.js';
import Pagination from './components/Pagination';
import Sidenav from './components/sidenav';
import axios from 'axios';
import {BrowserRouter,Switch,Route} from "react-router-dom";


function App(state,city) {
  
  state = {
    city: []

  }
  


  
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage]=useState(10);
  // var city =[
  //   {location:"KOLKATA"},
  //   {location:"MUMBAI"},
  //   {location:"DELHI"}
  // ]
  // console.log("beach",city[location]);
  const handleChange =(event) => {
    this.setState({city: event.target.value });
    console.log(event.target.value);
  }
  
  useEffect(()=>{
    // let city="MUMBAI";
    // city={

    // }
    
    // let pathvars='DELHI';
    // console.log("city",city)
    const fetchPosts = async ()=>{
     
      var city =[
          {location:"KOLKATA"},
          {location:"MUMBAI"},
          {location:"DELHI"}
        ]
        
      //  city.forEach(city);
        for(let  i=0; i<city[i].length;i++)
        var city=city[i].forEach(city);
         if(city[0]==='KOLKATA'){
           return city
         }
         if(city[1]==='MUMBAI'){
           return city;
         }
         if (city[2]==='DELHI'){
           return city;
         }else{
           console.log("fuckyou",city);
         }
         
      let city4='DELHI';
      console.log("hello",city);
      setLoading(true);
       const res = await axios.get(`https://vast-shore-74260.herokuapp.com/banks?city=`+city4);
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
    
  },[]);
  
  
  console.log("items",posts.city)
  //Get current posts
  const indexOfLastPost=currentPage* postsPerPage;
  const indexOfFirstPost=indexOfLastPost-postsPerPage;
  const currentPosts =posts.slice(indexOfFirstPost,indexOfLastPost)
  //change page
  const paginate=(pageNumbers)=>setCurrentPage(pageNumbers)

  
  return (
    <BrowserRouter>
    
    <div>
     <Navbar/>
    
     <Switch >
     <div>
       <Sidenav/>
        <div className="main">
          <Route path="/bank" component={Home} /> 
          <Route path="/fav">
            <Fav posts={currentPosts} loading={loading} city={city} useEffect={useEffect} handleChange ={handleChange }
           
            />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
          </Route>
        </div>
        </div>
      </Switch>
    </div>
    
    
    </BrowserRouter>
  );
}

export default App;
