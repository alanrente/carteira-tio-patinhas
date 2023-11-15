export function ContainerScrollable({ children }: any) {
  return (
    <div
      className="scrollable-container"
      style={{
        padding: "6px",
        height: "65vh",
        overflowY: "scroll",
      }}
    >
      {children}
    </div>
  );
}
