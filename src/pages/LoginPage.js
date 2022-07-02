import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuthCtx } from '../store/authContext';
import { baseUrl, myFetch } from '../utils';

const initValues = {
  email: 'marius@mariuss.com',
  password: '123456',
};

function LoginPage() {
  const history = useHistory();
  const ctx = useAuthCtx();
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Patikrinkite savo email').required(),
      password: Yup.string().min(4, 'Maziausiai 4 simboliai').max(10).required(),
    }),
    onSubmit: async (values) => {
      console.log('values ===', values);

      const fetchResult = await myFetch(`${baseUrl}/v1/auth/login`, 'POST', values);

      if (fetchResult.msg === 'Successfully logged in') {
        ctx.login(fetchResult.token, values.email);

        history.replace('/');
      }
      console.log('fetchResulg ===', fetchResult);
    },
  });
  function rightClassesForInput(field) {
    let resultClasses = 'form-control';

    if (formik.touched[field]) {
      resultClasses += formik.errors[field] ? ' is-invalid' : ' is-valid';
    }

    return resultClasses;
  }
  return (
    <div className='container'>
      <h1 className='text-center'>LoginPage</h1>

      <form onSubmit={formik.handleSubmit} className='jumbotron'>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type='email'
            className={rightClassesForInput('email')}
            id='email'
            name='email'
          />
          <div className='invalid-feedback'>{formik.errors.email}</div>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type='password'
            className={rightClassesForInput('password')}
            id='password'
            name='password'
          />
          <div className='invalid-feedback'>{formik.errors.password}</div>
        </div>
        <button type='submit' className='btn'>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
