import React from 'react';

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ContactToast() {
  return (
		<ToastContainer position="top-end" style={{padding: '3%'}}>
			<Toast>
				<Toast.Header closeButton={false}>
					<strong className="me-auto">SANS NUMERO</strong>
					<small>Software Development Consulting</small>
				</Toast.Header>
				<Toast.Body>
					<a href="mailto:dilannebioglu@gmail.com?subject=Opportunity to collaborate with Sans Numero Consulting">Share what's on your mind!</a>
				</Toast.Body>
			</Toast>
		</ToastContainer>
  );
}

export default ContactToast;
