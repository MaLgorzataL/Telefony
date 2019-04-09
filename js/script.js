function Phone(brand, price, color, image) {
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
        document.querySelector('button').addEventListener('click', function (event) {
            document.getElementById('info').innerHTML = '<ul> kolor:'+self.color+' <br> cena: '+self.price+'</ul>';
        });
    }
};

  
var SamsungGalaxyS6 = new Phone('Samsung', 189, 'gold', 'https://images.samsung.com/is/image/samsung/nl-galaxy-s6-g920f-sm-g920fzdaphn-001-front-gold?$PD_GALLERY_L_JPG$');
var iPhone6S = new Phone('Apple', 314,'black', 'https://bsimg.nl/images/2/base_Apple-iPhone-6S-32GB-Black_1.jpg');
var OnePlusOne = new Phone('OnePlus', 250, 'white', 'https://bsimg.nl/images/2/base_OnePlus-One-White_1.jpg');

SamsungGalaxyS6.printInfo();
SamsungGalaxyS6.showPhone();

iPhone6S.printInfo();
iPhone6S.showPhone();

OnePlusOne.printInfo();
OnePlusOne.showPhone();