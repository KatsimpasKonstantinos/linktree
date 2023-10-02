import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    rain();
  }, []);

  var rainDensity = 1;
  var duration = 1;

  function rain() {
    var rainDiv = document.getElementById("rain");
    for (var i = 0; i < 100; i += (Math.random() / rainDensity) * (1500 / window.innerWidth)) {
      var span = '<div class="raindrop" style="left:' + i * 1 + '%;animation-delay: ' + Math.random() + 's;' +
        'animation-duration: ' + (Math.random() * 2 + 0.5) * duration + 's; bottom: ' + (100) + '%;"></div>';
      if (rainDiv) rainDiv.innerHTML += span;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/konstantinos-katsimpas-48ba92242/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
      <div id="rain"></div>
    </div>
  );
}



export default App;
