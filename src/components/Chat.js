import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as chatActions from '../actions/chat'

import { GiftedChat } from 'react-native-gifted-chat'

import Backend from '../Backend'

class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }

  send(message) {
    this.props.actions.sendMessage(message);
  }

  render() {
    return(
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          // send message to your backend
          this.send(message)
        }}
        user={{
          _id: Backend.getUid(),
          name: this.props.name,
        }}
        />
    )
  }

  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }

  componentWillUnmount() {
    Backend.closeChat();
  }

}

Chat.defaultProps = {
  name: 'John',
};

Chat.propsTypes = {
  name: React.PropTypes.string,
};

export default connect(state => ({}),
  (dispatch) => ({
    actions: bindActionCreators(chatActions, dispatch)
  })
)(Chat);
