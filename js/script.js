const names = [
    {name: 'Thorryn Kegg', gender: 'male'},
    {name: 'Oshin Cowin', gender: 'male'},
    {name: 'Lucas Gawne', gender: 'male'},
    {name: 'Parlance Elenagh', gender: 'male'},
    {name: 'Sandulf Mason', gender: 'male'},
    {name: 'Gavan Ireshman', gender: 'male'},
    {name: 'Yvon Corris', gender: 'male'},
    {name: 'Stiurt Quilleash', gender: 'male'},
    {name: 'Abel Flecher', gender: 'female'},
    {name: 'Dolyn Birmingham', gender: 'female'},
    {name: 'Agnes Shimmin', gender: 'female'},
    {name: 'Ina Teare', gender: 'female'},
    {name: 'Caly Jakson', gender: 'female'},
    {name: 'Mureal Wilson', gender: 'female'},
    {name: 'Roseen Hik', gender: 'female'},
    {name: 'Fritha Owle', gender: 'female'},
    {name: 'Vorgel Halsall', gender: 'male'},
    {name: 'Mariot Cowpeland', gender: 'male'},
    {name: 'Crera Hampton', gender: 'male'},
    {name: 'Kerron Nelson', gender: 'male'},
    {name: 'Austeyn Cottier', gender: 'male'},
    {name: 'John Halsall', gender: 'male'},
    {name: 'Peter Moresson', gender: 'male'},
    {name: 'George Gill', gender: 'male'},
    {name: 'Aleyn Wilye', gender: 'male'},
    {name: 'Albyn More', gender: 'male'},
    {name: 'Ivar Looney', gender: 'male'},
    {name: 'Thorgil Oats', gender: 'male'},
    {name: 'Oter Vause', gender: 'male'},
    {name: 'Lulach Sharpe', gender: 'male'},
    {name: 'Joan Quarrie', gender: 'male'},
    {name: 'Breeshey Callow', gender: 'male'},
    {name: 'Ailstreena Cleator', gender: 'female'},
    {name: 'Elena Gall', gender: 'female'},
    {name: 'Matilda Watterson', gender: 'female'},
    {name: 'Emell Thomson', gender: 'female'},
    {name: 'Alice Creer', gender: 'female'},
    {name: 'Breesha Quinney', gender: 'female'},
    {name: 'Bahie Faraund', gender: 'female'},
    {name: 'Manana Baily', gender: 'female'},
]
const randomizer = (n) => { 
    return Math.floor(Math.random() * n)
}


//add hero logic
const heroes = document.getElementById('heroes');
const addHeroBtn = document.querySelector('.js-btn__add');
const heroList = []

