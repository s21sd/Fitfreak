import vine from '@vinejs/vine' // This is for the custom error
import { kMaxLength } from 'buffer'

const RegisterSchema = vine.object({
    name: vine.string().minLength(2).maxLength(20),
    email: vine.string().email(),
    password: vine
        .string()
        .minLength(6)
        .maxLength(32)
        .confirmed(),
    age: vine.string().minLength(6).maxLength(120),
    weight: vine.string().minLength(20).minLength(150),
    heightFeet: vine.string().minLength(3).maxLength(10),
    heightInches: vine.string().minLength(1).maxLength(11),
    gender: vine.string()

})

export const RegisterValidator = vine.compile(RegisterSchema)