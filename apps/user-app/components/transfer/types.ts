 export interface CardDetails {
        cardNumber: string;
        cardHolderName: string;
        expiryDate: string;
        cvv: string;
    }
export interface NetBankingType{
    amount: number;
    bank: string;
}

export   interface PeerDetails {
        phone: string;
        amount: number;
    }
 export  interface CardDetailsChangeEvent extends React.ChangeEvent<HTMLInputElement> {}