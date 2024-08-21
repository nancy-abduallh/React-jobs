import {Route , createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import HomePage from './components/HomePage';
import JobsPage from './components/JobsPage';
import AddJobs from './components/AddJobs';


function App() {
  const router = createBrowserRouter (
    createRoutesFromElements (
      <Route path='/' element = {<MainLayout/>}>
        <Route index element = {<HomePage />}  />
        <Route path='/jobs' element= {<JobsPage/>}/>
        <Route path='/add-job' element= {<AddJobs/>}/>

      </Route>
    )
      
  );
  return <RouterProvider router={router}/>;
}

export default App
