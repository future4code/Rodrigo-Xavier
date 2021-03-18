import { POST_TYPES } from "./post"

export type AuthenticationData = {
    id: string,
  
 }
 
 export type User = {
    id: string,
    name: string,
    email: string,
    password: string
 }