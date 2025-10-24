import * as yup from "yup"

const mobileSchema = yup.object().shape({
    mobile: yup.string().required("شماره موبایل الزامی است.").matches(/^09\d{9}$/, "شماره موبایل معتبر نیست")
})

const otpSchema = yup.object().shape({
    otp: yup.string().required("کد الزامی است").matches(/^\d{6}$/,"کد باید ۶ رقم باشد")
})

export {mobileSchema, otpSchema}