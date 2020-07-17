import React, {useState} from 'react';
import swal from 'sweetalert';
import Header from "../../Comman/Header";
import * as productList from "../../Data/product";


function Product() {
  const [productData, setProduct] = useState(productList.productData);

  /* Function - To Delete product */
  const handleDelete = (event) => {
    const productId = event.target.id;
    swal({
      title: "Are you sure",
      text: "To delete this product ?",
      buttons: [
        'No',
        'Yes, I am sure'
      ],
    }).then(function(isConfirm) {
      if (isConfirm) {
        swal({
          title: 'Deleted',
          text: 'Product deleted successfully!',
          icon: 'success'
        }).then(function() {
          const productList = productData.filter(
            product => product.id !== productId
          );
          setProduct(productList);
        });
      } 
    })
  }

  return (
    <>
     <Header/>
     <div className="user-block">
       <h4> Product List </h4>
     </div>
     <table className="table col-12 col-lg-4 center-block">
       <thead className="thead">
         <tr>
           <td>Sr No</td>
           <td>Name</td>
           <td>Rate</td>
           <td>Quantity</td>
           <td>Action</td>
         </tr>
       </thead>
       <tbody>
         {productData && productData.length > 0 ? productData.map(product => (
            <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.rate}</td>
            <td>{product.quantity}</td>
            <td><i className="fa fa-trash delete-link" id={product.id} onClick={handleDelete}/></td>
          </tr>
         )) : (
           <tr>
             <td colSpan="5">No Products Available</td>
           </tr>
         )}
       </tbody>
     </table>
    </>
  );
}

export default Product;
