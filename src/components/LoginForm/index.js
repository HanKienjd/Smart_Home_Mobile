import React from 'react';
import { func } from 'prop-types';
import { Button, View, TextInput } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';
import { login } from 'actions/userActions';
import ErrorView from 'components/common/ErrorView';
import { useForm } from 'react-hook-form';
import strings from 'localization';
import styles from './styles';

const LoginForm = props => {
  const { error, status } = useStatus(login);
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = data => {
    props.onSubmit(data);
  };
  return (
    <View>
      <TextInput
        style={styles.inputLayout}
        placeholder={strings.SIGN_IN.email}
        keyboardType="email-address"
        autoCapitalize="none"
        testID="email-input"
        onChangeText={value => setValue('email', value)}
        {...register('email')}
      />
      <TextInput
        style={styles.inputLayout}
        placeholder={strings.SIGN_IN.password}
        testID="password-input"
        secureTextEntry
        onChangeText={value => setValue('password', value)}
      />
      <ErrorView errors={{ error }} />
      <View style={styles.button}>
        <Button
          color="#c91432"
          title={status === LOADING ? strings.COMMON.loading : strings.SIGN_IN.button}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

LoginForm.propTypes = {
  onSubmit: func.isRequired,
};

export default LoginForm;
