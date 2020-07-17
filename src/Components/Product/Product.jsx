import React, {useState} from 'react';
import swal from 'sweetalert';
import { Button, FormControl , InputGroup} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Header from "../../Comman/Header";
import * as productList from "../../Data/product";

const initialState = {
  form: {
    name: "",
    qantity: "",
    rate:""
  }
};

function Product() {
  const [productData, setProduct] = useState(productList.productData);
  const [isOpen, setIsOpen] = React.useState(false);
  const [form, setForm] = useState({ initialState });

  /* Modal Hide/show */
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };

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

  /* Function - Handle Change for form elements */
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    form[name] = value;
    setForm({ ...form });
  }

  /* Function - handleSubmit - To save product data */
  const handleSubmit = (event) => {
    event.preventDefault();
      if (form.name && form.rate && form.quantity) {
        const product = {
          id : productData.length,
          name : form.name,
          rate : form.rate,
          quantity: form.quantity
        }
        console.log(product);
        productData.unshift(product);
        swal("Product Saved"); 
        setForm({ initialState });
        hideModal();
      }else {
        swal("All fields are required");
      }
  }

  return (
    <>
     <Header/>
     <Modal show={isOpen} onHide={hideModal}>
      <ModalHeader>
        <ModalTitle>Add Product</ModalTitle>
      </ModalHeader>
      <ModalBody>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon3">Name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl type="text" id="name" name="name" onChange={handleChange}/>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon3">Rate(Rs)</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl type="number" id="rate" name="rate" min="0" onChange={handleChange} />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon3">Qantity</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl  type="number" id="quantity" name="quantity" min="0" onChange={handleChange}/>
      </InputGroup>
      </ModalBody>
      <ModalFooter>
        <Button type="submit" onClick={handleSubmit} variant="success">Save </Button>
        <Button onClick={hideModal} variant="light">Cancel </Button>
      </ModalFooter>
    </Modal>

     <div className="user-block">
       <h4> Product List </h4>
       <Button onClick={showModal} variant="info">Add Product <i className="fa fa-plus"/></Button>
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
         {productData && productData.length > 0 ? productData.map((product, index) => (
            <tr>
            <td>{index+1}</td>
            <td>{product.name}</td>
            <td>{product.rate}</td>
            <td>{product.quantity}</td>
            <td title="Delete"><i className="fa fa-trash delete-link" id={product.id} onClick={handleDelete}/></td>
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
