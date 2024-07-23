import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header_function from './components/header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import Card_web_exercise from './components/card_exercise/card';
import { useState } from 'react';
import { DummyList } from './components/list_exercise/DummyList';


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
  const [selectedTopic, setSelectTopic] = useState();

  function handleSelect(selected) {
    setSelectTopic(selected);
  }

  return (
    <div>
      <Header_function />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {...concept} />)}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton label="Components" onSelect={() => handleSelect('components')}
              isSelected={selectedTopic === 'components'} />
            <TabButton label="JSX" onSelect={() => handleSelect('jsx')}
              isSelected={selectedTopic === 'jsx'} />
            <TabButton label="Props" onSelect={() => handleSelect('props')}
              isSelected={selectedTopic === 'props'} />
            <TabButton label="State" onSelect={() => handleSelect('state')}
              isSelected={selectedTopic === 'state'} />
          </menu>

          {!selectedTopic ? (
            <p>PLease select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
            </div>
          )}


        </section>

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

    </div>
  );
}


export default App;
