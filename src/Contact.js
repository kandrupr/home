import React, { Component } from 'react';
import './css/Contact.css';
import {Button, Col, Input, ProgressBar, Toast} from 'react-materialize'
import $ from "jquery";

class Contact extends Component {
    constructor () {
        super();
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

    componentDidMount() {

    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handleSubjectChange(e) {
        this.setState({subject: e.target.value});
    }

    handleMessageChange(e) {
        this.setState({message: e.target.value});
    }


    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    submit(event) {
        event.preventDefault();
        if(this.state.name === "" || !this.validateEmail(this.state.email) || this.state.subject === "" || this.state.message === "" ) {
            this.submitFail();
        } else {
            this.submitSuccess();
        }
    }

    submitFail() {
        var shaker = $("#contactShaker");
        if(!shaker.hasClass('animated shake')) {
            shaker.addClass('animated shake');
        }
        setTimeout(function() {
            if(shaker.hasClass('animated shake')) {
                shaker.removeClass('animated shake');
            }
        }, 1100);
        $("fail").click();
        var fields = [this.state.name, this.state.subject, this.state.message];
        var failMessages = ["#nameFail", "#subjectFail", "#messageFail"];

        for(var i = 0; i< fields.length; i++) {
            if(fields[i] === "") {
                $(failMessages[i]).css("display", "block");
            } else {
                $(failMessages[i]).css("display", "none");
            }
        }
        if(!this.validateEmail(this.state.email)) {
            $("#emailFail").css("display", "block");
        } else {
            $("#emailFail").css("display", "none");
        }
        // window.Materialize.toast('I am a toast!', 2000);
    }

    submitSuccess() {
        var inputText = "#input_";
        var failMessages = ["#nameFail", "#emailFail","#subjectFail", "#messageFail"];
        for(var i = 0; i< failMessages.length; i++) {
            $(failMessages[i]).css("display", "none");
            $(inputText + i).val("");
            $(inputText + i).prop("disabled", true);
        }
        var that = this;
        this.setState({sending: true});
        setTimeout(function() {
            for(var i = 0; i < failMessages.length; i++) {
                $(inputText + i).prop("disabled", false);
            }
            that.setState({sending: false});
        }, 3000);
        // Mail
    }

    sending() {
        if(this.state.sending) {
            return (
                <Col s={12}>
                    <ProgressBar />
                </Col>
            );
        } else {
            return (
                <Col s={12}>
                    <Col s={5} />
                    <Button s={2} type="submit" id="contactSubmit" waves='light'>Submit</Button>
                    <Col style={{float: "right"}} s={5} />
                </Col>
            );
        }
    }

    render() {
        return (
            <Col s={12} id="contact">
                <Col id="contactContent" className="contactCenter" s={6}>
                    <Col id="contactHeader" s={12}>
                        <p>HI</p>
                    </Col>
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
            </Col>
        );
    }
}

export default Contact;