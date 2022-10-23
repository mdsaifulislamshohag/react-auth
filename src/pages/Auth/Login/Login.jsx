import React from 'react';
import { Button, Card, FormGroup, Grid, TextField } from "@material-ui/core";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Notify } from "../../../misc/common";
import { LOGIN } from '../../../requests/AuthApi';
import { Link } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Required'),
    password: Yup.string().min(6, 'Invalid Password!').required('Required')
});

const LoginForm = () => {
    const handleSubmit = async (values) => {
        let res = await LOGIN(values);
        if(res){
            Notify("Login Success", "success");
        }else{
			Notify("Login Error", "error");
        }
    }

    return (
        <Formik 
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={values => { handleSubmit(values) }}
        >
            {({ errors, touched }) => (
                <Form autocomplete="off" className="p-4">
                    <h4 className="mb-4">Login</h4>
                    <FormGroup className="mb-3">
                        <Field name="email" component={TextField} variant="outlined" label="Email Address" error={touched.email && errors.email} />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Field type="password" name="password" component={TextField} variant="outlined" label="Password" error={touched.password && errors.password}/>
                    </FormGroup>

                    <Grid container direction="row" justifyContent="space-between" alignItems="center"  style={{ display: 'flex', flexWrap: "wrap" }}>
                        <Button type="submit" variant="contained" color="primary"> Login </Button>
                        <p>Not registered? <Link to="/register">Register</Link></p>
                    </Grid>

                </Form>
            )}
        </Formik>
        
    )
}

const Login = ()=> {
    return (
        <div className="my-5 pt-5">
            <Grid container  direction="row" justifyContent="center" alignItems="center">
                <Grid item lg={4} sm={8} xs={10}>
                    <Card>
                        <LoginForm />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
} 

export default Login
