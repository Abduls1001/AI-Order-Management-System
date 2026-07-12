export function DashboardShell({children}:any){
return <div className="min-h-screen flex"><aside className="w-64 border-r p-6">Sidebar</aside><main className="flex-1 p-8">{children}</main></div>
}