import React from 'react';
// import axios from 'axios';
class Home extends React.Component{
    // state = {
    //     banks: []
    //   }
    
    //   componentDidMount() {
    //     axios.get(`https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI`)
    //       .then(res => {
    //           console.log(res.data);
    //         const banks = res.data;
    //         this.setState({ banks });
    //     })
    //   }
    render(){
        return(
          <div>
          <div className="card card-1">
           <h4 className="account_name">hhhhhh</h4>
           <h4 className="account_name">Bank Name:Kotak</h4>
           <h4 className="account_name">ifsc:kkbk0001</h4>
          </div>
        </div>
        )
};
};
export default Home ;