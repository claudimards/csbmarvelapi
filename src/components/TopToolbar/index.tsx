import { OrderBy } from "../OrderBy"

export const TopToolbar = () => {
  return (
    <section className="container">
      <div className="topToolbar">
        <h1 className="pageTitle">The world's strongest heroes!</h1>

        <OrderBy />
      </div>
    </section>
  )
}
