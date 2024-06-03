import { useFormik } from "formik";

export default function FormikForm(){
    const formik = useFormik({
        initialValues: {
            name: "",
            email: ""
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlfor="name">Your Name</label>
            <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <br/>
            <label htmlfor="email">Your Email</label>
            <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            /><br/>
            <button type="submit">submit</button>
        </form>
    );
};