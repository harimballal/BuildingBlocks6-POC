Game.preloader_int_4=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_int_4.prototype={
	preload:function(){
		
		this.load.atlas('unity2_1_1_backbtn','assets/commonAssets/backbtn.png' ,null,game4Json.backbtnJson);
        this.load.atlas('unity2_1_1a_CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,game4Json.speakerJson);
        this.load.atlas('unity2_1_1a_starAnim','assets/commonAssets/starAnim.png',null,game4Json.starAnimJson);
        this.load.atlas('unity2_1_1a_replay','assets/commonAssets/reply.png' ,null,game4Json.replyJson);
        this.load.atlas('unity2_1_1a_btn','assets/commonAssets/btn.png',null,game4Json.btnJson);
        
        this.load.image('unity2_1_1a_tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('unity2_1_1a_background','assets/commonAssets/bg.png');
        this.load.image('unity2_1_1a_navBar','assets/commonAssets/navBar.png');
        this.load.image('unity2_1_1a_timebg','assets/commonAssets/timebg.png');
        this.load.image('unity2_1_1a_topicOutline','assets/commonAssets/topicOutline.png');

        //game assets.
        //this.load.image('unity2_1_1a_BG_01', 'assets/gradeAssets/numbers_int_4_g6/BG_01.png');
        this.load.image('unity2_1_1a_practice','assets/gradeAssets/numbers_int_4_g6/practice.png');
        this.load.image('unity2_1_1a_topic','assets/gradeAssets/numbers_int_4_g6/topic.png');
        //this.load.image('Tick', 'assets/gradeAssets/2.1.1/Tick.png');
        

        console.log('///////////////////////this is loading preloader of game 4///////////////////////');
        this.load.atlas('unity2_1_1a_Tick', 'assets/gradeAssets/numbers_int_4_g6/tick.png', null,game4Json.tickJson);
            
        
        this.load.image('Q4_bg', 'assets/gradeAssets/numbers_int_4_g6/Bg.png');
       // this.load.image('level_scale', 'assets/gradeAssets/numbers_int_4_g6/Scale.png');
        
        this.load.atlas('level_scale', 'assets/gradeAssets/numbers_int_4_g6/Scaleanim.png', null, game4Json.level_scale); 
        
        this.load.atlas('Fish_1', 'assets/gradeAssets/numbers_int_4_g6/Fish 1.png', null, game4Json.Fish_1 );
        this.load.image('Fish_1_image', 'assets/gradeAssets/numbers_int_4_g6/Fish_1_image.png');
        this.load.image('nest', 'assets/gradeAssets/numbers_int_4_g6/number.png');
        this.load.image('pondplace', 'assets/gradeAssets/numbers_int_4_g6/timebg.png');
        this.load.image('zone', 'assets/gradeAssets/numbers_int_4_g6/Hiddenzone.png');
        
        this.load.image('kingfisher_sitting', 'assets/gradeAssets/numbers_int_4_g6/kingfishersitting.png');
        this.load.atlas('KingFisher_JumpingWater', 'assets/gradeAssets/numbers_int_4_g6/JumpingWater.png', null, game4Json.jumpingWaterJson); 
        this.load.atlas('kingfisher_hovering', 'assets/gradeAssets/numbers_int_4_g6/kingfisherhovering.png', null, game4Json.kingfisherhoveringJson); 
              
        
        this.load.atlas('Numberpad','assets/gradeAssets/numbers_int_4_g6/Numberpad.png',null,game4Json.numberpadJson);
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.atlas('ScreenTextBox','assets/gradeAssets/numbers_int_4_g6/ScreenTextBox.png',null,game4Json.ScreenTextBox);
        
        this.load.atlas('KingFisher_ComingUp', 'assets/gradeAssets/numbers_int_4_g6/ComingUp.png', null, game4Json.comingUpJson); 
        this.load.atlas('KingFisher_Eatingfish', 'assets/gradeAssets/numbers_int_4_g6/EatingFish.png', null, game4Json.eatingfishJson);
        this.load.atlas('Bubbles', 'assets/gradeAssets/numbers_int_4_g6/Bubble anim.png', null, game4Json.bubbleAnimJSon);  
        
        
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, game4Json.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, game4Json.nextbtnJson);
        this.load.atlas('KingFisher_InsideWater','assets/gradeAssets/numbers_int_4_g6/InsideWater.png',null,game4Json.insideWaterJson);
        this.load.atlas('KingFisher_ComingUpWater','assets/gradeAssets/numbers_int_4_g6/ComingupWater.png',null,game4Json.comingupWaterJson);
        this.load.atlas('SplashWater','assets/gradeAssets/numbers_int_4_g6/SplashWater.png',null,game4Json.SplashWater);

        this.load.atlas('Nest','assets/gradeAssets/numbers_int_4_g6/Nest.png',null,game4Json.NestJson);
	},

	create:function(){
		
		this.state.start('numbers_int_4_g6l1');
        
    },
}