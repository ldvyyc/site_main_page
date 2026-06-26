export default function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <p
      className="font-mono"
      style={{
        fontSize: "0.85rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "var(--cyan)",
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      {num} — {label}
      <span
        style={{
          flex: 1,
          height: 1,
          maxWidth: 80,
          background: "linear-gradient(to right, var(--muted), transparent)",
        }}
      />
    </p>
  );
}
