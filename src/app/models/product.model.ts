export interface ProductModel {

    _id?: string,
    name: string,
    price: number,
    img?: string,
    extras?:ProductExtraModel[]

}

export interface ProductExtraModel{
    
    label?:string,
    blocks: ProductsExtraBlocks[]

}

export interface ProductsExtraBlocks{

    nombre:string,
    img:string,
    options: ProductsExtraOptions[]

}

export interface ProductsExtraOptions{

    nombre?:string,
    price:number,
    activate:boolean
}