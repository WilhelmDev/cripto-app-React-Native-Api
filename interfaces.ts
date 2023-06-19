export type CoinsValues = '' | 'USD' | 'BRL' | 'EUR' | 'MXN'

export type AssetsState = Array<ApiData> | []

export interface ApiData {
    CoinInfo:{
        Id:string,
        Name:string
        FullName:string
    }
}