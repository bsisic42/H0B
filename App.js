import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, fixedHeader, Header, Textfield, Content, Card, CardText, shadow, CardTitle, Button } from 'react-mdl';
import request from 'superagent';
import Email from './Email';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {name: "", som: ""};
        this.updateName = this.updateName.bind(this);
        this.updateSom = this.updateSom.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.setState({name: "", som: ""});
    }

    updateName(e) {
        this.setState({ name: e.target.value });
    }
    updateSom(e) {
        this.setState({ som: e.target.value });
    }

    render() {
        return (
            <div>
              <div style={{height: '100px', position: 'relative'}}>
                <Layout fixedHeader>
                    <Header title="MjApp">
                    </Header>
                    <Content />
                </Layout>
              </div>

              <Email onClick={(recipients) => {
                  request.post("http://localhost:4730/send")
                        .send({name: this.state.name, som: this.state.som, recipients: recipients})
                        .end()
              }} />

              <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: '#222 center / cover'}}><h3>Bon anniversaire <span>{this.state.name}</span> !</h3></CardTitle>
                <CardText>
                    <h4>Je t'offre <span>{this.state.som}</span> euros pour cet évènement.</h4>
                </CardText>
              </Card>

              <div className="input-card">
                <Textfield
                       onChange={this.updateName}
                       value={this.state.name}
                       label="Prénom..."
                       style={{width: '200px'}} />

                       <Textfield
                              onChange={this.updateSom}
                              pattern="-?[0-9]*(\.[0-9]+)?"
                              error="Input is not a number!"
                              value={this.state.som}
                              label="Somme..."
                              style={{width: '200px'}} />
                <Button
                  style={{margin:'15px'}}
                  raised
                  colored
                  onClick={this.reset}>Clear
                </Button>
              </div>

            </div>);
    }
}
