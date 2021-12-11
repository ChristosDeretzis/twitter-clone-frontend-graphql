import * as Yup from 'yup';

const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/

export const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Please Enter the First Name')
        .min(2, 'First Name too short')
        .max(40, 'First Name too long'),
    lastName: Yup.string()
        .required('Please Enter the Last Name')
        .min(2, 'Last Name too short')
        .max(40, 'Last Name too long'),
    userName: Yup.string()
        .required('Please Enter the Username')
        .min(2, 'username too short')
        .max(40, 'username too long'),
    email: Yup.string()
        .email('Invalid Email')
        .required('Please enter your Email'),
    password: Yup.string()
        .required('Please enter your Password')
        .matches(
            passwordRegEx,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    repeatPassword: Yup.string()
        .required('Please enter your Password Again')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email')
        .required('Required'),
    password: Yup.string()
        .required('Please enter your Password')
        .matches(
            passwordRegEx,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
});