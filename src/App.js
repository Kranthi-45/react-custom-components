import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import PrimaryHorizontalTab from './components/tabs/PrimaryTabDemo';
import SecondaryHorizontalDemo from './components/tabs/SecondaryTabDemo';
import BreadCrumbDemo from './components/breadcrumb/BreadcrumbDemo';
import WizardDemo from './components/wizard/WizardDemo';
import LoaderDemo from './components/loader/LoaderDemo';
import CustomModelComponent from './components/custom-modal/CustomModalDemo';
import CustomModelDemo from './components/custom-modal/CustomModalDemo';
import TooltipDemo from './components/tooltip/TooltipDemo';

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
              <li>
                <Link to="/Loader">Loader</Link>
              </li>
              <li>
                <Link to="/CustomModal">Custom Modal</Link>
              </li>
              <li>
                <Link to="/CustomTooltip">Custom Tooltip</Link>
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
            <Route path="/Loader" element= {
              <LoaderDemo /> 
            } />
            <Route path="/CustomModal" element= {
              <CustomModelDemo /> 
            } />
            <Route path="/CustomTooltip" element= {
              <TooltipDemo /> 
            } />
            <Route path="/CustomModal" element= {
              <CustomModelDemo /> 
            } />

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
