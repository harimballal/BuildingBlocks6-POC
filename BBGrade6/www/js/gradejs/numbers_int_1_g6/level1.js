Game.numbers_int_1_g6l1 = function () {};

Game.numbers_int_1_g6l1.prototype = {

    init: function (game) {
        _this = this;

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

        _this.screen_opening = document.createElement('audio');
        _this.screen_openingsrc = document.createElement('source');
        _this.screen_openingsrc.setAttribute("src", "sounds/screen opening.wav");
        _this.screen_opening.appendChild(_this.screen_openingsrc);
        

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

    },

    create: function (game) {

        _this.amplify = null;

        _this.sceneCount = 0;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.group1;
        _this.group2;
        _this.group3;

        _this.opt = new Array();
        _this.correctans = 0;
        _this.questionNo = 0;

        _this.background;
        _this.click3;

        _this.click4;
        _this.rightCount;

        _this.opt1;
        _this.opt2;
        _this.opt3;

        _this.wmusic;
        _this.wrong = true;

        _this.count;
        _this.clickSound;

        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0
            _this.counterForTimer = 0;

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count = 0;
        _this.count1 = 0;
        _this.celebration = false;

        _this.reset = -1;

        _this.qArrays = new Array();

        _this.qArrays = [1, 2, 3, 4, 5, 6];
        _this.qArrays = _this.shuffle(_this.qArrays);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        _this.Q1_stepplace0 = _this.add.image(100, 230, 'floorarea');
        _this.Q1_stepplace0.scale.setTo(0.13, 2);

        _this.Q1_stepplace1 = _this.add.image(335, 180, 'zn');
        _this.Q1_stepplace2 = _this.add.image(410, 150, 'zn');
        _this.Q1_stepplace3 = _this.add.image(490, 120, 'zn');
        _this.Q1_stepplace4 = _this.add.image(565, 90, 'zn');
        _this.Q1_stepplace5 = _this.add.image(635, 60, 'zn');

        _this.Q1_stepplacem1 = _this.add.image(250, 260, 'zn');
        _this.Q1_stepplacem2 = _this.add.image(320, 290, 'zn');
        _this.Q1_stepplacem3 = _this.add.image(395, 320, 'zn');
        _this.Q1_stepplacem4 = _this.add.image(470, 350, 'zn');
        _this.Q1_stepplacem5 = _this.add.image(540, 380, 'zn');

        _this.background = _this.add.sprite(0, 0, 'groundfloor');
        _this.background.name = "groundfloor";
        //_this.background.frame = 14;
        _this.background.scale.setTo(1, 1);
        _this.groundfloor = _this.background.animations.add('groundfloor');
        _this.background.animations.play('groundfloor', 10, false);
        _this.screen_opening.play();
       

        _this.underground = _this.add.sprite(0, 265, 'underground');
        _this.underground.name = "underground";
        _this.underground.frame = 1;
        _this.underground.scale.setTo(1, 1);

        _this.shelf = _this.add.image(725, 0, 'shelf');

        _this.ball = _this.add.sprite(800, 72, 'ball');
        _this.ball.frame = 0;

        _this.cat = _this.add.sprite(800, 147, 'cat');
        _this.cat.frame = 0;

        _this.dog = _this.add.sprite(800, 228, 'dog');
        _this.dog.frame = 0;

        _this.rabbit = _this.add.sprite(800, 320, 'rabbit');
        _this.rabbit.frame = 0;

        _this.cloth = _this.add.sprite(800, 400, 'cloth');
        _this.cloth.frame = 0;

        _this.time.events.add(1000,this.displayNumbers);


        _this.navBar = _this.add.sprite(0, 0, 'unity2_1_1a_navBar');
        _this.navBar.scale.setTo(1, 1);

        _this.rightbtnClicked = false;
        _this.wrongbtnClicked = false;
        _this.speakerbtnClicked = false;

        _this.speakerbtn = _this.add.sprite(600, 6, 'unity2_1_1a_CommonSpeakerBtn');
        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializer.tele_interactEvent("TOUCH", "speaker");
            //_this.clickSound = _this.add.audio('ClickSound');
            if (_this.speakerbtnClicked == false && _this.rightbtnClicked == false) {
                telInitializer.tele_interactEvent("TOUCH", "speaker");
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                _this.Q1_askQ1VoiceQuestion();

                _this.time.events.add(4000, function () {
                    _this.speakerbtnClicked = false;
                    _this.Q1_EnableVoice();

                });
            }

        }, _this);

        _this.timebg = _this.add.sprite(305, 6, 'unity2_1_1a_timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';

        /*_this.scale = _this.add.image(915,40,'level_scale');
        _this.scale.scale.setTo(1.8,1);*/

        _this.numGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        /*_this.KFsitting =_this.add.image('kingfisher_sitting');
        _this.KFsitting.visible = false;
        _this.fish_1 =_this.add.image('Fish_1');
        _this.fish_1.visible = false;*/

        _this.generateStarsForTheScene(6);

        // _this.KF_place =  _this.add.image( 170, 510 ,'kingfisher_sitting');
        // _this.KF_place.scale.setTo(0.7,0.7);
        // _this.KF_place.anchor.setTo(0.5);
        // _this.KF_place.inputEnabled = false;

        // _this.Fish_place =  _this.add.image( 100, 510 ,'Fish_1');
        // _this.Fish_place.scale.setTo(0.7,0.7);
        // _this.Fish_place.anchor.setTo(0.5);
        // _this.Fish_place.inputEnabled = false;

        _this.firstQOption_index = -1;
        _this.firstQPos_index = 0;

        

        _this.rightAns;
        _this.repeat1 = 1;

        _this.time.events.add(4000, _this.getQuestion);

    },
    
    displayNumbers: function()
    {
        _this.time.events.add(500, function() { _this.Numbr_1 = _this.add.image(350, 220, 'Numbr_1');} );
        
        _this.time.events.add(750, function() { _this.Numbr_2 = _this.add.image(410, 190, 'Numbr_2');} );        
        
         _this.time.events.add(1000, function() { _this.Numbr_3 = _this.add.image(490, 160, 'Numbr_3');} );        
        
        _this.time.events.add(1250, function() { _this.Numbr_4 = _this.add.image(570, 130, 'Numbr_4');} );        

        _this.time.events.add(1500, function() { _this.Numbr_5 = _this.add.image(640, 100, 'Numbr_5');} );
        
        _this.time.events.add(1750, function() { _this.Numbr_0 = _this.add.image(155, 280, 'Numbr_0');} ); 
        
        _this.time.events.add(2000, function() { _this.Numbr_m1 = _this.add.image(260, 305, 'Numbr_-1');} );       
        
         _this.time.events.add(2250, function() { _this.Numbr_m2 = _this.add.image(320, 335, 'Numbr_-2');} );   
        
        _this.time.events.add(2500, function() { _this.Numbr_m3 = _this.add.image(390, 365, 'Numbr_-3');} );         

        _this.time.events.add(2750, function() { _this.Numbr_m4 = _this.add.image(470, 395, 'Numbr_-4');} ); 
        
        _this.time.events.add(3000, function() { _this.Numbr_m5 = _this.add.image(550, 425, 'Numbr_-5');} ); 
        

        

        
    },

    updateTimer: function () {
        _this.counterForTimer++;
        ////console.log("lololil"+counterForTimer);
        if (_this.counterForTimer > 59) {
            _this.counterForTimer = 0;

            if (_this.minutes < 10) {
                _this.minutes = _this.minutes + 1;
                _this.seconds = 00;
            } else {
                _this.minutes = _this.minutes + 1;
            }
        } else {
            if (_this.counterForTimer < 10)
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
        _this.timeDisplay.setText(_this.minutes + ':' + _this.seconds);
        //timer.setText(minutes + ':'+ seconds );
    },

    shuffle: function (array) {
        //console.log('hi');
        var currentIndex = array.length,
        temporaryValue,
        randomIndex;
        //console.log('_this.currentIndex');

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
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

    getQuestion: function (target) {
        //console.log("getQuestion :"+_this.no11);
        //console.log("getQuestion :"+_this.qArrays[_this.no11]);

        _this.underground.frame = 0;
        //_this.sceneCount++;

        if (_this.timer) {
            _this.timer.stop();
            _this.timer = null;
        }

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function () {
            _this.AnsTimerCount++;
        }, _this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = _this.time.create(false);

        _this.timer1.loop(1000, function () {
            _this.updateTimer();
        }, _this);

        _this.timer1.start();

        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.

        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;

        //_this.gotoFirstQuestion();

        _this.Q1_OptionsArray = [1, 2, 3, 4, 5];
        _this.Q1_OptionsArray = _this.shuffle(_this.Q1_OptionsArray);

        _this.Q1_PosArray = [0, 1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
        _this.Q1_PosArray = _this.shuffle(_this.Q1_PosArray);

        //_this.questionid =1;
        _this.qArrays[_this.no11] = 1;

        switch (_this.qArrays[_this.no11]) {
        case 1:
            _this.gotoFirstQuestion();
            break;
            /*case 2: _this.gotoFourthQuestion();
            break;
            case 3: _this.gotoThirdQuestion();
            break;
            case 4: _this.gotoFourthQuestion();
            break;
            case 5: _this.gotoFifthQuestion();
            break;
            case 6: _this.gotoSixthQuestion();
            break;
            case 7: _this.gotoSeventhQuestion();
            break;
            case 8: _this.gotoEighthQuestion();
            break;
            case 9: _this.gotoNinethQuestion();
            break;
            case 10: _this.gotoTenthQuestion();
            break; */

        }
        //_this.questionid =1;
        //telInitializer.gameIdInit(_this.questionid);
    },

    stopVoice: function () {
        if (_this.playQuestionSound) {
            if (_this.playQuestionSound.contains(_this.src)) {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }

            if (!_this.playQuestionSound.paused) {
                //console.log("here");
                _this.playQuestionSound.pause();
                _this.playQuestionSound.currentTime = 0.0;
            }
            _this.playQuestionSound = null;
            _this.src = null;
        }

        if (_this.celebrationSound) {
            if (_this.celebrationSound.isPlaying) {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }
    },

    generateStarsForTheScene: function (count) {
        _this.starsGroup = _this.add.group();
        for (var i = 0; i < count; i++) {
            _this.starsGroup.create(_this.world.centerX - 15, 10, 'unity2_1_1a_starAnim');
            for (var j = 0; j < i; j++) {
                if (_this.starsGroup.getChildAt(j)) {
                    _this.starsGroup.getChildAt(j).x -= 15;
                    _this.starsGroup.getChildAt(i).x += 15;
                }
            }
        }
    },

    gotoFirstQuestion: function () {
        _this.Q1_EnableVoice();

        _this.firstQOption_index += 1;
        _this.firstQPos_index += 1;

        if (_this.firstQOption_index > 4) {
            console.log("Now shuffling: ");
            _this.Q1_OptionsArray = _this.shuffle(_this.Q1_OptionsArray);
            _this.firstQOption_index = 0;
        }

        _this.Q1_Option = _this.Q1_OptionsArray[_this.firstQOption_index];

        if (_this.firstQPos_index > 10) {
            console.log("Now shuffling: ");
            _this.Q1_PosArray = _this.shuffle(_this.Q1_PosArray);
            _this.firstQPos_index = 0;
        }

        _this.Q1_PosQn = _this.Q1_PosArray[_this.firstQPos_index];

        //_this.Q1_Option = _this.Q1_OptionsArray[0];
        //_this.Q1_PosQn = _this.Q1_PosArray[0];

        //_this.Q1_Option=4;
        //_this.Q1_PosQn=1;

        console.log('Inside question 1');
        console.log("object " + _this.Q1_Option);
        console.log("place at " + _this.Q1_PosQn);

        _this.Q1_QnOptions();

    },

    Q1_QnOptions: function () {
        _this.speakerbtn.inputEnabled = false;
        console.log('inside qn1 option' + _this.Q1_Option)

        switch (_this.Q1_Option) {
        case 1:
            _this.Q1_gotoOption1();
            break;
        case 2:
            _this.Q1_gotoOption2();
            break;
        case 3:
            _this.Q1_gotoOption3();
            break;
        case 4:
            _this.Q1_gotoOption4();
            break;
        case 5:
            _this.Q1_gotoOption5();
            break;
        }

    },

    Q1_gotoOption1: function () {
        _this.Q1_askQ1VoiceQuestion(_this.Q1_Option);
        _this.ball.frame = 1;
        _this.ball.inputEnabled = true;
        _this.ball.input.useHandCursor = true;
        _this.ball.events.onInputDown.add(_this.Q1_ShelfItemClicked, _this.ball);
        _this.Q1_valButton();
        _this.ball.input.enableDrag(true);
        //_this.ball.inputEnabled = false;

        _this.ball.events.onDragStop.add(_this.Q1_DropCheck, _this.ball);
        _this.rightbtn.events.onInputDown.add(_this.Q1_Validation, _this);
        _this.wrongbtn.events.onInputDown.add(_this.Q1_eraseClicked, _this);
    },
    Q1_gotoOption2: function () {
        _this.Q1_askQ1VoiceQuestion(_this.Q1_Option);
        _this.cat.frame = 1;
        _this.cat.inputEnabled = true;
        _this.cat.input.useHandCursor = true;
        _this.cat.events.onInputDown.add(_this.Q1_ShelfItemClicked, _this.cat);
        _this.Q1_valButton();
        _this.cat.input.enableDrag(true);
        //_this.cat.inputEnabled = false;


        _this.cat.events.onDragStop.add(_this.Q1_DropCheck, _this.cat);
        _this.rightbtn.events.onInputDown.add(_this.Q1_Validation, _this);
        _this.wrongbtn.events.onInputDown.add(_this.Q1_eraseClicked, _this);

    },
    Q1_gotoOption3: function () {
        _this.Q1_askQ1VoiceQuestion(_this.Q1_Option);
        _this.dog.frame = 1;
        _this.dog.inputEnabled = true;
        _this.dog.input.useHandCursor = true;
        _this.dog.events.onInputDown.add(_this.Q1_ShelfItemClicked, _this.dog);
        _this.Q1_valButton();
        _this.dog.input.enableDrag(true);
        //_this.dog.inputEnabled = false;

        _this.dog.events.onDragStop.add(_this.Q1_DropCheck, _this.dog);
        _this.rightbtn.events.onInputDown.add(_this.Q1_Validation, _this);
        _this.wrongbtn.events.onInputDown.add(_this.Q1_eraseClicked, _this);

    },
    Q1_gotoOption4: function () {
        _this.Q1_askQ1VoiceQuestion(_this.Q1_Option);
        _this.rabbit.frame = 1;
        _this.rabbit.inputEnabled = true;
        _this.rabbit.input.useHandCursor = true;
        _this.rabbit.events.onInputDown.add(_this.Q1_ShelfItemClicked, _this.rabbit);
        _this.Q1_valButton();
        _this.rabbit.input.enableDrag(true);
        //_this.rabbit.inputEnabled = false;

        _this.rabbit.events.onDragStop.add(_this.Q1_DropCheck, _this.rabbit);
        _this.rightbtn.events.onInputDown.add(_this.Q1_Validation, _this);
        _this.wrongbtn.events.onInputDown.add(_this.Q1_eraseClicked, _this);

    },
    Q1_gotoOption5: function () {
        _this.Q1_askQ1VoiceQuestion(_this.Q1_Option);
        _this.cloth.frame = 1;
        _this.cloth.inputEnabled = true;
        _this.cloth.input.useHandCursor = true;
        _this.cloth.events.onInputDown.add(_this.Q1_ShelfItemClicked, _this.cloth);
        _this.Q1_valButton();
        _this.cloth.input.enableDrag(true);
        //_this.cloth.inputEnabled = false;

        _this.cloth.events.onDragStop.add(_this.Q1_DropCheck, _this.cloth);
        _this.rightbtn.events.onInputDown.add(_this.Q1_Validation, _this);
        _this.wrongbtn.events.onInputDown.add(_this.Q1_eraseClicked, _this);

    },

    Q1_ShelfItemClicked: function (target) {
        _this.vx = target.x;
        _this.vy = target.y;
        target.input.enableDrag(true);

        _this.clickSound.play();
        _this.reset = 1;
    },

    Q1_DropCheck: function (target) {
        console.log("Q1_DropCheck");
        if (_this.Q1_checkOverlap(target, _this.Q1_stepplace5)) {
            console.log("insider1");
            target.visible = false;
            target.frame = 0;

            //_this.Numbr_5.visible = true;

            //   if(  _this.Q1_stepplace1.visible == false)
            //   {
            //     _this.Q1_stepplace1.visible = true;
            // }


            _this.rightAns = 5;
            _this.positionX = 640;
            _this.positionY = 65;
            _this.Q1_DropItem(_this.positionX, _this.positionY);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplace4)) {
            console.log("insider2");
            target.visible = false;
            target.frame = 0;

            //_this.Numbr_4.visible = true;

            //   if(  _this.Q1_stepplace2.visible == false)
            //   {
            //     _this.Q1_stepplace2.visible = true;
            // }

            // _this.Q1_stepplace2.visible = true;

            _this.rightAns = 4;
            _this.positionX = 570;
            _this.positionY = 95;
            _this.Q1_DropItem(_this.positionX, _this.positionY);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplace3)) {
            console.log("insider3");
            target.visible = false;
            target.frame = 0;

            //_this.Numbr_3.visible = true;

            //   if(  _this.Q1_stepplace3.visible == false)
            //   {
            //     _this.Q1_stepplace3.visible = true;
            // }

            // _this.Q1_stepplace3.visible = true;
            _this.rightAns = 3;
            _this.positionX = 495;
            _this.positionY = 125;
            _this.Q1_DropItem(_this.positionX, _this.positionY);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplace2)) {
            console.log("insider4");
            target.visible = false;
            target.frame = 0;

            //_this.Numbr_2.visible = true;

            //   if(  _this.Q1_stepplace4.visible == false)
            //   {
            //     _this.Q1_stepplace4.visible = true;
            // }

            // _this.Q1_stepplace4.visible = true;
            _this.rightAns = 2;
            _this.positionX = 415;
            _this.positionY = 155;
            _this.Q1_DropItem(_this.positionX, _this.positionY);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplace1)) {
            console.log("insider5");
            target.visible = false;
            target.frame = 0;

            //_this.Numbr_1.visible = true;

            //   if(  _this.Q1_stepplace5.visible == false)
            //   {
            //     _this.Q1_stepplace5.visible = true;
            // }

            // _this.Q1_stepplace5.visible = true;
            _this.rightAns = 1;
            _this.positionX = 340;
            _this.positionY = 185;
            _this.Q1_DropItem(_this.positionX, _this.positionY);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplace0)) {
            console.log("insider5");
            target.visible = false;
            target.frame = 0;

            //_this.Numbr_0.visible = true;

            //   if(  _this.Q1_stepplace5.visible == false)
            //   {
            //     _this.Q1_stepplace5.visible = true;
            // }

            // _this.Q1_stepplace5.visible = true;
            _this.rightAns = 0;
            _this.positionX = 155;
            _this.positionY = 237;
            _this.Q1_DropItem(_this.positionX, _this.positionY);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplacem1)) {
            console.log("insider5");

            _this.underground1 = _this.underground.animations.add('underground');
            _this.underground.animations.play('underground', 1, false);

            target.visible = false;
            target.frame = 0;

            //_this.Numbr_m1.visible = true;

            

            //   if(  _this.Q1_stepplace5.visible == false)
            //   {
            //     _this.Q1_stepplace5.visible = true;
            // }

            // _this.Q1_stepplace5.visible = true;
            _this.rightAns = -1;
            _this.positionX = 255;
            _this.positionY = 267;
            _this.Q1_DropItem(_this.positionX, _this.positionY);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplacem2)) {
            console.log("insider5");

            _this.underground1 = _this.underground.animations.add('underground');
            _this.underground.animations.play('underground', 1, false);

            target.visible = false;
            target.frame = 0;

            //_this.Numbr_m2.visible = true;

            

            //   if(  _this.Q1_stepplace5.visible == false)
            //   {
            //     _this.Q1_stepplace5.visible = true;
            // }

            // _this.Q1_stepplace5.visible = true;
            _this.rightAns = -2;
            _this.positionX = 325;
            _this.positionY = 297;
            _this.Q1_DropItem(_this.positionX, _this.positionY);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplacem3)) {
            console.log("insider5");

            _this.underground1 = _this.underground.animations.add('underground');
            _this.underground.animations.play('underground', 1, false);

            target.visible = false;
            target.frame = 0;

            //_this.Numbr_m3.visible = true;

            

            //   if(  _this.Q1_stepplace5.visible == false)
            //   {
            //     _this.Q1_stepplace5.visible = true;
            // }

            // _this.Q1_stepplace5.visible = true;
            _this.rightAns = -3;
            _this.positionX = 400;
            _this.positionY = 327;
            _this.Q1_DropItem(_this.positionX, _this.positionY);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplacem4)) {
            console.log("insider5");

            _this.underground1 = _this.underground.animations.add('underground');
            _this.underground.animations.play('underground', 1, false);


            target.visible = false;
            target.frame = 0;

            //_this.Numbr_m4.visible = true;

            

            //   if(  _this.Q1_stepplace5.visible == false)
            //   {
            //     _this.Q1_stepplace5.visible = true;
            // }

            // _this.Q1_stepplace5.visible = true;
            _this.rightAns = -4;
            _this.positionX = 475;
            _this.positionY = 357;
            _this.Q1_DropItem(_this.positionX, _this.positionY);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplacem5)) {
            console.log("insider5");

            _this.underground1 = _this.underground.animations.add('underground');
            _this.underground.animations.play('underground', 1, false);
            
            target.visible = false;
            target.frame = 0;

            //_this.Numbr_m5.visible = true;

            

            //   if(  _this.Q1_stepplace5.visible == false)
            //   {
            //     _this.Q1_stepplace5.visible = true;
            // }

            // _this.Q1_stepplace5.visible = true;
            _this.rightAns = -5;
            _this.positionX = 545;
            _this.positionY = 387;
            _this.Q1_DropItem(_this.positinX, _this.positionY);

        }

        target.x = _this.vx;
        target.y = _this.vy;

    },

    Q1_checkOverlap: function (spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },
    Q1_DropItem: function (positionX, positionY) {
        if (_this.Q1_Option == 1) {

            _this.ballanim = _this.add.sprite(_this.positionX, _this.positionY, 'ballanim');
            _this.ballanim.name = "ballanim";
            _this.ballanim.scale.setTo(1, 1);
            _this.ballanim1 = _this.ballanim.animations.add('ballanim');
            //_this.objGroup.add(_this.ballanim);
        } else if (_this.Q1_Option == 2) {
            _this.catanim = _this.add.sprite(_this.positionX, _this.positionY, 'catanim');
            _this.catanim.name = "catanim";
            _this.catanim.scale.setTo(1, 1);
            _this.catanim1 = _this.catanim.animations.add('catanim');
            //_this.objGroup.add(_this.catanim);
        } else if (_this.Q1_Option == 3) {
            _this.doganim = _this.add.sprite(_this.positionX, _this.positionY, 'doganim');
            _this.doganim.name = "doganim";
            _this.doganim.scale.setTo(1, 1);
            _this.doganim1 = _this.doganim.animations.add('doganim');
            //_this.objGroup.add(_this.doganim);
        } else if (_this.Q1_Option == 4) {
            _this.positionY-=10;
            _this.rabbitanim = _this.add.sprite(_this.positionX, _this.positionY, 'rabbitanim');
            _this.rabbitanim.name = "rabbitanim";
            _this.rabbitanim.scale.setTo(1, 1);
            _this.rabbitanim1 = _this.rabbitanim.animations.add('rabbitanim');
            //_this.objGroup.add(_this.rabbitanim);
        } else if (_this.Q1_Option == 5) {
            _this.clothanim = _this.add.sprite(_this.positionX, _this.positionY, 'clothanim');
            _this.clothanim.name = "clothanim";
            _this.clothanim.scale.setTo(1, 1);
            _this.clothanim1 = _this.clothanim.animations.add('clothanim');
            //_this.objGroup.add(_this.clothanim);
        }

    },

    Q4_checkOverlap: function (spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },

    Q1_valButton: function () {

        //var bottomnumpadbg = _this.numGroup.create(0,470,'numpadbg');
        //bottomnumpadbg.name = "numpadbg";

        _this.wrongbtn = _this.numGroup.create(450, 500, 'Numberpad');
        //_this.wrongbtn = _this.add.sprite(_this.x+136,508,'Numberpad');
        _this.wrongbtn.frame = 12;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.7, 0.7);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        //_this.wrongbtn.events.onInputDown.add(_this.Q4_eraseClicked,_this);

        _this.rightbtn = _this.numGroup.create(500, 500, 'Numberpad');
        //_this.rightbtn = _this.add.sprite(_this.x+204,508,'Numberpad');
        _this.rightbtn.frame = 13;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.7, 0.7);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        //_this.rightbtn.events.onInputDown.add(_this.Q4_validatefn,_this);

    },

    Q1_eraseClicked: function (target) {

        if (_this.wrongbtnClicked == false) {
            _this.wrongbtnClicked = true;
            console.log("going inside wrong btn");
            _this.clickSound.play();
            _this.Q1_eraseScreen();
            this.wrongbtnClicked = false;
        }

    },

    Q1_eraseScreen: function () {
        _this.clickSound.play();
        console.log('inside erase fn');
        console.log('item' + _this.Q1_Option);
        console.log('position' + _this.Q1_PosQn);
        if (_this.Q1_Option == 1) {
            _this.ballanim.destroy();

            _this.ball.frame = 1;
            _this.ball.visible = true;
            _this.ball.inputEnabled = true;
            _this.ball.input.useHandCursor = true;
            _this.ball.events.onInputDown.add(_this.Q1_ShelfItemClicked, _this);
        } else if (_this.Q1_Option == 2) {

            _this.catanim.destroy();

            _this.cat.frame = 1;
            _this.cat.visible = true;
            _this.cat.inputEnabled = true;
            _this.cat.input.useHandCursor = true;
            _this.cat.events.onInputDown.add(_this.Q1_ShelfItemClicked, _this);

        } else if (_this.Q1_Option == 3) {
            _this.doganim.destroy();

            _this.dog.frame = 1;
            _this.dog.visible = true;
            _this.dog.inputEnabled = true;
            _this.dog.input.useHandCursor = true;
            _this.dog.events.onInputDown.add(_this.Q1_ShelfItemClicked, _this);

        } else if (_this.Q1_Option == 4) {
            _this.rabbitanim.destroy();

            _this.rabbit.frame = 1;
            _this.rabbit.visible = true;
            _this.rabbit.inputEnabled = true;
            _this.rabbit.input.useHandCursor = true;
            _this.rabbit.events.onInputDown.add(_this.Q1_ShelfItemClicked, _this);

        } else if (_this.Q1_Option == 5) {
            _this.clothanim.destroy();

            _this.cloth.frame = 1;
            _this.cloth.visible = true;
            _this.cloth.inputEnabled = true;
            _this.cloth.input.useHandCursor = true;
            _this.cloth.events.onInputDown.add(_this.Q1_ShelfItemClicked, _this);

        }

        if (_this.rightAns == 1) {
            //_this.Numbr_1.visible = false;
        } else if (_this.rightAns == 2) {
            //_this.Numbr_2.visible = false;
        } else if (_this.rightAns == 3) {
            //_this.Numbr_3.visible = false;
        } else if (_this.rightAns == 4) {
            //_this.Numbr_4.visible = false;
        } else if (_this.rightAns == 5) {
            //_this.Numbr_5.visible = false;
        } else if (_this.rightAns == 0) {
            //_this.Numbr_0.visible = false;
        } else if (_this.rightAns == -1) {
            //_this.Numbr_m1.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -2) {
            //_this.Numbr_m2.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -3) {
            //_this.Numbr_m3.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -4) {
            //_this.Numbr_m4.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -5) {
            //_this.Numbr_m5.visible = false;
            _this.underground.frame = 0;
        }

    },

    Q1_Validation: function (target) {

       
        _this.clickSound.play();

        console.log("stopped");

        
        if (_this.Q1_PosQn == _this.rightAns) {
            
            _this.starActions();
            _this.time.events.add(500, function() { _this.Q1_objectCelebrations(1)});
            
            _this.time.events.add(1500, function() { _this.Q1_objectCelebrations(2)});
             
            _this.time.events.add(3000, _this.Q1_gotonext);

        } else {
            _this.wrongSound.play();
            _this.reset = 3;
            _this.rightbtn.events.onInputDown.add(_this.Q1_Validation, _this);
            _this.wrongbtn.events.onInputDown.add(_this.Q1_eraseClicked, _this);
            _this.rightbtn.inputEnabled = true;
            _this.wrongbtn.inputEnabled = true;
            _this.time.events.add(1000, function () {
                _this.Q1_eraseScreen();
                _this.Q1_EnableVoice();
                _this.Q1_QnOptions();
            });

        }
    },
    
    Q1_objectCelebrations: function(First_or_Second)
    {
             console.log("value of first or second is: ",First_or_Second);
            if (_this.Q1_Option == 1) {
                _this.ballanim.animations.play('ballanim', 60, false);
                    
                _this.ball.frame = 0;
                _this.ball.inputEnabled = false;
                if (First_or_Second == 1)
                {
                    _this.ball_bouncing = document.createElement('audio');
                    _this.ball_bouncingsrc = document.createElement('source');
                    _this.ball_bouncingsrc.setAttribute("src", "sounds/ball_bouncing_falling.wav");
                    _this.ball_bouncing.appendChild(_this.ball_bouncingsrc);
                    _this.ball_bouncing.play();
                }
            } else if (_this.Q1_Option == 2) {
                _this.catanim.animations.play('catanim', 60, false);

                _this.cat.frame = 0;
                _this.cat.inputEnabled = false;

                _this.cat_whinning = document.createElement('audio');
                _this.cat_whinningsrc = document.createElement('source');
                _this.cat_whinningsrc.setAttribute("src", "sounds/cat_whinning.wav");
                _this.cat_whinning.appendChild(_this.cat_whinningsrc);
                _this.cat_whinning.play();
            } else if (_this.Q1_Option == 3) {
                _this.doganim.animations.play('doganim', 60, false);

                _this.dog.frame = 0;
                _this.dog.inputEnabled = false;

                _this.dog_barking = document.createElement('audio');
                _this.dog_barkingsrc = document.createElement('source');
                _this.dog_barkingsrc.setAttribute("src", "sounds/dog_barking.wav");
                _this.dog_barking.appendChild(_this.dog_barkingsrc);
                _this.dog_barking.play();
            } else if (_this.Q1_Option == 4) {
                _this.rabbitanim.animations.play('rabbitanim', 60, false);

                _this.rabbit.frame = 0;
                _this.rabbit.inputEnabled = false;

                _this.rabbit_squeaking = document.createElement('audio');
                _this.rabbit_squeakingsrc = document.createElement('source');
                _this.rabbit_squeakingsrc.setAttribute("src", "sounds/rabbit_squeaking.mp3");
                _this.rabbit_squeaking.appendChild(_this.rabbit_squeakingsrc);
                _this.rabbit_squeaking.play();
            } else if (_this.Q1_Option == 5) {
                _this.clothanim.animations.play('clothanim', 60, false);

                _this.cloth.frame = 0;
                _this.cloth.inputEnabled = false;

                _this.cloth_blowing = document.createElement('audio');
                _this.cloth_blowingsrc = document.createElement('source');
                _this.cloth_blowingsrc.setAttribute("src", "sounds/cloth_blowing.mp3");
                _this.cloth_blowing.appendChild(_this.cloth_blowingsrc);
                _this.cloth_blowing.play();
            }
        
    },
    
    Q1_clearObject: function () {
        console.log('inside clearObject');
        //_this.Q1_destroyObjects();
        if (_this.Q1_Option == 1) {
            console.log('clear ball');
            _this.ballanim1 = _this.add.tween(_this.ballanim).to({
                alpha: 0
            }, 2000, 'Linear', true, 0);
            _this.ballanim1.onComplete.add(_this.Q1_destroyObjects);
            //_this.KFsitting.destroy();
            //_this.Q4_destroyObjects;

        } else if (_this.Q1_Option == 2) {

            _this.catanim2 = _this.add.tween(_this.catanim).to({
                alpha: 0
            }, 2000, 'Linear', true, 0);
            _this.catanim2.onComplete.add(_this.Q1_destroyObjects);
            //_this.Q4_destroyObjects;
            //_this.KF_Eatingfish.destroy();
        } else if (_this.Q1_Option == 3) {

            _this.doganim2 = _this.add.tween(_this.doganim).to({
                alpha: 0
            }, 2000, 'Linear', true, 0);
            _this.doganim2.onComplete.add(_this.Q1_destroyObjects);
            //_this.Q4_destroyObjects;
            //_this.KF_Eatingfish.destroy();
        } else if (_this.Q1_Option == 4) {

            _this.rabbitanim2 = _this.add.tween(_this.rabbitanim).to({
                alpha: 0
            }, 2000, 'Linear', true, 0);
            _this.rabbitanim2.onComplete.add(_this.Q1_destroyObjects);
            //_this.Q4_destroyObjects;
            //_this.KF_Eatingfish.destroy();
        } else if (_this.Q1_Option == 5) {

            _this.clothanim2 = _this.add.tween(_this.clothanim).to({
                alpha: 0
            }, 2000, 'Linear', true, 0);
            _this.clothanim2.onComplete.add(_this.Q1_destroyObjects);
            //_this.Q4_destroyObjects;
            //_this.KF_Eatingfish.destroy();
        }

    },

    Q1_destroyObjects: function () {

        console.log("inside destroy: repeat1: " + _this.repeat1);
        _this.objGroup.destroy();
        //_this.numGroup.destroy();

        //_this.Q4_clearObject();
        _this.count1++;

        if (_this.Q1_Option == 1) {
            _this.ball.visible = true;
        } else if (_this.Q1_Option == 2) {
            _this.cat.visible = true;

        } else if (_this.Q1_Option == 3) {
            _this.dog.visible = true;

        } else if (_this.Q1_Option == 4) {
            _this.rabbit.visible = true;

        } else if (_this.Q1_Option == 5) {
            _this.cloth.visible = true;

        }

        if (_this.rightAns == 1) {
            //_this.Numbr_1.visible = false;
        } else if (_this.rightAns == 2) {
            //_this.Numbr_2.visible = false;
        } else if (_this.rightAns == 3) {
            //_this.Numbr_3.visible = false;
        } else if (_this.rightAns == 4) {
            //_this.Numbr_4.visible = false;
        } else if (_this.rightAns == 5) {
            //_this.Numbr_5.visible = false;
        } else if (_this.rightAns == 0) {
            //_this.Numbr_0.visible = false;
        } else if (_this.rightAns == -1) {
            //_this.Numbr_m1.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -2) {
            //_this.Numbr_m2.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -3) {
            //_this.Numbr_m3.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -4) {
            //_this.Numbr_m4.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -5) {
            //_this.Numbr_m5.visible = false;
            _this.underground.frame = 0;
        }

        // _this.Fish_place.visible = true;
        // _this.KF_place.visible = true;
        // _this.KFsitting.visible = true;
        _this.reset = -1;
        _this.Q1_EnableVoice();
        _this.gotoFirstQuestion();

    },

    Q1_gotonext: function () {

        console.log('inside goto next');
        if (_this.repeat1 < 6) {
            _this.repeat1++;
            _this.Q1_clearObject();
        } else {
            console.log("in the else clause: " + _this.repeat1);
            _this.timer1.stop();
            _this.timer1 = null;
            _this.state.start('numbers_int_1_g6Score');

        }

    },

    update: function (game) {},

    changeQuestion: function () {
        flagGroup1.destroy();
        if (_this.no11 < 6) {
            count++;
            _this.getQuestion();
        } else {
            //console.log("gameEnd");
            _this.stopVoice();
            _this.state.start('level2');
        }
    },

    amplifyMedia: function (mediaElem, multiplier) {
        var context = new(window.AudioContext || window.webkitAudioContext),
        result = {
            context: context,
            source: context.createMediaElementSource(mediaElem),
            gain: context.createGain(),
            media: mediaElem,
            amplify: function (multiplier) {
                result.gain.gain.value = multiplier;
            },
            getAmpLevel: function () {
                return result.gain.gain.value;
            }
        };
        result.source.connect(result.gain);
        result.gain.connect(context.destination);
        result.amplify(multiplier);

        return result;
    },

    Q1_askQ1VoiceQuestion: function (target) {
        console.log('play sound');
        if (_this.speakerbtnClicked == false && _this.rightbtnClicked == false) {
            _this.speakerbtnClicked = true;
            _this.Q1_askVoiceQuestionProcess();

            _this.time.events.add(4000, function () {
                _this.speakerbtnClicked = false;
                _this.Q1_EnableVoice();
            });
        }
    },

    Q1_EnableVoice: function () {

        console.log("SBtn: " + _this.speakerbtnClicked + " RBtn: " + _this.rightbtnClicked);

        if (_this.speakerbtnClicked == false && _this.rightbtnClicked == false) {
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
            _this.speakerbtnClicked = false;

        }

    },

    Q1_askVoiceQuestionProcess: function () {
        _this.getVoice();
        _this.time.events.add(2000, _this.getVoice2);

    },

    getVoice: function () {
        console.log("inside get voice");
        _this.stopVoice();

        _this.genText = document.createElement('audio');
        _this.genTextsrc = document.createElement('source');
        _this.genTextsrc.setAttribute("src", "questionSounds/numbers_int_1_g6/English/place the highlighted object in.mp3");
        _this.genText.appendChild(_this.genTextsrc);
        _this.genText.play();

        //_this.time.events.add(2500, _this.getVoice2);
    },

    getVoice2: function () {

        _this.stopVoice();

        console.log("voice option " + _this.Q1_PosQn);
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        if (_this.Q1_PosQn == 1) {
            _this.src.setAttribute("src", "questionSounds/numbers_int_1_g6/English/plus-one.mp3");

        } else if (_this.Q1_PosQn == 2) {
            _this.src.setAttribute("src", "questionSounds/numbers_int_1_g6/English/plus-two.mp3");

        } else if (_this.Q1_PosQn == 3) {
            _this.src.setAttribute("src", "questionSounds/numbers_int_1_g6/English/plus-three.mp3");

        } else if (_this.Q1_PosQn == 4) {
            _this.src.setAttribute("src", "questionSounds/numbers_int_1_g6/English/plus-four.mp3");

        } else if (_this.Q1_PosQn == 5) {
            _this.src.setAttribute("src", "questionSounds/numbers_int_1_g6/English/plus-five.mp3");

        } else if (_this.Q1_PosQn == 0) {
            _this.src.setAttribute("src", "questionSounds/numbers_int_1_g6/English/zero.mp3");

        } else if (_this.Q1_PosQn == -1) {
            _this.src.setAttribute("src", "questionSounds/numbers_int_1_g6/English/minus-one.mp3");

        } else if (_this.Q1_PosQn == -2) {
            _this.src.setAttribute("src", "questionSounds/numbers_int_1_g6/English/minus-two.mp3");

        } else if (_this.Q1_PosQn == -3) {
            _this.src.setAttribute("src", "questionSounds/numbers_int_1_g6/English/minus-three.mp3");

        } else if (_this.Q1_PosQn == -4) {
            _this.src.setAttribute("src", "questionSounds/numbers_int_1_g6/English/minus-four.mp3");

        } else if (_this.Q1_PosQn == -5) {
            _this.src.setAttribute("src", "questionSounds/numbers_int_1_g6/English/minus-five.mp3");

        }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();

        _this.time.events.add(6000, function () {
            _this.Q1_EnableVoice();
        });
    },

    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializer.tele_end();
    },

    starActions: function () {
        _this.celebrationSound.play();
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim = _this.starAnim.animations.add('star');
        _this.anim.play();

    },

}
