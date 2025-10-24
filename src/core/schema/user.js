import * as yup from "yup";


const travelerInformation = yup.object({
  fullName: yup
    .string()
    .required("نام و نام خانوادگی الزامی است")
    .min(2, "نام و نام خانوادگی باید بیشتر از ۲ حرف باشد."),
  nationalCode: yup
    .number()
    .typeError("کد ملی باید عدد باشد")
    .integer("کد ملی باید عدد صحیح باشد")
    .min(0, "کد ملی نمی‌تواند منفی باشد")
    .required("کد ملی الزامی است"),
  gender: yup
    .string()
    .oneOf(["male", "female"], "جنسیت نامعتبر است")
    .required("انتخاب جنسیت الزامی است"),
});

export { travelerInformation };
