/* exported $dlgGoto */
var $dlgGoto = (function() {
var DOM = ''
      + '<div class="notepad-dlg-goto">'
          + '<div class="dialogbox">'
              + '<div class="titlebar">'
                + '<p class="title">转到指定行</p>'
                + '<span class="close-btn">✖</span>'
              + '</div>'
              + '<div class="main">'
                + '<label for="">行号(L):</label><br>'
                + '<input class="txt-line-num" type="text" autofocus><br>'
                + '<input class="btn-goto" type="button" value="转到">'
                + '<input class="btn-cancel" type="button" value="取消">'
                + '</div>'
          + '</div>'
      + '</div>';

  var $dlg = $(DOM),
      $btnOk = $dlg.find('.btn-ok'),
      $btnClose = $dlg.find('.close-btn'),
      $btnCancel = $dlg.find('.btn-cancel');

  function show() {
    $('body').append($dlg);
    $dlg.find('.dialogbox').draggable({handle: $dlg.find('.titlebar')});

    $btnOk.click(function() { $dlg.remove();  });
    $btnClose.click(function() { $dlg.remove();  });
    $btnCancel.click(function() { $dlg.remove();  });                         
  }

  return {show: show};

})();