addHeroBtn.addEventListener('click', () => {
    const hero = new Adventurer();
    heroList.push(hero)
    const heroTemplate = 
    `<div class="info flex-container unselectable">
        <div class="avatar flex-container">
            <img src="img/avatar/${hero.gender}.png" alt="avatar" class="js-avatar">
            <p class="name"><span class="stat">${hero.name}</span></p>
            <p class="age">Age: <span class="stat js-age">${hero.age}</span></p>
            <p class="money">Money: <span class="stat js-money">${hero.money}</span></p>
            <p class="honour">Honour: <span class="stat js-honour">${hero.honour}</span></p>
        </div>
        <div class="prior-stats flex-container">
            <div class="health prior-stat flex-container">
                <p>Health:</p>
                <span class="stat stat__bar">
                    <span class="bar js-health"></span>
                </span>
            </div>
            <div class="strenght prior-stat flex-container">
                <p>Strenght:</p>
                <span class="stat stat__bar">
                    <span class="bar js-strenght"></span>
                </span>
            </div>
            <div class="saturation prior-stat flex-container">
                <p>Saturation:</p>
                <span class="stat__bar">
                    <span class="bar js-saturation"></span>
                </span>
            </div>
            <div class="happiness prior-stat flex-container">
                <p>Happiness:</p>
                <span class="stat stat__bar">
                    <span class="bar js-happiness"></span>
                </span>
            </div>
        </div>
    </div>
    <div class="tasks flex-container">
        <span class="material-symbols-outlined btn js-btn__feed task unselectable disabled" data-task="feed">
            restaurant_menu
        </span>
        <span class="material-symbols-outlined  btn js-btn__brothel task unselectable disabled" data-task="visit brothel">
            hotel
        </span>
        <span class="material-symbols-outlined  btn js-btn__relax task unselectable" data-task="relax">
            self_improvement
        </span>
        <span class="material-symbols-outlined  btn js-btn__farm task unselectable" data-task="work on farm">
            grass
        </span>
        <span class="material-symbols-outlined  btn js-btn__forge task unselectable" data-task="work on forge">
            construction
        </span>
        <span class="material-symbols-outlined  btn js-btn__adventure task unselectable" data-task="adventure">
            swords
        </span>
    </div>
    <div class="message flex-container unselectable hide js-message"></div>`
    const section = document.createElement('section');
    section.classList.add('adventurer');
    section.classList.add('flex-container');
    section.classList.add('js-adventurer');
    section.innerHTML = heroTemplate;
    heroes.append(section);

    
    //deadman screen
    const deadmanScreens = document.getElementsByClassName('js-message');

    //img
    const avatar = document.getElementsByClassName('js-avatar');

    //btns
    const feedBtn = document.getElementsByClassName('js-btn__feed');
    const brothelBtn = document.getElementsByClassName('js-btn__brothel');
    const relaxBtn = document.getElementsByClassName('js-btn__relax');
    const farmBtn = document.getElementsByClassName('js-btn__farm');
    const forgeBtn = document.getElementsByClassName('js-btn__forge');
    const adventureBtn = document.getElementsByClassName('js-btn__adventure');

    //stats
    const ageStat = document.getElementsByClassName('js-age');
    const moneyStat = document.getElementsByClassName('js-money');
    const honourStat = document.getElementsByClassName('js-honour');

    //bars
    const healthBar = document.getElementsByClassName('js-health');
    const strenghtBar = document.getElementsByClassName('js-strenght');
    const saturationBar = document.getElementsByClassName('js-saturation');
    const happinessBar = document.getElementsByClassName('js-happiness');

    //information needed to methods
    const current = heroList.length-1;
    const heroBars = {
        'age': [...ageStat][current],
        'money': [...moneyStat][current],
        'honour': [...honourStat][current],

        'health': [...healthBar][current], 
        'strenght': [...strenghtBar][current], 
        'saturation': [...saturationBar][current], 
        'happiness': [...happinessBar][current],

        'deadmanScreen': [...deadmanScreens][current],

        'avatar': [...avatar][current],
    };
    const btns = {
        'feed': [...feedBtn][current],
        'brothel': [...brothelBtn][current],
        'relax': [...relaxBtn][current],
        'farm': [...farmBtn][current],
        'forge': [...forgeBtn][current],
        'adventure': [...adventureBtn][current],
    };

    //listeners
    [...feedBtn][current].addEventListener('click', () => {
        hero.feed(heroBars, btns);
    });
    [...brothelBtn][current].addEventListener('click', () => {
        hero.wentToBrothel(heroBars, btns);
    });
    [...relaxBtn][current].addEventListener('click', () => {
        hero.relax(heroBars, btns);
    });
    [...farmBtn][current].addEventListener('click', () => {
        hero.workOnFarm(heroBars, btns);
    });
    [...forgeBtn][current].addEventListener('click', () => {
        hero.workOnForge(heroBars, btns);
    });
    [...adventureBtn][current].addEventListener('click', () => {
        hero.wentToAdventure(heroBars, btns);
    });

    hero.start(heroBars, btns);
});

//tamagotchi class
class Adventurer {
    //constructor
    constructor() {
        const randomKidNumber = randomizer(names.length);
        this.name = names[randomKidNumber].name,
        this.age = 18-randomizer(3),
        this.money = 0,
        this.honour = 0,

        this.health = 100,
        this.strength = 100,
        this.saturation = 100,
        this.happiness = 100,

        this.gender = names[randomKidNumber].gender === 'male' ? 'male' : 'female',
        this.alive = true
    };

    //methods
    feed(stats = false, btns = false) {
        if (this.alive) {
            if (this.money - 10 >= 0) {
                this.money -= 10;
                (this.saturation + 15) <= 100 ? this.saturation += 15 : this.saturation = 100;
                this.refreshStatus(stats, btns);
            } else {
                this.refreshStatus(stats, btns);
            };
        };
    };
    wentToBrothel(stats = false, btns = false) {
        if (this.alive) {
            if (this.money - 20 >= 0) {
                this.money -= 20;
                (this.happiness + 20) <= 100 ? this.happiness += 20 : this.happiness = 100;
                (this.health + 20) <= 100 ? this.health += 20 : this.health = 100;
                this.refreshStatus(stats, btns);
            } else {
                this.refreshStatus(stats, btns);
            };
        };
    };

    relax(stats = false, btns = false) {
        if (this.alive) {
            if ((this.saturation - 5) > 0) {
                this.saturation -= 5;
            } else {
                this.saturation = 0;
                this.alive = false;
            };
            (this.strength + 7) <= 100 ? this.strength += 7 : this.strength = 100;
            (this.happiness + 1) <= 100 ? this.happiness += 1 : this.happiness = 100;
            this.saturation -= 5;
            
            this.refreshStatus(stats, btns);
        };
    };

