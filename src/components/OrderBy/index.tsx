import { useContext } from "react";
import { CharContext } from "../../contexts/CharContext";

type OrderByType = {
  handleOrderBy: (orderType: string) => void;
  orderBy: string;
}

type OrderByOptionsType = {
  id: string;
  title: string;
}

const OrderByOptions = [
  {
    id: "nameAsc",
    title: "Name (A - Z)"
  },
  {
    id: "nameDesc",
    title: "Name (Z - A)"
  }
]

export const OrderBy = () => {
  const { orderBy, setOrderBy } = useContext(CharContext)

  return (
    <select name="orderby" onChange={e => setOrderBy(e.target.value)} defaultValue={orderBy}>
      {OrderByOptions.map((option: OrderByOptionsType) => (
        <option
          key={option.id}
          value={option.id}
        >{option.title}</option>
      ))}
    </select>
  )
}