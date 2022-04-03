type CounterType = {
  total: number;
  count: number;
  offset: number;
}

export const Counter = ({ total, count, offset }: CounterType) => {
  return (
    <div className="counter">
      Exibindo {offset + 1} - {count} de {total}
    </div>
  )
}