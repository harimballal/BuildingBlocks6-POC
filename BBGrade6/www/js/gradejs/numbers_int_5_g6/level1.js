Game.numbers_int_5_g6l1=function(){};


Game.numbers_int_5_g6l1.prototype ={
    
    init:function(game)
    {
       _this= this;
       
       //telInitializer.gameIdInit("sequence2_1_1a",gradeSelected);
	   
	    _this.clickSound = document.createElement('audio');
        _this.clickSoundsrc = document.createElement('source');
        _this.clickSoundsrc.setAttribute("src", "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.celebrationSound = document.createElement('audio');
        _this.celebrationSoundsrc = document.createElement('source');
        _this.celebrationSoundsrc.setAttribute("src", "sounds/celebration.mp3");
        _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

        _this.wrongSound = document.createElement('audio');
        _this.wrongSoundsrc = document.createElement('source');
        _this.wrongSoundsrc.setAttribute("src", "sounds/WrongCelebrationSound.mp3");
        _this.wrongSound.appendChild(_this.wrongSoundsrc);

//        _this.birdPlace = document.createElement('audio');
//        _this.birdPlacesrc = document.createElement('source');
//        _this.birdPlacesrc.setAttribute("src", "sounds/place the bird in.mp3");

        _this.birdchirp = document.createElement('audio');
        _this.birdchirpSrc = document.createElement('source');
        _this.birdchirpSrc.setAttribute("src", "sounds/birdschirping.mp3");
        //_this.amplify1 = this.amplifyMedia(_this.birdchirp, 0.25);
        _this.birdchirp.appendChild(_this.birdchirpSrc); 
        _this.birdchirp.volume = 0.6;
        
        _this.KFcalls = document.createElement('audio');
        _this.KFcallsSrc = document.createElement('source');
        _this.KFcallsSrc.setAttribute("src", "sounds/KFcalls.mp3");
        _this.KFcalls.appendChild(_this.KFcallsSrc); 
        _this.KFcalls.volume = 0.3;
        
        _this.Watersplash = document.createElement('audio');
        _this.WatersplashSrc = document.createElement('source');
        _this.WatersplashSrc.setAttribute("src", "sounds/WaterSplash.mp3");
        _this.Watersplash.appendChild(_this.WatersplashSrc);    
               
                
        _this.Waterbubble = document.createElement('audio');
        _this.WaterbubbleSrc = document.createElement('source');
        _this.WaterbubbleSrc.setAttribute("src", "sounds/WaterBubbling.mp3");
        _this.Waterbubble.appendChild(_this.WaterbubbleSrc);
        _this.Waterbubble.volume = 0.3;
        
        _this.Waterbubble1 = document.createElement('audio');
        _this.Waterbubble1Src = document.createElement('source');
        _this.Waterbubble1Src.setAttribute("src", "sounds/WaterBubbling1.mp3");
        _this.Waterbubble1.appendChild(_this.Waterbubble1Src);
        _this.Waterbubble1.volume = 0.3;  
        
        //_this.shake = new Phaser.Plugin.Shake(game);
        //game.plugins.add(_this.shake);
        
        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        _this.playQuestionSound_1 = document.createElement('audio');
        _this.src_1 = document.createElement('source');
        _this.src_1.setAttribute("src", "questionSounds/numbers_int_5_g6/English/question_1.mp3");
        _this.playQuestionSound_1.appendChild(_this.src_1);
        
        
        _this.playQuestionSound_2 = document.createElement('audio');
        _this.src_2 = document.createElement('source');
        _this.src_2.setAttribute("src", "questionSounds/numbers_int_5_g6/English/question_2.mp3");
        _this.playQuestionSound_2.appendChild(_this.src_2);
        
        _this.playQuestionSound_p5 = document.createElement('audio');
        _this.src_p5 = document.createElement('source');
        _this.src_p5.setAttribute("src", "questionSounds/numbers_int_5_g6/English/plus-five.mp3");
        _this.playQuestionSound_p5.appendChild(_this.src_p5);
 
        _this.playQuestionSound_p4 = document.createElement('audio');
        _this.src_p4 = document.createElement('source');
        _this.src_p4.setAttribute("src", "questionSounds/numbers_int_5_g6/English/plus-four.mp3");
        _this.playQuestionSound_p4.appendChild(_this.src_p4);

        _this.playQuestionSound_p3 = document.createElement('audio');
        _this.src_p3 = document.createElement('source');
        _this.src_p3.setAttribute("src", "questionSounds/numbers_int_5_g6/English/plus-three.mp3");
        _this.playQuestionSound_p3.appendChild(_this.src_p3);

        _this.playQuestionSound_p2 = document.createElement('audio');
        _this.src_p2 = document.createElement('source');
        _this.src_p2.setAttribute("src", "questionSounds/numbers_int_5_g6/English/plus-two.mp3");
        _this.playQuestionSound_p2.appendChild(_this.src_p2);

        _this.playQuestionSound_p1 = document.createElement('audio');
        _this.src_p1 = document.createElement('source');
        _this.src_p1.setAttribute("src", "questionSounds/numbers_int_5_g6/English/plus-one.mp3");
        _this.playQuestionSound_p1.appendChild(_this.src_p1);

        _this.playQuestionSound_m5 = document.createElement('audio');
        _this.src_m5 = document.createElement('source');
        _this.src_m5.setAttribute("src", "questionSounds/numbers_int_5_g6/English/minus-five.mp3");
        _this.playQuestionSound_m5.appendChild(_this.src_m5);
 
        _this.playQuestionSound_m4 = document.createElement('audio');
        _this.src_m4 = document.createElement('source');
        _this.src_m4.setAttribute("src", "questionSounds/numbers_int_5_g6/English/minus-four.mp3");
        _this.playQuestionSound_m4.appendChild(_this.src_m4);

        _this.playQuestionSound_m3 = document.createElement('audio');
        _this.src_m3 = document.createElement('source');
        _this.src_m3.setAttribute("src", "questionSounds/numbers_int_5_g6/English/minus-three.mp3");
        _this.playQuestionSound_m3.appendChild(_this.src_m3);

        _this.playQuestionSound_m2 = document.createElement('audio');
        _this.src_m2 = document.createElement('source');
        _this.src_m2.setAttribute("src", "questionSounds/numbers_int_5_g6/English/minus-two.mp3");
        _this.playQuestionSound_m2.appendChild(_this.src_m2);

        _this.playQuestionSound_m1 = document.createElement('audio');
        _this.src_m1 = document.createElement('source');
        _this.src_m1.setAttribute("src", "questionSounds/numbers_int_5_g6/English/minus-one.mp3");
        _this.playQuestionSound_m1.appendChild(_this.src_m1);
        
        _this.playQuestionSound_p0 = document.createElement('audio');
        _this.src_p0 = document.createElement('source');
        _this.src_p0.setAttribute("src", "questionSounds/numbers_int_5_g6/English/zero.mp3");
        _this.playQuestionSound_p0.appendChild(_this.src_p0);
        
    },

 
	create:function(game){

        _this.amplify = null;

        _this.sceneCount = 0;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        _this.qArrays;
        _this.count;

        _this.speakerbtn;
        _this.celebration;
        _this.group1;
        _this.group2;
        _this.group3;

        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;
        
        _this.background;
        _this.transparent;
        _this.click3;
        
        _this.click4;
        _this.rightCount ;
        
        _this.opt1;
        _this.opt2;
        _this.opt3;
        
        _this.wmusic;
        _this.wrong=true;
        
        _this.count;
        _this.clickSound;
        
        _this.starsGroup;
        _this.backgrd1;
        _this.backgrd2;
        _this.backgrd3;
        
        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);

        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        
        _this.qArrays = [1,2,3,4,5,6];
        _this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'Q5_bg');
        _this.background.scale.setTo(1,1);
        _this.navBar = _this.add.sprite(0,0,'unity2_1_1a_navBar');
        _this.navBar.scale.setTo(1,1);
    
        /*_this.backbtn = _this.add.button(-3,3,'unity2_1_1_backbtn',function(){ 
               _this.backbtn.events.onInputDown.removeAll();
               _this.stopVoice();
               //_this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
               _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this,0,1,2);*/
        
        _this.speakerbtn = _this.add.sprite(600,6,'unity2_1_1a_CommonSpeakerBtn');
        _this.speakerbtn.events.onInputDown.add(function()
        {
            //_this.speakerbtn.inputEnabled = false;
            telInitializer.tele_interactEvent("TOUCH","speaker");
			//_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.Q5_askQ5VoiceQuestion();
        },_this);
        
        _this.timebg = _this.add.sprite(305,6,'unity2_1_1a_timebg');
        //_this.topicOutline = _this.add.sprite(70,5,'unity2_1_1a_topicOutline');
        //_this.practice = _this.add.sprite(78,10,'unity2_1_1a_practice');
        //_this.topic = _this.add.sprite(200,10,'unity2_1_1a_topic');
        
        _this.timeDisplay = _this.add.text(330,22,_this.minutes + ' : '+ _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';
        
        _this.generateStarsForTheScene(6);
        
        _this.Bubbles = _this.add.sprite(100,400,'Bubbles');
        _this.Bubbles.name = "Bubbling";
        _this.Bubbles.anchor.setTo(0.5);
        _this.Bubbles.scale.setTo(1,1);
        _this.Bubbling =_this.Bubbles.animations.add('Bubbles');
        _this.Bubbles.animations.play('Bubbles', 20, true);
        
        _this.Bubbles1 = _this.add.sprite(300,450,'Bubbles');
        _this.Bubbles1.name = "Bubbling";
        _this.Bubbles1.anchor.setTo(0.5);
        _this.Bubbles1.scale.setTo(1.5,1.5);
        _this.Bubbling1 =_this.Bubbles1.animations.add('Bubbles');
        _this.Bubbles1.animations.play('Bubbles', 5, true);
        
        _this.Bubbles2 = _this.add.sprite(450,450,'Bubbles');
        _this.Bubbles2.name = "Bubbling";
        _this.Bubbles2.anchor.setTo(0.5);
        _this.Bubbles2.scale.setTo(0.8,0.8);
        _this.Bubbling2 =_this.Bubbles2.animations.add('Bubbles');
        _this.Bubbles2.animations.play('Bubbles', 10, true);
        
        _this.Bubbles3 = _this.add.sprite(750,400,'Bubbles');
        _this.Bubbles3.name = "Bubbling";
        _this.Bubbles3.anchor.setTo(0.5);
        _this.Bubbles3.scale.setTo(0.5,0.5);
        _this.Bubbling3 =_this.Bubbles3.animations.add('Bubbles');
        _this.Bubbles3.animations.play('Bubbles', 25, true);
        
        _this.kingfisher_sitting1;
        _this.kingfisher_sitting2;
        _this.kingfisher_sitting3;
        _this.kingfisher_sitting4;


        _this.fish_Swimming1;

        _this.fish_Swimming2;

        _this.fish_Swimming3;

        _this.tween_3A;
        _this.tween_3B;
        
        _this.PLUSFIVE_LEVEL_Y = 45;
        _this.PLUSFOUR_LEVEL_Y = 80;
        _this.PLUSTHREE_LEVEL_Y = 120;
        _this.PLUSTWO_LEVEL_Y = 160;
        _this.PLUSONE_LEVEL_Y = 200;
        _this.PLUSZERO_LEVEL_Y = 240;
        
        _this.MINUSONE_LEVEL_Y = 295;
        _this.MINUSTWO_LEVEL_Y = 335;
        _this.MINUSTHREE_LEVEL_Y = 375;
        _this.MINUSFOUR_LEVEL_Y = 410;
        _this.MINUSFIVE_LEVEL_Y = 450;
        
        _this.numGroup;
        _this.objGroup;
        _this.birdGroup;
        _this.fishGroup;
        
        _this.correct_answer = null;
        _this.correctSittingBird = null;
        _this.correctHoveringBird = null;
        _this.correctFish = null;
        
        _this.CorrectBirdObj;
        
        // 4 index used to point to the 3 level arrays+ options array. We will shuffle these arrays and ask questions to make it unique and random.
        _this.birdsittinglevel_index = 0;
        _this.birdflylevel_index = 0;
        _this.fishlevel_index = 0;
        _this.fifthQOption_index = 0;
        _this.MainIndex = 0;
        _this.MainIndexFish = 0;
        
        _this.getQuestion();
 
    },
    
    starActions : function(){
        
            console.log('the count1 is: '+ _this.count1);

            _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
            _this.starAnim.smoothed = false;
            _this.anim = _this.starAnim.animations.add('star');
            _this.anim.play();
            _this.count1++;

    },
    
    updateTimer:function() 
    {
        _this.counterForTimer++;
        ////console.log("lololil"+counterForTimer);
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            
            if(_this.minutes<10){
                _this.minutes =  _this.minutes+1;
                _this.seconds = 00;
            }
            else
            {
                _this.minutes =  _this.minutes+1;
            }
        }
        else
        {
            if (_this.counterForTimer < 10)        
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
        _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
        //timer.setText(minutes + ':'+ seconds );
    },
    
    shuffle: function(array) 
    {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) 
        {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },
    
    getQuestion:function(target)
    {
    	//console.log("getQuestion :"+_this.no11);
        //console.log("getQuestion :"+_this.qArrays[_this.no11]);
        
        
        //_this.sceneCount++;

        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function()
        {
            _this.AnsTimerCount++;
        }, _this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = _this.time.create(false);

        _this.timer1.loop(1000, function()
        {
            _this.updateTimer();
        }, _this);
        
        _this.timer1.start();
        
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
       
//        _this.speakerbtn.inputEnabled = true;
//        _this.speakerbtn.input.useHandCursor = true;
        
        //_this.gotoFirstQuestion();
                
       // setting it to 3 for testing purpose.
        _this.qArrays[_this.no11] = 5;
        
        switch(_this.qArrays[_this.no11])
    	{
    		// case 1: _this.Q1_gotoFirstQuestion();
    		// 		break;
    		// case 2: _this.gotoSecondQuestion();
    		// 		break; 
    		// case 3: _this.Q3_gotoThirdQuestion();
    		// 		break;
    		// case 4: _this.gotoFourthQuestion();
    		// 		break;
    		case 5: _this.Q5_InitialTweens();
    				break;
    		// case 6: _this.gotoSixthQuestion();
    		// 		break;
    		// case 7: _this.gotoSeventhQuestion();
    		// 		break;
            // case 8: _this.gotoEighthQuestion();
    		// 		break;
            // case 9: _this.gotoNinethQuestion();
    		// 		break;
            // case 10: _this.gotoTenthQuestion();
    		// 		break; 
           
    	}
		//_this.questionid =1;
        //telInitializer.gameIdInit(_this.questionid);
    },
    
    stopVoice:function()
    {

        //_this.playQuestionSound_1.pause();
        _this.playQuestionSound_1.currentTime = 0.0;
        
        //_this.playQuestionSound_2.pause();
        _this.playQuestionSound_2.currentTime = 0.0;

    },
    
    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = _this.add.group();
		for (var i = 0; i < count; i++)
		{
			_this.starsGroup.create(_this.world.centerX-15, 10, 'unity2_1_1a_starAnim');
			for(var j =0;j<i;j++)
			{
				if(_this.starsGroup.getChildAt(j))
				{
					_this.starsGroup.getChildAt(j).x-=15;
					_this.starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},

    addQuestion:function(no22)
    {
        //console.log("addQuestion");
        _this.time.events.add(900, function(){
            var tween = _this.add.tween(flagGroup1);
            tween.to({ x: -1000 }, 0, 'Linear', true, 0);
            tween.onComplete.add(_this.changeQuestion, _this);

        }, _this);
    },
    
    
    tweenScale: function()
    {
        
        _this.scale = _this.add.sprite(970, 255,'level_scale');
        _this.scale.visible = true;
        _this.scale.scale.setTo(1,1);
        _this.scale.anchor.setTo(0.5);
        
        _this.objGroup.add(_this.scale);
        
        //_this.scaleAnim =_this.scale.animations.add('level_scale');
        _this.scaleAnim =_this.scale.animations.add('level_scale',[0,6,11], true);
        _this.scale.frame = 0; 
       // final position of center of the scale 910,255,
       // set the scale visible and tween it to correct position on screen.
       _this.scaleTween = _this.add.tween(_this.scale);
       _this.scaleTween.to({ x:910, y:255},1500, 'Linear', true, 0);
       _this.scaleTween.start();
        
       //highlight the number scale when the bird just crosses it.
        _this.time.events.add(500, function(){ 
        
            
        _this.scale.animations.play('level_scale',5, true);

         _this.time.events.add(1800, function() {
             _this.scale.animations.stop();
             _this.scale.frame = 0;
         });
        });
                    
    },
    
    
    Q5_InitialTweens: function()
    {
        // initial show before the game starts
        
        console.log('initial tweens function');
        
        //fly at a given x and y back and forth.
        KF_flying = _this.add.sprite(-20, _this.PLUSFOUR_LEVEL_Y,'KingFisher_JumpingWater1');  
        KF_flying.name = 'initial fly'
        KF_flying.anchor.setTo(0.5);
        KF_flying.scale.setTo(0.8,0.8);
        
        KF_flying.angle = -40;        
        

        KF_flyingAnim = KF_flying.animations.add('KingFisher_JumpingWater1');
        KF_flying.animations.play('KingFisher_JumpingWater1', 90, true, false);

        FyingIn = _this.add.tween(KF_flying);
        
        //play some sound effects initially.
        
        
        _this.birdchirp.play();
        _this.Waterbubble.play();
        
        _this.Waterbubble.addEventListener('ended', function() {
           _this.Waterbubble.currentTime = 0;
           _this.Waterbubble.play();
           _this.Waterbubble1.play();
         }, false);
        
        //bring the bird to a branch. 
        FyingIn.to({x: 450, y: 210 }, 2000, 'Linear', false, 0);
        FyingIn.start();
        


        // make the bird sit there.
        _this.time.events.add(2000, function()
        {
            KF_flying.visible = false;
            KF_sitting = _this.add.image(475,218, 'kingfisher_sitting1');
            KF_sitting.name = 'initial sit';
            KF_sitting.scale.setTo(1,1);
            KF_sitting.anchor.setTo(0.5);
        });
        
        _this.time.events.add(2000, function()
        {        
            //make a fish swim
            F_swim = _this.add.sprite(-20, _this.MINUSFOUR_LEVEL_Y, 'Fish_3');  
            F_swim.name = 'inital swim';
            F_swim.anchor.setTo(0.5);
            F_swim.scale.setTo(0.5,0.5);

            F_swimAnim = F_swim.animations.add('Fish_1');
            F_swim.animations.play('Fish_1', 40, true, false);

            _this.RightTween = _this.add.tween(F_swim);

            //F_swimming.x = 100;
            //F_swimming.y = F_swimming.y;

            _this.RightTween.to({x: 850, y: F_swim.y }, 5000, 'Quart', false, 0);
            _this.RightTween.start();
            _this.RightTween.onComplete.add(function()
                                            
            {
                
                F_swim.scale.x *= -1;
                _this.LeftTween = _this.add.tween(F_swim);
                _this.LeftTween.to({x: -50, y: F_swim.y+30 }, 6000, 'Quart', false, 0);
                _this.LeftTween.start();
                
                // add single bird call when bird flies away.
                _this.KFcalls.volume = 1;
                _this.KFcalls.play();
                
                KF_flying.visible = true;
                KF_sitting.destroy();
                FyingIn = _this.add.tween(KF_flying);

                //make the bird fly away. 
                FyingIn.to({x: 1050, y: 150 }, 2000, 'Linear', false, 0);
                FyingIn.start();
                
                // once all the initial tweens are done, initiate the game. stop the sounds if any.
                _this.time.events.add(2700, function()
                {
                    _this.stopOtherVoice();
                    _this.Q5_InitiateQuestion();
                });
            });

        });
        
        

    },
    
    
    Q5_InitiateQuestion:function()
    {
        
         //options - either the question is about identifying a specific level bird or fish. Zeroth element of the array is chosen.
        // 1 - one bird will be flying and two birds sitting. 
        // 2 - three fish swimming
        _this.fifthQArray = [1,2];
        _this.fifthQArray = _this.shuffle(_this.fifthQArray);   
        
        _this.birdLevelArray = [4,3,2,1,0,5];
        _this.birdLevelArray = _this.shuffle(_this.birdLevelArray);
        
        _this.birdFlyLevelArray = [1,2,3,4,5];
        _this.birdFlyLevelArray = _this.shuffle(_this.birdFlyLevelArray);

        _this.fishLevelArray = [-1,-2,-3,-4,-5];
        _this.fishLevelArray = _this.shuffle(_this.fishLevelArray);
        
        _this.Q5_gotoFifthQuestion();
    },

    Q5_gotoFifthQuestion:function()
    {  
        _this.numGroup  = _this.add.group();
        _this.objGroup  = _this.add.group();
        _this.birdGroup = _this.add.group();
        _this.fishGroup = _this.add.group();
        _this.tweenScale();
    
    
        //choose the colors of the birds
        // 1 - yellow, 2 - blue,  3 - red/orange. We will choose 0th element color as the correct answer bird.
        _this.birdColorArray = [1,2,3];
        _this.birdColorArray = _this.shuffle(_this.birdColorArray);
    
         //choose the correct bird       
        _this.correctBirdArray = [1,2,3];
        _this.correctBirdArray = _this.shuffle(_this.correctBirdArray);
        
         
        //calling Q5 first time with the random numbers for option and levels. One of the option and its corresponding level will be used.
        // decide if option is to ask bird's level or fish's level.
        _this.fifthQOption        = _this.fifthQArray[_this.fifthQOption_index];

        // MainIndex index always points to the next index on the array to be used. incremented only once after each right answer.
        _this.birdsittinglevel_index = _this.MainIndex;

        
        // decide sitting bird's level from its index and plus 1 and plus 2.  if it exceeds the array index, reset it each time index  is incremented.
        _this.bird_1_Level           = _this.birdLevelArray[_this.birdsittinglevel_index];

        _this.birdsittinglevel_index += 1;
        if (_this.birdsittinglevel_index > 5) _this.birdsittinglevel_index = 0;
        _this.bird_2_Level           = _this.birdLevelArray[_this.birdsittinglevel_index];
        
        _this.birdsittinglevel_index += 1;
        if (_this.birdsittinglevel_index > 5) _this.birdsittinglevel_index = 0;
        _this.bird_3_Level   = _this.birdLevelArray[_this.birdsittinglevel_index];
        
        // bird cant fly in level zero. in that case, change the level again. same check for index exceeding is required.
        if (_this.bird_3_Level == 0)
        {
            _this.birdsittinglevel_index += 1;
            if (_this.birdsittinglevel_index > 5) _this.birdsittinglevel_index = 0;
            _this.bird_3_Level   = _this.birdLevelArray[_this.birdsittinglevel_index];            
            
        }
                
        //choose which bird is correct answer bird 1/2/3. Use the 0th element of the bird color array as the correct answer.
        // set 3 flags based on the 0th element of color array. initialize them and then set apporpriate true or false.
        
        _this.Bird1_Correct = false;
        _this.Bird2_Correct = false;
        _this.Bird3_Correct = false;
        
        _this.Bird1_Color = _this.birdColorArray[0];
        _this.Bird2_Color = _this.birdColorArray[1];
        _this.Bird3_Color = _this.birdColorArray[2];
        
        _this.CorrectBirdNumber = _this.correctBirdArray[0];
        _this.ColorOfCorrectBird = _this.birdColorArray[_this.CorrectBirdNumber-1];
        
        if (_this.CorrectBirdNumber == 1)
        {
            console.log( '   correct bird is: '+ 1+ _this.bird_1_Level);
            _this.Bird1_Correct = true;
            _this.Bird2_Correct = false;
            _this.Bird3_Correct = false;
            _this.CorrectBirdLevel = _this.bird_1_Level;
            
        }
        else if (_this.CorrectBirdNumber == 2)
        {
            console.log( '   correct bird is: '+ 2+ _this.bird_2_Level);
            _this.Bird1_Correct = false;
            _this.Bird2_Correct = true;
            _this.Bird3_Correct = false;
            _this.CorrectBirdLevel = _this.bird_2_Level;
        }
        else if (_this.CorrectBirdNumber == 3)
        {
            console.log( '   correct bird is: '+ 3+ _this.bird_3_Level );
            _this.Bird1_Correct = false;
            _this.Bird2_Correct = false;
            _this.Bird3_Correct = true;
            _this.CorrectBirdLevel = _this.bird_3_Level;
        }

// decide the levels and colors of the fish. also correct fish

        //choose the colors of the birds
        // 1/2/3 colors.
        _this.fishColorArray = [1,2,3];
        _this.fishColorArray = _this.shuffle(_this.fishColorArray);
    
         //choose the correct fish       
        _this.correctFishArray = [1,2,3];
        _this.correctFishArray = _this.shuffle(_this.correctFishArray);
        
        _this.fishlevel_index = _this.MainIndexFish;
        
        // decide swimming level of the three fish. 0th is the correct fish to identify.
        _this.fish_1_Level           = _this.fishLevelArray[_this.fishlevel_index];
        
        // decide sitting fish's level from its index and plus 1 and plus 2.  if it exceeds the array index, reset it each time index  is incremented.

        _this.fishlevel_index += 1;
        if (_this.fishlevel_index > 4) _this.fishlevel_index = 0;
        _this.fish_2_Level           = _this.fishLevelArray[_this.fishlevel_index];
        
        _this.fishlevel_index += 1;
        if (_this.fishlevel_index > 4) _this.fishlevel_index = 0;
        _this.fish_3_Level   = _this.fishLevelArray[_this.fishlevel_index];
        
        _this.Fish1_Correct, _this.Fish1_Color
        
        //choose which bird is correct answer bird 1/2/3. Use the 0th element of the bird color array as the correct answer.
        // set 3 flags based on the 0th element of color array. initialize them and then set apporpriate true or false.
        
        _this.Fish1_Correct = false;
        _this.Fish1_Correct = false;
        _this.Fish1_Correct = false;
        
        _this.Fish1_Color = _this.fishColorArray[0];
        _this.Fish2_Color = _this.fishColorArray[1];
        _this.Fish3_Color = _this.fishColorArray[2];
        
        _this.CorrectFishNumber = _this.correctFishArray[0];
        _this.ColorOfCorrectFish = _this.fishColorArray[_this.CorrectFishNumber-1];
        
        if (_this.CorrectFishNumber == 1)
        {
            console.log( '   correct fish is: '+ 1+ _this.fish_1_Level);
            _this.Fish1_Correct = true;
            _this.Fish2_Correct = false;
            _this.Fish3_Correct = false;
            _this.CorrectFishLevel = _this.fish_1_Level;
            
        }
        else if (_this.CorrectFishNumber == 2)
        {
            console.log( '   correct fish is: '+ 2+ _this.fish_2_Level);
            _this.Fish1_Correct = false;
            _this.Fish2_Correct = true;
            _this.Fish3_Correct = false;
            _this.CorrectFishLevel = _this.fish_2_Level;
        }
        else if (_this.CorrectFishNumber == 3)
        {
            console.log( '   correct fish is: '+ 3+ _this.fish_3_Level );
            _this.Fish1_Correct = false;
            _this.Fish2_Correct = false;
            _this.Fish3_Correct = true;
            _this.CorrectFishLevel = _this.fish_3_Level;
        }

        //hard code for testing
        //_this.fifthQOption = 2;
//        _this.bird_1_Level = 1;
//        _this.bird_2_Level = 2;
//        _this.bird_3_Level = 1;
//        _this.Bird1_Correct = false;
//        _this.Bird2_Correct = true;
//        _this.Bird3_Correct = false;
    

        _this.Q5_Q5Options();

    },


    Q5_Q5Options:function(){
    //based on option selected from 0th element of option array call the function. option 1 to place the birds. option2 to place the fish.
        
        console.log("in Q5_Q5Options: "+_this.fifthQOption);
        switch(_this.fifthQOption)
    	{
    		case 1: _this.Q5_gotoQ5Option1();
    				break;
    		case 2: _this.Q5_gotoQ5Option2();
    				break;
           
    	}
        
    },
    
    Q5_gotoQ5Option1:function(){
    //option 1: two birds sitting and one bird flying. place them. call with the flag (whether this bird is the correct answer) & the color of the bird to choose
        
        console.log('bird1,2,3 colors: '+_this.Bird1_Color+_this.Bird2_Color+_this.Bird3_Color);
        // bird 1 action is sitting,  call perch function at bird_1 level.
        
            switch(_this.bird_1_Level)
            {
                case 0: _this.Bird1_Sitting = _this.kingFisherPerchLevel0(_this.Bird1_Correct, _this.Bird1_Color);
                        break;
                case 1: _this.Bird1_Sitting = _this.kingFisherPerchLevel1(_this.Bird1_Correct, _this.Bird1_Color);
                        break;
                case 2: _this.Bird1_Sitting = _this.kingFisherPerchLevel2(_this.Bird1_Correct, _this.Bird1_Color);       
                        break;            
                case 3: _this.Bird1_Sitting = _this.kingFisherPerchLevel3(_this.Bird1_Correct, _this.Bird1_Color);
                        break;
                case 4: _this.Bird1_Sitting = _this.kingFisherPerchLevel4(_this.Bird1_Correct, _this.Bird1_Color);
                        break;       
                case 5: _this.Bird1_Sitting = _this.kingFisherPerchLevel5(_this.Bird1_Correct, _this.Bird1_Color);
                        break;       
            }

        
        // bird 2 action is sitting, call perch function at bird_2level.

            switch(_this.bird_2_Level)
            {
                case 0: _this.Bird2_Sitting = _this.kingFisherPerchLevel0(_this.Bird2_Correct, _this.Bird2_Color);
                        break;
                case 1: _this.Bird2_Sitting = _this.kingFisherPerchLevel1(_this.Bird2_Correct, _this.Bird2_Color);
                        break;
                case 2: _this.Bird2_Sitting = _this.kingFisherPerchLevel2(_this.Bird2_Correct, _this.Bird2_Color);       
                        break;            
                case 3: _this.Bird2_Sitting = _this.kingFisherPerchLevel3(_this.Bird2_Correct, _this.Bird2_Color);
                        break;
                case 4: _this.Bird2_Sitting = _this.kingFisherPerchLevel4(_this.Bird2_Correct, _this.Bird2_Color);
                        break;       
                case 5: _this.Bird2_Sitting = _this.kingFisherPerchLevel5(_this.Bird2_Correct, _this.Bird2_Color);
                        break;       
            }

        
        // bird 3 action is flying,  call flying function at bird_3 level.

            switch(_this.bird_3_Level)
            {
                case 1: _this.Bird3_Flying = _this.KingFisherFlyLevel1(_this.Bird3_Correct, _this.Bird3_Color);
                        break;
                case 2: _this.Bird3_Flying = _this.KingFisherFlyLevel2(_this.Bird3_Correct, _this.Bird3_Color);
                        break;            
                case 3: _this.Bird3_Flying = _this.KingFisherFlyLevel3(_this.Bird3_Correct, _this.Bird3_Color);
                        break;
                case 4: _this.Bird3_Flying = _this.KingFisherFlyLevel4(_this.Bird3_Correct, _this.Bird3_Color);
                        break;       
                case 5: _this.Bird3_Flying = _this.KingFisherFlyLevel5(_this.Bird3_Correct, _this.Bird3_Color);
                        break;       
            }

        _this.birdGroup.add(_this.Bird1_Sitting);
        _this.birdGroup.add(_this.Bird2_Sitting);
        _this.birdGroup.add(_this.Bird3_Flying);
        
        _this.Q5_askQ5VoiceQuestion();
        _this.Q5_valButton();
        
         _this.time.events.add(3500, function()
         { 
            _this.Bird3_Flying.animations.stop();
            _this.FyingRight.stop();
            _this.FyingLeft.stop();

            _this.wrongbtn.inputEnabled = true;
            _this.wrongbtn.input.useHandCursor = true;

            _this.rightbtn.inputEnabled = true;
            _this.rightbtn.input.useHandCursor = true;
             
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
         });

    },

    kingFisherPerchLevel0(Bird_Correct_flag, bird_color)
    {
        //placing the bird in level 0 as sitting.
        _this.positionX = 410;
        _this.positionY = _this.PLUSZERO_LEVEL_Y+20;
        BirdString = 'kingfisher_sitting' + bird_color;
 
        kingfisher_sitting = _this.kingFisherPerch(_this.positionX, _this.positionY, BirdString, Bird_Correct_flag);

        return kingfisher_sitting;
    },

    kingFisherPerchLevel1(Bird_Correct_flag, bird_color)
    {
        _this.positionX = 468;
        _this.positionY = _this.PLUSONE_LEVEL_Y+20;
        BirdString = 'kingfisher_sitting' + bird_color;
 
        kingfisher_sitting = _this.kingFisherPerch(_this.positionX, _this.positionY, BirdString, Bird_Correct_flag);

        return kingfisher_sitting;
    },


    kingFisherPerchLevel2(Bird_Correct_flag, bird_color)
    {
        _this.positionX = 405;
        _this.positionY = _this.PLUSTWO_LEVEL_Y+15;
        BirdString = 'kingfisher_sitting' + bird_color;
 
        kingfisher_sitting = _this.kingFisherPerch(_this.positionX, _this.positionY, BirdString, Bird_Correct_flag);

        return kingfisher_sitting;
    },

    kingFisherPerchLevel3(Bird_Correct_flag, bird_color)
    {
        _this.positionX = 470;
        _this.positionY = _this.PLUSTHREE_LEVEL_Y+13;
        BirdString = 'kingfisher_sitting' + bird_color;
 
        kingfisher_sitting = _this.kingFisherPerch(_this.positionX, _this.positionY, BirdString, Bird_Correct_flag);

        return kingfisher_sitting;
    },

    kingFisherPerchLevel4(Bird_Correct_flag, bird_color)
    {
        _this.positionX = 410;
        _this.positionY = _this.PLUSFOUR_LEVEL_Y+10;
        BirdString = 'kingfisher_sitting' + bird_color;
 
        kingfisher_sitting = _this.kingFisherPerch(_this.positionX, _this.positionY, BirdString, Bird_Correct_flag);

        return kingfisher_sitting;
    },

    kingFisherPerchLevel5(Bird_Correct_flag, bird_color)
    {
        _this.positionX = 365;
        _this.positionY = _this.PLUSFIVE_LEVEL_Y+20;
        BirdString = 'kingfisher_sitting' + bird_color;
 
        kingfisher_sitting = _this.kingFisherPerch(_this.positionX, _this.positionY, BirdString, Bird_Correct_flag);

        return kingfisher_sitting;
    },

    kingFisherPerch: function(positionX, positionY, kingfisher_sitting, correct_level ){
        
     
        // use this name to show this object if it is selected(clicked) later
        var selectObjName = 'sitselect' + kingfisher_sitting.substring(kingfisher_sitting.length-1);
        console.log('the select obj name is: ' + selectObjName); 
        
        kingfisher_sitting = _this.add.image(positionX, positionY, kingfisher_sitting);
        kingfisher_sitting.name = selectObjName;
        kingfisher_sitting.scale.setTo(1,1);
        kingfisher_sitting.anchor.setTo(0.5);
        kingfisher_sitting.inputEnabled = true;
        kingfisher_sitting.input.useHandCursor = true;
        if(correct_level)
       {
            kingfisher_sitting.events.onInputDown.add(_this.correctAns,kingfisher_sitting);
           // save the correct bird object for later use in celebration.
            _this.CorrectBirdObj = kingfisher_sitting;
       }
       else {
            kingfisher_sitting.events.onInputDown.add(_this.wrongAns,kingfisher_sitting);
       }
       return kingfisher_sitting;

    },

    
    KingFisherFlyLevel1: function(Bird_Correct_flag, BirdColor)
    {
        _this.positionX = 50;
        _this.positionY = _this.PLUSONE_LEVEL_Y+18;
        
        BirdString = 'KingFisher_JumpingWater' + BirdColor;
        
        kingfisher_flying =  _this.KingFisherFly(_this.positionX, _this.positionY, BirdString, Bird_Correct_flag);
        
        return kingfisher_flying;        
        
    },
    
    KingFisherFlyLevel2: function(Bird_Correct_flag, BirdColor)
    {
        _this.positionX = 50;
        _this.positionY = _this.PLUSTWO_LEVEL_Y+20;
        
        BirdString = 'KingFisher_JumpingWater' + BirdColor;
        
        kingfisher_flying =  _this.KingFisherFly(_this.positionX, _this.positionY, BirdString, Bird_Correct_flag);
        
        return kingfisher_flying;        
        
    },
    
    KingFisherFlyLevel3: function(Bird_Correct_flag, BirdColor)
    {
        _this.positionX = 50;
        _this.positionY = _this.PLUSTHREE_LEVEL_Y+25;
        
        BirdString = 'KingFisher_JumpingWater' + BirdColor;
        
        kingfisher_flying =  _this.KingFisherFly(_this.positionX, _this.positionY, BirdString, Bird_Correct_flag);
        
        return kingfisher_flying;        
        
    },
    
    KingFisherFlyLevel4: function(Bird_Correct_flag, BirdColor)
    {
        _this.positionX = 50;
        _this.positionY = _this.PLUSFOUR_LEVEL_Y+25;
        
        BirdString = 'KingFisher_JumpingWater' + BirdColor;
        
        kingfisher_flying =  _this.KingFisherFly(_this.positionX, _this.positionY, BirdString, Bird_Correct_flag);
        
        return kingfisher_flying;        
        
    },
    
    KingFisherFlyLevel5: function(Bird_Correct_flag, BirdColor)
    {
        _this.positionX = 50;
        _this.positionY = _this.PLUSFIVE_LEVEL_Y+22;
        
        BirdString = 'KingFisher_JumpingWater' + BirdColor;
        
        kingfisher_flying =  _this.KingFisherFly(_this.positionX, _this.positionY, BirdString, Bird_Correct_flag);
        
        return kingfisher_flying;
        
    },
    
    KingFisherFly: function(positionX, positionY, kingfisher_flying, correct_level )
    { 
        
        // use this name to show this object if it is selected(clicked) later
        var selectObjName = 'flyselect' + kingfisher_flying.substring(kingfisher_flying.length-1);
        console.log('the select obj name is: ' + selectObjName);
        
        //fly at a given x and y back and forth.
        KF_flying = _this.add.sprite(positionX,positionY,kingfisher_flying);  
        KF_flying.name = selectObjName;
        KF_flying.anchor.setTo(0.5);
        KF_flying.scale.setTo(0.7,0.7);
        console.log("initial angle is: "+KF_flying.angle);

        KF_flying.inputEnabled = true;
        KF_flying.input.useHandCursor = true;
        if(correct_level)
        {
            KF_flying.events.onInputDown.add(_this.correctAns,KF_flying);
            _this.CorrectBirdObj = KF_flying;
        }
        else {
            KF_flying.events.onInputDown.add(_this.wrongAns,KF_flying);
        }
        
         
        KF_flying.scale.x *= -1;
        KF_flying.angle = 40;        
        

        KF_flyingAnim = KF_flying.animations.add(kingfisher_flying);
        KF_flying.animations.play(kingfisher_flying, 90, true, false);

        
        _this.FyingRight = _this.add.tween(KF_flying);
        _this.FyingLeft  = _this.add.tween(KF_flying);
        _this.FlyingRightTween(KF_flying);
        
        return KF_flying;
            
    },
    
    FlyingRightTween: function(KF_flying){
        
        
        KF_flying.scale.x *= -1;
        KF_flying.angle = -40;
        _this.FyingRight = _this.add.tween(KF_flying);
        
        KF_flying.x = 40;
                
        _this.FyingRight.to({x: 850, y: KF_flying.y }, 5000, 'Linear', false, 0);
        _this.FyingRight.onComplete.add(_this.FlyingLeftTween,KF_flying);
        _this.FyingRight.start();
    },
    
    FlyingLeftTween: function(KF_flying){
        
        KF_flying.scale.x *= -1;
        KF_flying.angle = 40;
       _this.FyingLeft = _this.add.tween(KF_flying);
        
        KF_flying.x = 850;
        //KF_flying.y = _this.positionY;    
        
        
        _this.FyingLeft.to({x: 40, y: KF_flying.y }, 5000, 'Linear', false, 0);
        _this.FyingLeft.onComplete.add(_this.FlyingRightTween,KF_flying);
        _this.FyingLeft.start();  
        
    },




    Q5_gotoQ5Option2:function(){
      //option 2 - three fishes are swimming at -1 to -5. place them  swimming and ask the question
        
        console.log("in Fish swimming level: "+_this.fish_1_Level+ ' '+_this.Fish1_Correct + ' ' + _this.Fish1_Color );
            switch(_this.fish_1_Level)
            {

                case -1: _this.Fish1_Swimming = _this.fishSwimmingLevel1(_this.Fish1_Correct, _this.Fish1_Color);
                        break;
                case -2: _this.Fish1_Swimming = _this.fishSwimmingLevel2(_this.Fish1_Correct, _this.Fish1_Color); 
                        break;            
                case -3: _this.Fish1_Swimming = _this.fishSwimmingLevel3(_this.Fish1_Correct, _this.Fish1_Color);
                        break;
                case -4: _this.Fish1_Swimming = _this.fishSwimmingLevel4(_this.Fish1_Correct, _this.Fish1_Color);
                        break;       
                case -5: _this.Fish1_Swimming = _this.fishSwimmingLevel5(_this.Fish1_Correct, _this.Fish1_Color);
                        break;       
            }
            _this.Fish1_Swimming.scale.x *= -1;
            _this.SwimRight1 = _this.add.tween(_this.Fish1_Swimming);
            _this.SwimLeft1  = _this.add.tween(_this.Fish1_Swimming);
            _this.SwimmingRightTween1(_this.Fish1_Swimming, 800, 200, 12000, 10000);

        console.log("in Fish swimming level: "+_this.fish_2_Level+ ' '+_this.Fish2_Correct + ' ' + _this.Fish2_Color );
        // fish 2 action is swimming, call perch function at bird_2level.

            switch(_this.fish_2_Level)
            {

                case -1: _this.Fish2_Swimming = _this.fishSwimmingLevel1(_this.Fish2_Correct, _this.Fish2_Color);
                        break;
                case -2: _this.Fish2_Swimming = _this.fishSwimmingLevel2(_this.Fish2_Correct, _this.Fish2_Color); 
                        break;            
                case -3: _this.Fish2_Swimming = _this.fishSwimmingLevel3(_this.Fish2_Correct, _this.Fish2_Color);
                        break;
                case -4: _this.Fish2_Swimming = _this.fishSwimmingLevel4(_this.Fish2_Correct, _this.Fish2_Color);
                        break;       
                case -5: _this.Fish2_Swimming = _this.fishSwimmingLevel5(_this.Fish2_Correct, _this.Fish2_Color);
                        break;       
            }
            _this.Fish2_Swimming.scale.x *= -1;  
            _this.SwimRight2 = _this.add.tween(_this.Fish2_Swimming);
            _this.SwimLeft2  = _this.add.tween(_this.Fish2_Swimming);
            _this.SwimmingRightTween2(_this.Fish2_Swimming, 700, 100, 10000, 12000);
        
        // fish 3 action is swimming, call perch function at bird_2level.
            console.log("in Fish swimming level: "+_this.fish_3_Level+ ' '+_this.Fish3_Correct + ' ' + _this.Fish3_Color );
            switch(_this.fish_3_Level)
            {

                case -1: _this.Fish3_Swimming = _this.fishSwimmingLevel1(_this.Fish3_Correct, _this.Fish3_Color);
                         break;
                    
                case -2: _this.Fish3_Swimming = _this.fishSwimmingLevel2(_this.Fish3_Correct, _this.Fish3_Color); 
                        break;            
                case -3: _this.Fish3_Swimming = _this.fishSwimmingLevel3(_this.Fish3_Correct, _this.Fish3_Color);
                        break;
                case -4: _this.Fish3_Swimming = _this.fishSwimmingLevel4(_this.Fish3_Correct, _this.Fish3_Color);
                        break;       
                case -5: _this.Fish3_Swimming = _this.fishSwimmingLevel5(_this.Fish3_Correct, _this.Fish3_Color);
                        break;       
            }
            _this.Fish3_Swimming.scale.x *= -1;  
            _this.SwimRight3 = _this.add.tween(_this.Fish3_Swimming);
            _this.SwimLeft3  = _this.add.tween(_this.Fish3_Swimming);
            _this.SwimmingRightTween3(_this.Fish3_Swimming, 600, 150, 9000, 10000 );
        
        
        // console.log("Before going ask Question");
        _this.Q5_askQ5VoiceQuestion();       
        
        _this.birdGroup.add(_this.Fish1_Swimming);
        _this.birdGroup.add(_this.Fish2_Swimming);
        _this.birdGroup.add(_this.Fish3_Swimming);
        
        _this.Q5_valButton();
        
        _this.Q5_askQ5VoiceQuestion();
        
         _this.time.events.add(3500, function()
         { 
            _this.Fish1_Swimming.animations.stop();
            _this.Fish2_Swimming.animations.stop();
            _this.Fish3_Swimming.animations.stop();
             
            _this.SwimRight1.stop();
            _this.SwimLeft1.stop();
            _this.SwimRight2.stop();
            _this.SwimLeft2.stop();
            _this.SwimRight3.stop();
            _this.SwimLeft3.stop();
             
            _this.wrongbtn.inputEnabled = true;
            _this.wrongbtn.input.useHandCursor = true;

            _this.rightbtn.inputEnabled = true;
            _this.rightbtn.input.useHandCursor = true;

            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
         });
     
    },
    

    
    FishTween: function(F_swimming, SwimRight, SwimLeft )
    {
        F_swimming.scale.x *= -1;       

        //SwimRight = _this.add.tween(F_swimming);
        //SwimLeft  = _this.add.tween(F_swimming);
        _this.SwimmingRightTween(F_swimming, SwimRight, SwimLeft ); 

    },
    
    SwimmingRightTween1: function(F_swimming, rightEnd, leftEnd, rightTime, leftTime){
        
        //console.log('moving to right from: '+ F_swimming.x + ' ' + F_swimming.y);
        F_swimming.scale.x *= -1;
        _this.SwimRight1 = _this.add.tween(F_swimming);
        
        //F_swimming.x = 100;
        //F_swimming.y = F_swimming.y;
        
        _this.SwimRight1.to({x: rightEnd, y: F_swimming.y }, rightTime, 'Linear', false, 0);
        _this.SwimRight1.onComplete.add(_this.SwimmingLeftTween1, F_swimming, rightEnd, leftEnd, rightTime, leftTime);
        _this.SwimRight1.start();
        return
    },
    
    SwimmingLeftTween1: function(F_swimming, rightEnd, leftEnd, rightTime, leftTime){
        
        //console.log('moving to left from: '+ F_swimming.x + ' ' + F_swimming.y);
        F_swimming.scale.x *= -1;
        _this.SwimLeft1 = _this.add.tween(F_swimming);
        //F_swimming.x = 800;
        //F_swimming.y = F_swimming.y;
        
        _this.SwimLeft1.to({x: leftEnd, y: F_swimming.y }, leftTime, 'Linear', false, 0);
        _this.SwimLeft1.onComplete.add(_this.SwimmingRightTween1,F_swimming, rightEnd, leftEnd, rightTime, leftTime);
        _this.SwimLeft1.start();  
    },

     SwimmingRightTween2: function(F_swimming, rightEnd, leftEnd, rightTime, leftTime){
        
        //console.log('moving to right from: '+ F_swimming.x + ' ' + F_swimming.y);
        F_swimming.scale.x *= -1;
        _this.SwimRight2 = _this.add.tween(F_swimming);
        
        //F_swimming.x = 100;
        //F_swimming.y = F_swimming.y;
        
        _this.SwimRight2.to({x: rightEnd, y: F_swimming.y }, rightTime, 'Linear', false, 0);
        _this.SwimRight2.onComplete.add(_this.SwimmingLeftTween2, F_swimming, rightEnd, leftEnd, rightTime, leftTime);
        _this.SwimRight2.start();
        return
    },
    
    SwimmingLeftTween2: function(F_swimming, rightEnd, leftEnd, rightTime, leftTime){
        
        //console.log('moving to left from: '+ F_swimming.x + ' ' + F_swimming.y);
        F_swimming.scale.x *= -1;
        _this.SwimLeft2 = _this.add.tween(F_swimming);
        //F_swimming.x = 800;
        //F_swimming.y = F_swimming.y;
        
        _this.SwimLeft2.to({x: leftEnd, y: F_swimming.y }, leftTime, 'Linear', false, 0);
        _this.SwimLeft2.onComplete.add(_this.SwimmingRightTween2,F_swimming, rightEnd, leftEnd, rightTime, leftTime);
        _this.SwimLeft2.start();  
    },   

     SwimmingRightTween3: function(F_swimming, rightEnd, leftEnd, rightTime, leftTime){
        
        //console.log('moving to right from: '+ F_swimming.x + ' ' + F_swimming.y);
        F_swimming.scale.x *= -1;
        _this.SwimRight3 = _this.add.tween(F_swimming);
        
        //F_swimming.x = 100;
        //F_swimming.y = F_swimming.y;
        
        _this.SwimRight3.to({x: rightEnd, y: F_swimming.y }, rightTime, 'Linear', false, 0);
        _this.SwimRight3.onComplete.add(_this.SwimmingLeftTween3, F_swimming, rightEnd, leftEnd, rightTime, leftTime);
        _this.SwimRight3.start();
        return
    },
    
    SwimmingLeftTween3: function(F_swimming, rightEnd, leftEnd, rightTime, leftTime){
        
        //console.log('moving to left from: '+ F_swimming.x + ' ' + F_swimming.y);
        F_swimming.scale.x *= -1;
        _this.SwimLeft3 = _this.add.tween(F_swimming);
        //F_swimming.x = 800;
        //F_swimming.y = F_swimming.y;
        
        _this.SwimLeft3.to({x: leftEnd, y: F_swimming.y }, leftTime, 'Linear', false, 0);
        _this.SwimLeft3.onComplete.add(_this.SwimmingRightTween3,F_swimming, rightEnd, leftEnd, rightTime, leftTime);
        _this.SwimLeft3.start();  
    },   


    fishSwimmingLevel1: function(Fish_Correct_flag, FishColor)
    {
        _this.positionX = 100;

        _this.positionY =  _this.MINUSONE_LEVEL_Y;
        
        FishString = 'Fish_' + FishColor;
        
        Fish_swimming =  _this.FishSwim(_this.positionX, _this.positionY, FishString, Fish_Correct_flag);
        
        return Fish_swimming;
    },
    
    fishSwimmingLevel2: function(Fish_Correct_flag, FishColor)
    {
        _this.positionX = 60;

        _this.positionY =  _this.MINUSTWO_LEVEL_Y;
        
        FishString = 'Fish_' + FishColor;
        
        Fish_swimming =  _this.FishSwim(_this.positionX, _this.positionY, FishString, Fish_Correct_flag);
        
        return Fish_swimming;
    },

    fishSwimmingLevel3: function(Fish_Correct_flag, FishColor)
    {
        _this.positionX = 55;
        _this.positionY =  _this.MINUSTHREE_LEVEL_Y;
        
        FishString = 'Fish_' + FishColor;
        
        Fish_swimming =  _this.FishSwim(_this.positionX, _this.positionY, FishString, Fish_Correct_flag);
        
        return Fish_swimming;
    },
    
    fishSwimmingLevel4: function(Fish_Correct_flag, FishColor)
    {
        _this.positionX = 30;
        _this.positionY =  _this.MINUSFOUR_LEVEL_Y;
        
        FishString = 'Fish_' + FishColor;
        
        Fish_swimming =  _this.FishSwim(_this.positionX, _this.positionY, FishString, Fish_Correct_flag);
        
        return Fish_swimming;
    },
    
    fishSwimmingLevel5: function(Fish_Correct_flag, FishColor)
    {
        _this.positionX = 200;
        _this.positionY = _this.MINUSFIVE_LEVEL_Y;
        
        FishString = 'Fish_' + FishColor;
        
        Fish_swimming =  _this.FishSwim(_this.positionX, _this.positionY, FishString, Fish_Correct_flag);
        
        return Fish_swimming;
    },

    FishSwim: function(positionX, positionY, fish_swimming, correct_level )
    { 
        console.log('fish swim function: x,y, string, correct: '+positionX+ ' '+ positionY + ' '+ fish_swimming + ' '+ correct_level);
        
        // use this name to show this object if it is selected(clicked) later
        var selectObjName = 'swimselect' + fish_swimming.substring(fish_swimming.length-1);
        console.log('the select obj name is: ' + selectObjName);
        
        //swim at a given x and y back and forth.
        F_swimming = _this.add.sprite(positionX,positionY,fish_swimming);  
        F_swimming.name = selectObjName;
        F_swimming.anchor.setTo(0.5);
        F_swimming.scale.setTo(0.5,0.5);
        
        F_swimming.inputEnabled = true;
        F_swimming.input.useHandCursor = true;
        if(correct_level)
        {
            F_swimming.events.onInputDown.add(_this.correctAns,F_swimming);
            _this.CorrectFishObj = F_swimming;
        }
        else {
            F_swimming.events.onInputDown.add(_this.wrongAns,F_swimming);
        }
        
        F_swimAnim = F_swimming.animations.add(fish_swimming);
        F_swimming.animations.play(fish_swimming, 40, true, false);
        
        return F_swimming;
    },
          
//    fishSwimming: function(positionX, positionY, fishSwimming, correct_level){
//
//
//        fishSwimming =_this.add.image(positionX, positionY,fishSwimming);
//        fishSwimming.anchor.setTo(0.6)
//        fishSwimming.scale.setTo(0.3,0.3);
//        fishSwimming.scale.x *= -1;
//
//        // fishSwimming.name = 'CorrectFish1';
//        fishSwimming.inputEnabled = true;
//        fishSwimming.input.useHandCursor = true;
//        fishSwimming.events.onInputUp.add(function(target){
//			telInitializer.tele_interactEvent("TOUCH",target.name);
//            target.frame = 0;
//        },_this);
//
//        // _this.tween_3B = _this.add.tween(_this.fishSwimming);
//        // _this.tween_3A = _this.add.tween(_this.fishSwimming);
//
//
//        // _this.tween_3BComplete();
//
//        if(correct_level)
//        {
//            fishSwimming.events.onInputDown.add(_this.correctAns,_this);
//        }
//        else{
//            fishSwimming.events.onInputDown.add(_this.wrongAns,_this);
//        }
//
//        return fishSwimming;
//      
//    },
    
    kingFisherHoverYoyo: function(positionX,positionY){
        console.log("inside yoyo");
        _this.Kingfisher_yoyo = _this.add.sprite(positionX,positionY,'kingfisher_hovering1');
        _this.Kingfisher_yoyo.name = "Kingfisher_hovering1";
        _this.Kingfisher_yoyo.anchor.setTo(0.5);
        _this.Kingfisher_yoyo.scale.setTo(0.5,0.5);
        _this.Kingfisher_yoyo.scale.x *= -1;
        //_this.Kingfisher_yoyo.scale.y *= -0.75;
        _this.KF_Yoyo =_this.Kingfisher_yoyo.animations.add('kingfisher_hovering1');
        _this.Kingfisher_yoyo.animations.play('kingfisher_hovering1', 15, true);
        _this.tween_yoyo = _this.add.tween(_this.Kingfisher_yoyo);
        _this.tween_yoyo.to({angle:0, x: positionX+10, y: positionY }, 1000, 'Quart', false, 0, false, true);
        _this.tween_yoyo.start();
        //_this.tween_yoyo.onComplete.add(_this.tween_3BComplete,_this);
        //_this.tween_yoyo.start();
        
    },

    Q5_askQ5VoiceQuestion: function() {
        
        _this.speakerbtn.inputEnabled = false;
        console.log("inside askQ5. ");        
        _this.stopVoice();
        if (_this.fifthQOption == 1)
        {
             _this.playQuestionSound_1.play();
            
            _this.time.events.add(2000, function()
             { 
                if (_this.CorrectBirdLevel      == 5) _this.playQuestionSound_p5.play();
                else if (_this.CorrectBirdLevel == 4) _this.playQuestionSound_p4.play();
                else if (_this.CorrectBirdLevel == 3) _this.playQuestionSound_p3.play();
                else if (_this.CorrectBirdLevel == 2) _this.playQuestionSound_p2.play();
                else if (_this.CorrectBirdLevel == 1) _this.playQuestionSound_p1.play();
                else if (_this.CorrectBirdLevel == 0) _this.playQuestionSound_p0.play();
             })      

        }
        else if (_this.fifthQOption == 2)
        {
            console.log("inside option 2 in askQ.: "+_this.fifthQOption + _this.CorrectFishLevel);      
            _this.playQuestionSound_2.play();
            _this.time.events.add(2000, function()
             { 
                if (_this.CorrectFishLevel      == -5) _this.playQuestionSound_m5.play();
                else if (_this.CorrectFishLevel == -4) _this.playQuestionSound_m4.play();
                else if (_this.CorrectFishLevel == -3) _this.playQuestionSound_m3.play();
                else if (_this.CorrectFishLevel == -2) _this.playQuestionSound_m2.play();
                else if (_this.CorrectFishLevel == -1) _this.playQuestionSound_m1.play();
             })            
            
        }
        
           _this.time.events.add(3500, function()
         { 
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
         });        
    },
    
    
//    tween_3AComplete: function(TweenFishreturn){
//        
//        TweenFishreturn.scale.x *= -1;
//        // _this.fish_2.scale.x *= -1;
//        // _this.fish_3.scale.x *= -1;
//
//        _this.tween_3B = _this.add.tween(TweenFishreturn);
//        _this.tween_3B.to({x: 100, y: TweenFishreturn.y }, 6000, 'Linear', false, 0);
//        _this.tween_3B.onComplete.add(_this.tween_3BComplete,_this);
//        
//        _this.tween_3B.start();
//
//        // _this.tween_3B = _this.add.tween(_this.fish_2);
//        // _this.tween_3B.to({x: _this.positionX, y: 330 }, 6000, 'Linear', false, 0);
//        // _this.tween_3B.onComplete.add(_this.tween_3BComplete,_this);
//        
//        // _this.tween_3B.start();
//
//        // _this.tween_3B = _this.add.tween(_this.fish_3);
//        // _this.tween_3B.to({x: _this.positionX, y: 435 }, 6000, 'Linear', false, 0);
//        // _this.tween_3B.onComplete.add(_this.tween_3BComplete,_this);
//        
//        // _this.tween_3B.start();
//    },
    
//    tween_3BComplete: function(TweenFish){
//        
//       
//            TweenFish.scale.x *= -1;
//    
//            // _this.fish_Swimming2.scale.x *= -1;
//            // _this.fish_Swimming3.scale.x *= -1;
//    
//            _this.tween_3A = _this.add.tween(TweenFish);
//            _this.tween_3A.to({x: 800, y: TweenFish.y }, 6000, 'Linear', false, 0);
//            _this.tween_3A.onComplete.add(_this.tween_3AComplete, _this);
//            _this.tween_3A.start();
//       
//    },
    
    update: function(game){
        
    
    },
    
    //this is called in case correct answer is given in option 3 - where is the fish
    Q5_kingFisherJumping: function(CorrectFish){
    
        //calculate the slop of the bird. the first bird tweens till the water level. 
        //then change the bird to inside water sprite of the bird. same happens while returning back.
        // x3 is the point where the bird meets the water based on the slope calculated.
        // water level is known as somewhere in the mid of the screen.
        
        var x1 = 1;
        var y1 = 1;
        
        var x2 = CorrectFish.x;
        var y2 = CorrectFish.y;
        
        _this.KF_slope = (y2 - y1) / (x2 - x1);

        
        _this.waterlevel_y = 290;
        _this.waterlevel_x = (_this.waterlevel_y - y1 + (x1*_this.KF_slope)) / _this.KF_slope;
        
        _this.waterlevel_x = Math.round(_this.waterlevel_x);
        
        
        _this.KF_JumpingWater= _this.add.sprite(1,1,'KingFisher_JumpingWater3');  
        
        _this.KF_JumpingWater.name = "KF_JumpingWater";
        _this.KF_JumpingWater.anchor.setTo(0.5);
        _this.KF_JumpingWater.scale.setTo(0.8,0.8);
        //_this.JumpingWater =_this.KF_JumpingWater.animations.add('KingFisher_JumpingWater');
        //_this.KF_JumpingWater.animations.play('KingFisher_JumpingWater', 30, true, false);
        _this.KF_JumpingWater.x = 100;
        _this.KF_JumpingWater.y = 0;
        _this.tween_1 = _this.add.tween(_this.KF_JumpingWater);
        _this.tween_1.onComplete.add(_this.Q5_tween_1Complete,_this);
        _this.tween_1.to({x: _this.waterlevel_x, y: _this.waterlevel_y }, 700, 'Linear', false, 0);
        _this.tween_1.start();
    
    },
    
    Q5_tween_1Complete: function(target){
        
        //_this.ColorOfCorrectFish
        
        _this.KF_InsideWater= _this.add.sprite(_this.waterlevel_x,_this.waterlevel_y,'KingFisher_InsideWater');  
        _this.Watersplash.play();
        
        _this.Waterbubble.currentTime = 0;
        _this.Waterbubble1.currentTime = 0;
        _this.Waterbubble.play();
        _this.Waterbubble1.play();
        
        _this.KF_InsideWater.name = "KingFisher_InsideWater";
        _this.KF_InsideWater.anchor.setTo(0.5);
        _this.KF_InsideWater.scale.setTo(0.8,0.8);
        _this.InsideWater =_this.KF_JumpingWater.animations.add('KingFisher_InsideWater');
        _this.KF_InsideWater.animations.play('KingFisher_InsideWater', 50, true, false);
        //_this.KingFisher_InsideWater.x = 100;
        //_this.KingFisher_InsideWater.y = 0;
        _this.tween_1A = _this.add.tween(_this.KF_InsideWater);
        _this.tween_1A.onComplete.add(_this.Q5_tween_1AComplete,_this);
        
        //change tween time based on the fish level since it needs more time for lower levels to travel.
        if (_this.CorrectFishLevel == -1)
        {
            _this.tween_1A.to({x: _this.CorrectFishObj.x-10, y: _this.CorrectFishObj.y-10 }, 200, 'Linear', false, 0);
        }
        else if (_this.CorrectFishLevel == -2)
        {
            _this.tween_1A.to({x: _this.CorrectFishObj.x-10, y: _this.CorrectFishObj.y-10 }, 350, 'Linear', false, 0);
            
        }
        else if (_this.CorrectFishLevel == -3)
        {
            _this.tween_1A.to({x: _this.CorrectFishObj.x-10, y: _this.CorrectFishObj.y-10 }, 400, 'Linear', false, 0);
        }
        else if (_this.CorrectFishLevel == -4)
        {
            _this.tween_1A.to({x: _this.CorrectFishObj.x-10, y: _this.CorrectFishObj.y-10 }, 600, 'Linear', false, 0);
        }
        else if (_this.CorrectFishLevel == -5)
        {
            _this.tween_1A.to({x: _this.CorrectFishObj.x-10, y: _this.CorrectFishObj.y-10 }, 800, 'Linear', false, 0);
        }
                
        _this.tween_1A.start();
        
        //splashing of water happens now. Choosing only certain frames to play.
        
        _this.SplashWater= _this.add.sprite(_this.waterlevel_x,_this.waterlevel_y,'SplashWater');  
        _this.SplashWater.name = "SplashWater";
        _this.SplashWater.anchor.setTo(0.5);
        _this.SplashWater.scale.setTo(0.8,0.8);
        
        _this.splash_water =_this.SplashWater.animations.add('SplashWater', [5,6,7,8,9,10,11,12,13], true);
        //_this.splash_water =_this.SplashWater.animations.add('SplashWater');
        
        _this.SplashWater.animations.play('SplashWater', 30, false, false);
                
        _this.KF_JumpingWater.destroy();
        
    },

    Q5_tween_1AComplete: function(target){

       //king fisher coming back from water sprite inside the water
        
        _this.KF_InsideWater.destroy();
        
        var KF_withFishString = 'KingFisher_ComingUpWater' + _this.ColorOfCorrectFish;
        
        _this.KF_WaterComingUp = _this.add.sprite(500,400, KF_withFishString);  
        _this.KF_WaterComingUp.name = "KingFisher_ComingUpWater";
        _this.KF_WaterComingUp.anchor.setTo(0.5);
        _this.KF_WaterComingUp.scale.setTo(0.8,0.8);
        _this.KF_WaterComingUp.scale.x *=-1;
        _this.ComingUpWater =_this.KF_WaterComingUp.animations.add('KF_withFishString');
        _this.KF_WaterComingUp.animations.play('KF_withFishString', 20, true, false);
        
        //remove the jumping water image
        
        
        // assign fish position to KF coming up in water and then destroy fish.
        _this.KF_WaterComingUp.x = _this.CorrectFishObj.x;
        _this.KF_WaterComingUp.y = _this.CorrectFishObj.y;
        _this.CorrectFishObj.destroy();
        
        
        _this.tween_1B = _this.add.tween(_this.KF_WaterComingUp);
        
        _this.tween_1B.to({Angle: 45, x: 800, y: 280 }, 1500, 'Linear', false, 0);
        _this.tween_1B.onComplete.add(_this.Q5_tween_1BComplete,_this);
        
        
        
        _this.tween_1B.start();
        
    },
        

    Q5_tween_1BComplete: function(target){
                
        _this.KF_WaterComingUp.destroy();
        
        var KF_withFishString = 'KingFisher_ComingUp' + _this.ColorOfCorrectFish;
        
        _this.Watersplash.currentTime = 0;        
        _this.Watersplash.play();
        
        _this.KF_ComingUp = _this.add.sprite(500,400, KF_withFishString);  
        _this.KF_ComingUp.name = "KingFisher_ComingUp";
        _this.KF_ComingUp.anchor.setTo(0.5);
        _this.KF_ComingUp.scale.setTo(0.8,0.8);
        _this.KF_ComingUp.scale.x *= -1;
        _this.ComingUp =_this.KF_ComingUp.animations.add(KF_withFishString);
        _this.KF_ComingUp.animations.play(KF_withFishString, 20, true, false);
        
        
        //remove the jumping water image
        _this.KF_InsideWater.destroy();
        

        
        
        // set starting point same ending point of under water bird. set tween to the fixed position from where KF will reach water level.
        _this.KF_ComingUp.x = 800;
        _this.KF_ComingUp.y = 280;
                
        _this.tween_1C = _this.add.tween(_this.KF_ComingUp);
        
        _this.tween_1C.to({Angle: 0, x: 850, y: 250 }, 800, 'Linear', false, 0);
        _this.tween_1C.onComplete.add(_this.tween_1CComplete,_this);
   
        //splashing of water happens now while coming up
        _this.SplashWater1= _this.add.sprite(800,280,'SplashWater');  
        _this.SplashWater1.name = "SplashWater";
        _this.SplashWater1.anchor.setTo(0.5);
        _this.SplashWater1.scale.setTo(0.8,0.8);
        _this.SplashArray = ["9","10","11","12","13"];
        _this.splash_water =_this.SplashWater1.animations.add('SplashWater', [9,10,11,12,13], true);
        
        
        _this.SplashWater1.animations.play('SplashWater',30, false, false);
        _this.tween_1C.start();
        
    },
    
    tween_1CComplete: function(target){
        
        //_this.KF_ComingUpEnding.destroy();
        _this.KF_ComingUp.destroy();
        var KF_eatFishString = 'KingFisher_Eatingfish' + _this.ColorOfCorrectFish;
        _this.KF_Eatingfish = _this.add.sprite(850,250,KF_eatFishString);  
        
        _this.KF_Eatingfish.name = "KF_Eatingfish";
        _this.KF_Eatingfish.anchor.setTo(0.5);
        _this.KF_Eatingfish.scale.setTo(1.2,1.2);
        _this.KF_Eatingfish.scale.x *= -1;
        _this.Eatingfish =_this.KF_Eatingfish.animations.add(KF_eatFishString);
        _this.KF_Eatingfish.animations.play(KF_eatFishString, 15, true);
        _this.birdGroup.add(_this.KF_Eatingfish);
        
    },


    changeQuestion:function()
	{
		flagGroup1.destroy();
		if(_this.no11<6)
		{
            count++;
			_this.getQuestion();
		}
		else
		{
            //console.log("gameEnd");
            _this.stopVoice();
            _this.state.start('level2');
		}
	},
   
	correctAns:function(target)
	{
        console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
        // if(_this.Q5_Q5Options == )
        
        //_this.currentTime = window.timeSaveFunc();

        console.log('name of the object for highlight is: ' + target.name);
        
        objHighlighted = _this.add.image(target.x,target.y, target.name);
        objHighlighted.name = target.name;
        objHighlighted.anchor.setTo(0.5);
        
        objHighlighted.scale.setTo(1,1);
        
        // based on the object, scale has to be set since their sizes are different
        
        var selectObjName = objHighlighted.name.substring(0,objHighlighted.name.length-1);
        console.log('Right answer: object Name after removing last byte: '+ selectObjName);
        if ( selectObjName == 'swimselect' )
        {
            console.log('Right answer: object Name after removing last byte: '+ selectObjName);
            objHighlighted.scale.setTo(0.5,0.5);
        }
        else if (selectObjName == 'flyselect')
        {
            objHighlighted.scale.setTo(0.9,0.9);
        }
        else if (selectObjName == 'sitselect')
        {
            objHighlighted.scale.setTo(1,1);
            
        }
        
        _this.birdGroup.add(objHighlighted);
        
        // set the angle since flying bird requires this angle change. no harm for other objects.
        objHighlighted.angle = target.angle;
        
        // set the correct object to this new object. this will be destroyed while hovering in celebrtng
        _this.CorrectBirdObj = objHighlighted;
        _this.CorrectFishObj = objHighlighted;
        //_this.correct
        
//        if (target.angle == 40)
//        {
//            objHighlighted.scale.x *= -1;
//        }   
        // remove the original object since we have replaced it with highlighted object
        target.destroy();
        
        //once an object is selected, disable any more selection on this group
        
//        _this.birdGroup.setAllChildren('inputEnabled', 'false', false, false, true);
			
        for(var j =0;j<3;j++)
        {
            if(_this.birdGroup.getChildAt(j))
            {
                console.log('name of the child obj is: '+' '+j + _this.birdGroup.getChildAt(j).name);
                _this.birdGroup.getChildAt(j).inputEnabled = false;

            }
        }
        
        // set the flags for later use
        _this.correct_answer = true;
        
        _this.correctSittingBird = true;

        _this.correctHoveringBird = true;

        _this.correctFish = true;
        
	},

    wrongAns:function(target)
	{
        //console.log("_this.questionNo :"+_this.questionNo);
        // if(_this.Q5_Q5Options == )
        
        //_this.currentTime = window.timeSaveFunc();

        console.log('name of the object for highlight is: ' + target.name);
        
        objHighlighted = _this.add.image(target.x,target.y, target.name);
        objHighlighted.name = target.name;
        objHighlighted.anchor.setTo(0.5);
        objHighlighted.scale.setTo(1,1);

        var selectObjName = objHighlighted.name.substring(0,objHighlighted.name.length-1);
        console.log('Wrong Answeer: Object Name after removing last byte: '+ selectObjName);
        if ( selectObjName == 'swimselect' )
        {
            console.log('Wrong Answeer: object Name after removing last byte: '+ selectObjName);
            objHighlighted.scale.setTo(0.5,0.5);
        }
        else if (selectObjName == 'flyselect')
        {
            objHighlighted.scale.setTo(0.9,0.9);
        }
        else if (selectObjName == 'sitselect')
        {
            objHighlighted.scale.setTo(1,1);
        }
        
        _this.birdGroup.add(objHighlighted);
        
        // set the angle since flying bird requires this angle change. no harm for other objects.
        objHighlighted.angle = target.angle;
        
        
//        if (target.angle == 40)
//        {
//            objHighlighted.scale.x *= -1;
//        }   
        // remove the original object since we have replaced it with highlighted object
        target.destroy();

        for(var j =0;j<3;j++)
        {
            if(_this.birdGroup.getChildAt(j))
            {
                console.log('name of the child obj is: '+' '+j + _this.birdGroup.getChildAt(j).name);
                _this.birdGroup.getChildAt(j).inputEnabled = false;

            }
        }
        
        _this.correct_answer = false;
        _this.correctSittingBird  = false;
        _this.correctHoveringBird = false;
        _this.correctFish = false;

	},
    
    removeEverthing:function() 
    {
        //console.log("removeEverthing");
        // _this.wrong=true;
        // _this.no11++;
        // _this.count1++;
        // _this.opt1.frame=0;
        // _this.opt2.frame=0;
        //console.log("Question Number :"+_this.no11);
        
        // if(_this.no11<6)
        // {
        //    // wrong = true;
        //     _this.timer1.stop();
            
        //     _this.MaintweenDestroy = _this.add.tween(flagGroup1);
        //     _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
        //     //console.log("inside removeEverthing");
        //     _this.MaintweenDestroy.onComplete.add(function(){
        //         _this.count =0;
        //         _this.getQuestion();
        //     },_this);  
        // }
        // else
        // {
        //     _this.stopVoice();
        //     _this.timer1.stop();
        //     _this.timer1=null;
        //     _this.state.start('unity2_1_1aScore');
        // }
    },

    amplifyMedia:function(mediaElem, multiplier) {
          var context = new (window.AudioContext || window.webkitAudioContext),
              result = {
                context: context,
                source: context.createMediaElementSource(mediaElem),
                gain: context.createGain(),
                media: mediaElem,
                amplify: function(multiplier) { result.gain.gain.value = multiplier; },
                getAmpLevel: function() { return result.gain.gain.value; }
              };
          result.source.connect(result.gain);
          result.gain.connect(context.destination);
          result.amplify(multiplier);

          return result;
    },
    
    
    getVoice:function()
    {
        _this.stopVoice();
        ////console.log("fffffff"+_this.qArrays[_this.no11]);
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        switch(1)
        {
            case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10://if(window.languageSelected=="English")
                   // {
                        _this.src.setAttribute("src", "questionSounds/numbers_int_5_g6/English/question2.1.mp3");
                   /* }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/numbers_int_5_g6/Hindi/question2.1_Hin.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/numbers_int_5_g6/Kannada/question2.1_Kan.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers_int_5_g6/question2.1_guj.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/numbers_int_5_g6/Odiya/numbers_int_5_g6.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }*/
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
	
	shutdown:function()
    {
        _this.stopVoice();
		//RI.gotoEndPage();
		//telInitializer.tele_end();
	},
    
    
    Q5_valButton: function(){

        //var bottomnumpadbg = _this.numGroup.create(0,490,'numpadbg');
        //bottomnumpadbg.name = "numpadbg";

        console.log("inside val button to create buttons");
        
        _this.wrongbtn = _this.numGroup.create(440,505,'Numberpad');
        //_this.wrongbtn = _this.add.sprite(_this.x+136,508,'Numberpad');
        _this.wrongbtn.frame = 12;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(1,1);
        _this.wrongbtn.name = "wrongbtn";

        _this.wrongbtn.events.onInputDown.add(_this.Q5_wrongbtnClicked,_this);
           
        _this.rightbtn = _this.numGroup.create(520,505,'Numberpad');
        //_this.rightbtn = _this.add.sprite(_this.x+204,508,'Numberpad');
        _this.rightbtn.frame = 13;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1,1);
        _this.rightbtn.name = "rightbtn";

        _this.rightbtn.events.onInputDown.add(_this.Q5_rightbtnClicked);
    
    },

Q5_numClicked:function(target){
     
       console.log(target.name);
        
       
        _this.clickSound.play();
          
         _this.selectedAns1 = target.name;
         _this.enterTxt.text = ""+_this.selectedAns2+_this.selectedAns1;
         
         console.log(_this.selectedAns1);
         console.log(_this.selectedAns2);
    
         
     },
    

Q5_signbtnClicked:function(target){
     
       console.log(target.name);
        
       //  _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
       /*  _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id:  "level12.2_"+target.name, 
                    access_token: window.acctkn 
               } */

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

          
         _this.selectedAns2 = target.name;
         _this.enterTxt.text = ""+_this.selectedAns2+_this.selectedAns1;
         
         console.log(_this.selectedAns1);
         console.log(_this.selectedAns2);
},   
    
    
Q5_wrongbtnClicked:function(){
     
    _this.Q5_ResetScreen();

},
    
    
Q5_validateAnswer:function() 
    { 
    
    //is the correct bird is selected if yes return true else return false
    },
    
Q5_rightbtnClicked:function()
    {

        _this.clickSound.play();
//if no answer is selected, then just give a wrong sound and do not process anything
     
        if (_this.correct_answer != null)
        {
 
         _this.speakerbtn.inputEnabled = false;
         _this.speakerbtn.input.useHandCursor = false;
        
         _this.wrongbtn.inputEnabled = false;       
         _this.wrongbtn.events.onInputDown.removeAll();
         _this.wrongbtn.input.useHandCursor = false;
        
         _this.rightbtn.inputEnabled = false;
         _this.rightbtn.events.onInputDown.removeAll();
         _this.rightbtn.input.useHandCursor = false;

            _this.Q5_showanswerActions(_this.correct_answer);

            if (_this.correct_answer == true)
            {
                if (_this.fifthQOption == 1)  _this.time.events.add(1500, _this.Q5_ClearObjects);
                else if (_this.fifthQOption == 2) _this.time.events.add(5000, _this.Q5_ClearObjects);
                    
            }
            else
            {
                   console.log('screen reset for wrong answer');
                   _this.time.events.add(1000, _this.Q5_ResetScreen);

            }
        }
        else
        {
            _this.wrongSound.play();
        }

     },
    
Q5_ResetScreen: function() 
{
    
        _this.birdGroup.destroy();
        _this.numGroup.destroy();
        _this.objGroup.destroy();
        // reset the flags
        _this.correct_answer = null;
        _this.correctSittingBird = null;
        _this.correctHoveringBird = null;
        _this.correctFish = null;

        _this.stopOtherVoice();

        _this.numGroup  = _this.add.group();
        _this.objGroup  = _this.add.group();
        _this.birdGroup = _this.add.group();
        _this.tweenScale();
    
        _this.Q5_Q5Options();
    
},
    
Q5_ClearObjects: function()
{
//based on the current option, fade and destroy the objects on screen
    
       console.log('inside clear objects');
        
       if (_this.fifthQOption == 1 || _this.fifthQOption == 2){
            
           _this.KF_fadeOutBirds = _this.add.tween(_this.birdGroup).to( { alpha: 0 }, 3000, 'Linear', true, 0);
           _this.KF_fadeOutBirds.onComplete.add(_this.Q5_destroyObjects);
           
        }
    
},
    
Q5_destroyObjects : function(){
// most of the objects are destroyed since they are added to bird group / fish group to get ready for next question. Max 6 questions.
    
            _this.birdGroup.destroy();
            _this.numGroup.destroy();
            _this.objGroup.destroy();
    
            if(_this.count1 < 6)
            {
            // reset the flags
                _this.correct_answer = null;
                _this.correctSittingBird = null;
                _this.correctHoveringBird = null;
                _this.correctFish = null;
                
// increment the main index to point to the nxt array index to decide levels for next question
                if (_this.fifthQOption == 1)
                {
                    _this.MainIndex += 1;
                    if (_this.MainIndex > 5) 
                    {
                        _this.MainIndex += 0;
                        _this.birdLevelArray = _this.shuffle(_this.birdLevelArray);
                    }
                }
                else if (_this.fifthQOption == 2)
                {
                    _this.MainIndexFish += 1;
                    if (_this.MainIndexFish > 4) 
                    {
                        _this.MainIndexFish = 0;
                        _this.fishLevelArray = _this.shuffle(_this.fishLevelArray);
                    }
                    
                }
                // ready the index for next question. if it exceeds 2, shuffle the array again and reset the index to zero.
                _this.fifthQOption_index += 1;
        
                if (_this.fifthQOption_index > 1)
                {   
                    console.log("Now shuffling: ");
                    _this.fifthQArray = _this.shuffle(_this.fifthQArray);
                    _this.fifthQOption_index = 0;
                }

                _this.stopOtherVoice();
                _this.Q5_gotoFifthQuestion();
            }
            else
            {
                _this.stopOtherVoice();
                _this.timer1.stop();
                _this.timer1=null;
                _this.state.start('numbers_int_5_g6Score');
                
            }
},
    
stopOtherVoice: function()
{

    //stop any of the other voices being played.
    _this.birdchirp.pause();
    _this.birdchirp.currentTime = 0.0

//
//        _this.KFcalls.pause();
//        _this.KFcalls.currentTime = 0.0;


    _this.Waterbubble.pause();
    _this.Waterbubble.currentTime = 0.0;
    _this.celebrationSound.removeEventListener('ended', _this.KFCalls_Celebration, false);
    _this.Waterbubble1.pause();
    _this.Waterbubble1.currentTime = 0.0;
},
    
Q5_showanswerActions: function(correct_answer){
    
         console.log("in showanswerAction Option is: "+_this.fifthQOption);
         if (correct_answer == true)
         {
            _this.starActions();
            
             
            if (_this.fifthQOption == 1)
            {
                
                if (_this.Bird1_Correct)
                {
                    _this.kingFisherHoverCeleb(_this.CorrectBirdObj);
                    _this.celebrationSound.play();
                }
                else if (_this.Bird2_Correct)
                {
                    _this.kingFisherHoverCeleb(_this.CorrectBirdObj);
                    _this.Bird2_Sitting.destroy();
                    _this.celebrationSound.play();                    
                    
                }
                else if (_this.Bird3_Correct)
                {
                    _this.kingFisherHoverCeleb(_this.CorrectBirdObj);
                    _this.Bird3_Flying.destroy();
                    _this.celebrationSound.play();  
                    
                }

            }
// whether fish or bird, CorrectBirdObj & CorrectFishObj will have the correct bird
            else if (_this.fifthQOption == 2) 
            {
                _this.Q5_kingFisherJumping(_this.CorrectFishObj);
                _this.celebrationSound.play();
            }

        }
//wrong answer action
        else 
        {
             console.log("wrong answer");
             console.log(_this.fifthQOption);
             _this.wrongSound.play();
             
            if (_this.fifthQOption == 1){
                
                console.log("inside fifth option 1 to shake");
                _this.shake.shake(10, _this.birdGroup);

            }
            else if (_this.fifthQOption == 2){
                
                _this.shake.shake(10, _this.birdGroup);
                // _this.kingFisherHoverYoyo(_this.positionX+20,_this.positionY);
            
            }
            else if (_this.fifthQOption == 3) {
                _this.shake1.shake(10,_this.fish_1);
                _this.shake2.shake(10,_this.fish_2);
                _this.shake3.shake(10,_this.fish_3);
                //_this.kingFisherJumping(_this.positionX,_this.positionY);
            }
         }
     },

     kingFisherHoverCeleb:function(BirdToCelebrate){

        positionX = BirdToCelebrate.x;
        positionY = BirdToCelebrate.y;
        BirdString = 'kingfisher_hovering'+ _this.ColorOfCorrectBird;
        
        console.log(' color of correct bird: '+_this.ColorOfCorrectBird );
        console.log('correct bird number: '+_this.CorrectBirdNumber );
         
        // bird calls for celebration.
        _this.KFcalls.volume = 1;
        _this.KFcalls.currentTime = 0;
        _this.KFcalls.play();
         
        //remove the current bird and create celebrating bird
        BirdToCelebrate.destroy();
         
        //which bird and color of the bird should be used for celebrating hovering bird
        
        console.log('in hovering action: '+ BirdString);
        _this.Kingfisher_hovering = _this.add.sprite(positionX,positionY,BirdString);

        _this.Kingfisher_hovering.name = BirdString;
        _this.Kingfisher_hovering.anchor.setTo(0.5);
        _this.Kingfisher_hovering.scale.setTo(0.6,0.6);
        _this.Hovering =_this.Kingfisher_hovering.animations.add(BirdString);
        _this.Kingfisher_hovering.animations.play(BirdString, 90, true);
        
        _this.birdGroup.add(_this.Kingfisher_hovering);
      
     }

     };