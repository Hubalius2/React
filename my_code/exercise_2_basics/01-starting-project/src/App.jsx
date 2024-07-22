import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import Header_function from './components/header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import Card_web_exercise from './components/card_exercise/card';

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

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton label="React" />
            <TabButton label="JSX" />
            <TabButton label="Props" />
            <TabButton label="React" />
          </menu>
        </section>

        <section>
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
        </section>


      </main>

    </div>
  );
}


export default App;
