



import './App.css';
import EmployeeList from './component/EmployeeList';
import React, {Component} from 'react'
import AddEmployee from './component/AddEmployee';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value:''       
    }    
  }  
  render(){
   const opstate=this.state.value
   console.log(opstate+"  opstate  Render===<<<<");   
   let displays;   
   if (opstate==="") {
     displays=<EmployeeList mode="error"/>
   }
    if (opstate === "list")
     {
      displays=<EmployeeList mode="list"/>
    }
    if  (opstate==="add") {
      displays=<AddEmployee/>
    }
   if (opstate==="update")
    {
      displays=<EmployeeList mode="update"/>
    }
    if (opstate==="delete") {
      displays=<EmployeeList mode="delete"/>
    }
  return (
      <div className="app ">
                  <div align="left">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Harman_logo.svg" className='ml-5' width="20%" alt=" Treva logo"></img>
                  </div>
                  <h3 className="text-light bg-dark  shadow  text-center"> Employee Management System </h3>
                  
                    <div className="row   p-3  mb-5 bg-body rounded ">   
                                <div className=" col-2 bg-light text-dark" align="center ">                                    
                                   <img src="https://www.dnmc.edu.bd/public/logo/admin_image.png" className="rounded-circle rounded mx-auto d-block"width="120" alt="Admin Logo"></img>
                                  <h3 className=" text-secondary">Admin DashBoard </h3><br/>
                                    <button className="btn hover btn-info btn-block p-2 mb-3     " onClick={ ()=> this.setState({value:"list"}) } >
                                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                      </svg>   Emp List 
                                    </button>
                                    <button className="btn hover btn-primary btn-block p-2 mb-3  " onClick={ ()=> this.setState({value:"add"})}   ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                      <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                      </svg>   Add Emp 
                                    </button>
                                    <button className="btn hover btn-warning btn-block p-2 mb-3  " onClick={ ()=> this.setState({value:"update"})}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                      <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                      </svg> Update Emp </button>
                                    <button className="btn hover btn-danger btn-block p-2 mb-3   " onClick={ ()=> this.setState({value:"delete"})}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-x" viewBox="0 0 16 16">
                                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                      <path fillRule="evenodd" d="M12.146 5.146a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                                      </svg> Delete Emp 
                                    </button>  
                                </div>
                          <div className="col-10 bg-light text-light">
                               {displays}                               
                          </div>
                     </div> 
                    {/* footer */}
                <footer className="footer">
                        <a href="https://www.linkedin.com"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  className="float-center
                          mr-4 mb-2 mt-2  bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg></a>
                        <a href="https://www.youtube.com"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="float-center
                          mr-4 mb-2 mt-2  bi bi-youtube" viewBox="0 0 16 16">
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                        </svg></a>
                        <a href="https://twitter.com"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  className="float-center
                          mr-4 mb-2 mt-2  bi bi-twitter" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg></a>
                        <a href="https://www.facebook.com"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  className="float-center
                          mr-4 mb-2 mt-2  bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg></a>
                        <br/>
                  <div className="footer-copyright text-center text-dark mb-2">© 2020 Copyright : 
                    <a href="https://upload.wikimedia.org/wikipedia/commons/0/0e/Harman_logo.svg" className="footer-copyright text-center text-dark mb-2"> Harman Company All rights reserved.</a>
                 
                    
                  </div>
                </footer>                
      </div>
    );
  }
}
