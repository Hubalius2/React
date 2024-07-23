import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header_function from './components/header/Header';
import TabButton from './components/TabButton';
import Card_web_exercise from './components/card_exercise/card';
import { useState, Fragment } from 'react';
import { DummyList } from './components/list_exercise/DummyList';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/examples.jsx';

const reactDescriptions = ['Fundamentals', 'Crucial', 'Advanced'];
export const userData = {
  firstName: 'Maximilian', // feel free to replace the name value
  lastName: 'Schwarzmüller', // feel free to replace the name value
  title: 'Instructor', // feel free to replace the title value
};

export const Dummy_Todos = [
  'Learn React',
  'Practice React',
  'Profit!'
]

function MyMainGoal() {
  return (
    <div>
      <h2>My Main Goal</h2>
      <p>My main goal is to learn React and become a great developer!</p>
    </div>
  );
}


function App() {
  
  return (
    //Con fragment se puede devolver varios elementos sin necesidad de un <div></div>
    // Tambien se puede usar <> </> para lo mismo
    <Fragment>
      <Header_function />
      <main>
        <CoreConcepts />
        <Examples />
        <section id="Web Exercises">
          <h2>Web Exercises</h2>
          <h3>Time to get started!{userData.firstName + " " + userData.lastName}</h3>
          <MyMainGoal />
          <h3>Cards</h3>
          <Card_web_exercise name="Card">
            <p>
              Maria is a professor of Computer Science at the University of Illinois.
            </p>
            <p>
              <a href="mailto:blake@example.com">Email Maria</a>
            </p>
          </Card_web_exercise>
          <h3>List</h3>
          <ul>
            {Dummy_Todos.map((item) => <DummyList key={item} text={item} />)}
          </ul>
        </section>


      </main>
    </Fragment>
  );
}


export default App;
