import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axiosInstance  from '../axios';
import axios from 'axios'

import { useHistory } from 'react-router-dom'

export default function SignUp() {
	const history = useHistory();

	const initialFormData = Object.freeze({
		email: '',
		name: '',
		password: '',
	});
	const [formData, updateFormData] = useState(initialFormData)

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	}

	const handleSubmit = (e) => {
		console.log(axiosInstance)
		e.preventDefault();
		console.log(formData);

		// axios.post(`http://0.0.0.0:8000/api/user/register/`, {
		// 	email: formData.email,
		// 	name: formData.name,
		// 	password: formData.password
		// }).then(res => {
		// 	localStorage.setItem('token', res.data.access);
		// 	localStorage.setItem('user', res.config.data);
		// 	// history.push('/login')
		// 	console.log(res);
		// 	console.log(res.data);
		// }).catch(err => {
		// 	console.log(err)
		// })
		// axiosInstance({
		// 	'method': 'GET',
		// 	'url': 'user/register/',
		// 	'params': {
		// 		email: formData.email,
		// 		name: formData.name,
		// 		password: formData.password
		// 	},
		// })

		axiosInstance.post('user/register/', {
			email: formData.email,
			name: formData.name,
			password: formData.password
		}).then(res => {
			// history.push('/login')
			console.log(res);
			console.log(res.data);
		}).catch(err => {
			console.log(err)
		})
	};
	return (
		<Container style={{ marginTop: "100px" }}>
			<Form>
				<Form.Group controlId="formBasicEmail" style={{ width: "300px" }}>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						name="email"
						value={initialFormData.email}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicEmail" style={{ width: "300px" }}>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter name (optional)"
						name="name"
						value={initialFormData.name}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword" style={{ width: "300px" }}>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						name="password"
						value={initialFormData.password}
						onChange={handleChange}
					/>
				</Form.Group>
				<Button variant="primary" type="submit" onClick={handleSubmit}>
					Register
				</Button>
			</Form>
		</Container>
	);
}