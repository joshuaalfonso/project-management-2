import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Project from './pages/Project/Project'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import MyTask from './pages/MyTask/MyTask'

function App() {

  return (
    <>
      <BrowserRouter> 
        <Routes>

          <Route path="/login" element={<Login />} />

          <Route element={<Layout />}>
            <Route index element={<Navigate to='/dashboard' replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-task" element={<MyTask />} />
            <Route path="/project" element={<Project />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          {/* <Route path="*" element={<PageNotFound />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
