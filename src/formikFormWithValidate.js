import React from 'react';
import { useFormik } from "formik";

export default function FormikFormWithValidate() {
    const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = "Name must not be empty.";
        } else if (values.name.length > 15) {
            errors.name = "Must be 15 characters or less.";
        }

        if (!values.email) {
            errors.email = "Email must not be empty.";
        } else if (!emailRule.test(values.email)) {
            errors.email = "Please enter a valid email.";
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: ""
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
