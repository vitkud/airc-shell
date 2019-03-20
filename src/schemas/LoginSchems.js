import { string, object }  from 'yup';

const LoginSchema = object().shape({
    login: string().required(),
    password: string().required()
  });

export default LoginSchema;