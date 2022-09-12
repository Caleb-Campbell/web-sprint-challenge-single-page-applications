import * as yup from 'yup'

const pizzaSchema = yup.object().shape({

    name: yup
    .string()
    .required('Must include a name for the order')
    .min(2, 'name must be at least 2 characters'),
    size: yup
    .string()
    .oneOf(['pep', 'saus','pin','olive'],'Please Select a Size'),
    pep: yup
    .boolean(),
    saus: yup
    .boolean(),
    pin: yup
    .boolean(),
    olive: yup
    .boolean(),
    special: yup
    .string()


    

})

export default pizzaSchema