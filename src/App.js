import './App.css';
// import React, {Component} from "react";
import React, {useState} from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";





function App() {
    const [state, setState] = useState({
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    })

    let handleIncrement = counter => {
        const counters = [...state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        setState({ counters })
    }

    let handleReset = () => {
        const counters = state.counters.map(c => {
            c.value = 0
            return c;
        });
        setState({counters});
    }

    let handleDelete = counterId => {
        const counters = state.counters.filter(c => c.id !== counterId );
        setState({counters});
    }

  return (
      <div>
        <Navbar/>
        <main className="container">
          <Counters
              counters={state.counters}
              onReset={handleReset}
              onIncrement={handleIncrement}
              onDelete={handleDelete}/>
        </main>
      </div>
  )
}

export default App;
