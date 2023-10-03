(function($) {
    "use strict";

    /*=============================================
    	=    		 Preloader			      =
    =============================================*/
    function preloader() {
        $('#preloader').delay(0).fadeOut();
    };

    $(window).on('load', function() {
        preloader();
        mainSlider();
        parallaxMouse();
        wowAnimation();
    });



    /*=============================================
    	=    		Mobile Menu			      =
    =============================================*/
    //SubMenu Dropdown Toggle
    if ($('.menu-area li.menu-item-has-children ul').length) {
        $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

    }

    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.menu-area .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

        //Dropdown Button
        $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function() {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(500);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.menu-backdrop, .mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });
    }


    /*=============================================
    =     Offcanvas Menu      =
    =============================================*/
    $(".menu-tigger").on("click", function() {
        $(".extra-info,.offcanvas-overly").addClass("active");
        return false;
    });
    $(".menu-close,.offcanvas-overly").on("click", function() {
        $(".extra-info,.offcanvas-overly").removeClass("active");
    });


    /*=============================================
    	=     Menu sticky & Scroll to top      =
    =============================================*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#sticky-header").removeClass("sticky-menu");
            $('.scroll-to-target').removeClass('open');
            $("#header-top-fixed").removeClass("header-fixed-position");

        } else {
            $("#sticky-header").addClass("sticky-menu");
            $('.scroll-to-target').addClass('open');
            $("#header-top-fixed").addClass("header-fixed-position");
        }
    });


    /*=============================================
    	=    		 Scroll Up  	         =
    =============================================*/
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }

    /*=============================================
    	=            Header Search            =
    =============================================*/
    $(".header-search > a").on('click', function() {
        $(".search-popup-wrap").slideToggle();
        return false;
    });

    $(".search-close").on('click', function() {
        $(".search-popup-wrap").slideUp(500);
    });


    /*=============================================
    	=           Data Background             =
    =============================================*/
    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })


    /*=============================================
    	=    		 Main Slider		      =
    =============================================*/
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: false,
            responsive: [{
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false
                }
            }]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }


    /*=============================================
    	=    	  Countdown Active  	         =
    =============================================*/
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="time-count day"><span>%D</span>:</div><div class="time-count hour"><span>%H</span>:</div><div class="time-count min"><span>%M</span>:</div><div class="time-count sec"><span>%S</span></div>'));
        });
    });


    /*=============================================
    	=         niceSelect Active            =
    =============================================*/
    $(".selected").niceSelect();


    /*=============================================
    	=         Live Video Active            =
    =============================================*/
    $('.live-video-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.live-video-navs'
    });
    $('.live-video-navs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.live-video-active',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0,
        vertical: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    vertical: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    vertical: false,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    vertical: false,
                }
            },
        ]
    });

    /*=============================================
    	=    		Live Streams Active		      =
    =============================================*/
    $('.live-streams-active').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/icon/left_arrow.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/img/icon/right_arrow.png" alt=""></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });

    /*=============================================
    	=    		Brand Active		      =
    =============================================*/
    $('.brand-active').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });


    /*=============================================
    	=    		Winner Active		      =
    =============================================*/
    
    $('.winner-active-1').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });

    
    $('.winner-active-2').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });
    var $winnerActive1 = $('.winner-active-1');
    var $winnerActive2 = $('.winner-active-2');
    
    var currentSlide1 = 0;
    var currentSlide2 = 0;

    var fightScript = "NULL ";
    var words = fightScript.split(" ");

    var currentIndex = 0;
    var interval;

    function displayWordByWord(){
        if (currentIndex < words.length){
            var currentWord = words[currentIndex]
            document.getElementById("fightScriptDisplay").innerHTML += " " + currentWord;
            currentIndex++;
        }
        else{
            clearInterval(interval);
        }
    }

    function setFight(){
        if (currentSlide1 === 0 && currentSlide2 === 0){
            document.getElementById("fightScriptDisplay").innerHTML = ""
            fightScript = "In the heart of Washington D.C., Godzilla Squidward emerged from the depths of the ocean, his towering form casting a shadow over the city. Spongebob, the President of the USA, stood his ground, ready for battle. <br><br>Godzilla Squidward unleashed a powerful roar, causing buildings to tremble. Spongebob, armed with his trusty spatula, retaliated with his infectious enthusiasm. He summoned an army of jellyfish, their electric stingers crackling with power. <br><br>Godzilla Squidward swung his massive tentacles, smashing through buildings. Spongebob skillfully dodged the onslaught, his agility unmatched. He leaped onto Godzilla Squidward's head, flipping and twirling with acrobatic finesse. The President's determination was unwavering. <br><br>With a burst of energy, Spongebob unleashed a sonic bubble attack, stunning Godzilla Squidward momentarily. Seizing the opportunity, he delivered a powerful spatula strike to the beast's vulnerable spot. Godzilla Squidward roared in pain, but his resilience was astounding. <br><br>Summoning his last reserves of strength, Godzilla Squidward unleashed a devastating tsunami. Spongebob, unfazed, absorbed the water with his sponge-like body, transforming it into a wave of positive energy. The sheer force knocked Godzilla Squidward off balance. <br><br>As the dust settled, it was clear who emerged victorious. Spongebob, the President of the USA, stood tall amidst the destruction. His optimism and resourcefulness had triumphed over Godzilla Squidward's brute force.";
            words = fightScript.split(" ");
            currentIndex = 0;
            interval = setInterval(displayWordByWord, 150);
        }
        else if(currentSlide1 === 0 && currentSlide2 === 1){
            document.getElementById("fightScriptDisplay").innerHTML = ""
            fightScript = "In the heart of a bustling city, Godzilla Squidward emerged from the depths of the ocean, his towering figure casting a shadow over the streets. Meanwhile, Wukong the Lightning Monkey God descended from the heavens, his golden staff crackling with electric energy. <br><br>With a thunderous roar, Godzilla Squidward swung his massive tentacles towards Wukong, who effortlessly dodged and retaliated with a swift strike from his staff. The lightning monkey god's agility allowed him to zip around his colossal opponent, unleashing bolts of lightning with each strike. <br><br>Enraged, Godzilla Squidward unleashed a devastating wave of destruction, demolishing buildings in his path. Undeterred, Wukong summoned a storm, causing lightning to rain down upon his foe. With each electrifying bolt, Godzilla Squidward's strength diminished. <br><br>As the battle raged on, Wukong utilized his shapeshifting abilities, transforming into a swarm of miniature monkeys. Confusion filled the air as these nimble creatures darted around the massive monster, attacking from all angles. Godzilla Squidward thrashed and flailed, desperately trying to fend off the relentless assault. <br><br>Finally, Wukong, in his true form, gathered the last remnants of his lightning power and channeled it into a single, concentrated blast. The lightning pierced through Godzilla Squidward's weakened defenses, causing him to crumble to the ground, defeated. <br><br>In this epic clash of titans, Wukong emerged victorious. His lightning mastery, agility, and strategic thinking allowed him triumph in this fight to the death!";        
            words = fightScript.split(" ");
            currentIndex = 0;
            interval = setInterval(displayWordByWord,150);
        }
        else if(currentSlide1 === 0 && currentSlide2 === 2){
            document.getElementById("fightScriptDisplay").innerHTML = ""
            fightScript = "In a thrilling battle that shook the very foundation of the earth, Godzilla Squidward faced off against the menacing North Korean Rocket Man. The behemoth, Godzilla Squidward, towered over his opponent with his colossal size, his tentacles thrashing wildly in the air. With every movement, earth trembled beneath his feet.<br><br> Rocket Man, however, was not one to be underestimated. With his cunning and intelligence, he swiftly maneuvered through the sky, firing deadly missiles towards his foe. Godzilla Squidward retaliated, using his immense strength to swipe at the rockets, sending them exploding harmlessly into the distance.<br><br> As the battle raged on, Godzilla Squidward unleashed his devastating atomic breath, engulfing the sky in a blaze of destruction. Yet, Rocket Man's agility allowed him to dodge the fiery assault, retaliating with a barrage of missiles and laser beams from his wrist gauntlets.<br><br> It seemed that victory could belong to either combatant until a pivotal moment. Godzilla Squidward, with his immense weight and power, managed to grab Rocket Man mid-air. He squeezed tightly, crushing the life out of his opponent. Despite Rocket Man's desperate attempts to break free, it was evident that his strength was no match for the monstrous might of Godzilla Squidward. <br><br>In the end, Godzilla Squidward emerged as the victor. His sheer size, immense strength, and devastating atomic breath proved too much for the North Korean Rocket Man. The battle was a testament to the incredible power of Godzilla Squidward, a behemoth of nature.";
            words = fightScript.split(" ");
            currentIndex = 0;
            interval = setInterval(displayWordByWord,150);
        }
        else if(currentSlide1 === 1 && currentSlide2 === 0){
            document.getElementById("fightScriptDisplay").innerHTML = ""
            fightScript = "Super Mario, equipped with Luffy's Gear 5, faced off against SpongeBob, the President of the USA, in an epic fight to the death. Mario, with his newfound powers, effortlessly dodged SpongeBob's initial barrage of bubble attacks. With lightning-fast reflexes, he countered by launching a barrage of fireballs that engulfed SpongeBob.<br><br> However, SpongeBob, known for his resilience, emerged from the flames unscathed. With a mighty karate chop, he shattered Mario's fireballs, rendering them useless. SpongeBob unleashed his ultimate weapon, the Krusty Krab spatula, transforming it into a deadly sword. He swiftly closed the distance, slashing at Mario with blinding speed.<br><br> Mario, not one to back down, activated Gear 5, transforming into a muscular, lightning-fast version of himself. He retaliated with a flurry of punches and kicks, each strike infused with the power of the Gum-Gum Fruit. The force of his blows sent shockwaves rippling through the battlefield.<br><br>As the battle raged on, the sky crackled with energy. Mario's Gear 5 allowed him to stretch his limbs and deliver devastating blows from impossible angles. SpongeBob fought back valiantly, his sword techniques proving to be formidable.<br><br>In a final, climactic clash, Mario's Gear 5 proved too much for SpongeBob's defenses. With a mighty punch, Mario shattered SpongeBob's sword and sent him hurtling into the distance. The fight was over, and Mario emerged victorious.";
            words = fightScript.split(" ");
            currentIndex = 0;
            interval = setInterval(displayWordByWord,150);
        }
        else if (currentSlide1 === 1 && currentSlide2 === 1) {
            document.getElementById("fightScriptDisplay").innerHTML = ""
            fightScript = "In a colossal arena, the crowd roared as Super Mario, powered by Luffy's Gear 5, stood tall. Wukong, the lightning monkey god, crackled with energy. The battle was about to begin.<br><br>Mario launched fireballs with astonishing precision, but Wukong agilely dodged them, retaliating with bolts of lightning. Mario activated Gear 5, his body stretching like rubber, enhancing his speed and strength. He pummeled Wukong with a barrage of punches, but the monkey god evaded with nimble acrobatics.<br><br>Undeterred, Wukong summoned a storm, covering the arena in darkness. Mario struggled to see, but his instincts kicked in. He used his enhanced hearing to detect Wukong's movements. With a swift kick, Mario sent Wukong flying into the air.<br><br>Wukong, refusing to be defeated, unleashed his true power. Bolts of lightning crackled around him, forming a massive staff. He attacked relentlessly, striking Mario with electrifying blows. Mario, on the verge of defeat, summoned the power of the Super Mushroom, growing to an immense size.<br><br>With newfound strength, Mario retaliated, delivering devastating punches that shook the arena. The crowd gasped in awe as the battle reached its climax. Finally, with an earth-shattering blow, Mario sent Wukong crashing to the ground. <br><br>Mario emerged victorious, his determination and adaptability proving superior. The crowd erupted in cheers, celebrating the triumph of Super Mario with Luffy's Gear 5.";
            words = fightScript.split(" ");
            currentIndex = 0;
            interval = setInterval(displayWordByWord,150);
        }
        else if (currentSlide1 === 1 && currentSlide2 === 2) {
            document.getElementById("fightScriptDisplay").innerHTML = ""
            fightScript = "Deep in the asian pacific Jungle, the crowd held its breath as Super Mario, equipped with Luffy's Gear 5, faced off against the North Korean Rocket Man. Mario's Gear 5 granted him enhanced speed, strength, and elasticity, while the Rocket Man possessed advanced weaponry and martial arts skills.<br><br>The battle commenced explosively, with Rocket Man launching a barrage of missiles towards Mario. Swiftly dodging, Mario countered with a flurry of punches and kicks. The Rocket Man retaliated with acrobatic maneuvers, landing powerful strikes. Mario, utilizing his elasticity, stretched his limbs to avoid fatal blows.<br><br> As the fight intensified, Mario utilized Gear 5's speed to close the distance and delivered a devastating punch. The Rocket Man, resilient, activated his rocket boosters, soaring into the air. Unfazed, Mario propelled himself skyward, engaging the Rocket Man in mid-air combat.<br><br> Their clash shook the arena, each fighter displaying incredible skill and resilience. Mario's Gear 5 granted him the advantage, allowing him to adapt to the Rocket Man's attacks and launch devastating counterattacks. With one final punch, Mario sent the Rocket Man hurtling towards the ground, defeated.<br><br> Mario emerged victorious due to the combined powers of Luffy's Gear 5 and his own resourcefulness. His elasticity and enhanced abilities enabled Mario to outmatch the Rocket Man's advanced weaponry and martial arts skills. The crowd erupted in cheers, witnessing the triumph of their beloved hero.";
            words = fightScript.split(" ");
            currentIndex = 0;
            interval = setInterval(displayWordByWord,150);
        }
        else if (currentSlide1 === 2 && currentSlide2 === 0) {
            document.getElementById("fightScriptDisplay").innerHTML = ""
            fightScript = "In the heart of Gotham City, a fierce battle was about to unfold. The streets were filled with anticipation as French Batman and Spongebob, the President of the USA, faced off in a fight to the death.<br><br> French Batman, known for his exceptional combat skills and mastery of gadgets, quickly unleashed a barrage of martial arts moves. His agility and precision were unmatched as he effortlessly dodged Spongebob's attacks. With each strike, French Batman showcased his superior strength and unmatched intelligence.<br><br> However, Spongebob, the President of the USA, was not to be underestimated. With his surreal ability to absorb blows, he endured French Batman's strikes with ease. Spongebob retaliated with a flurry of punches, using his incredible resilience to withstand any counterattack.<br><br> As the battle raged on, French Batman utilized his gadgets to gain an advantage. He swiftly deployed smoke grenades, disorienting Spongebob and preventing him from landing accurate blows. French Batman capitalized on this opportunity, swiftly delivering a devastating blow to Spongebob.<br><br> But Spongebob, fueled by his determination to protect the democracy he represented, refused to back down. With a burst of energy, he summoned an army of jellyfish, overwhelming French Batman with their stinging attacks. The jellyfish proved to be French Batman's ultimate downfall, as their venomous strikes weakened him.<br><br> In the end, Spongebob emerged victorious, standing tall amidst the chaos. His resilience, combined with the aid of his jellyfish army, proved too much for French Batman to overcome. The President of the USA had triumphed over the dark knight.";
            words = fightScript.split(" ");
            currentIndex = 0;
            interval = setInterval(displayWordByWord,150);
        }
        else if (currentSlide1 === 2 && currentSlide2 === 1) {
            document.getElementById("fightScriptDisplay").innerHTML = ""
            fightScript = "In the heart of Paris, chaos erupted as the notorious French Batman confronted Wukong, the lightning monkey god. The city's inhabitants watched in awe as the two powerful beings clashed in a fight to the death. French Batman, with his unmatched physical strength and martial arts expertise, swiftly evaded Wukong's lightning-fast strikes. Using his arsenal of high-tech gadgets, he momentarily gained an upper hand, but Wukong's supernatural agility allowed him to escape unscathed.<br><br> As the battle intensified, Wukong unleashed bolts of lightning from his staff, while French Batman countered with smoke bombs and batarangs. Their skills were equally matched, but Wukong's mythical powers gave him an edge. He transformed into a swarm of clones, confusing French Batman and landing a series of powerful blows.<br><br> Undeterred, the French Batman adapted his strategies and fought back fiercely. With a combination of acrobatics and brute force, he managed to stun Wukong momentarily. Seizing the opportunity, he swiftly disarmed the monkey god and prepared for the final blow.<br><br> However, Wukong's lightning powers surged through his body, rejuvenating him in an instant. With a thunderous roar, he summoned a massive bolt of lightning that struck French Batman, rendering him unconscious. Wukong, the lightning monkey god, emerged triumphant, harnessing his supernatural abilities to defeat his formidable opponent.";
            words = fightScript.split(" ");
            currentIndex = 0;
            interval = setInterval(displayWordByWord,150);
        }
        else if (currentSlide1 === 2 && currentSlide2 === 2) {
            document.getElementById("fightScriptDisplay").innerHTML = ""
            fightScript = "In the heart of Paris, a thrilling battle unfolded between the legendary French Batman and the fearsome North Korean Rocket Man. The night sky was illuminated with their fiery clash. French Batman, swift and agile, utilized his acrobatic prowess to dodge Rocket Man's deadly projectiles. Leaping from rooftop to rooftop, he retaliated with his trusty bat gadgets, temporarily disorienting his foe.<br><br> Rocket Man, a master of explosives, retaliated with a barrage of rockets aimed at French Batman. With quick reflexes, Batman deflected them with his Batmobile's bulletproof armor. Determined to end the fight, Rocket Man unleashed a massive rocket towards Batman, who narrowly evaded the explosion, showcasing his unmatched evasion skills.<br><br> As the battle raged on, French Batman skillfully employed his hand-to-hand combat techniques, delivering precise strikes and incapacitating his adversary. Despite Rocket Man's relentless attacks, Batman's superior agility allowed him to evade each blow.<br><br> In a final climactic move, French Batman utilized his intelligence to disable Rocket Man's jetpack, leaving him defenseless. With a powerful blow, Batman incapacitated Rocket Man, ending the fight.<br><br> French Batman emerged as the victor due to his unmatched agility, combat skills, and strategic thinking. The people of Paris breathed a sigh of relief, knowing their beloved hero had once again prevailed.";
            words = fightScript.split(" ");
            currentIndex = 0;
            interval = setInterval(displayWordByWord,150);
        }
    }
    // Call once on script load
    setFight();
    // (function(){
    //     setFight();})();
    


    $winnerActive1.on('afterChange', function(event, slick, currentSlide){
        // currentSlide contains the index of the currently active slide
        currentSlide1 = currentSlide
        console.log('Slide 1 Index:', currentSlide1);
        console.log('Slide 2 Index:', currentSlide2);
        setFight()
        console.log(fightScript);
    });

    $winnerActive2.on('afterChange',function(event, slick, currentSlide){
        // currentSlide contains the index of the currently active slide
        currentSlide2 = currentSlide
        console.log('Slide 1 Index:', currentSlide1);
        console.log('Slide 2 Index:', currentSlide2);
        setFight()
        console.log(fightScript);
    });

    

    /*=============================================
    	=         gallery-active           =
    =============================================*/
    $('.gallery-active').slick({
        centerMode: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        centerPadding: '0',
        slidesToShow: 1,
        prevArrow: '<span class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></span>',
        nextArrow: '<span class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></span>',
        appendArrows: ".slider-nav",
        responsive: [{
                breakpoint: 1800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '30px',
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '50px',
                    infinite: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0',
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0px',
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0px',
                    arrows: false,
                }
            },
        ]
    });


    /*=============================================
    	=       About Gallery Active           =
    =============================================*/
    $('.about-gallery-active').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });


    /*=============================================
    	=         gallery-active-two           =
    =============================================*/
    $('.gallery-active-two').slick({
        centerMode: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        centerPadding: '0',
        arrows: false,
        slidesToShow: 1,
        asNavFor: '.gallery-nav-active',
        responsive: [{
                breakpoint: 1800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '30px',
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '50px',
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0',
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0px',
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0px',
                    arrows: false,
                }
            },
        ]
    });
    $('.gallery-nav-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.gallery-active-two',
        dots: false,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fas fa-angle-right"></i></button>',
        appendArrows: ".gallery-nav",
    });

    /*=============================================
    	=         countdown-active-two           =
    =============================================*/
    var element = $('#countdown-gampang');
    var finish_d = new Date();
    finish_d.setDate(finish_d.getDate() + 50);
    element.CountdownGampang({
        rampung: finish_d,
    });

    /*=============================================
    	=        parallaxMouse Active          =
    =============================================*/
    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        };
    };


    /*=============================================
    	=    		 Cart Active  	         =
    =============================================*/
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });


    /*=============================================
    	=    	 Slider Range Active  	         =
    =============================================*/
    $("#slider-range").slider({
        range: true,
        min: 40,
        max: 600,
        values: [120, 480],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));


    /*=============================================
    	=    		Odometer Active  	       =
    =============================================*/
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });


    /*=============================================
    	=    		Magnific Popup		      =
    =============================================*/
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });


    /*=============================================
    	=    		 Wow Active  	         =
    =============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }


})(jQuery);