/* exported $timerButton*/
var $timerButton=(function(){
  var init,
    cfg = {
      container:'',
      title:'确定',
      time:9,
      enabled:false
    };
  var $btn,
      i = 9,
      html = '<input class="timer-button" type="button" value="同意">',
      timer;
  init = function(){
    $('div.box').html(html);
    $btn = $('input[type="button"]');
    $btn.val('同意('+ i + ' s)');
    $btn.attr('disabled','disabled');

    timer = window.setInterval(function(){
      $btn.val('同意('+ i-- +' s)');
      if(i === -1){
        window.clearInterval(timer);
        $btn.val('同意');
        $btn.removeAttr('disabled');
      }
    },1000);

    $btn.click(function(){
      alert('就知道你会同意的！');
    })
  }

  return {'init':init};

  }());
