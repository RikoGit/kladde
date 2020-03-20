export default [
    {
        name: 'profileName',
        placeholder: 'Моё имя',
        label: 'Имя',
        comment: 'Только буквы (русские или английские)',
        validateOptions: {
            required: true,
            validator: 'letters',
        },
    },
    {
        name: 'profileAge',
        placeholder: 'Мой возраст',
        label: 'Возраст',
        comment: 'Число от 0 до 100',
        validateOptions: { validator: 'number', validatorMin: 0, validatorMax: 100 },
    },
    {
        name: 'profilePhone',
        placeholder: 'Мой телефон',
        label: 'Телефон',
        comment: 'В формате +71234567890',
        validateOptions: { validator: 'regexp', validatorPattern: '^\\+7\\d{10}$' },
    },
    {
        name: 'profileNumber',
        placeholder: '42?',
        label: 'Любимое число',
        validateOptions: { validator: 'number' },
    },
];
