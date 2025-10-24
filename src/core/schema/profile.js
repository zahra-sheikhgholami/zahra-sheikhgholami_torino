import * as yup from "yup";

const accountInfoSchema = yup.object().shape({
  email: yup
    .string()
    .email("ایمیل نامعتبر است."),
})

export {accountInfoSchema}