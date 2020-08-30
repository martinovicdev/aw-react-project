import * as yup from 'yup';

const validationSchema = yup.object().shape({
    name: yup.string().required().label('First name'),
    surname: yup.string().required().label('Last name'),
    email: yup.string().required().email().label('E-mail'),
    telephone: yup.string().required().label('Telephone')
});

const validateFormWithYup = async (customer) =>{
    let errors; 

    try {
        await validationSchema.validate(customer, {abortEarly: false});
    } catch (er) {
        errors = er;
    }
    
    if(!errors) return null;

    const yupErrors = {};

    errors.inner.forEach(validationError =>{
        yupErrors[validationError.path] = validationError.message;
    })
    return yupErrors;
};

const getPropertyValidationErrorWithYup = async ({name, value}) =>{
    const customersProperyObject = { [name]: value };
    const customerPropertyValidationSchema = yup.object().shape({
        [name]:validationSchema.fields[name]
    });

    let error;

    try {
        await customerPropertyValidationSchema.validate(customersProperyObject);
    } catch (er) {
        error = er;
    }
    return error ? error: null;
}

export { validateFormWithYup, getPropertyValidationErrorWithYup };