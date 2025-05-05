import { Field, Form, Formik, FormikHelpers } from 'formik';
import toast from "react-hot-toast";

interface Props {
    handleChangeQuery: (query: string) => void;
}

interface FormValues {
    query: string;
}

function SearchBar({ handleChangeQuery }: Props) {
    const initialValues: FormValues = { query: "" };

    const handleSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        if (!values.query.trim()) {
            toast.error("Поле не може бути порожнім!");
            return;
        }
        handleChangeQuery(values.query.trim());
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <Field name="query" placeholder="Search images..." />
                <button type="submit">Search</button>
            </Form>
        </Formik>
    );
}

export default SearchBar;
