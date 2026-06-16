$(document).ready(function () {
  $("#btn").click(function () {
    $.ajax({
      type: "POST",
      url: "/jquery",
      data: {
        'nome': $("#nome").val(),
        'cpf': $("#cpf").val(),
        'compra': $("#compra").val(),
      },
      success: alert("sucesso"),
    });
  });
});