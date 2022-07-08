import React, { useState } from "react"
import axios from "axios"
import styles from "./Login.module.css"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Container from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"

async function loginUser(credentials) {
  const url = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_LOGIN}`
  const oauthData = {
    grant_type: process.env.REACT_APP_OAUTH_GRANT_TYPE,
    client_id: process.env.REACT_APP_OAUTH_CLIENT_ID,
    client_secret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
  }
  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }
  const reqBody = { ...oauthData, ...credentials }

  return axios
    .post(url, reqBody, headers)
    .then((response) => response)
    .catch((error) => {
      console.log("request failure: ", error)
      return error.response
    })
}

const Login = ({ setUser }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errors, setErrors] = useState()
  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

    if (!email && errors) {
      setErrors(null)
      return true
    }

    if (!email || regex.test(email) === false) {
      setErrors({ type: "email" })
      return false
    }

    setErrors(null)
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email && password) {
      const response = await loginUser({
        email,
        password,
      })

      if (response.status !== 200) {
        return setErrors({
          type: "login",
          message: response.data.error_description,
        })
      }
      setUser(response.data)
    }
  }

  return (
    <Container className="justify-content-center">
      <h1> Please Log In </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            className="mb-3"
            controlId="floatingEmail"
            label="Email"
          >
            <Form.Control
              type="email"
              placeholder="adam@eden.com"
              onChange={(e) => {
                validateEmail(e.target.value)
                setEmail(e.target.value)
              }}
            />
          </FloatingLabel>
        </Form.Group>
        {errors?.type === "email" && (
          <p className={styles.fromErrorText}>Please provide a valid email.</p>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            className="mb-3"
            controlId="floatingPassword"
            label="Password"
          >
            <Form.Control
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>
        <Button type="submit">Submit</Button>
        {errors?.type === "login" && (
          <Alert key={errors.type} variant="danger">
            <Alert.Heading>Failed to login</Alert.Heading>
            <p> {errors.message} </p>
          </Alert>
        )}
      </Form>
    </Container>
  )
}

export default Login
