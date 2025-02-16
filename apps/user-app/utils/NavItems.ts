import { BadgeEuro, HomeIcon,UsersRound } from "lucide-react";
import { title } from "process";

export const  NavItems=[
    {
        title: "Home",
        url: "/",
        icon: HomeIcon
    },
    {
        title: "Transfer",
        url: "/transfer",
        icon: BadgeEuro
    },
    {
      title:"P2P transfer",
      url:"peerToPeer",
      icon:UsersRound
    }
  
]

export const TransferNav=[
  {
    title:"Upi Options",
    url:"/transfer/upi",

  },
  {
    title:"Credit/Debit/ATM card",
       url:"/transfer/cards",
  },
  {
    title:"Net Banking",
    url:"/transfer/netBanking"
  }
]