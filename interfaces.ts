export type CoinsValues = '' | 'USD' | 'BRL' | 'EUR' | 'MXN'

export type AssetsState = Array<ApiData> | []

export type QuoteHandler = (coin:CoinsValues, crypto:string) => void

export type ResponseData ={
    PRICE?:string
}

export type ReqDataState = {
    coin?:CoinsValues
    crypto?:string
}

export interface ApiData {
    CoinInfo:{
        Id:string,
        Name:string
        FullName:string
    }
}

export interface FormProps{
    handleQuotation:QuoteHandler
}
export interface QuotationProps{
    response:ResponseData
}