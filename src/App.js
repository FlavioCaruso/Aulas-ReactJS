import React from 'react';

//Importando o CSS
import './styles.css'

//Importando os Componentes
import Header from './components/Header'
import Main from './pages/main'

const App = () => (
  <div className="App">
      <Header/>
      <Main/>
    </div>
);

export default App;