    workOnFarm(stats = false, btns = false) {
        if (this.alive) {
            this.age +=1;
            if ((this.strength - 2) > 0) {
                this.strength -= 2;
            } else {
                this.strength = 0;
                this.alive = false;
            };
            if ((this.happiness - 8) > 0) {
                this.happiness -= 7;
            } else {
                this.happiness = 0;
                this.alive = false;
            };
            this.money += 7;
            
            this.refreshStatus(stats, btns);
        };
    };

    workOnForge(stats = false, btns = false) {
        if (this.alive) {
            this.age += 1;
            if ((this.health - 2) > 0) {
                this.health -= 2;
            } else {
                this.health = 0;
                this.alive = false;
            };
            if ((this.strength - 10) > 0) {
                this.strength -= 10;
            } else {
                this.strength = 0;
                this.alive = false;
            };
            if ((this.saturation - 8) > 0) {
                this.saturation -= 8;
            } else {
                this.saturation = 0;
                this.alive = false;
            };
            if ((this.happiness - 10) > 0) {
                this.happiness -= 10;
            } else {
                this.happiness = 0;
                this.alive = false;
            };
            this.money += 40;
            
            this.refreshStatus(stats, btns);
        };
    };

    wentToAdventure(stats = false, btns = false) {
        if (this.alive) {
            this.age += 1;
            if ((this.health - 25) > 0) {
                this.health -= 25;
            } else {
                this.health = 0;
                this.alive = false;
            };
            if ((this.strength - 20) > 0) {
                this.strength -= 20;
            } else {
                this.strength = 0;
                this.alive = false;
            };
            (this.happiness + 10) <= 100 ? this.happiness += 10 : this.happiness = 100;
            this.money += 10 + randomizer(20);
            this.honour += randomizer(4);
            
            this.refreshStatus(stats, btns);
        };
    };

    start(stats = false, btns = false) {
        let reason;

        const lifespan = 85 - randomizer(60);
        const interval = setInterval(() => {
            if (this.alive) {
                //aging
                this.age += 1;
                (this.health - 2) > 0 ? this.health -= 2 : this.health = 0;
                (this.strength - 2) > 0 ? this.strength -= 2 : this.strength = 0;
                (this.saturation - 10) > 0 ? this.saturation -= 10 : this.saturation = 0;
                (this.happiness - 2) > 0 ? this.happiness -= 2 : this.happiness = 0;

                //cost of living
                if(this.money - 2 >= 0) {
                    this.money -= 2;
                } else {
                    this.health -=10;
                    this.strength -= 10;
                    this.saturation -= 20;
                    this.happiness -= 20;
                };
            };
             //end conditions
             if (this.age >= lifespan) {
                reason = 'due to natural causes';
                this.endTheStory(stats, reason, interval)
            } else if (this.health <= 0) {
                reason = 'due to terrible illness';
                this.endTheStory(stats, reason, interval)
            } else if (this.strength <= 0) {
                reason = 'due to fatigue';
                this.endTheStory(stats, reason, interval)
            } else if (this.saturation <= 0) {
                reason = 'through starvation';
                this.endTheStory(stats, reason, interval)
            } else if (this.happiness <= 0) {
                reason = 'through suicide';
                this.endTheStory(stats, reason, interval)
            };

            this.refreshStatus(stats, btns);
        }, 2000);
    };

    endTheStory(stats, reason, interval) {
        if (!stats) {
            clearInterval(interval);
            return
        }

        this.alive = false;
        clearInterval(interval);

        const appeal = this.gender === 'male' ? 'him' : 'her';
        const goal = this.honour >= 10 ? `but legends about ${appeal} never dies!`: `and no one will remember ${appeal} tomorrow...`;

        stats.deadmanScreen.innerHTML = `${this.name} died at the age of ${this.age} ${reason} ${goal}`;
        stats.deadmanScreen.classList.remove('hide');
    };

    refreshStatus(stats, btns) {
        if (!stats) {
            return
        }

        //change of avatar depending on indicators
        if (this.health < 50 || this.strength < 50 || this.saturation < 50 || this.happiness < 50) {
            stats.avatar.src = `img/avatar/${this.gender}_injured.png`;
        };
        if (!this.alive) {
            stats.avatar.src = `img/avatar/${this.gender}_dead.png`;
        };
        
        stats.money.innerHTML > 10 ? btns.feed.classList.remove('disabled') : btns.feed.classList.add('disabled');
        stats.money.innerHTML > 20 ? btns.brothel.classList.remove('disabled') : btns.brothel.classList.add('disabled');
  
        stats.age.innerHTML = this.age;
        stats.money.innerHTML = this.money;
        stats.honour.innerHTML = this.honour;
    
        stats.health.style = `width: ${100-this.health}%`;
        stats.strenght.style = `width: ${100-this.strength}%`;
        stats.saturation.style = `width: ${100-this.saturation}%`;
        stats.happiness.style = `width: ${100-this.happiness}%`;
    }
};