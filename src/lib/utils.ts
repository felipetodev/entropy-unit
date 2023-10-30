import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { stampStyles } from './constants'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function devMark () {
  if (process.env.NODE_ENV === 'development') return
  console.log('%c✨ Developed by: https://www.felipetodev.com', stampStyles)
}
