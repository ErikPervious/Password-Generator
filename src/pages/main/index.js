import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import { MaterialCommunityIcons } from '@expo/vector-icons';

let charsetAll = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
let charsetNumbers = '123456789';
let charsetLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function Main() {
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(5);
  const [onlyNumbers, setOnlyNumbers] = useState(false);
  const [onlyLetters, setOnlyLetters] = useState(false);
  const [isPassVisible, setIsPassVisible] = useState(true);

  function verify() {
    if (onlyNumbers === true && onlyLetters === false) {
      generate(charsetNumbers);
    } else if (onlyNumbers === false && onlyLetters == true) {
      generate(charsetLetters);
    } else {
      generate(charsetAll);
    }
  }

  function generate(char) {
    let pass = '';
    for(let i = 0, n = char.length; i < size; i++){
      pass += char.charAt(Math.floor(Math.random() * n))
    };
    setPassword(pass);
  }

  function copyPass() {
    Clipboard.setString(password);
    Alert.alert(
      'Aviso',
      'Senha Copiada Com Sucesso!',
      [
        {text: 'OK'}
      ]
    )
  }

  function changeVisible() {
    if (isPassVisible) {
      setIsPassVisible(false);
    } else {
      setIsPassVisible(true); 
    }
  }

  return(
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor="#121313" barStyle="light-content"/>
      <Image 
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>
        {size} Caracteres
      </Text>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor='#FFA200'
          maximumTrackTintColor='#000000'
          thumbTintColor="#FFA200"
          value={size}
          onValueChange={ value => setSize(value.toFixed(0)) }
        />
      </View>
      <View style={styles.containerOption}>
        <View style={styles.areaOption}>
          <CheckBox
            disabled={false}
            value={onlyNumbers}
            onValueChange={(value) => setOnlyNumbers(value)}
            tintColors={{
              true: '#FFAA00',
              false: '#CCC'
            }}
          />
          <Text style={styles.optionText}>Números</Text>
        </View>
        <View style={styles.areaOption}>
          <CheckBox
            disabled={false}
            value={onlyLetters}
            onValueChange={(value) => setOnlyLetters(value)}
            tintColors={{
              true: '#FFAA00',
              false: '#CCC'
            }}
          />
          <Text style={styles.optionText}>Letras</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={verify}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPass}>
            {isPassVisible ? password : '******'}
          </Text>
          <TouchableOpacity style={styles.eye} onPress={changeVisible}>
            <MaterialCommunityIcons
              size={33}
              color="#E1e1e1"
              name="eye-off-outline"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}