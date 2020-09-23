// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import FlightBooking from './components/FlightBookingSearch';
import FromAutocomplete from './components/FromAutocomplete';
import ToAutocomplete from './components/ToAutocomplete'

function App() {

  // const handleSubmit = (event) => {
  //   console.log(`
  //       From: ${FromAutocomplete}
  //       To: ${ToAutocomplete}
  //       Outbound: ${outboundFlightDate}
  //       Return: ${returnFlightDate}
  //       `);
  //   event.preventDefault();
  // };
  // const handleSubmit = (event) => {
  //   console.log(`
  //       From: ${FromAutocomplete}
  //       To: ${ToAutocomplete}
  //       `);
  //   event.preventDefault();
  // };

  return (
    <div>
      <label>
      <FromAutocomplete />
      <ToAutocomplete />
      <FlightBooking/>
      <button>Submit</button>
      </label>
    </div>
  )
}

export default App


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
