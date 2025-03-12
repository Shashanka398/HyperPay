import { useRecoilValue } from "recoil"
import { balanceAtom } from "../atoms/balance"


export const useBalance = () => {
    //Same as redux useSelector
    //workflow check
    const value = useRecoilValue(balanceAtom);
    return value;
}
