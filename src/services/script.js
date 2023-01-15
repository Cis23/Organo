export const getColaborador = (form) => {
  return {
    nome: form.nome.value,
    cargo: form.cargo.value,
    urlImage: form.imagem.value,
    time: form.time.value
  }
}