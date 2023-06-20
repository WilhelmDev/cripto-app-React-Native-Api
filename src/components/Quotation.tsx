import { View, Text } from 'react-native'
import { QuotationProps } from '../../interfaces'

export default function Quotation({response}:QuotationProps) {

    const { PRICE } = response

    if (Object.keys(response).length === 0) return null

    return (
        <View>
            <Text>{PRICE}</Text>
        </View>
    )
}