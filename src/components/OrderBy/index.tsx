export const OrderBy = () => {
  return (
    <select name="orderby" id="orderby">
      <option value="">Order By</option>
      <option value="nameAsc">Name (A - Z)</option>
      <option value="nameDesc">Name (Z - A)</option>
    </select>
  )
}