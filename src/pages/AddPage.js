import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuthCtx } from '../store/authContext';
import { baseUrl, myFetchAdd } from '../utils';
import css from './css/Add.module.css';
const initValues = {
  title: '',
  description: '',
};

function AddPage() {
  const history = useHistory();
  const { token } = useAuthCtx();
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      title: Yup.string().min(2, 'At least 2 characters').max(15).required(),
      description: Yup.string().min(5, 'At least 5 characters').max(100).required(),
    }),

    onSubmit: async (values) => {
      const valuesCopy = { ...values };
      console.log('values ===', values);
      console.log('valuesCopy ===', valuesCopy);
      const addResult = await myFetchAdd(
        `${baseUrl}/v1/content/skills`,
        'POST',
        token,
        values
      );
      if (addResult.msg === 'Added new skill to account') {
        history.replace('/');
      }
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
    <div className={css.card}>
      <h1 className={css.center}>Add Your Skill</h1>

      <form onSubmit={formik.handleSubmit} className={css.container}>
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
