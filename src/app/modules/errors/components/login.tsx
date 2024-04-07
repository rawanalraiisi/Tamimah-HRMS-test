// import { FC, useState } from 'react';
// import { Link } from 'react-router-dom';
// import * as Yup from 'yup';
// import { useAuth } from '../../auth';
// import { useFormik } from 'formik';
// import clsx from 'clsx';

// // Import FontAwesome for the eye icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// const loginSchema = Yup.object().shape({
//   email: Yup.string()
//     .email('Wrong email format')
//     .min(3, 'Minimum 3 symbols')
//     .max(50, 'Maximum 50 symbols')
//     .required('Email is required'),
//   password: Yup.string()
//     .min(8, 'Minimum 8 symbols')
//     .max(50, 'Maximum 50 symbols')
//     .required('Password is required'),
// });

// const initialValues = {
//   email: 'admin@demo.com',
//   password: 'demo1234',
// };

// const Login: FC = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const { saveAuth, setCurrentUser } = useAuth();

//   const formik = useFormik({
//     initialValues,
//     validationSchema: loginSchema,
//     onSubmit: async (values, { setStatus, setSubmitting }) => {
//       // Your form submission logic goes here
//     },
//   });

//   return (
//     <>
//       <div className='form-group fv-plugins-icon-container mb-5 text-start'>
//         <div className='fv-row mb-3'>
//           <label className='text-primary fw-bold fs-7 mb-3'>
//             <i className='bi bi-person-fill fs-2 svg-icon-muted text-primary me-3'></i> Username{' '}
//             <span className='text-danger'>*</span>
//           </label>
//           <input
//             placeholder='Email'
//             {...formik.getFieldProps('email')}
//             className={clsx(
//               'form-control bg-transparent border-dark-subtle fs-8',
//               { 'is-invalid': formik.touched.email && formik.errors.email },
//               { 'is-valid': formik.touched.email && !formik.errors.email }
//             )}
//             type='email'
//             name='email'
//             autoComplete='off'
//           />
//           {formik.touched.email && formik.errors.email && (
//             <div className='fv-plugins-message-container'>
//               <span role='alert'>{formik.errors.email}</span>
//             </div>
//           )}
//         </div>

//         <div className='fv-row mb-3'>
//           <label className='text-primary fw-bold fs-7 mb-3'>
//             <i className='bi bi-lock-fill fs-2 svg-icon-muted text-primary me-3'></i> Password{' '}
//             <span className='text-danger'>*</span>
//           </label>
//           <div className='input-group'>
//             <input
//               type={passwordVisible ? 'text' : 'password'} // Toggle input type based on passwordVisible state
//               autoComplete='off'
//               {...formik.getFieldProps('password')}
//               className={clsx(
//                 'form-control bg-transparent border-dark-subtle fs-8',
//                 {
//                   'is-invalid': formik.touched.password && formik.errors.password,
//                 },
//                 {
//                   'is-valid': formik.touched.password && !formik.errors.password,
//                 }
//               )}
//             />
//             <button
//               type='button'
//               className={clsx(
//                 'btn border border-dark-subtle btn-sm', // Add the border class here
//                 { 'is-invalid': formik.touched.password && formik.errors.password }
//               )}
//               onClick={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
//             >
//               <FontAwesomeIcon
//                 icon={passwordVisible ? faEye : faEyeSlash}
//                 style={{ fontSize: '12px' }} // Adjust the fontSize value as needed
//               />
//             </button>

//           </div>
//           {formik.touched.password && formik.errors.password && (
//             <div className='fv-plugins-message-container'>
//               <div className='fv-help-block'>
//                 <span role='alert'>{formik.errors.password}</span>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className='d-grid gap-2 mt-7'>
//         <Link to='/EmployeePages/Dashboard' className='btn btn-sm btn-primary' type='button'>
//           Sign In
//         </Link>
//       </div>
//     </>
//   );
// };

