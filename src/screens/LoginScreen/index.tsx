import React, {useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {styles} from './styles';
import {COLORS, IMAGES, replace} from '../../utils';
import {RootStackParamList} from '../../types';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Input, ScreenContainer, Text} from '../../components';
import Feather from 'react-native-vector-icons/Feather';

type LoginScreenProps = StackScreenProps<RootStackParamList, 'LoginScreen'>;

const LoginScreen = ({}: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleRememberMe = () => {
    setRememberMe(val => !val);
  };

  const login = () => {
    setIsLoading(false);
    replace('HomeScreen');
    // const data = {
    //   email: email,
    //   password: password,
    // };
  };
  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.imageWrapper}>
          <Image
            source={IMAGES.logo}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.welcomeText}>{'Welcome Back !'}</Text>
          <Text style={styles.text}>
            {'Log in to your account and take care of your baby.'}
          </Text>
        </View>

        <Input
          placeholder={'Enter Email'}
          value={email}
          onChangeText={setEmail}
          title={'Email'}
          keyboardType="email-address"
        />

        <Input
          placeholder={'Enter Password'}
          value={password}
          onChangeText={setPassword}
          title={'Password'}
          secureTextEntry={secureTextEntry}
          onLeftIconPress={() => setSecureTextEntry(!secureTextEntry)}
          leftIcon={
            <Feather
              name={secureTextEntry ? 'eye' : 'eye-off'}
              color={COLORS.BLACK2}
              size={20}
            />
          }
        />

        <View style={styles.forgetPassWrapper}>
          <Button
            type="checkbox"
            text={'Remeber'}
            checked={rememberMe}
            onPress={toggleRememberMe}
            textStyle={styles.remeberText}
          />
          <Button
            type="tertiary"
            text={'Forget Password'}
            textStyle={styles.boldText}
            onPress={() => {}}
          />
        </View>

        <Button
          text={'Login'}
          textStyle={styles.buttonTextStyle}
          style={styles.buttonStyle}
          onPress={login}
          loading={isLoading}
        />

        <View style={styles.dontHanveAnAccountWrapper}>
          <Text style={styles.dontHaveAnAccount}>
            {"Don't have an account,"}
          </Text>
          <Button
            type="tertiary"
            text={'Create New Account'}
            style={styles.createAccountBtn}
            textStyle={[styles.createAccount, styles.boldText]}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default LoginScreen;
