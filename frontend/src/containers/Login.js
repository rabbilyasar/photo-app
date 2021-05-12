import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, Button, Container } from 'react-bootstrap'
const axios = require('axios')


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        // login(email, password)
    }

    // if the user is authenticated
    // rediret to home page

    return (
        <Container style={{ marginTop: '100px' }}>
            <Form>
                <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="email" value={email} onChange={onChange}/>
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Group>
                    <p>Don't have an account? <Link to='/register'>Sign up</Link></p>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

const mapStateToProps = state => ({
    // is authenticated
})

export default connect(null, { })(Login);


// export default class Login extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           email: '',
//           password: '',
//         };
//         this.onChange = this.onChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//       }

//     onChange = (e) => this.setState({ [e.target.name]: e.target.value });


//     handleSubmit(event) {
//         console.log(this.state.email)
//         console.log(this.state.password)
//         axios.post('http://0.0.0.0:8000/api/auth/login',{
//             email: this.state.email,
//             password: this.state.password,
//         }).then(function (res){
//             console.log(res)
//             // localStorage.setItem('token', res.data.access);
//             // localStorage.setItem('user', res.config.data);
//         }).catch(error => {
//             if (error.response) {
// 				// The request was made and the server responded with a status code
// 				// that falls out of the range of 2xx
// 				console.log("response:", error.response);
// 				// console.log(error.response.status);
// 				// console.log(error.response.headers);
// 			} else if (error.request) {
// 				// The request was made but no response was received
// 				// `error.request` is an instance of XMLHttpRequest in the
// 				// browser and an instance of
// 				// http.ClientRequest in node.js
// 				console.log("request:", error.request);
// 			} else {
// 				// Something happened in setting up the request that triggered an Error
// 				console.log('Error', error.message);
// 			}
//         })
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <Container style={{ marginTop: '100px' }}>
//                 <Form>
//                     <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control type="text" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>
//                         <Form.Text className="text-muted">

//                         </Form.Text>
//                     </Form.Group>

//                     <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
//                     </Form.Group>
//                     <Form.Group controlId="formBasicCheckbox">
//                         <Form.Check type="checkbox" label="Check me out" />
//                     </Form.Group>
//                     <Button variant="primary" type="submit" onClick={this.handleSubmit}>
//                         Submit
//                     </Button>
//                 </Form>
//             </Container>
//         )
//     }
// }
