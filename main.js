$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        
        const nomeTarefa = $('#nome-tarefa').val();
        const novoItem = $('<ul></ul>')
        var lista = $(`<li>${nomeTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('.container')
        
        $('ul').on('click', 'li', function(){
            lista = $(this).css({"text-decoration":"line-through"})
        })
    })
})
