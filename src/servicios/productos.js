import axios from "axios";

export function getAllProducts(){
    return axios.get('https://dummyjson.com/products')
}

export function getProductByID(id){
    return axios.get(`https://dummyjson.com/products/${id}`)
}

export function getProductByCategories(category){
    return axios.get(`https://dummyjson.com/products/category/${category}`)
}

export function getAllCategories(){
    return axios.get(`https://dummyjson.com/products/categories`)
}