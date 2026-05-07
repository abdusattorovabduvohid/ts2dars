interface CatalogEntry {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const revalidate = 60;

async function getCatalog(): Promise<CatalogEntry[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate },
  });
  return response.json();
}

export default async function CatalogPage() {
  const catalog = await getCatalog();
  const previewItems = catalog.slice(0, 12);

  return (
    <section className="app-shell">
      <div className="section-head">
        <span className="status-pill">Live ISR</span>
        <h1 className="section-title">Product Catalog</h1>
        <p className="section-copy">This list refreshes every minute from the API.</p>
      </div>

      <div className="panel-grid">
        {previewItems.map((entry) => (
          <article key={entry.id} className="product-card">
            <span className="tag-pill">#{entry.id}</span>
            <h2 className="card-title">{entry.title}</h2>
            <p className="card-copy">{entry.body}</p>
            <button className="action-btn">View details</button>
          </article>
        ))}
      </div>
    </section>
  );
}
