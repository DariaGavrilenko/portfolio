import { Title } from '../Title';
import { useFormik } from 'formik';
import style from './Contacts.module.css';
import styleContainer from '../../common/CommonStyle.module.css';
import axios from 'axios';

const Contacts = () => {

  type ErrorsType = {
    email?: string
    name?: string
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validate: (values) => {
      const errors: ErrorsType = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      if (!values.name) {
        errors.name = 'Required'
      }
      return errors
    },
    onSubmit: values => {
      axios.post('https://gmail-sooty.vercel.app/sendMessage',{...values}).then(()=>{
        //div with thanks
      })
      formik.resetForm()
    },
  })

  return (
    <div className={style.contactsContainer}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <Title titleText='Contacts' />
        <form action="" className={style.form} onSubmit={formik.handleSubmit}>
          {formik.touched.name && formik.errors.name && <span className={style.errorMessage} >{formik.errors.name}</span>}
          <input
            id="name"
            name="name"
            type="name"
            placeholder='Your name'
            onChange={formik.handleChange}
            value={formik.values.name}
            className={style.contactName}
          />
          {formik.touched.email && formik.errors.email && <span className={style.errorMessage} >{formik.errors.email}</span>}
          <input
            id="email"
            name="email"
            type="email"
            placeholder='Your email'
            onChange={formik.handleChange}
            value={formik.values.email}
            className={style.contactEmail}
          />
      <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message} className={style.contactMessage} placeholder='Leave your message'></textarea>
      <button type="submit" className={style.submitButton}>Submit</button> 
    </form>
  </div>
</div>
)
}

//type submit
// try to use Formik

export default Contacts;



{/* <input type="text" className={style.contactEmail} placeholder='Your email' />
<textarea className={style.contactMessage} placeholder='Leave your message'></textarea> */}