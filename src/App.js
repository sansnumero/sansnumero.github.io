import React from 'react';
import Editor from 'react-simple-code-editor';

import Prism from 'prismjs';
import 'prismjs/themes/prism-solarizedlight.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

import ContactToast from './components/contact_toast.js';

function App() {
  const [code, setCode] = React.useState(
    `
    <!DOCTYPE html>
    <html>
      <body>
        <div>
          <h1>Mission</h1>
          <p>Sans Numero is a software consulting agency specializing in Web Development.</p>
          <p>Our goal is to help small to medium sized businesses with <em>best practices</em> and help them move into the <em>digital world.</em></p>
          
          <h1>Services</h1>
          <ul>
            <li>Looking to build a web app?</li>
            <li>Have an existing application that you’d like some help or consultations on?</li>
          </ul>
          <p>With experience working at biggest unicorns as well as scaled small startups, we can help solve problems that you come across your journey!</p>
      
          <h1>Founder</h1>
          <p>Coming from the vibrant tech scene of Canada, <a href="https://www.linkedin.com/in/dilan-nebioglu/">Dilan</a> has worked at different sized startups. Now she'd like to give back by sharing her experience and knowledge gained from these companies.</p>
        </div>
      </body>
    </html>
    `
  );
  return (
    <Container>
      <ContactToast />
      <Row position="middle-center" style={{paddingTop: '10%'}}>
        <Col></Col>
        <Col xs={7}>
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => Prism.highlight(code, Prism.languages.html)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: '90%',
            backgroundColor: '#fafafa',
          }}
        />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
