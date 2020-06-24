import React, { Component } from "react";
import "./App.css";
import { ChatPanel } from "./components";

class App extends Component {
  chatThreadRef = React.createRef();

  state = {
    points: 10,
    chatList: ["Hey", "Hello", "Hi"],
  };

  // this is life cycle method that would be called before render method and overrides the state
  static getDerivedStateFromProps(props, state) {
    return {
      points: 1000,
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.state.chatList > prevState.chatList) {
      const chatThreadRef = this.chatThreadRef.current;
      return chatThreadRef.scrollHeight - chatThreadRef.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const chatThreadRef = this.chatThreadRef.current;
      chatThreadRef.scrollTop = chatThreadRef.scrollHeight - snapshot;
    }
  }

  _handleAddChat = () => {
    let chatList = [...this.state.chatList];
    chatList.push("Hello on " + new Date().toLocaleString());
    this.setState({
      chatList,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://www.educative.io/udata/WaYwm2ebRW7/Screen%20Shot%202019-08-21%20at%205.24.29%20PM.png"
            className="App-logo"
            alt="logo"
          />
          <p>You've scored {this.state.points} points.</p>
        </header>
        <section className="App-chat">
          <p className="chat-header">
            Football Chat{" "}
            <button className="chat-btn" onClick={this._handleAddChat}>
              Add Chat
            </button>
          </p>
          <ul className="chat-thread" ref={this.chatThreadRef}>
            <ChatPanel chatList={this.state.chatList} />
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
