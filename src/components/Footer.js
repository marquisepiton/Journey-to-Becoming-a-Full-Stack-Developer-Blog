import React from "react";
import "./Footer.css"


function Footer() {


  
  return (
  <div>
  <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify"><i>Give me data, and I'll tell a story!</i> This is my personal Developer Blog where I show all the projects I have done.</p>
          </div>

          <div className="col-xs-6 col-md-2">
              <h6>Contact Me</h6>
              <ul className="footer-links">
                
                <li>
                  <a href="https://www.linkedin.com/in/marquisepiton/">
                    Linkedln
                  </a>
                </li>
                <li>
                  <a href="https://github.com/marquisepiton">Github</a>
                </li>
                <li>
                  <a href="https://www.kaggle.com/marquisepiton">Kaggle</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/sirquisepiton/">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/MarquisePiton">Twitter</a>
                </li>
              </ul>
            </div>

        
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="#"> Marquise Piton</a>.
            </p>
          </div>

        </div>
      </div>
</footer>

</div>
   
   




    
   
  );
}

export default Footer;
