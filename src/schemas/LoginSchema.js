import { string, object }  from 'yup';

const LoginSchema = object().shape({
  login: string().required('Enter login'),
  password: string().required('Enter password')
});

export default LoginSchema;