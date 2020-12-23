date=document.querySelector(".popup__input_type_link-date");
os=document.querySelector(".popup__input_type_program");
osBrauser=document.querySelector(".popup__input_type_os");
popup=document.querySelector(".containerpopup");
popupClose=document.querySelector(".popup__close");
heroButton=document.querySelector(".hero-button");

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




