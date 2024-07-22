import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import Header_function from './components/header/Header';
import CoreConcept from './components/CoreConcept';

const reactDescriptions = ['Fundamentals', 'Crucial', 'Advanced'];
export const userData = {
  firstName: 'Maximilian', // feel free to replace the name value
  lastName: 'Schwarzmüller', // feel free to replace the name value
  title: 'Instructor', // feel free to replace the title value
};

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
    <div>
      <Header_function />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!{userData.firstName + " " + userData.lastName}</h2>
        <MyMainGoal />
      </main>

    </div>
  );
}


export default App;
