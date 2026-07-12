import {ProductGallery} from '@/components/products/product-gallery';
import {ProductInfo} from '@/components/products/product-info';
import {ProductSpecifications} from '@/components/products/product-specifications';
import {ProductActions} from '@/components/products/product-actions';
import {RelatedProducts} from '@/components/products/related-products';
export default function ProductDetailPage(){
return <main className='container-page py-10'>
<ProductGallery/>
<div className='grid gap-8 lg:grid-cols-2'>
<div><ProductInfo/><ProductSpecifications/></div>
<div><ProductActions/></div>
</div>
<RelatedProducts/>
</main>
}