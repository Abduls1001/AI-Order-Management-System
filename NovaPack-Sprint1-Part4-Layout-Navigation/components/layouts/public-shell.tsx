import {Navbar} from '@/components/navigation/navbar';
import {Footer} from '@/components/footer/footer';
export function PublicShell({children}:any){
return<><Navbar/>{children}<Footer/></>
}