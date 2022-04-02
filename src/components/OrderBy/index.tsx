type OrderByType = {
  handleOrderBy: (orderType: string) => void
}

export const OrderBy = ({ handleOrderBy }: OrderByType) => {

  return (
    <select name="orderby" id="orderby" onChange={e => handleOrderBy(e.target.value)}>
      <option value="nameAsc">Name (A - Z)</option>
      <option value="nameDesc">Name (Z - A)</option>
    </select>
  )
}