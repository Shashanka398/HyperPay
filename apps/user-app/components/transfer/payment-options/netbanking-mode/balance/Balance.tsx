import React from 'react'
import styles from "../../payment-option.module.css"

const Balance = ({ balance }: {
    balance: {
        amount: string,
        locked: string,
    }
}) => {
    return (
    <div className={`${styles.form} flex flex-col gap-3`}><h1 className={styles.heading}>Balance</h1><div className='flex flex-col'>
            <div className={styles.balanceItem}>
                <span className={styles.label}>Unlocked Balance</span>
                <span className={styles.value}>{balance.amount}</span>
            </div>
            <div className={styles.balanceItem}>
                <span className={styles.label}>Total Locked Balance</span>
                <span className={styles.value}>{balance.locked}</span>
            </div>
            <div className={styles.balanceItem}>
                <span className={styles.label}>Total Balance</span>
                <span className={styles.value}>{balance.amount}</span>
            </div>
        </div>
        </div>
    )
}

export default Balance