// export { Login };

// 2ccff43ecfb-6cab-440b-95fa-d


import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from '../../auth';
import { useFormik } from 'formik';
import clsx from 'clsx';
import Cookies from 'js-cookie';

// Import FontAwesome for the eye icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const loginSchema = Yup.object().shape({
  user_name: Yup.string()
    // .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Minimum 8 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
});

const initialValues = {
  // email: 'admin@demo.com',
  user_name: '',
  password: '',
};



const Login: FC = () => {

  const navigate = useNavigate()

  const [passwordVisible, setPasswordVisible] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();

  const [authDetails, setAuthDetails] = useState([])

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      axios.post('https://wpr.intertoons.net/hrmsapi/', {
        "sp": "spAuthenticateUser",
        "username": "johndoe@example.com",
        "password": "password"
      }).then((res) => {
        if (res?.data?.Message == "Success") {
          navigate('/EmployeePages/Dashboard')
          // console.log("npm install @mui/material @emotion/react @emotion/styled", res);

          Cookies.set('userId', res?.data?.Data[0]?.userId);
          Cookies.set('token', res?.data?.Data[0]?.Token);

        }
      }
      )
    },
  });

  return (
    <>

      <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

        <div className='form-group fv-plugins-icon-container mb-5 text-start'>
          <div className='fv-row mb-3'>
            <label className='text-primary fw-bold fs-7 mb-3'>
              <i className='bi bi-person-fill fs-2 svg-icon-muted text-primary me-3'></i> Username{' '}
              <span className='text-danger'>*</span>
            </label>
            <input
              placeholder='Email'
              {...formik.getFieldProps('user_name')}
              className={clsx(
                'form-control bg-transparent border-dark-subtle fs-8',
                { 'is-invalid': formik.touched.user_name && formik.errors.user_name },
                { 'is-valid': formik.touched.user_name && !formik.errors.user_name }
              )}
              type='text'
              name='user_name'
              autoComplete='off'
              value={formik.values.user_name}
              onChange={formik.handleChange}
            />
            {formik.touched.user_name && formik.errors.user_name && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.user_name}</span>
              </div>
            )}
          </div>

          <div className='fv-row mb-3'>
            <label className='text-primary fw-bold fs-7 mb-3'>
              <i className='bi bi-lock-fill fs-2 svg-icon-muted text-primary me-3'></i> Password{' '}
              <span className='text-danger'>*</span>
            </label>
            <div className='input-group'>
              <input
                placeholder='Password'
                type={passwordVisible ? 'text' : 'password'} // Toggle input type based on passwordVisible state
                autoComplete='off'
                {...formik.getFieldProps('password')}
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}


                className={clsx(
                  'form-control bg-transparent border-dark-subtle fs-8',
                  {
                    'is-invalid': formik.touched.password && formik.errors.password,
                  },
                  {
                    'is-valid': formik.touched.password && !formik.errors.password,
                  }
                )}
              />
              <button
                type='button'
                className={clsx(
                  'btn border border-dark-subtle btn-sm', // Add the border class here
                  { 'is-invalid': formik.touched.password && formik.errors.password }
                )}
                onClick={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
              >
                <FontAwesomeIcon
                  icon={passwordVisible ? faEye : faEyeSlash}
                  style={{ fontSize: '12px' }} // Adjust the fontSize value as needed
                />
              </button>

            </div>
            {/* {formik.touched.password && formik.errors.password && ( */}
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.password}</span>
              </div>
            </div>
            {/* )} */}
          </div>
        </div>

        <div className='d-grid gap-2 mt-7'>
          <button className='btn btn-sm btn-primary' type='submit'>Sign In </button>
          {/* <Link
            to='/EmployeePages/Dashboard'
            className='btn btn-sm btn-primary' type='button'>
            Sign In
          </Link> */}
        </div>
      </form>



    </>
  );
};

export { Login };
