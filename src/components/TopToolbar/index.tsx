import { OrderBy } from "../OrderBy"

type TopToolbarProps = {
  title: string;
  activeOrderBy: boolean;
  handleOrderBy: (orderType: string) => void
}

export const TopToolbar = ({ title, activeOrderBy, handleOrderBy }: TopToolbarProps) => {
  return (
    <section className="container">
      <div className="topToolbar">
        <h1 className="pageTitle">{title}</h1>

        {activeOrderBy && (
          <OrderBy handleOrderBy={handleOrderBy} />
        )}
      </div>
    </section>
  )
}
