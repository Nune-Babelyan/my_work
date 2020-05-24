$(function(){ 
  $('div[id*=helmest]').draggable({
    containment: '#bound',
    revert: 'invalid',
    helper: 'clone',
    cursor: 'move'
  });
});
$(function(){
  $('#mycart').droppable({
    drop: function(event, ui){
      var helmet = $(ui.draggable);
      helmet.fadeOut(200, function(){
        $(this).appendTo('#mycart').fadeIn(1000).find('img').animate({
          'width': '30',
          'height': '30',
          'padding-bottom': '300',
          'margin-top': '-290'

        },2000);
        
          var a = $(this).appendTo('#mycart').fadeIn(1000).find('img').animate({
          'width': '30',
          'height': '30',
          'margin-top': '-90',
          'padding-bottom': '0',
          //'transform': 'rotate(180deg)'
        },2000);
         
        $(this).appendTo('#forHelmest').fadeIn(1000).find('img').animate({
          'width': '100',
          'height': '100',
          'margin-top': '0',
          'padding-bottom': '0'
        },2000);
        if(a){
          var num= +$("#miavor").val() + 1;
          $("#miavor").val(num);
        }
        
      });
 
    }
  });
});
$(function(){
  $('.datark-left').droppable({
    drop: function(event, ui){
      var helmet = $(ui.draggable);
      helmet.fadeOut(200, function(){
        $(this).appendTo('.datark-left').fadeIn(1000).find('img').animate({
          'width': '50',
          'height': '50',
          'padding-bottom': '300',
          'margin-top': '-200',
          'margin-left': '-200px',
         // 'transform': 'rotate(0deg)'

        },2000);
        
          var a = $(this).appendTo('.datark-left').fadeIn(1000).find('img').animate({
          'width': '60',
          'height': '60',
          'margin-top': '-10',
          'padding-bottom': '0',
          //'transform': 'rotate(-180deg)'

        },2000);
         
        $(this).appendTo('#forHelmest').fadeIn(1000).find('img').animate({
          'width': '100',
          'height': '100',
          'margin-top': '0',
          'padding-bottom': '0',
          'margin-left':'100'
        },2000);
      });
 
    }
  });
});
$(function(){
  $('.datark-right').droppable({
    drop: function(event, ui){
      var helmet = $(ui.draggable);
      helmet.fadeOut(200, function(){
        $(this).appendTo('.datark-right').fadeIn(1000).find('img').animate({
          'width': '30',
          'height': '30',
          'padding-bottom': '300',
          'margin-top': '-200',
          'margin-left': '400'
         // 'transform': 'rotate(0deg)'

        },2000);
        
          var a = $(this).appendTo('.datark-right').fadeIn(1000).find('img').animate({
          'width': '50',
          'height': '50',
          'margin-top': '-50',
          'padding-bottom': '70',
          'margin-left': '300'
          //'transform': 'rotate(-180deg)'

        },2000);
        $(this).appendTo('#forHelmest').fadeIn(1000).find('img').animate({
          'width': '100',
          'height': '100',
          'margin-top': '0',
          'padding-bottom': '0',
          'margin-left':'105'
        },2000);
      });
 
    }
  });
});


