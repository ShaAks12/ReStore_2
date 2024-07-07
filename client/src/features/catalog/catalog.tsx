import { Product } from '../../app/models/product';
import ProductList from './ProductList';
import { useState, useEffect } from 'react';

// interface Props{
//     products:Product[];
//     addProduct: () => void;

// }

const catalog = () => {
  const [product,setProduct] = useState<Product[]>([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/products')
        .then(resp => resp.json())
        .then(data => setProduct(data))
    },[])
    


   
        
        // setName('');
        // setAge('');
    


    //props.addProduct();
  return (
    <div>
        <ProductList products={product}/>
        {/* <Button onClick={addProduct}>Add Product</Button> */}
      
    </div>
  )
}

export default catalog;