import { OrderBy } from "../OrderBy"

type TopToolbarProps = {
  title: string;
  activeOrderBy: boolean;
}

export const TopToolbar = ({ title, activeOrderBy }: TopToolbarProps) => {
  return (
    <section className="container">
      <div className="topToolbar">
        <h1 className="pageTitle">{title}</h1>

        {activeOrderBy && (
          <OrderBy />
        )}
      </div>
    </section>
  )
}
