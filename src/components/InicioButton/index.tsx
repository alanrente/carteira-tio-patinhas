export function InicioButton() {
  function moveToPage() {
    window.location.assign("/inicio");
  }

  return (
    <>
      <button onClick={moveToPage}>Inicio</button>
    </>
  );
}
