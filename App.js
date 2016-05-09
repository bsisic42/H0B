import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, fixedHeader, Header, Textfield, Content, Card, CardText, shadow, CardTitle, Button } from 'react-mdl';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {name: "Martin", age: "35"};
        this.updateName = this.updateName.bind(this);
        this.updateAge = this.updateAge.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.setState({name: "", age: ""});
    }

    updateName(e) {
        this.setState({ name: e.target.value });
    }
    updateAge(e) {
      this.setState({ age: e.target.value });
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

              <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: '#222 center / cover'}}><h3>Bon anniversaire <span>{this.state.name}</span></h3></CardTitle>
                <CardText>
                    <h3>{this.state.age}</h3>
                </CardText>
              </Card>

              <div className="input-card">
                <Textfield
                       onChange={this.updateName}
                       value={this.state.name}
                       label="Prénom..."
                       style={{width: '200px'}} />

                       <Textfield
                              onChange={this.updateAge}
                              value={this.state.age}
                              label="Âge..."
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
