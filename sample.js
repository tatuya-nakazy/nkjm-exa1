$(function(){
  var obj = {
    msg:"ここではAtomを使い始めようとしている方へちょっとしたはじめ方をお伝えします"
    target:"#description"
  }
  $(obj.target).text(obj.msg);
  $("body").css("background-color","#fa4786");
});
