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

export const OrderBy = ({ handleOrderBy, orderBy }: OrderByType) => {

  return (
    <select name="orderby" onChange={e => handleOrderBy(e.target.value)} defaultValue={orderBy}>
      {OrderByOptions.map((option: OrderByOptionsType) => (
        <option
          key={option.id}
          value={option.id}
        >{option.title}</option>
      ))}
    </select>
  )
}