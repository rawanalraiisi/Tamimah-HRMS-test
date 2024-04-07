/* eslint-disable jsx-a11y/anchor-is-valid */
import {Route, Routes} from 'react-router-dom'
import {Login} from './components/login'
import {LoginLayout} from './LoginLayout'

const LoginPage = () => (
  <Routes>
    <Route element={<LoginLayout />}>
      <Route path='login' element={<Login />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {LoginPage}
