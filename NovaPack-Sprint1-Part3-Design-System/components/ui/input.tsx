import {InputHTMLAttributes} from 'react';
import {cn} from '@/lib/utils';
export function Input(props:InputHTMLAttributes<HTMLInputElement>){
return <input {...props} className={cn('w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500',props.className)}/>;}
