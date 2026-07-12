import {ButtonHTMLAttributes} from 'react';
import {cn} from '@/lib/utils';
export function Button({className,...props}:ButtonHTMLAttributes<HTMLButtonElement>){
return <button className={cn('inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50',className)} {...props}/>}
