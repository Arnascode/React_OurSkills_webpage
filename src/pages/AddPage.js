// import { useAuthCtx } from '../store/authContext';
// import css from './css/Add.module.css';
// function AddPage() {
//   const { isUserLoggedIn } = useAuthCtx();

//   return (
//     <div className={css.center}>
//       <h1 className='text-center'>Add Page</h1>
//       {!isUserLoggedIn && (
//         <p className='lead'>Jei norit pridėti, būtinai prisijunkite.</p>
//       )}
//       <div className={css.container}>
//         <form action=''></form>
//       </div>
//     </div>
//   );
// }

// export default AddPage;

import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuthCtx } from '../store/authContext';
import { baseUrl, myFetch } from '../utils';

const initValues = {
  title: '',
  description: '',
};

function AddPage() {
  const history = useHistory();
  const ctx = useAuthCtx();
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      title: Yup.string().min(2, 'At least 2 characters').max(15).required(),
      description: Yup.string().min(5, 'At least 5 characters').max(100).required(),
    }),

    onSubmit: async (values) => {
      const valuesCopy = { ...values };
      // delete valuesCopy['repeatPassword'];
      console.log('values ===', values);
      console.log('valuesCopy ===', valuesCopy);
      const registerResult = await myFetch(
        `${baseUrl}/v1/content/skills`,
        'POST',
        valuesCopy
      );
      if (registerResult.succes === '1') {
        ctx.login(registerResult.token, valuesCopy.title);
        history.replace('/');
      }
      console.log('registerResult ===', registerResult);

      console.log('submiting values ===', values);
    },
  });

  // function matchPass() {
  //   const { password, repeatPassword } = initValues;
  //   if (password !== repeatPassword) {
  //     console.log('Passwords does not match');
  //   }
  // }

  function rightClassesForInput(field) {
    let resultClasses = 'form-control';

    if (formik.touched[field]) {
      resultClasses += formik.errors[field] ? ' is-invalid' : ' is-valid';
    }

    return resultClasses;
  }
  return (
    <div className='container'>
      <h1 className='text-center'>Add here</h1>

      <form onSubmit={formik.handleSubmit} className='jumbotron'>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            type='title'
            className={rightClassesForInput('title')}
            id='title'
            name='title'
          />
          <div className='invalid-feedback'>{formik.errors.title}</div>
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            type='description'
            className={rightClassesForInput('description')}
            id='description'
            name='description'
          />
          <div className='invalid-feedback'>{formik.errors.description}</div>
        </div>
        <button type='submit' className='btn'>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddPage;
