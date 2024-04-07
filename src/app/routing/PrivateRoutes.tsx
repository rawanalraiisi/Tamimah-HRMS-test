import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
// import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'


import {EmployerDashboard} from "../pages/EmployerPages/Dashboard"

import {LeaveNotificationPage} from '../pages/EmployerPages/Leave/Notification'
import { LeaveTracker } from '../pages/EmployerPages/Leave/LeaveTracker'
import { LeaveForms } from '../pages/EmployerPages/Leave/LeaveForms'

import {Employees} from "../pages/EmployerPages/HR/Employees"
import {InsuredStaff} from "../pages/EmployerPages/HR/InsuredStaff"
import {RenewalStatus} from "../pages/EmployerPages/HR/Renewal"
import { EmployeeDoc } from '../pages/EmployerPages/HR/Folder'
import { Payroll } from '../pages/EmployerPages/HR/Payroll'
import { HRLetters } from '../pages/EmployerPages/HR/Letters'
import {CarDocs} from '../pages/EmployerPages/Car/Documents'
import {Vehicles} from '../pages/EmployerPages/Car/Vehicles'

import {DocumentRenewal} from "../pages/EmployerPages/Organisation/DocumentRenewal"
import {CompanyDocs} from '../pages/EmployerPages/Organisation/CompanyDocs'
import {BankGuarantee} from '../pages/EmployerPages/Organisation/BankGaurentee'
import {ProductsServices} from '../pages/EmployerPages/Organisation/ProductsServices'
import {Register} from "../pages/EmployerPages/HR/RegisterEmployees/Register"
import {EmployeeInfo} from "../pages/EmployerPages/HR/EmployeeInfo/EmployeeInfo"
import {Policy} from "../pages/EmployerPages/Leave/Policies"
import {KPIQuestions} from "../pages/EmployerPages/EmployerKPI/KPIQuestions"
import {ReportKPI} from "../pages/EmployerPages/EmployerKPI/ReportKPI"
import {SummaryKPI} from "../pages/EmployerPages/EmployerKPI/SummaryKPI"
import {CompanyOverallPolicies} from "../pages/EmployerPages/HR/OverallPolicies"



import {DashboardWrapper} from "../pages/EmployeePages/DashboardEmployee/Dashboard"
import {DocumentsTracker} from "../pages/EmployeePages/DocumentsTracker/DocumentsTracker"
import {MyAccounts} from "../pages/EmployeePages/myAccount/myAccount"
import {Folder} from "../pages/EmployeePages/Folder/Folder"
import Requestleaves from "../pages/EmployeePages/myLeave/Requestleave";
import {LeavePolicy} from "../pages/EmployeePages/myLeave/leavePolicy"
import {EmployeeLeaveTracker} from "../pages/EmployeePages/myLeave/LeaveTracker"
import {OverallPolicies} from "../pages/EmployeePages/OverallPolicies/OverallPolicies"
import {EmployeeKPI} from "../pages/EmployeePages/KPI/KPISummary"
// import { Login } from '@mui/icons-material'
// import { Login } from '@mui/icons-material'
import {EmployeeKPIQuestion} from "../pages/EmployeePages/KPI/EmployeeKPIQuestion"
import { Login } from '../modules/auth/components/Login'


const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <>
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/EmployeePages/Dashboard' />} />
        {/* Pages */}

        <Route path="/EmployeePages/KPI/EmployeeKPIQuestion" element={<EmployeeKPIQuestion />} />

        <Route path="*" element={<Login />} />
        <Route path="employer/dashboard" element={<EmployerDashboard />} />

        <Route path="employer/leave/notification" element={<LeaveNotificationPage />} />
        <Route path="employer/leave/leaveTracker" element={<LeaveTracker />} />
        <Route path="employer/leave/leavepolicy" element={<EmployerDashboard />} />
        <Route path="employer/leave/leaveForms" element={<LeaveForms />} />

        <Route path="employer/hr/employee" element={<Employees />} />
        <Route path="employer/hr/insuredStaff" element={<InsuredStaff />} />
        <Route path="employer/hr/renewal" element={<RenewalStatus />} />
        <Route path="employer/hr/payroll" element={<Payroll/>} />
        <Route path="employer/hr/folder" element={<EmployeeDoc />} />

        <Route path="employer/hr/RegisterEmployees/Register" element={<Register />} />
        <Route path="employer/hr/EmployeeInfo/EmployeeInfo" element={<EmployeeInfo />} />
        <Route path="employer/hr/letters" element={<HRLetters />} />
        <Route path="employer/hr/policies" element={<Policy />} />
        <Route path="employer/hr/OverallPolicies" element={<CompanyOverallPolicies />} />

        <Route path="employer/car/vehicles" element={<Vehicles />} />
        <Route path="employer/car/documents" element={<CarDocs />} />

        <Route path="employer/organisation/documents" element={<DocumentRenewal />} />
        <Route path="employer/organisation/project" element={<EmployerDashboard />} />
        <Route path="employer/organisation/companyDoc" element={<CompanyDocs />} />
        <Route path="employer/organisation/bankGuarantee" element={<BankGuarantee />} />
        <Route path="employer/organisation/products" element={<ProductsServices />} />
        <Route path="employer/EmployerKPI/KPIQuestions" element={<KPIQuestions />} />
        <Route path="employer/EmployerKPI/KPIQuestions" element={<KPIQuestions />} />
        <Route path="employer/EmployerKPI/ReportKPI" element={<ReportKPI />} />
        <Route path="employer/EmployerKPI/SummaryKPI" element={<SummaryKPI />} />


        <Route path="/EmployeePages/myLeave/Requestleave" element={<Requestleaves />} />
        <Route path="/EmployeePages/myLeave/leaveTracker" element={<EmployeeLeaveTracker />} />
        <Route path="/EmployeePages/myLeave/leavePolicy" element={<LeavePolicy />} />
        <Route path="/EmployeePages/Dashboard" element={<DashboardWrapper />} />
        <Route path="/EmployeePages/DocumentsTracker" element={<DocumentsTracker />} />
        <Route path="/EmployeePages/myAccount" element={<MyAccounts />} />
        <Route path="/EmployeePages/Folder" element={<Folder />} />
        <Route path="/EmployeePages/OverallPolicies" element={<OverallPolicies />} />
        <Route path="/EmployeePages/KPI/KPISummary" element={<EmployeeKPI />} />

        
        {/* <Route path='dashboard' element={<DashboardWrapper />} /> */}
        <Route path='builder' element={<BuilderPageWrapper />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
    </>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
