import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, fixedHeader, Header, Textfield, Content, Card, CardText, shadow, CardTitle, Button,
  FABButton, Icon, colored } from 'react-mdl';
import request from 'superagent';

import AlertContainer from 'react-alert';

export default class Email extends React.Component {
    constructor(){
      super();
      this.state = {val: ""};
      this.alertOptions = {
        offset: 14,
        position: 'bottom left',
        theme: 'dark',
        time: 5000,
        transition: 'scale'
      };
    }

    showAlertSuccess(){
      msg.success('Envoyé !', {
        time: 2000,
        type: 'success',
        icon: <img src="../ressources/check.png" />
      });
    }

    showAlertError(){
      msg.error('Erreur !', {
        time: 2000,
        type: 'error',
        icon: <img src="../ressources/error.png" />
      });
    }

    update(e){
      this.setState({val: e.target.value})
    }

    render() {
        return (
            <div className="mail-input">
                <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />

                <Textfield
                      onChange={this.update.bind(this)}
                      label="Email du destinataire..."
                      style={{width: '600px'}} />

                    <button
                      className="btn-send"
                      onClick={() => {if(this.state.val != ""){this.showAlertSuccess();this.props.onClick(this.state.val);}else{this.showAlertError();};}}>
                          <Icon className="btn-icon" name="send" />
                      </button>

            </div>
          )
    }
}
