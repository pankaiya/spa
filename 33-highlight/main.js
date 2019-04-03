/* global hljs:true */
$(function(){
   var $code = $('input[type="button"]');
  
   $btnAddCode.click(function(){
     var $code = $('<div><pre class="javascript></pre></div>"');

     $code.find('pre').html($('.code').val());
   })
  hljs
 });
