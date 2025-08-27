import { Route, Routes } from "react-router-dom"
import Main from "./layouts/Main"
import EmployeeDashboard from "./features/employee_dashboard/EmployeeDashboard"
import LoginPage from "./features/authentication/page/LoginPage"
import AdminDashboard from "./features/admin_dashboard/AdminDashboard"
import RegisterPage from "./features/authentication/page/RegisterPage"
import PrivateRoute from "./privateRoute/privateRoute"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route path="/" element={<LoginPage></LoginPage>} />
          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route path="/register" element={<RegisterPage></RegisterPage>} />
          <Route path="/employee_dashboard" element={<PrivateRoute>
            <EmployeeDashboard/>
          </PrivateRoute>}/>
          <Route path="/admin_dashboard" element={<PrivateRoute>
            <AdminDashboard/>
          </PrivateRoute>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
