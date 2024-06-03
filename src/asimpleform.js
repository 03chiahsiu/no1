import { useFormik } from "formik";

export default function SimpleForm() {
    return (
        <form>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Your Email</label>
            <input type="text" id="email" />
            <button type="submit">submit</button>

        </form>
    );
};