export const FORM_ITEMS = [
  {
    elem: "input",
    type: "range",
    inputmode: "numeric",
    name: "amount",
    label: "Select amount",
    placeholder: "150000",
    rules: {
      valueAsNumber: true,
      required: "Enter amount",
      min: {
        value: 15000,
        message: "Minimum amount 15 000 ₽",
      },
      max: {
        value: 600000,
        message: "Maximum amount 600 000 ₽",
      },
    },
  },
  {
    elem: "input",
    type: "text",
    name: "lastName",
    label: "Your last name",
    placeholder: "For Example Doe",
    rules: {
      required: "Enter your last name",
    },
  },
  {
    elem: "input",
    type: "text",
    name: "firstName",
    label: "Your first name",
    placeholder: "For Example Jhon",
    rules: {
      required: "Enter your first name",
    },
  },
  {
    elem: "input",
    type: "text",
    name: "middleName",
    label: "Your patronymic",
    placeholder: "For Example Victorovich",
  },
  {
    elem: "select",
    name: "term",
    label: "Select term",
    rules: {
      valueAsNumber: true,
    },
    options: [
      { value: 6, text: "6 months" },
      { value: 12, text: "12 months" },
      { value: 18, text: "18 months" },
      { value: 24, text: "24 months" },
    ],
  },
  {
    elem: "input",
    type: "email",
    inputmode: "email",
    name: "email",
    label: "Your email",
    placeholder: "test@gmail.com",
    rules: {
      required: "Enter your email address",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Incorrect email address",
      },
    },
  },
  {
    elem: "input",
    type: "date",
    inputmode: "numeric",
    name: "birthdate",
    label: "Your date of birth",
    placeholder: "Select Date",
    rules: {
      required: "Enter your date of birth",
      pattern: {
        value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        message: "Incorrect date of birth",
      },
      validate: (birthdate: Date) => {
        const selectedDate = new Date(birthdate).getFullYear();
        const now = new Date().getFullYear();
        const age = now - selectedDate;
        if (age < 18) return "You must be 18 y.o. or older";
        else if (age > 120) return "Invalid year of birth";
        else return true;
      },
    },
  },
  {
    elem: "input",
    type: "number",
    inputmode: "numeric",
    name: "passportSeries",
    label: "Your passport series",
    placeholder: "0000",
    rules: {
      required: "Enter passport series",
      minLength: {
        value: 4,
        message: "Series must be 4 digits",
      },
      maxLength: {
        value: 4,
        message: "Series must be 4 digits",
      },
    },
  },
  {
    elem: "input",
    type: "number",
    inputmode: "numeric",
    name: "passportNumber",
    label: "Your passport number",
    placeholder: "000000",
    rules: {
      required: "Enter passport number",
      minLength: {
        value: 6,
        message: "Number must be 6 digits",
      },
      maxLength: {
        value: 6,
        message: "Number must be 6 digits",
      },
    },
  },
];
