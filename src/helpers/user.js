import { setCookie, getCookie, removeCookie } from './cookie'

const expires = new Date();
expires.setFullYear(expires.getFullYear() + 1);

const options = { expires }

export const COOKIE_USER = "acc";
export const COOKIE_TK = "tk";
export const COOKIE_RTK = "rtk";

export const getUser = () => getCookie(COOKIE_USER)
export const setUser = (user) => setCookie(COOKIE_USER, user, options)
export const removeUser = () => removeCookie(COOKIE_USER)

export const getToken = () => getCookie(COOKIE_TK)
export const setToken = (token) => setCookie(COOKIE_TK, token, options)
export const removeToken = () => removeCookie(COOKIE_TK)

export const getRefreshToken = () => getCookie(COOKIE_RTK)
export const setRefreshToken = (value) => setCookie(COOKIE_RTK, value, options)

