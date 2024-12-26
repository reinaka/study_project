export type FormItemT = {
  elem: "input" | "select";
  type?: "text" | "number" | "email";
  name: string;
  label: string;
  placeholder?: string;
  rules?: {
    required?: string;
  };
  options?: { value: string | number; text: string }[];
};

export const FORM_ITEMS = [
  {
    elem: "input",
    type: "number",
    name: "amount",
    label: "Select amount",
    placeholder: "150000",
    rules: {
      required: "Enter amount",
      min: {
        value: 150000,
        message: "Minimum amount 150 000 ₽",
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
      required: "Enter term",
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
    name: "birthdate",
    label: "Your date of birth",
    placeholder: "Select Date",
    rules: {
      required: "Enter your date of birth",
      pattern: {
        value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        message: "Incorrect date of birth",
      },
    },
  },
  {
    elem: "input",
    type: "number",
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
