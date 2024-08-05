function App() {

    function handleClick() {
    }

    return (
      <div id="app">
        <p>Please select an image</p>
        <p>
          <input data-testid="file-picker" type="file" accept="image/*" />
          <button onClick={handleClick}>Pick Image</button>
        </p>
      </div>
    );
  }
  
  export default App;