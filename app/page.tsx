export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#0f172a",
        color: "white",
        gap: "1rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
        🚀 Despliegue con CI/CD
      </h1>

      <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
        Proyecto Next.js desplegado automáticamente
      </p>

      <ul style={{ textAlign: "left", lineHeight: "1.8" }}>
        <li>✅ Next.js + TypeScript</li>
        <li>✅ GitHub Actions</li>
        <li>✅ GitHub Pages / Cloudflare Pages</li>
        <li>✅ CI/CD automático</li>
      </ul>

      <footer style={{ marginTop: "2rem", opacity: 0.6 }}>
        <small>DAW · M614 · Despliegue Web</small>
      </footer>
    </main>
  )
}
