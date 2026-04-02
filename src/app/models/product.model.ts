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

    name:string,
    img:string,
    options: ProductsExtraOptions[]

}

export interface ProductsExtraOptions{

    name?:string,
    price:number,
    activate:boolean
}