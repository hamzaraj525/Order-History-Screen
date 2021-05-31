import React from 'react';
import {
  SafeAreaView,
  TouchableHighlight,
  TextInput,
  Text,
  StyleSheet,
  Button,
  View,
} from 'react-native';

const App = () => {
  let [result, setResult] = React.useState(0);
  let [num1, setNum1] = React.useState('');
  let [num2, setNum2] = React.useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Type Values"
        keyboardType="numeric"
        onChangeText={val => setNum1(val)}
      />

      <TextInput
        style={styles.input}
        placeholder="Type Values"
        keyboardType="numeric"
        onChangeText={val => setNum2(val)}
      />

      <View style={styles.button}>
        <Button
          title="+"
          color="green"
          onPress={() => {
            const val1 = parseFloat(num1);
            const val2 = parseFloat(num2);
            setResult(val1 + val2);
          }}
        />
        <Button
          title="-"
          color="red"
          onPress={() => {
            const val1 = parseFloat(num1);
            const val2 = parseFloat(num2);
            setResult(val1 - val2);
          }}
        />
        <Button
          title="*"
          color="purple"
          onPress={() => {
            const val1 = parseFloat(num1);
            const val2 = parseFloat(num2);
            setResult(val2 * val2);
          }}
        />
        <Button
          title="/"
          color="blue"
          onPress={() => {
            const val1 = parseFloat(num1);
            const val2 = parseFloat(num2);
            setResult(val1 / val2);
          }}
        />
      </View>

      <Text style={styles.innerText}>Result:{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  innerText: {
    fontSize: 33,
    textAlign: 'center',
  },

  button: {
    flexDirection: 'row',
    width: '99%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
  },
});

export default App;
