"use client"
import React, { useState } from 'react'
import { CardDetailsChangeEvent, CardDetails } from '../../types'
import styles from "./card-details.module.css"

const CardDetailsFrom = () => {
    const [cardDetails, setCardDetails] = useState<CardDetails>({
        cardNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvv: ''
    })

   

    const handleCardDetailsChange = (e: CardDetailsChangeEvent) => {
        setCardDetails((prev: CardDetails) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(cardDetails)
    }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
    <label className={styles.label} htmlFor="cardNumber">Card Details</label>
    <input className={styles.input} name="cardNumber" value={cardDetails.cardNumber} onChange={handleCardDetailsChange} placeholder="Card Number" />
    
    <label className={styles.label} htmlFor="cardHolderName">Card Holder Name</label>
    <input className={styles.input} name="cardHolderName" value={cardDetails.cardHolderName} onChange={handleCardDetailsChange} placeholder="Card Holder Name" />
    
    <label className={styles.label} htmlFor="expiryDate">Expiry Date</label>
    <input className={styles.input} type="date" name="expiryDate" value={cardDetails.expiryDate} onChange={handleCardDetailsChange} placeholder="Expiry Date" />
    
    <label className={styles.label} htmlFor="cvv">CVV</label>
    <input className={styles.input} name="cvv" value={cardDetails.cvv} onChange={handleCardDetailsChange} placeholder="CVV" />

    <button className={styles.button} type="submit">Submit</button>
</form>

  )
}

export default CardDetailsFrom

