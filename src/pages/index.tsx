import { Component } from 'react';
import styles from './index.scss';

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
      <div className={styles.Layout}>
        <h1 className={styles.Title}>
          {greet}
        </h1>
      </div>
    );
  }
}

export default Index;
