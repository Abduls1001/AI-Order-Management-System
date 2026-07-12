'use client';
import Link from 'next/link';
import {NAV_ITEMS} from '@/constants/navigation';
import {Logo} from '@/components/common/logo';
import {Container} from '@/components/layouts/container';
export function Navbar(){
return(
<header className="sticky top-0 z-50 border-b bg-white">
<Container>
<div className="flex h-16 items-center justify-between">
<Logo/>
<nav className="hidden md:flex gap-6">
{NAV_ITEMS.map(i=><Link key={i.href} href={i.href}>{i.label}</Link>)}
</nav>
<Link href="/login" className="rounded bg-blue-600 px-4 py-2 text-white">Login</Link>
</div>
</Container>
</header>
)}