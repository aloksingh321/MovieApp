import React from 'react';
// import {UPDATE_EMAIL,UPDATE_PASSWORD,LOGIN,SIGNUP} from './types'
import firebase from '../config/firebase'



export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'
export const ERROR ='ERROR'
export const updateEmail = email => {
     
    return {
        type: UPDATE_EMAIL,
        payload: email,
        
    }
}

export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export const login = () => {  

   return  async(dispatch, getState) => {
        try {
            const { email, password } = getState().user
          
            const response = await firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch({ type: LOGIN, payload: response.user })
           
                
        } catch (e) {
            alert(e)
            dispatch({ type:ERROR, payload: e })
        }
    }
}

export const signup = () => {
    return async (dispatch, getState) => {
        try {
             
             const { email, password } = getState().user
           
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
            dispatch({ type: SIGNUP, payload: response.user })
        } catch (e) {
            alert(e)
            dispatch({ type:ERROR, payload: e })
        }
    }
}


