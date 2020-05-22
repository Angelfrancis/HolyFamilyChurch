function cl(el)
{
var s=$(el).attr("src");
$('#view').attr("src",s);
$(el).css("filter","brightness(0%)");
$(el).css('position','relative');
$(el).css("z-index","2");
$(el).css("margin","0px 21px 0px 21px");
$(el).css("height","130");
$(el).css("width","13%");
$(el).css("box-shadow","2px 2px 4px 4px rgba(147, 195, 237,0.4),-2px -2px 4px 4px rgba(147, 195, 237,0.4)");
$('.storage > *:not('+el+')').css("filter","brightness(50%");
$('.storage > *:not('+el+')').css("z-index","1");
$('.storage > *:not('+el+')').css("margin","0px -17px");
$('.storage > *:not('+el+')').css("box-shadow","0px -2px 6px 8px rgba(0,0,0,0.3)");
$('.storage > *:not('+el+')').css("height","120");
$('.storage > *:not('+el+')').css("width","10%");
}

$(document).on("keydown",()=>
{
var s=$('#view').attr("src");
if(s=='1.jpg')
{if(event.keyCode==37){}
else if(event.keyCode==39){$('#view').attr('src','2.jpg');cl('#img2');}}
else if(s=='20.jpg')
{if(event.keyCode==39){}
else if(event.keyCode==37){$('#view').attr('src','19.jpg');cl('#img19');}}
else if(event.keyCode==39)
{
var id="#img"+(parseInt(s)+1);
var sr=parseInt(s)+1+".jpg";
$('#view').attr('src',sr);
cl(id);
}
else if(event.keyCode==37)
{
var id="#img"+(parseInt(s)-1);
var sr=parseInt(s)-1+".jpg";
$('#view').attr('src',sr);

cl(id);
}
});
$(document).ready()
{
$('#img1').css("filter","brightness(100%)");
$('#img1').css('position','relative');
$('#img1').css("z-index","2");
$('#img1').css("margin","0px 21px 0px 21px");
$('#img1').css("height","130");
$('#img1').css("width","13%");
$('#img1').css("box-shadow","2px 2px 4px 4px rgba(147, 195, 237,0.4),-2px -2px 4px 4px rgba(147, 195, 237,0.4)");

}
