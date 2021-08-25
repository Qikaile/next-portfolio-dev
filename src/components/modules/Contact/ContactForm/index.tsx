import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import { Error, Center, InputField } from './styles';

const ContactForm = () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required('Full name field is required'),
      email: Yup.string().email('Invalid email').required('Email field is required'),
      message: Yup.string().required('Message field is required'),
    })}
    onSubmit={async ({ name, email, message }, { setSubmitting, resetForm }) => {
      try {
        await axios({
          method: 'POST',
          url:
            process.env.NODE_ENV !== 'development'
              ? `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/api/contact`
              : 'http://localhost:3000/api/contact',
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            name,
            email,
            message,
          }),
        });
        setSubmitting(false);
        setTimeout(() => resetForm(), 6000);
      } catch (err) {
        setSubmitting(false);
        alert('Something went wrong, please try again!');
      }
    }}
  >
    {({ values, touched, errors, isSubmitting }) => (
      <Form>
        <InputField>
          <Input
            as={FastField}
            type="text"
            name="name"
            component="input"
            aria-label="name"
            placeholder="Full name*"
            error={touched.name && errors.name}
          />
          <ErrorMessage component={Error} name="name" />
        </InputField>
        <InputField>
          <Input
            id="email"
            aria-label="email"
            component="input"
            as={FastField}
            type="email"
            name="email"
            placeholder="Email*"
            error={touched.email && errors.email}
          />
          <ErrorMessage component={Error} name="email" />
        </InputField>
        <InputField>
          <Input
            as={FastField}
            component="textarea"
            aria-label="message"
            id="message"
            rows="8"
            type="text"
            name="message"
            placeholder="Message*"
            error={touched.message && errors.message}
          />
          <ErrorMessage component={Error} name="message" />
        </InputField>
        <Center>
          <Button secondary type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Center>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
