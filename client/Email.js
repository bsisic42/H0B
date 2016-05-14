import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, fixedHeader, Header, Textfield, Content, Card, CardText, shadow, CardTitle, Button,
  FABButton, Icon, colored } from 'react-mdl';
import request from 'superagent';

export default class Email extends React.Component {
    constructor(){
      super();
      this.state = {val: ""};
    }
    update(e){
      this.setState({val: e.target.value})
    }
    render() {
        return (
            <div className="mail-input">

                <Textfield
                      onChange={this.update.bind(this)}
                      label="Email du destinataire..."
                      style={{width: '600px'}} />

                    <button
                      className="btn-send"
                      onClick={() => {this.props.onClick(this.state.val)}}>
                          <Icon className="btn-icon" name="send" />
                      </button>


            </div>
          )
    }
}
