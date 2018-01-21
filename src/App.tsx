import * as React from 'react';
import { IntlProvider } from 'react-intl';
import './App.css';
import Container from './intl/Container'
import messages from './messages'

const logo = require('./logo.svg');

class App extends React.Component {

  state = {
    language: 'zh-CN',
    field: 'basic',
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <body>
          <IntlProvider locale={this.state.language} messages={messages(this.state)}>
            <Container {...this.state} onChange={(field, value) => this.setState({ [field]: value })} />
          </IntlProvider>
        </body>
      </div>
    );
  }
}

export default App;
