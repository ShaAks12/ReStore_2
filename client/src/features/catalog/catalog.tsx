import { Product } from '../../app/models/product';
import ProductList from './ProductList';
import { useState, useEffect } from 'react';
import agent from '../../app/api/agent'
import LoadingComponent from '../../app/layout/LoadingComponent';

// interface Props{
//     products:Product[];
//     addProduct: () => void;

// }

const catalog = () => {
  const [product,setProduct] = useState<Product[]>([]);
  const [loading,setLoading] = useState(true);

    useEffect(() => {
      agent.Catalog.list()
      .then(products => setProduct(products))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    },[])    
        // setName('');
        // setAge('');
    if(loading) return <LoadingComponent message="Loading Products" />

    //props.addProduct();
  return (
    <div>
        <ProductList products={product}/>
        {/* <Button onClick={addProduct}>Add Product</Button> */}
      
    </div>
  )
}

export default catalog;