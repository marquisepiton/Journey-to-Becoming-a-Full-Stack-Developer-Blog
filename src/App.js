import "./App.css";
import React from "react";
// import data from "./data/data.json";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div id="title">
     
        <span>Marquise Piton</span>
        <div>
          Full Stack Developer
          
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="10"
            ></li>
          </ol>
          <div className="container">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="./img/clock.png"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./img/stories.png"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./img/countdown.png"
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./img/balls.png"
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./img/doom.png"
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./img/mind.png"
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./img/weather.png"
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./img/tictactoe.png"
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./img/todo.png"
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./img/fishing.png
                  "
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./img/resturant.png
                  "
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div class="container">
          <div class="row">
            <div class="col">

            <ul className="list-group list-group-flush">
           
                {" "}
              
                  <ul className="social-icons">
                    <li>
                      <a 
                        className="github"
                        href="https://github.com/marquisepiton"
                      >Github</a>
                      
                    </li>
                    <li>
                      <a
                        className="twitter"
                        href="https://twitter.com/MarquisePiton"
                      >
                       Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        className="kaggle"
                        href="https://www.kaggle.com/marquisepiton"
                      >Kaggle</a>
                    </li>
                    <li>
                      <a
                        className="linkedin"
                        href="https://www.linkedin.com/in/marquisepiton/"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                
              
              <li className="list-group-item">
                Email: pitonmarquise@gmail.com
              </li>
            </ul>

              
            </div>
            <div class="col">
              <img
                src="./img/me.jpg"
                alt="..."
                style={{ "max-width": "300px" }}
              />


              </div>
              
            <div class="col"><div class="card">
  <div class="card-body">
  As a little boy, I always had a fascination with computers and all things tech-related. Before college, I already knew my future would manifest in the tech industry because that is where my passions lie. I’m always eager, training, and growing in my programming skills. Learning is not a chore or irritation but a hobby of mine.

I attended the Awesome Inc. Web development Bootcamp and worked on projects involving front-end, back-end development. I learned how to use React to render beautiful webpages, build APIs, write PHP scripts and manipulate or show data in SQL with the intellectual instructors. I learned many more frameworks, but I continue to perfect my craft to be the best coder around.
    
  </div>
</div></div>
          </div>
        </div>
      </div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Footer />
    </div>
  );
}
export default App;
