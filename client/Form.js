import React from 'react';
import ReactDOM from 'react-dom';
var Validation = require('react-validation');
var validator = require('validator');
var MaskedInput = require('react-maskedinput');


// Extend Validation with custom rules
Validation.extendErrors({
    isNotValidUser: {
        className: 'ui-input_state_invalid-user',
        message: 'not equal to "Alex"',
        rule: function(value) {
            // Validation provides ref to 'validator' module, so you don't need to install it separately
            return validator.trim(value) === 'Alex';
        }
    },
    isRequired: {
        className: 'ui-input_state_empty',
        message: 'required',
        rule: function(value) {
            return Boolean(validator.trim(value));
        }
    },
    isEmail: {
        className: 'ui-input_state_email-pattern-failed',
        // validator already has strong email-pattern, so we don't have to extend it by custom
        message: 'error'
    }
});

class Form extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        console.log(event);
    }

    render() {
        return (
            <Validation.Form onSubmit={this.onSubmit}>
                <label>Email
                <Validation.Input
                    blocking='input'
                    className='ui-input'
                    validations={[
                        {
                            rule: 'isEmail'
                        }
                    ]}
                    name='email'
                    type='text'/></label>
                <Validation.Input
                    blocking='input'
                    className='ui-input'
                    validations={[
                        {
                            rule: 'isRequired',
                            errorMessage: 'required'
                        }
                    ]}
                    name='password'
                    type='password'/>
                <Validation.Button blocking='button' value='submit'/>
            </Validation.Form>
        );
    }
}

export default Form
