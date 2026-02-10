import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Project from './pages/Project/Project'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import MyTask from './pages/MyTask/MyTask'
import ProjectDetail from './features/project/pages/ProjectDetail'
// import Overview from './pages/Project/pages/ProjectDetail/Overview/Overview'
// import Task from './pages/Project/pages/ProjectDetail/Task/Task'
// import Attachment from './pages/Project/pages/ProjectDetail/Attachment/Attachment'
// import Setting from './pages/Project/pages/ProjectDetail/Setting/Setting'
import SignUp from './pages/Signup/SignUp'
import Overview from './features/project/pages/Overview'
import Attachment from './features/project/pages/Attachment'
import Setting from './features/project/pages/Setting'
import { Toaster } from './components/ui/toaster'
import { ProtectedRoutes } from './context/auth/ProtectedRoutes'
import WorkspaceMember from './pages/WorkspaceMember/WorkspaceMember'
import WorkspaceSetting from './pages/WorkspaceSetting/WorkspaceSetting'

function App() { 

  return (
    <>
      <BrowserRouter> 
        <Routes>

          <Route index element={<Navigate to='/login' replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<ProtectedRoutes><Layout /></ProtectedRoutes>}>
            <Route index element={<Navigate to='/dashboard' replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-task" element={<MyTask />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/:project_id/*" element={<ProjectDetail />} >
              <Route index element={<Navigate to="overview" replace />} />
              <Route path="overview" element={<Overview  />} />
              <Route path="task" element={<MyTask /> } />
              <Route path="attachment" element={<Attachment />} />
              <Route path="setting" element={<Setting /> } />
            </Route> 
              <Route path="/workspace-member" element={<WorkspaceMember />} />
              <Route path="/workspace-setting" element={<WorkspaceSetting />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
 
          {/* <Route path="*" element={<PageNotFound />} /> */}

        </Routes>
      </BrowserRouter>

      <Toaster />
    </>
  )
}

export default App
