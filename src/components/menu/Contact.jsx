import React from "react";

const Contact = () => {
	return (
		<div>
			<form action="https://getform.io/f/3fa0dba5-b607-42de-9c44-6f644532af4a" method="POST">
				<div className="flex">
					<div className="col">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" required />
					</div>
					<div className="col">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" required />
					</div>
				</div>
				<div className="col">
					<label htmlFor="subject">Subject</label>
					<input type="text" name="subject" required />
				</div>
				<div className="col">
					<label htmlFor="message">Message</label>
					<textarea name="message" cols="30" rows="5" required></textarea>
				</div>
				<button className="md-button">Send Message</button>
			</form>
		</div>
	);
};

export default Contact;
