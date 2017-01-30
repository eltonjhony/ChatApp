import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import {
  Actions
} from 'react-native-router-flux'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as homeActions from '../actions/home'

class Home extends React.Component {

  handleName(text) {
    this.props.actions.handleName(text);
  }

  render() {
    return(
      <View>
        <Text style={styles.title}>
          Enter your name:
        </Text>
        <TextInput
          style={styles.nameInput}
          placeholder='John Snow'
          onChangeText={(text) => { this.handleName(text) }}
          value={this.props.name}
        />
        <TouchableOpacity style={styles.buttonNext}
          onPress={() => {
            Actions.chat({name: this.props.name})
          }}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  nameInput: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  buttonNext: {
    margin: 20
  }
})

export default connect(state => ({
    name: state.name,
  }),
  (dispatch) => ({
    actions: bindActionCreators(homeActions, dispatch)
  })
)(Home);
