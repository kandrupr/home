import React, { Component } from 'react';
import './css/Contact.css';
import {Button, Col, Input, ProgressBar} from 'react-materialize'
import $ from "jquery";
import axios from "axios";

// Contact page component
class Contact extends Component {
    constructor () {
        super();
        // name ... message form inputs, sending: boolean to see if email is still sending
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            sending: false
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    // Update state when name input is changed
    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    // Update state when email input is changed
    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    // Update state when subject input is changed
    handleSubjectChange(e) {
        this.setState({subject: e.target.value});
    }
    // Update state when message input is changed
    handleMessageChange(e) {
        this.setState({message: e.target.value});
    }

    // Regex function to see if string is a valid email
    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Handles contact page form event
    submit(event) {
        event.preventDefault();
        // Check to see if all fields are filled
        if(this.state.name === "" || !this.validateEmail(this.state.email) || this.state.subject === "" || this.state.message === "" ) {
            this.submitFail();
        } else {
            this.submitSuccess();
        }
    }

    submitFail() {
        // Shake contact form and handle animation
        var shaker = $("#contactShaker");
        if(!shaker.hasClass('animated shake')) {
            shaker.addClass('animated shake');
        }
        setTimeout(function() {
            if(shaker.hasClass('animated shake')) {
                shaker.removeClass('animated shake');
            }
        }, 1100);

        // Show or remove error messages depending on input
        var fields = [this.state.name, this.state.subject, this.state.message];
        var failMessages = ["#nameFail", "#subjectFail", "#messageFail"];

        for(var i = 0; i< fields.length; i++) {
            if(fields[i] === "") {
                $(failMessages[i]).css("display", "block");
            } else {
                $(failMessages[i]).css("display", "none");
            }
        }
        // Different from other fields because regex is needed to check
        if(!this.validateEmail(this.state.email)) {
            $("#emailFail").css("display", "block");
        } else {
            $("#emailFail").css("display", "none");
        }
    }

    submitSuccess() {
        // Hide all error messages and disable all input fields
        var inputText = "#input_";
        var failMessages = ["#nameFail", "#emailFail","#subjectFail", "#messageFail"];
        for(var i = 0; i< failMessages.length; i++) {
            $(failMessages[i]).css("display", "none");
            $(inputText + i).prop("disabled", true);
        }
        // Create data structure with form fields
        var data = {
            "name" : this.state.name,
            "email" : this.state.email,
            "subject" : this.state.subject,
            "message" : this.state.message
        };
        // Toggle sending function and send mail
        this.setState({sending: true});
        this.sendMail(data, inputText, failMessages);
    }

    /**
     * Toggle function that shows a submit function
     * or progress loading bar when email is being sent
     **/
    sending() {
        if(this.state.sending) {
            return (
                <Col s={12}>
                    <ProgressBar />
                </Col>
            );
        } else {
            return (
                <Col s={12} style={{textAlign: 'center'}}>
                    <Button s={2} type="submit" id="contactSubmit" waves='light'>Send</Button>
                </Col>
            );
        }
    }

    /**
     * Promise request to our URL to send email
     **/
    sendMail(data, inputText, failMessages) {
        var that = this;
        axios
          .post("URL", data)
          .then(res => {
             if(res.data.operation) {
                 // Email sent successfully, enable and clear input fields
                for(var i = 0; i < failMessages.length; i++) {
                    $(inputText + i).val("");
                    $(inputText + i).prop("disabled", false);
                }
                // Toast success
                window.Materialize.toast("I'll get back to you soon!", 2000);
             } else {
                 // Enable fields
                for(var j = 0; j < failMessages.length; j++) {
                    $(inputText + j).prop("disabled", false);
                }
                // Toast fail
                window.Materialize.toast('Missing some data! Try again!', 2000);
             }
             that.setState({sending: false});
          })
          .catch(res => {
              // Enable fields
             for(var j = 0; j < failMessages.length; j++) {
                $(inputText + j).prop("disabled", false);
             }
             // Toast fail
             window.Materialize.toast('Something went wrong! Try again!', 2000);
             that.setState({sending: false});
           });
    }

    render() {
        return (
            <Col s={12} id="contact" className="scrollify" data-name="contactme">
                <Col id="contactHeader" className="contactCenter" s={6}>
                    <Col s={11}>
                        <h2>Contact</h2>
                    </Col>
                </Col>
                <Col id="contactIntro" className="contactCenter" s={6}>
                    <Col s={11}>
                        <p>Reach out to me if you have any questions or just want to say hello!</p>
                    </Col>
                </Col>
                <Col id="contactContent" className="contactCenter" s={6}>
                    <div id="contactFinder" className="finder"></div>
                    <form onSubmit={this.submit.bind(this)}>
                        <div id="contactShaker">
                            <Col s={5}>
                                <Input s={12} label="Name" onChange={this.handleNameChange}/>
                                <Col id="nameFail" s={12} className="fail">Enter a name</Col>
                            </Col>
                            <Col s={1} />
                            <Col s={5}>
                                <Input s={12} label="Email" onChange={this.handleEmailChange}/>
                                <Col id="emailFail" s={12} className="fail">Enter an email</Col>
                            </Col>
                            <Col s={11}>
                                <Input s={12} label="Subject" onChange={this.handleSubjectChange}/>
                                <Col id="subjectFail" s={12} className="fail">Enter a subject</Col>
                            </Col>
                            <Col s={11}>
                                <Input s={12} type='textarea' label="Message" onChange={this.handleMessageChange}/>
                                <Col id="messageFail" s={12} className="fail">Enter a message</Col>
                            </Col>
                            <Col s={11}>
                                {this.sending()}
                            </Col>
                        </div>
                    </form>
                </Col>
                {/*<footer>
                    <p>Designed and developed by Pranay Kandru<br></br>Skills Icons from <a href="https://icons8.com/">Icons8</a></p>
                </footer>*/}
            </Col>
        );
    }
}

export default Contact;