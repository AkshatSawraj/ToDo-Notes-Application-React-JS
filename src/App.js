import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import { AddTask } from "./MyComponents/AddTask";
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { About } from "./MyComponents/About";

function App() {
  let initTodo;
  if (localStorage.getItem("array") == null) {
    initTodo = []
  } else {

    initTodo = JSON.parse(localStorage.getItem("array"));
  }

  const onDelete = (ele) => {
    setTodos(todos.filter((ell) => { return ell !== ele; }))

  }

  const [todos, setTodos] = useState(initTodo);


  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(todos));
  }, [todos])


  const addElementToArray = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;

    }

    const newTask = {
      sno: sno,
      title: title,
      description: desc,
    }
    setTodos([...todos, newTask]);

  }


  return (
    <>
      <Router>
        <Header title="My Todos List" />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <><AddTask addItem={addElementToArray} />
                <Todos todoItems={todos} onDelete={onDelete} />
              </>)
          }}>

          </Route>
          <Route exact path="/about" render={() => {
            return (
              <About />

            )
          }}>

          </Route>


        </Switch>



        <Footer />
      </Router>
    </>

  );
}

export default App;
