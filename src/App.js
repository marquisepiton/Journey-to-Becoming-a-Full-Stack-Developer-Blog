import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import logo from "./img/sigLogo.png"




class App extends React.Component {
  constructor() {
    super();
    this.headers = [
      {
        id: "weeks",
        name: "Week",
        slogan: "Weekly updates",
        href: "#tab-weeks",
      },
      {
        id: "photos",
        name: "Photos",
        slogan: "Photos taken during the Bootcamp",
        href: "#tab-photos",
      },
      {
        id: "articles",
        name: "Articles",
        slogan: "Checkout my articles",
        href: "#tab-articles",
      },
      {
        id: "projects",
        name: "Projects",
        slogan: "Projects that I did during the Bootcamp",
        href: "#tab-projects",
      },
      {
        id: "aboutMe",
        name: "About Me",
        slogan: "I like Pineapples.",
        href: "#tab-aboutMe",
      },
    ];
     
    
  }

  

  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
    window.addEventListener('mousemove',this.handleMouseMovement)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll',this.handleScroll)
    window.removeEventListener('mousemove',this.handleMouseMovement)
  }


  handleScroll = () => {
    if(window.scrollY > 20){
      document.querySelector('.et-hero-tabs-container').className = 'et-hero-tabs-container scroll';
      
    }
    else {
      document.querySelector('.et-hero-tabs-container').className = 'et-hero-tabs-container';
    }
  }
  handleMouseMovement = (index, val) => {

    const cursor = document.querySelector('.cursor')

    
   
  



   


  }
  

  render() {
    /*
    ===========================================================
                    Helper Functions
    ===========================================================
    */
    const mapHelperNav = (nav, index) => {
      return <Nav href={nav.href} name={nav.name} key={index} />;
    };
    const mapHelperHeader = (header, index) => {
      return (
        
        <Header
          id={header.id}
          name={header.name}
          slogan={header.slogan}
          key={index}
        />
      );
    };
    /*
    ===========================================================
                             Display
    ===========================================================
    */
    return (
      <div>
        {/**************** Nav Bar **************************/}
        <section className="et-hero-tabs">
          <h1>Marquise Piton</h1>
          <h3>I make Banana Bread</h3>
         




        
          <div className="et-hero-tabs-container">
            <a className="et-hero-tab" alt="Logo" href="home" key="" >
            <img src={logo} alt="Logo" width="90" height="90" />
            </a>

            {this.headers.map(mapHelperNav)}
            
            <span className="et-hero-tab-slider"></span>
            
          </div>
        </section>
        {/****************************************************/}
        {/**************** Heroes ****************************/}
        <main className="et-main">{this.headers.map(mapHelperHeader)}</main>
        {/****************************************************/}
        <Footer/>
      </div>
    
    );
  }
}
export default App;
