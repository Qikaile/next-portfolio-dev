import Image from 'next/image';
import Container from 'components/ui/Container';
import ContactForm from './ContactForm';
import contactIllustration from 'assets/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';

const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <Image
        src={contactIllustration}
        alt="I’m Qikaile and I’m a Developer&Mechanical engineer"
      />
    </Thumbnail>
  </Wrapper>
);

export default Contact;