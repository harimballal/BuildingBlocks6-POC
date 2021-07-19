Game.preloader_int_3=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_int_3.prototype={
	preload:function(){
        
        console.log('going to start preload 3');
		
		this.load.atlas('unity2_1_1_backbtn','assets/commonAssets/backbtn.png' ,null,game3Json.backbtnJson);
        this.load.atlas('unity2_1_1a_CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,game3Json.speakerJson);
        this.load.atlas('unity2_1_1a_starAnim','assets/commonAssets/starAnim.png',null,game3Json.starAnimJson);
        this.load.atlas('unity2_1_1a_replay','assets/commonAssets/reply.png' ,null,game3Json.replyJson);
        this.load.atlas('unity2_1_1a_btn','assets/commonAssets/btn.png',null,game3Json.btnJson);
        
        this.load.image('unity2_1_1a_tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('unity2_1_1a_background','assets/commonAssets/bg.png');
        this.load.image('unity2_1_1a_navBar','assets/commonAssets/navBar.png');
        this.load.image('unity2_1_1a_timebg','assets/commonAssets/timebg.png');
        this.load.image('unity2_1_1a_topicOutline','assets/commonAssets/topicOutline.png');
        this.load.image('Transparent','assets/commonAssets/transparent.png'); 
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, game3Json.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, game3Json.nextbtnJson);

        //game assets.
        //this.load.image('unity2_1_1a_BG_01', 'assets/gradeAssets/numbers_int_3_g6/BG_01.png');
        this.load.atlas('level_scale', 'assets/gradeAssets/numbers_int_3_g6/Scaleanim.png', null, game3Json.level_scale); 
        this.load.image('unity2_1_1a_practice','assets/gradeAssets/numbers_int_3_g6/practice.png');
        this.load.image('unity2_1_1a_topic','assets/gradeAssets/numbers_int_3_g6/topic.png');
        //this.load.image('Tick', 'assets/gradeAssets/2.1.1/Tick.png');
        
        
        this.load.atlas('unity2_1_1a_Tick', 'assets/gradeAssets/numbers_int_3_g6/tick.png', null,game3Json.tickJson);
        
        this.load.image('Q3_bg', 'assets/gradeAssets/numbers_int_3_g6/Q3_bg.png');
        //this.load.image('level_scale', 'assets/gradeAssets/numbers_int_3_g6/scale.png');
        
        this.load.atlas('Fish_1', 'assets/gradeAssets/numbers_int_3_g6/Fish 1.png', null, game3Json.Fish_1 );
        
        this.load.image('kingfisher_sitting', 'assets/gradeAssets/numbers_int_3_g6/kingfishersitting.png');
        this.load.atlas('KingFisher_JumpingWater', 'assets/gradeAssets/numbers_int_3_g6/JumpingWater.png', null, game3Json.jumpingWaterJson); 
        this.load.atlas('kingfisher_hovering', 'assets/gradeAssets/numbers_int_3_g6/kingfisherhovering.png', null, game3Json.kingfisherhoveringJson); 
              
        
        this.load.atlas('Numberpad','assets/gradeAssets/numbers_int_3_g6/Numberpad.png',null,game3Json.numberpadJson);
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.atlas('ScreenTextBox','assets/gradeAssets/numbers_int_3_g6/ScreenTextBox.png',null,game3Json.ScreenTextBox);
        
        this.load.atlas('KingFisher_ComingUp', 'assets/gradeAssets/numbers_int_3_g6/ComingUp.png', null, game3Json.comingUpJson); 
        this.load.atlas('KingFisher_Eatingfish', 'assets/gradeAssets/numbers_int_3_g6/EatingFish.png', null, game3Json.eatingfishJson); 
        
        this.load.atlas('Bubbles','assets/gradeAssets/numbers_int_3_g6/Bubbles.png',null,game3Json.bubblesJson);
        this.load.atlas('KingFisher_InsideWater','assets/gradeAssets/numbers_int_3_g6/InsideWater.png',null,game3Json.insideWaterJson);
        this.load.atlas('KingFisher_ComingUpWater','assets/gradeAssets/numbers_int_3_g6/ComingupWater.png',null,game3Json.comingupWaterJson);
        this.load.atlas('SplashWater','assets/gradeAssets/numbers_int_3_g6/SplashWater.png',null,game3Json.SplashWater);
	},

	create:function(){
		
        console.log('going to start Q3');
		this.state.start('numbers_int_3_g6l1');
        
    },
}