import React from "react"
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";
import SignUpHere from "../components/SignUpHere";
import SignUpModal from "../components/SignUpModal";
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from "three"

class Login extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }

  componentDidMount() {
    this.vantaEffect = NET({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3f77ff,
        backgroundColor: 0xffffff,
        points: 20.00,
        maxDistance: 25.00,
        spacing: 17.00,
        THREE: THREE // use a custom THREE when initializing
    })
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  render() {

    return(
        <>
            <div ref={this.vantaRef}>
                <LoginHeader/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <LoginForm/>
                <br/>
                <br/>
                <br/>
                <br/>
                <SignUpHere/>
                <SignUpModal/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </>
    )}}


export default Login;