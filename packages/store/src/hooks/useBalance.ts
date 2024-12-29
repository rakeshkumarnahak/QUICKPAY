import balanceAtom from "../atoms/balance";
import { useRecoilValue } from "recoil";

export const useBalance = () => {
  const balance = useRecoilValue(balanceAtom);

  return balance;
};

export default useBalance;
