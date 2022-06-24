import { Container, Content, } from "./styles";
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export default function Footer() {
  return (
    <Container>
      <Content>
        <p> Feito por Duda🖤</p>
        <div>
          <a href="https://instagram.com/_eduarda.cr?igshid=YmMyMTA2M2Y=" target="_blank"><BsInstagram size={30} /></a>
          <a href="https://www.linkedin.com/in/eduardacarvalho9833/" target="_blank"><BsLinkedin size={30} /></a>
          <a href="https://github.com/eduardacarvalho00" target="_blank"><BsGithub size={30} /></a>
          <a href="mailto:eduardacarvalho9833@gmail.com" target="_blank"><AiOutlineMail size={30} /></a>
        </div>
      </Content>
    </Container>
  )
}