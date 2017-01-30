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

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
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
          onChangeText={(text) => {
            this.setState({
              name: text,
            })
          }}
          value={this.state.name}
        />
        <TouchableOpacity style={styles.buttonNext}
          onPress={() => {
            Actions.chat({
              name: this.state.name
            })
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

export default Home;
