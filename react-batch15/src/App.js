import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import CounterArrow from './components/CounterArrow';
import CounterHook from './components/CounterHook';
import ParentName from './ParentChild/ParentName';
import ParentComponent from './ParentChild/ParentComponent';
import EmployeeList from './List/EmployeeList';
import ChartItem from './List/ChartItem';
import EmployeeForm from './form/EmployeeForm';
import ChartList from './form/ChartList';
import CartList from './View/CartListRedux'
import CartToolkit from './View/CartToolKit'
import RegionView from './ViewApi/RegionView';
import CountryView from './ViewApi/CountryView';
import LocationView from './ViewApi/LocationView';
import DepartmentView from './ViewApi/DepartmentView';
import EmployeeView from './ViewApi/EmployeeView';
import DependentView from './ViewApi/DependentView';
import JobView from './ViewApi/JobView';
import ProView from './ViewApi/ProView';
import ProjectAssignmentView from './ViewApi/ProjectAssignmentView';


function App() {
  return (
    <div>
      <RegionView/>
    </div>
  );
}

export default App;