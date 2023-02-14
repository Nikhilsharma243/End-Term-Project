import React, { useState, useEffect } from "react";
import './home.css';
import tech from "./tech.jpeg";
import tech2 from "./tech2.jpeg";
import tech3 from "./tech3.jpeg";
import ds from './ds.jpeg'
import wd from './wd.jpeg'
import sales from './sales.jpeg'

const Home = () => {
  return (
    <React.Fragment>
      <h1 className="text-center text-danger text-capitalize my-4">Find the best tutor for your child. </h1>
    <div className="container ">
    <div className="row my-1">
  <div className="col-sm">
    <div className="card" >
    {/* <div class="bg-image hover-zoom"> */}
    {/* <a href="https://en.wikipedia.org/wiki/Computer_security" target="blank"> */}
  <img src={tech} alt="..." height="275px" className="card-img-top" />
  {/* </a> */}
  {/* <a src="https://en.wikipedia.org/wiki/Computer_security"> */}
  {/* <div class="mask" style="background-color: rgba(57, 192, 237, 0.2)"></div> */}
  {/* </a> */}
  {/* </div> */}
  <div className="card-body">
    <h5 className="card-title">Mr. Jeetu</h5>
    <p className="card-text"> Physics Teacher passed out from IIT.</p>
    <a href=" /" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
  <div className="col-sm"><div className="card">
    {/* <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="blank"> */}
      <img src={tech2} className="card-img-top" alt="..." height="250px" />
    {/* </a> */}
  <div className="card-body">
    <h5 className="card-title">Ms. Pearl Gomez</h5>
    <p className="card-text"> Qualified English Teacher from Oxford University.</p>
    <a href="/" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
  <div className="col-sm"><div className="card">
  <img src={tech3} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Ms. Grace </h5>
    <p className="card-text"> Certified chemistry professor from one of the top University. </p>
    <a href="/"target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
</div><br/>
<div className="row">
<div className="col-sm"><div className="card">
  <img src={ds} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title"> Mr. Sergio Marquina</h5>
    <p className="card-text"> One of the topper from oxford as a Psychology professor </p>
    <a href="\" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
{/* </div> */}
{/* <div className="row"> */}
<div className="col-sm"><div className="card">
  <img src={wd} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Mr. Viru Sahastrabudhe</h5>
    <p className="card-text"> Maths Professor one of the topper from IIT. </p>
    <a href="/" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
<div className="col-sm"><div className="card">
  <img src={sales} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Mrs. Shruti Patel</h5>
    <p className="card-text"> Biology Teacher 
</p>
    <a href="/" target="blank" className="btn btn-primary">Open</a>
  </div>
</div></div>
</div>
</div>
</React.Fragment>
  );
};

export default Home;
