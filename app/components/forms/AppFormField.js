import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessages';

const AppFormField = ({ name, width, ...otherProps }) => {
    const { setFieldTouched, setFieldValue, handleChange, errors, touched, values } = useFormikContext();

    return (
        <>
            <AppTextInput
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                onBlur={() => setFieldTouched(name)}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} touched={touched[name]} />
        </>
    )
}

const styles = StyleSheet.create({});

export default AppFormField;