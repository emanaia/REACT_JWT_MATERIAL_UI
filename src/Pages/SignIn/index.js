import React from "react";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Container, Button, IconButton, TextField, Box, Divider } from "@material-ui/core";
import { Visibility, VisibilityOff, DriveEta } from '@material-ui/icons';

import { ApiPost } from '../../helpers/axios'
import { setToken, setRefreshToken, setUser } from "../../helpers/user";
import { Redirect } from 'react-router-dom';




export default function SignIn() {

    const [showPass, setShowPass] = React.useState(false);
    const [showError, setShowError] = React.useState('');

    const { handleSubmit, handleChange, resetForm, setFieldValue, values, errors, handleBlur, isValid, touched } = useFormik({

        initialValues: {
            email: '',
            senha: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().max(50, 'Maximo 10 characters').min(5, 'Mínimo 6 characters').required('Required'),
            senha: Yup.string().max(20, 'Maximo 15 characters').min(6, 'Mínimo 6 characters').required('Required')
        }),
        onSubmit: ({ email, senha }) => {

            //const data = JSON.stringify({ email, senha }, null, 2)

            ApiPost('/usuarios/login', { email, senha }).then(res => {

                if (res.data.metadata) {

                    const id = res.data.metadata.id;
                    const email = res.data.metadata.email;

                    setUser({ id, email })
                    setToken(res.data.metadata.token)
                    setRefreshToken(res.data.metadata.refreshToken)


                    alert(res.data.mensagem)
                }
                else {
                    setShowError(res.data.mensagem)
                    setFieldValue('senha', '')
                    //resetForm()
                }

            }).catch(error => {

                console.log(error.res.data)
            });

        }
    })


    return (

        <Container component="main" maxWidth="xs">

            <form onSubmit={handleSubmit}>

                <TextField
                    error={!!errors.email}
                    helperText={errors.email}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    id="email"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}

                />
                <TextField
                    error={!!errors.senha}
                    helperText={errors.senha}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="senha"
                    id="senha"
                    label="Senha"
                    type={showPass ? 'text' : 'password'}
                    value={values.senha}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputProps={{
                        endAdornment: (
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPass(!showPass)}
                                onMouseDown={(e) => e.preventDefault()}
                                edge="end"
                            >
                                {showPass ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        )
                    }}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={!isValid}
                >
                    Sign In
                </Button>
            </form>

            <Box >{showError}</Box >

        </Container >
    );
}
