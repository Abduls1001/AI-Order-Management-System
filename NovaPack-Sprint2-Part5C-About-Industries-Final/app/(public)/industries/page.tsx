import {IndustryCard} from '@/components/company/industry-card';
const items=['Manufacturing','Warehousing','Retail','Distribution','Logistics','Export'];
export default function Industries(){return <main><h1>Industries We Serve</h1><div className='grid md:grid-cols-3 gap-4'>{items.map(i=><IndustryCard key={i} title={i}/>)}</div></main>}
