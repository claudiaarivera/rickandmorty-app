import './globals.css';
import {Route, Switch } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/home/Index';
import About from './components/about/About';

function App() {
  return (
    <>
      {/*<Router>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} />
            </Switch>
      </Router>*/}
        
        <Layout>
          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/about" component={About} />
          </Switch>
        </Layout>
    </>
  );
}

export default App;
