"use client"
import { peerToPeer } from 'app/lib/actions/peerToPeer';
import React, { useState } from 'react';

const PeerToPeer = () => {
    const [peerDetails, setPeerDetails] = useState({
        phone: '',
        amount: 0,
    });

  

    const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(peerDetails);
        const message =await peerToPeer(Number(peerDetails.amount)*100, peerDetails.phone);
       alert(message?.message);
    };

    const handleChange = async (e:any) => {
        const { name, value } = e.target;
        setPeerDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));

       
    };

    return (
        <form className="flex flex-col gap-4 m-4 p-4 border rounded" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label htmlFor="phone" className="mb-2">Phone</label>
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={peerDetails.phone}
                    placeholder="988923212"
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="amount" className="mb-2">Amount</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={peerDetails.amount}
                    onChange={handleChange}
                    className="p-2 border rounded"
                />
            </div>
            <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
    );
};

export default PeerToPeer;