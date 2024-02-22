import React from 'react'
import NavBar from '../features/navbar/Navbar';
import ProductForm from '../features/admin/components/ProductForm';
function AdminProductFormPage() {
    return ( 
        <div>
            <NavBar>
                <ProductForm></ProductForm>
            </NavBar>
        </div>
     );
}

export default AdminProductFormPage
