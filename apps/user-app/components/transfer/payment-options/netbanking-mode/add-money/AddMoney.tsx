"use client"
import { NetBankingType } from 'components/transfer/types'
import React, { useState } from 'react'
import styles from "../../payment-option.module.css"
import { SUPPORTED_BANKS } from 'utils/TransferOptions.type'
import { createOnRamptxn } from 'app/lib/actions/createOnRamptxn'

const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState<string>(SUPPORTED_BANKS[0]?.redirectUrl as string)
    const [transactionDetails, setTransactionDetails] = useState<NetBankingType>({
        amount: 0,
        bank: '',

    })

    const handleTransactionDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTransactionDetails((prev: NetBankingType) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }   

    const handletTransactionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(transactionDetails)
        await createOnRamptxn(transactionDetails.amount*100, transactionDetails.bank)
        window.location.href=redirectUrl
       
    }

    const handleBankChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleTransactionDetailsChange(e as unknown as React.ChangeEvent<HTMLInputElement>)
        setRedirectUrl(SUPPORTED_BANKS.find(bank => bank.name === e.target.value)?.redirectUrl || '')

    }
  return (
    <form className={styles.form} onSubmit={handletTransactionSubmit}>
    <label className={styles.label} htmlFor="amount">Amount</label>
    <input   className={styles.input} name="amount" type='number' value={transactionDetails.amount} onChange={handleTransactionDetailsChange} placeholder="Amount" />
    <label className={styles.label} htmlFor="bank">Bank</label>
    <select  className={styles.input}  name="bank" value={transactionDetails.bank}  onChange={handleBankChange}>
        {
            SUPPORTED_BANKS.map((bank, index) => {
                return <option key={index} value={bank.name}>{bank.name}</option>
            })
        }
    </select>

    <button className={styles.button} type="submit">Add Money</button>
    </form>
  )
}

export default AddMoney