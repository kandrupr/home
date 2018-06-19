import React, { Component } from 'react';
import './css/Contact.css';
import {Button, Col, Input, ProgressBar} from 'react-materialize'
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
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    }

    submitSuccess() {
        var inputText = "#input_";
        var failMessages = ["#nameFail", "#emailFail","#subjectFail", "#messageFail"];
        for(var i = 0; i< failMessages.length; i++) {
            $(failMessages[i]).css("display", "none");
            $(inputText + i).prop("disabled", true);
        }
        var data = {
            "name" : this.state.name,
            "email" : this.state.email,
            "subject" : this.state.subject,
            "message" : this.state.message
        };
        this.setState({sending: true});
        this.sendMail(data, inputText, failMessages);
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
                <Col s={12} style={{textAlign: 'center'}}>
                    <Button s={2} type="submit" id="contactSubmit" waves='light'>Send</Button>
                </Col>
            );
        }
    }

    sendMail(data, inputText, failMessages) {
        var that = this;

        $.ajax({
            url: "https://webdev.cse.msu.edu/~kandrupr/mailman/sendmail.php",
            type: "post",
            data: data,
            timeout: 10000,
            success: function (response) {
                if(response.operation) {
                    for(var i = 0; i < failMessages.length; i++) {
                        $(inputText + i).val("");
                        $(inputText + i).prop("disabled", false);
                    }
                    window.Materialize.toast("I'll get back to you soon!", 2000);
                } else {
                    for(var j = 0; j < failMessages.length; j++) {
                        $(inputText + j).prop("disabled", false);
                    }
                    window.Materialize.toast('Missing some data! Try again!', 2000);
                }
                that.setState({sending: false});
            },
            error: function(jqXHR, textStatus, errorThrown) {
                for(var j = 0; j < failMessages.length; j++) {
                    $(inputText + j).prop("disabled", false);
                }
                if(textStatus==="timeout") {
                    window.Materialize.toast('Took to long to connect! Try again!', 2000);
                } else {
                    window.Materialize.toast('Something went wrong! Try again!', 2000);
                }
                that.setState({sending: false});
            }
        });
    }

    render() {
        return (
            <Col s={12} id="contact" className="scrollify" data-name="contact">
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
                <footer>
                    <p>Designed and developed by Pranay Kandru<br></br>Skills Icons from <a href="https://icons8.com/">Icons8</a></p>
                </footer>
            </Col>
        );
    }
}

export default Contact;