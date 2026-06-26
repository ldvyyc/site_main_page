export default function Divider() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 10,
        maxWidth: 1120,
        margin: "0 auto",
        height: 1,
        background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
      }}
    />
  );
}
