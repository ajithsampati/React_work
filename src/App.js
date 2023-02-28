// import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Header';
import MainComponent from './Main';
import FooterComponent from './Footer';
function App() {
  let title = "React Project" 
  let navitems=["Home","Project","Blog","About project","Contact"]
  return(
  <><HeaderComponent maintitle={title} Mainnavitems= {navitems}
  /><MainComponent /><FooterComponent /></>

  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       {/* <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a> */}
  //     </header>
  //   </div>
  // );
}

export default App;
