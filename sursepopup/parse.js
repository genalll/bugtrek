date=document.querySelector(".popup__input_type_link-date");
os=document.querySelector(".popup__input_type_program");
osBrauser=document.querySelector(".popup__input_type_os");
popup=document.querySelector(".containerpopup");
popupClose=document.querySelector(".popup__close");
heroButton=document.querySelector(".hero-button");
const cardContainer=document.querySelector(".result-container__cards");

function parseDate()
{
    var now = new Date();
    return now.getDate()+ " " + (now.getMonth()+1) +" " + now.getFullYear() + " " + now.getHours() + " часов: " + now.getMinutes()+" мин"
}


function osPareae(){
    return window.navigator.userAgent.split("; ")[1];
}

function brauserPareae(){
    return window.navigator.userAgent.split(" ")[0];
}



class NewsCard {
    constructor(cardObj) {
        this.data = cardObj.data;
        this.title = cardObj.title;
        this.description = cardObj.description;
        this.os = cardObj.os;
        this.brauser = cardObj.brauser;
    }

    cardCreate() {
        const link = document.createElement('article');
        link.classList.add("card");
        const cardData = document.createElement('p');
        const cardtitle = document.createElement('h3');
        const cardDescription = document.createElement('p');
        const cardResurse = document.createElement('p');
        const cardlink = document.createElement('a');
        const cardbutton = document.createElement('button');
        const cardtime = document.createElement('span');



        cardData.classList.add("card__data");
        cardtime.classList.add("card__time");
        cardtitle.classList.add("card__title");
        cardDescription.classList.add("card__description");
        cardResurse.classList.add("card__resurs");
        cardlink.classList.add("card__link");
        cardbutton.classList.add("card__hero-button");
        

        cardtitle.textContent = "Название бага"
        cardData.textContent = this.data
        cardResurse.textContent = this.brauser
        cardtime.textContent = this.os
        cardDescription.textContent = "Описание бага"
        cardbutton.textContent = "Решать проблему"


        link.appendChild(cardData);
        link.appendChild(cardtime);
        link.appendChild(cardtitle);
        link.appendChild(cardDescription);
        link.appendChild(cardResurse);
        link.appendChild(cardbutton);
        this.cardElement = link;
        return this.cardElement;
    }

}



date.value=parseDate();
os.value=osPareae();
osBrauser.value=brauserPareae();

function openImagePopup(event){
    if (event.target.classList.contains('popup__close')) {
    popup.classList.toggle('popup_is-opened');
    }
    if (event.target.classList.contains('hero-button')) {
        popup.classList.toggle('popup_is-opened');
        }
}

document.addEventListener('click', openImagePopup);






testCardObj={
    data:"222 октября, 20202 102:402",
    title:"Тестовая карта",
    description:"ываыфвафлоываофывжаоыфжваоыфжваофыжваоыфвжа",
    os:"windows",
    brauser: "супер браузер скачать бесплатно"
}
test= new NewsCard(testCardObj);

for (let i = 0; i < 10; i++) { 
    cardContainer.appendChild(test.cardCreate());
  }
