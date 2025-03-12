import { useRecoilValue } from "recoil"
import { balanceAtom } from "../atoms/balance"


export const useBalance = () => {
    //Same as redux useSelector
    const value = useRecoilValue(balanceAtom);
    return value;
}
