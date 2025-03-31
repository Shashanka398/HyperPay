import { BadgeEuro, CreditCard, Globe, HomeIcon,RefreshCw,UsersRound } from "lucide-react";

export const TransferNav=[
  {
    title:"Upi Options",
    url:"/transfer/upi",
    icon:RefreshCw

  },
  {
    title:"Credit/Debit/ATM card",
       url:"/transfer/cards",
        icon:CreditCard
  },
  {
    title:"Net Banking",
    url:"/transfer/netBanking",
    icon:Globe
  }
]


export const  NavItems=[
    {
        title: "Home",
        url: "/",
        icon: HomeIcon
    },
    {
        title: "Transfer",
        url: "/transfer",
        icon: BadgeEuro,
        children:TransferNav
    },
    {
      title:"P2P transfer",
      url:"/peerToPeer",
      icon:UsersRound
    }
  
]
