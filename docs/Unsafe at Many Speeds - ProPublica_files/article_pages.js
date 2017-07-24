
$(function(){propublica.models.FlyoutCookie=propublica.models.Cookie.extend({name:'pp-flyout-cookie'});var cookie=new propublica.models.FlyoutCookie();if(!cookie.get('nevermore')){var distanceTop=$('#comments').offset().top-$(window).height();$(window).scroll(function(){if($(window).scrollTop()>distanceTop)
$('#fbookulous-flyer').addClass("out");else
$('#fbookulous-flyer').removeClass("out");});$('#fbookulous-flyer .close').bind('click',function(){$(this).parent().remove();cookie.set('nevermore',true);cookie.save();});}});