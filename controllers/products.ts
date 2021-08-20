import { Product } from '../types.ts'
import { v4 } from 'https://deno.land/std/uuid/mod.ts';
let products = [
    {
        id: "1",
        name: "Product One",
        description: "This is product one",
        price: 29.99
    },
    {
        id: "2",
        name: "Product Two",
        description: "This is product two",
        price: 59.99
    },
];

// Get single product
// api/v1/products/:id
const getProduct = ({ params ,response}: {params:{id: string},response: any})=>{
    const product: Product | undefined = products.find(p =>p.id === params.id)
    if (product){
        response.status = 200
        response.body ={
            success: true,
            data: product
        }
    }else{
        response.status = 404
        response.body ={
            success: false,
            msg: 'No Product found'
        }
    }
}
// Get  products
const getProducts = ({response}: {response: any})=>{
    response.body = {
        success: true,
        data: products
    }
}

// Add Product
const addProduct = async ({request,response}: {request:any,response: any})=>{
    const body = await request.body()

    if(!request.hasBody){
        response.status = 400
        response.body ={
            success: false,
            msg: 'No Data'
        }
    }else{
        const product: Product = body.value
        product.id = v4.generate()
        products.push(product)
        response.status = 201
        response.body ={
            success: true,
            data: product
        }
    }
}

// Add Update
const updateProduct = ({response}: {response: any})=>{

}

// Add Delete
const deleteProduct = ({response}: {response: any})=>{

}

export {getProducts, getProduct, addProduct, updateProduct, deleteProduct}