import React, { useState } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { ErrorMessages, AppForm, AppFormField, SubmitButton } from '../components/forms';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email().label("Email"),
    password: Yup.string().required('Password is required').min(4).label("Password")
});

const LoginScreen = ({ navigation }) => {
    const { logIn } = useAuth();
    const [logonFalied, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        logIn(result.data);
    }

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/Zero1.png")} />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessages error="Invalid email and/or password." touched={logonFalied} />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton
                    title="Login"
                />
            </AppForm>
            <Button title="Forgot password?"
                onPress={() => navigation.navigate("ForgotPassword")}
                titleStyle={{
                    color: '#039BE5'
                }}
                type='clear'
            />

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
});

export default LoginScreen;