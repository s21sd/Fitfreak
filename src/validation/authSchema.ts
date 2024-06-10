import vine from '@vinejs/vine' // This is for the custom error
import { JSONAPIErrorReporter } from './customErrorReporter'

vine.errorReporter = () => new JSONAPIErrorReporter()
const mySchema = vine.object({
    name: vine.string().minLength(2).maxLength(20),
    email: vine.string().email(),
    password: vine
        .string()
        .minLength(6)
        .maxLength(32),
    age: vine.number().min(6).max(120),
    weight: vine.number().min(20).max(150),
    heightFeet: vine.number().min(3).max(10),
    heightInches: vine.number().min(1).max(11),
    gender: vine.string()

})

export const RegisterValidator = vine.compile(mySchema)