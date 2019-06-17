import { Component } from 'react';

import './index.scss';

import Title from '../components/title/TItle';
import Layout from '../components/Layout/Layout';

type State = {
  greet: string
};

class Index extends Component<any, State> {
  private greetings = [
    'Hello there',
    'Ou its you',
    'Pleasure to e-greet you',
    'Don\'t look away please'
  ];

  private interval?: number;

  state: State = {
    greet: this.greetings[0]
  };

  componentDidMount() {
    this.interval = window.setInterval(() => {
      const index = this.greetings.indexOf(this.state.greet);
      const nextGreet = this.greetings[index + 1] || this.greetings[0];

      this.setState({
        greet: nextGreet
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const { greet } = this.state;

    return (
      <Layout>
        <Title>
          {greet}
        </Title>
      </Layout>
    );
  }
}

export default Index;
