import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Project from './pages/Project/Project'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import MyTask from './pages/MyTask/MyTask'
import ProjectDetail from './pages/Project/pages/ProjectDetail/ProjectDetail'
// import Overview from './pages/Project/pages/ProjectDetail/Overview/Overview'
// import Task from './pages/Project/pages/ProjectDetail/Task/Task'
// import Attachment from './pages/Project/pages/ProjectDetail/Attachment/Attachment'
// import Setting from './pages/Project/pages/ProjectDetail/Setting/Setting'
import SignUp from './pages/Signup/SignUp'

function App() {

  return (
    <>
      <BrowserRouter> 
        <Routes>

          <Route index element={<Navigate to='/login' replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<Layout />}>
            <Route index element={<Navigate to='/dashboard' replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-task" element={<MyTask />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/:project_id/*" element={<ProjectDetail />} >
              {/* <Route index element={<Navigate to="overview" replace />} />
              <Route path="overview" element={<Overview />} />
              <Route path="task" element={<Task />} />
              <Route path="attachment" element={<Attachment />} />
              <Route path="setting" element={<Setting />} /> */}
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>

          {/* <Route path="*" element={<PageNotFound />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
