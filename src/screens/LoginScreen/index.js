import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View, ImageBackground } from 'react-native';
import { object } from 'prop-types';

import LoginForm from 'components/LoginForm';
import { login } from 'actions/userActions';
import strings from 'localization';
import { SIGN_UP_SCREEN } from 'constants/screens';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);
  const handleLogin = useCallback(() => navigation.push(SIGN_UP_SCREEN), [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/1.png')}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.formLogin}>
        <Text style={styles.welcome}>{strings.SIGN_IN.title}</Text>
        <LoginForm onSubmit={data => loginRequest(data)} />
        <Text onPress={handleLogin} style={styles.singUp}>
          {strings.SIGN_UP.bottom_title}
        </Text>
      </View>
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: object.isRequired,
};

LoginScreen.navigationOptions = {
  title: strings.SIGN_IN.title,
};

export default memo(LoginScreen);
