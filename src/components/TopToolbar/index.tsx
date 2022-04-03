import { OrderBy } from "../OrderBy"

type TopToolbarProps = {
  title: string;
  orderBy: string;
  activeOrderBy: boolean;
  handleOrderBy: (orderType: string) => void
}

export const TopToolbar = ({ title, activeOrderBy, handleOrderBy, orderBy }: TopToolbarProps) => {
  return (
    <section className="container">
      <div className="topToolbar">
        <h1 className="pageTitle">{title}</h1>

        {activeOrderBy && (
          <OrderBy handleOrderBy={handleOrderBy} orderBy={orderBy} />
        )}
      </div>
    </section>
  )
}
