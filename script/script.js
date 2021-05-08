const comentario = {
  open() {
    //abrir modal
    //adicional a class active ao modal
    document.querySelector(".comentario-overlay")
    .classList
    .add("active");
  },
  close() {
    //fechar o modal de
    //remover a class active do modal
    document.querySelector(".comentario-overlay")
    .classList
    .remove("active");
  }
};