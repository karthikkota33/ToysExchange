import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import CategoryItemPicker from '../components/CategoryPickerItem';
import FormImagePicker from '../components/FormImagePicker';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required').min(1).label('Title'),
    price: Yup.number().required('Price is required').min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1, "Please select at least one image.")
});

const categories = [
    { label: "Cars", value: 1, backgroundColor: 'red', icon: 'car-sports' },
    { label: "Electronics", value: 2, backgroundColor: 'green', icon: 'email' },
    { label: "Games", value: 3, backgroundColor: 'blue', icon: 'email' },
    { label: "Teddy", value: 4, backgroundColor: 'orange', icon: 'lock' },
    { label: "Education", value: 5, backgroundColor: 'orange', icon: 'lock' },
    { label: "Puzzles/Games", value: 6, backgroundColor: 'orange', icon: 'lock' },
    { label: "Vehicles", value: 4, backgroundColor: 'orange', icon: 'lock' },
    { label: "Others", value: 8, backgroundColor: 'orange', icon: 'lock' },
];

const ListingEditScreen = () => {
    const { location } = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0);
        setUploadVisible(true);

        const result = await listingsApi.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
        );

        if (!result.ok) {
            console.log(result);
            setUploadVisible(false);
            return alert('Could not save the listings.');
        }

        resetForm();
    }
    return (
        <Screen style={styles.conatiner}>
            <UploadScreen
                onDone={() => setUploadVisible(false)}
                progress={progress}
                visible={uploadVisible} />
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: "",
                    images: []
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <AppFormField name="title" maxLength={255} placeholder="Title" />
                <AppFormField keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="price"
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryItemPicker}
                    placeholder="Category"
                    width="40%"
                />
                <AppFormField
                    maxLength={255}
                    name="Description"
                    multiline
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        padding: 10
    }
})

export default ListingEditScreen;