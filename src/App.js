import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import PrimaryHorizontalTab from './components/tabs/PrimaryTabDemo';
import SecondaryHorizontalDemo from './components/tabs/SecondaryTabDemo';
import BreadCrumbDemo from './components/breadcrumb/BreadcrumbDemo';
import WizardDemo from './components/wizard/WizardDemo';

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/WizardDemo">WizardDemo</Link>
              </li>
              <li>
                <Link to="/BreadcrumbDemo">BreadCrumbDemo</Link>
              </li>
              <li>
                <Link to="/DashboardDemo">DashboardDemo</Link>
              </li>
              <li>
                <Link to="/PrimaryHorizontalTab">PrimaryHorizontalTab</Link>
              </li>
              <li>
                <Link to="/SecondaryHorizontalDemo">SecondaryHorizontalDemo</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            {/* <Route path="/newwizard">
              <div className="row">
                <NewWizardDemo />
              </div>
            </Route>
            <Route path="/wizard">
              <div className="row">
                <WizardDemo />
              </div>
            </Route>
            <Route path="/BreadCrumbDemo">
              <div className="row">
                <BreadCrumbDemo />
              </div>
            </Route>
            <Route path="/DashboardDemo">
              <div className="row">
                <DashboardDemo />
              </div>
            </Route> */}
            <Route path="/PrimaryHorizontalTab" element= {
              <PrimaryHorizontalTab /> 
            } />
            <Route path="/SecondaryHorizontalDemo" element= {
              <SecondaryHorizontalDemo /> 
            } />
            <Route path="/BreadcrumbDemo" element= {
              <BreadCrumbDemo /> 
            } />
            <Route path="/WizardDemo" element= {
              <WizardDemo /> 
            } />
              {/* <div className="row"> */}
                {/* <PrimaryHorizontalTab /> */}
              {/* </div> */}
            {/* <Route path="/SecondaryHorizontalDemo">
              <div className="row">
                <SecondaryHorizontalDemo />
              </div>
            </Route> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
