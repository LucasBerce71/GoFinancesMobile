import * as Yup from 'yup'; 

export default {
    name: Yup
        .string()
        .required('Nome é obrigatório!'),

    amount: Yup
        .number()
        .typeError('Informe um valor numérico!')
        .positive('O valor não pode ser negativo!')
        .required('O valor é obrigatório!'),
}