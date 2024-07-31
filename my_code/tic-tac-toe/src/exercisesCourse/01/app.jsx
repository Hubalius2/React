import React from 'react';
import Review from './review';

// don't change the Component name "App"
function App() {

    const [textArea, setTextArea] = React.useState('Prueba');
    const [input, setInput] = React.useState('Prueba');
    
    function handleTextArea(event) {
        setTextArea(event.target.value);
    }

    function handleInput(event) {
        setInput(event.target.value);
    }

  return (
        <>
            <section id="feedback">
                <h2>Please share some feedback</h2>
                <p>
                    <label>Your Feedback</label>
                    <textarea value={textArea} onChange={handleTextArea}/>
                </p>
                <p>
                    <label>Your Name</label>
                    <input type="text" value={input} onChange={handleInput}/>
                </p>
            </section>


            <section id="draft">
                <h2>Your feedback</h2>

                <Review feedback={textArea} student={input}/>

                <p>
                    <button>Save</button>
                </p>
            </section>
        </>
    );
}

export default App;