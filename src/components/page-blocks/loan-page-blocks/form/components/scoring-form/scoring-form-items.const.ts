export const SCORING_FORM_ITEMS__GENERAL = [
  {
    elem: "select",
    name: "gender",
    label: "What's your gender",
    noDefault: true,
    rules: {
      required: "Select one of the options",
    },
    options: [
      { value: "MALE", text: "Male" },
      { value: "FEMALE", text: "Female" },
    ],
  },
  {
    elem: "select",
    name: "maritalStatus",
    label: "Your marital status",
    noDefault: true,
    rules: {
      required: "Select one of the options",
    },
    options: [
      { value: "MARRIED", text: "Married" },
      { value: "DIVORCED", text: "Divorced" },
      { value: "SINGLE", text: "Single" },
      { value: "WIDOW_WIDOWER", text: "Widow/Widower" },
    ],
  },
  {
    elem: "select",
    name: "dependentAmount",
    label: "Your number of dependents",
    noDefault: true,
    rules: {
      valueAsNumber: true,
      required: "Select one of the options",
    },
    options: [
      { value: "1", text: "1" },
      { value: "2", text: "2" },
      { value: "3", text: "3" },
      { value: "4", text: "4" },
      { value: "5", text: "5" },
      { value: "6", text: "6" },
    ],
  },
  {
    elem: "input",
    type: "date",
    inputmode: "numeric",
    name: "passportIssueDate",
    label: "Date of issue of the passport",
    placeholder: "Select Date",
    rules: {
      required: "Enter issue of the passport",
      pattern: {
        value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        message: "Incorrect date of passport issue date",
      },
      validate: (issueDate: Date) => {
        const selectedDate = new Date(issueDate);
        const now = new Date();
        return selectedDate > now
          ? "Incorrect date of passport issue date"
          : true;
      },
    },
  },
  {
    elem: "input",
    type: "number",
    inputmode: "numeric",
    name: "passportIssueBranch",
    label: "Division code",
    placeholder: "000000",
    rules: {
      required: "Enter division code",
      minLength: {
        value: 6,
        message: "Code must be 6 digits",
      },
      maxLength: {
        value: 6,
        message: "Code must be 6 digits",
      },
    },
  },
];

export const SCORING_FORM_ITEMS__EMPLOYMENT = [
  {
    elem: "select",
    name: "employmentStatus",
    label: "Your employment status",
    noDefault: true,
    rules: {
      required: "Select one of the options",
    },
    options: [
      { value: "UNEMPLOYED", text: "Unemployed" },
      { value: "SELF_EMPLOYED", text: "Self-employed" },
      { value: "EMPLOYED", text: "Employed" },
      { value: "BUSINESS_OWNER", text: "Business owner" },
    ],
  },
  {
    elem: "input",
    type: "number",
    inputmode: "numeric",
    name: "employerINN",
    label: "Your employer INN",
    placeholder: "000000000000",
    rules: {
      required: "Enter your employer INN",
      minLength: {
        value: 12,
        message: "Code must be 12 digits",
      },
      maxLength: {
        value: 12,
        message: "Code must be 12 digits",
      },
    },
  },
  {
    elem: "input",
    type: "number",
    inputmode: "numeric",
    name: "salary",
    label: "Your salary",
    placeholder: "For example 100 000",
    rules: {
      valueAsNumber: true,
      required: "Enter your salary",
    },
  },
  {
    elem: "select",
    name: "position",
    label: "Your position",
    noDefault: true,
    rules: {
      required: "Select your position",
    },
    options: [
      { value: "WORKER", text: "Worker" },
      { value: "MID_MANAGER", text: "Middle Manager" },
      { value: "TOP_MANAGER", text: "Top Manager" },
      { value: "OWNER", text: "Business owner" },
    ],
  },
  {
    elem: "input",
    type: "number",
    inputmode: "numeric",
    name: "workExperienceTotal",
    label: "Your work experience total",
    placeholder: "For example 10",
    rules: {
      valueAsNumber: true,
      required: "Enter your work experience total",
    },
  },
  {
    elem: "input",
    type: "number",
    inputmode: "numeric",
    name: "workExperienceCurrent",
    label: "Your work experience current",
    placeholder: "For example 2",
    rules: {
      valueAsNumber: true,
      required: "Enter your work experience current",
    },
  },
];
