import React from 'react';
import { Button, Card, FormGroup, Grid, TextField } from "@material-ui/core";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Notify } from "../../../misc/common";
import { REGISTER } from '../../../requests/AuthApi';
import { Link } from 'react-router-dom';

const RegistrationSchema = Yup.object().shape({
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    email: Yup.string().email('Must be a valid email').required('Required'),
    password: Yup.string().min(6, 'Invalid Password!').required('Required')
});

const RegistrationForm = () => {
    const handleSubmit = async (values) => {
        let res = await REGISTER(values);
        if(res){
            Notify("Login Success", "success");
        }else{
			Notify("Login Error", "error");
        }
    }

    return (
        <Formik 
            initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                password: '',
            }}
            validationSchema={RegistrationSchema}
            onSubmit={values => { handleSubmit(values) }}
        >
            {({ errors, touched }) => (
                <Form autocomplete="off" className="p-4">
                    <h4 className="mb-4">Registration</h4>
                    <FormGroup className="mb-3">
                        <Field name="firstname" component={TextField} variant="outlined" label="First Name" error={touched.firstname && errors.firstname} />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Field name="lastname" component={TextField} variant="outlined" label="Last Name" error={touched.lastname && errors.lastname} />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Field name="email" component={TextField} variant="outlined" label="Email Address" error={touched.email && errors.email} />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Field type="password" name="password" component={TextField} variant="outlined" label="Password" error={touched.password && errors.password}/>
                    </FormGroup>

                    <Grid contsiner direction="row" justifyContent="space-between" alignItems="center"  style={{ display: 'flex', flexWrap: "wrap" }}>
                        <Button type="submit" variant="contained" color="primary"> Registration </Button>
                        <p>Already registered? <Link to="/">Login</Link></p>
                    </Grid>

                </Form>
            )}
        </Formik>
        
    )
}


const Registration = () => {
    return (
        <div className="my-5 pt-5">
            <Grid container  direction="row" justifyContent="center" alignItems="center">
                <Grid item lg={4} sm={8} xs={10}>
                    <Card>
                        <RegistrationForm />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Registration
