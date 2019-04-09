function Phone(id, brand, price, color, image) {
    this.id = id;
	this.brand = brand;
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
    this.color = color;
    this.image = image;
}

Phone.prototype = {
    printInfo: function() {
        console.log('The phone brand is' + this.brand +', color is ' + this.color +' and the price is' + this.price +'');
    },
    showPhone: function() {
        var self = this;
        var template = document.getElementById('phone-template').innerHTML;
        var element = document.createElement('div');
        Mustache.parse(template);
        element.innerHTML = Mustache.render(template, this);
        document.getElementById('phones').innerHTML += element.innerHTML;
    }
};

  
var SamsungGalaxyS6 = new Phone(1,'Samsung', 189, 'gold', 'https://images.samsung.com/is/image/samsung/nl-galaxy-s6-g920f-sm-g920fzdaphn-001-front-gold?$PD_GALLERY_L_JPG$');
var iPhone6S = new Phone(2,'Apple', 314,'black', 'https://bsimg.nl/images/2/base_Apple-iPhone-6S-32GB-Black_1.jpg');
var OnePlusOne = new Phone(3,'OnePlus', 250, 'white', 'https://bsimg.nl/images/2/base_OnePlus-One-White_1.jpg');

SamsungGalaxyS6.printInfo();
SamsungGalaxyS6.showPhone();

iPhone6S.printInfo();
iPhone6S.showPhone();

OnePlusOne.printInfo();
OnePlusOne.showPhone();

var buttons = document.querySelectorAll('button');
var infos = document.querySelectorAll('p');
var kolor, cena;
for ( var i=0; i<buttons.length; i++) {
    buttons[i].id = i;
    infos[i].id = i;
    buttons[i].addEventListener('click', function (event) {
        if (event.target.id == 0) {
            kolor = SamsungGalaxyS6.color;
            cena = SamsungGalaxyS6.price;
        };
        if (event.target.id == 1) {
            kolor = iPhone6S.color;
            cena = iPhone6S.price;
        };
        if (event.target.id == 2) {
            kolor = OnePlusOne.color;
            cena = OnePlusOne.price;
        };
        for (var j=0; j<infos.length; j++) {
            infos[j].innerHTML = '<br><br>';
        };
        infos[event.target.id].innerHTML = '<ul> kolor:'+kolor+' <br> cena: '+cena+'</ul>';
});
};

