const menuArea = document.getElementById("menu-area");
const KEY = '[APIキー]';

let callApi = data => {
for(let i = 0; i < data.results.shop.length; i++){
    const shopName = data.results.shop[i].name;
    const access = data.results.shop[i].access;
    const listItemname = document.createElement('li');
    const listItem = document.createElement('p');
    listItemname.textContent = shopName;
    listItem.textContent = access;
    menuArea.appendChild(listItemname);
    menuArea.appendChild(listItem);
    }
};

let script = document.createElement('script');
script.src = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/'
+ '?key=' + KEY 
+ '&lat=35.70387'
+ '&lng=139.722166'
+ '&name_any'
+ '&keyword'
+ '&free_food=1'
+ '&format=jsonp&callback=callApi';

document.body.appendChild(script);