import { Component } from "react";
import { useState } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// =============== functional component ================ //
const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  console.log({ searchField });

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Gatos Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder={"search monsters"} className={"search-box"} />
    </div>
  );
};

// =============== class component ================ //
// class App extends Component {
//   constructor() {
//     super();

//     // this.state = {
//     //   name: { firstName: "Sandra", lastName: "Hsu" },
//     //   company: "xxx",
//     // };
//     this.state = {
//       monsters: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((user) =>
//         this.setState(() => {
//           return {
//             monsters: user,
//             searchField: "",
//           };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return {
//         searchField,
//       };
//     });
//   };

//   clickEvent = () => {
//     console.log("you click");
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange, clickEvent } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         {/* <input
//           className="search-box"
//           type="search"
//           placeholder="search monsters"
//           onChange={onSearchChange}
//           onClick={clickEvent}
//         /> */}
//         <h1 className="app-title">Gatos Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder={"search monsters"} className={"search-box"} />
//         {/* {filteredMonsters.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           );
//         })} */}
//         <CardList monsters={filteredMonsters} />
//         {/*<header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <p>
//                       hola {this.state.name.firstName} {this.state.name.lastName}, i work at {this.state.company}
//                     </p>*/
//         /* solution 1 */
//         /* <button
//             onClick={() => {
//               this.setState({ name: { firstName: "Greta", lastName: "Cristobal" } });
//             }}>
//             Change Name
//           </button> */
//         /* solution 2 --> secondary callback */
//         /*<button
//             onClick={() => {
//               this.setState(
//                 (state, props) => {
//                   return {
//                     name: {
//                       firstName: "Greta",
//                       lastName: "Cristobal",
//                     },
//                   };
//                 },
//                 () => {
//                   console.log(this.state);
//                 }
//               );
//             }}>
//             Change Name
//           </button>
//         </header>
//         */}
//       </div>
//     );
//   }
// }

export default App;
