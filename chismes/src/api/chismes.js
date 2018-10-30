export const saveChisme = (
  titulo,
  contenido,
) => new Promise(
  resolve => setTimeout(
    () => resolve({
      titulo,
      contenido,
    }),
    Math.floor(Math.random() * 10000),
  ),
);
