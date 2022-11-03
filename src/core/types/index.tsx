type DeLabEvent = {
    data?: any;
} & Event

type DeLabNetwork = 'mainnet' | 'testnet'
type DeLabTypeConnect = 'tonhub' | 'toncoinwallet' | 'tonkeeper' | undefined
type DeLabAddress = string | undefined

interface DeLabError {
    error: string,
    data?: any
}

interface DeLabConnecting {
    address: DeLabAddress,
    network: DeLabNetwork,
    typeConnect: DeLabTypeConnect,
    autosave: boolean
}

interface DeLabTransaction {
    to: string, // Destination
    value: string, // Amount in nano-tons
    stateInit?: string, // Optional serialized to base64 string state_init cell
    text?: string, // Optional comment. If no payload specified -
    payload?: string // Optional serialized to base64 string payload cell
}

export type {
    DeLabEvent,
    DeLabNetwork,
    DeLabTypeConnect,
    DeLabAddress,
    DeLabError,
    DeLabConnecting,
    DeLabTransaction
}
