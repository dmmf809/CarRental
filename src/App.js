import Home from './components/Home';
import Rent from './components/Rent';
import { GlobalStyle } from './globalStyles';
import Clients from './components/Rent/rentalclients.json';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Home />
      <Rent data={Clients} />
    </Router>
  );
};
export default App;
