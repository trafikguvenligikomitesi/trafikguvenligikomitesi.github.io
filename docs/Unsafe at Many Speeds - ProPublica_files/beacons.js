
(function(){if(window.RAILS_ENV==="development")return;if(window.RACK_ENV==="development")return;function loadChartbeat(){window._sf_endpt=(new Date()).getTime();var e=document.createElement('script');e.setAttribute('language','javascript');e.setAttribute('type','text/javascript');e.setAttribute('src','//static.chartbeat.com/js/chartbeat.js');document.body.appendChild(e);}
var oldonload=window.onload;window.onload=(typeof window.onload!='function')?loadChartbeat:function(){oldonload();loadChartbeat();};})();(function(){var _fbq=window._fbq||(window._fbq=[]);if(!_fbq.loaded){var fbds=document.createElement('script');fbds.async=true;fbds.src='//connect.facebook.net/en_US/fbds.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(fbds,s);_fbq.loaded=true;}
_fbq.push(['addPixelId','1545357135741674']);})();window._fbq.push(['track','PixelInitialized',{}]);if((window.RAILS_ENV!=="development")&&(window.RACK_ENV!=="development")){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M4BNWZ');}
if(window.$){$(function(){if(window.RAILS_ENV==="development")return;if(window.RACK_ENV==="development")return;if(/^projects/.test(window.location.host)){if(_(window.dataLayer).select(function(q){return q.contentType;}).length>0)return;var appObj={};appObj.contentType="App";appObj.articleTitle=$("title").text().replace(/\- ProPublica/,"").replace(/ $/,"");if($(".parent-title").length>0){appObj.seriesName=$(".parent-title").text();}
appObj.authorName=$(".byline").text().replace(/^\s+/,"").replace(/[Bb]y/,"").replace(/(\n|, ProPublica).*($|,|\.)/,"").replace(/^ /,"").replace(/ $/,"").replace(/( and |, )/g,", ");appObj.event="appLoaded";window.dataLayer.push(appObj);}});}
(function(){if(window.RAILS_ENV==="development")return;if(window.RACK_ENV==="development")return;window.piAId='126411';window.piCId='1035';function async_load(){var s=document.createElement('script');s.type='text/javascript';s.src=('https:'==document.location.protocol?'https://pi':'http://cdn')+'.pardot.com/pd.js';var c=document.getElementsByTagName('script')[0];c.parentNode.insertBefore(s,c);}
if(window.attachEvent){window.attachEvent('onload',async_load);}
else{window.addEventListener('load',async_load,false);}})();