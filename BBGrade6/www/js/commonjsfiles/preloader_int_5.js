Game.preloader_int_5=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_int_5.prototype={
	preload:function(){
		
		    this.load.atlas('unity2_1_1_backbtn','assets/commonAssets/backbtn.png' ,null,game5Json.backbtnJson);
        this.load.atlas('unity2_1_1a_CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,game5Json.speakerJson);
        this.load.atlas('unity2_1_1a_starAnim','assets/commonAssets/starAnim.png',null,game5Json.starAnimJson);
        this.load.atlas('unity2_1_1a_replay','assets/commonAssets/reply.png' ,null,game5Json.replyJson);
        this.load.atlas('unity2_1_1a_btn','assets/commonAssets/btn.png',null,game5Json.btnJson);
        
        this.load.image('unity2_1_1a_tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('unity2_1_1a_background','assets/commonAssets/bg.png');
        this.load.image('unity2_1_1a_navBar','assets/commonAssets/navBar.png');
        this.load.image('unity2_1_1a_timebg','assets/commonAssets/timebg.png');
        this.load.image('unity2_1_1a_topicOutline','assets/commonAssets/topicOutline.png');
        this.load.image('Transparent','assets/commonAssets/transparent.png'); 

        //game assets.
        //this.load.image('unity2_1_1a_BG_01', 'assets/gradeAssets/numbers_int_5_g6/BG_01.png');
        this.load.image('unity2_1_1a_practice','assets/gradeAssets/numbers_int_5_g6/practice.png');
        this.load.image('unity2_1_1a_topic','assets/gradeAssets/numbers_int_5_g6/topic.png');
        //this.load.image('Tick', 'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.atlas('unity2_1_1a_Tick', 'assets/gradeAssets/numbers_int_5_g6/tick.png', null,game5Json.tickJson);
        
        this.load.image('Q5_bg', 'assets/gradeAssets/numbers_int_5_g6/Q3_bg.png');
        this.load.image('level_scale', 'assets/gradeAssets/numbers_int_5_g6/Scale.png');

        this.load.atlas('Fish_1', 'assets/gradeAssets/numbers_int_5_g6/Fish_1.png', null, game5Json.fish_1Json);
        this.load.atlas('Fish_2', 'assets/gradeAssets/numbers_int_5_g6/Fish_2.png', null, game5Json.fish_2Json);
        this.load.atlas('Fish_3', 'assets/gradeAssets/numbers_int_5_g6/Fish_3.png', null, game5Json.fish_3Json);

        this.load.image('swimselect1', 'assets/gradeAssets/numbers_int_5_g6/swimselect1.png');
        this.load.image('swimselect2', 'assets/gradeAssets/numbers_int_5_g6/swimselect2.png');
        this.load.image('swimselect3', 'assets/gradeAssets/numbers_int_5_g6/swimselect3.png');
        
        this.load.image('kingfisher_sitting1', 'assets/gradeAssets/numbers_int_5_g6/kingfishersitting1.png');
        this.load.image('kingfisher_sitting2', 'assets/gradeAssets/numbers_int_5_g6/kingfishersitting2.png');
        this.load.image('kingfisher_sitting3', 'assets/gradeAssets/numbers_int_5_g6/kingfishersitting3.png');
        
        this.load.image('sitselect1', 'assets/gradeAssets/numbers_int_5_g6/sitselect1.png');
        this.load.image('sitselect2', 'assets/gradeAssets/numbers_int_5_g6/sitselect2.png');
        this.load.image('sitselect3', 'assets/gradeAssets/numbers_int_5_g6/sitselect3.png');        
        
        this.load.atlas('KingFisher_JumpingWater1', 'assets/gradeAssets/numbers_int_5_g6/JumpingWater1.png', null, game5Json.jumpingWaterJson1);
        this.load.atlas('KingFisher_JumpingWater2', 'assets/gradeAssets/numbers_int_5_g6/JumpingWater2.png', null, game5Json.jumpingWaterJson2); 
        this.load.atlas('KingFisher_JumpingWater3', 'assets/gradeAssets/numbers_int_5_g6/JumpingWater3.png', null, game5Json.jumpingWaterJson3); 
                
        this.load.atlas('KingFisher_InsideWater','assets/gradeAssets/numbers_int_5_g6/InsideWater.png',null,game5Json.insideWaterJson);
        
        this.load.atlas('KingFisher_ComingUpWater1','assets/gradeAssets/numbers_int_5_g6/ComingupWater1.png',null,game5Json.comingupWaterJson1);
        this.load.atlas('KingFisher_ComingUpWater2','assets/gradeAssets/numbers_int_5_g6/ComingupWater2.png',null,game5Json.comingupWaterJson2);
        this.load.atlas('KingFisher_ComingUpWater3','assets/gradeAssets/numbers_int_5_g6/ComingupWater3.png',null,game5Json.comingupWaterJson3);
        
        this.load.atlas('KingFisher_ComingUp1', 'assets/gradeAssets/numbers_int_5_g6/ComingUp1.png', null, game5Json.comingUpJson1);
        this.load.atlas('KingFisher_ComingUp2', 'assets/gradeAssets/numbers_int_5_g6/ComingUp2.png', null, game5Json.comingUpJson2);
        this.load.atlas('KingFisher_ComingUp3', 'assets/gradeAssets/numbers_int_5_g6/ComingUp3.png', null, game5Json.comingUpJson3);
        
        this.load.atlas('KingFisher_Eatingfish1', 'assets/gradeAssets/numbers_int_5_g6/EatingFish1.png', null, game5Json.eatingfishJson1); 
        this.load.atlas('KingFisher_Eatingfish2', 'assets/gradeAssets/numbers_int_5_g6/EatingFish2.png', null, game5Json.eatingfishJson2);         
        this.load.atlas('KingFisher_Eatingfish3', 'assets/gradeAssets/numbers_int_5_g6/EatingFish3.png', null, game5Json.eatingfishJson3);    
        
        this.load.atlas('SplashWater','assets/gradeAssets/numbers_int_5_g6/SplashWater.png',null,game5Json.SplashWater);

        this.load.image('flyselect1', 'assets/gradeAssets/numbers_int_5_g6/flyselect1.png');
        this.load.image('flyselect2', 'assets/gradeAssets/numbers_int_5_g6/flyselect2.png');
        this.load.image('flyselect3', 'assets/gradeAssets/numbers_int_5_g6/flyselect3.png');      
    
        this.load.atlas('kingfisher_hovering1', 'assets/gradeAssets/numbers_int_5_g6/kingfisherhovering1.png', null, game5Json.kingfisherhoveringJson);       
        this.load.atlas('kingfisher_hovering2', 'assets/gradeAssets/numbers_int_5_g6/kingfisherhovering2.png', null, game5Json.kingfisherhoveringJson); 
        this.load.atlas('kingfisher_hovering3', 'assets/gradeAssets/numbers_int_5_g6/kingfisherhovering3.png', null, game5Json.kingfisherhoveringJson); 
        
        this.load.atlas('Numberpad','assets/gradeAssets/numbers_int_5_g6/Numberpad.png',null,game5Json.numberpadJson);
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.atlas('ScreenTextBox','assets/gradeAssets/numbers_int_5_g6/ScreenTextBox.png',null,game5Json.ScreenTextBox);
        
        this.load.atlas('KingFisher_ComingUp', 'assets/gradeAssets/numbers_int_5_g6/ComingUp.png', null, game5Json.comingUpJson); 
        this.load.atlas('KingFisher_Eatingfish', 'assets/gradeAssets/numbers_int_5_g6/EatingFish.png', null, game5Json.eatingfishJson); 
        this.load.atlas('Bubbles', 'assets/gradeAssets/numbers_int_5_g6/Bubble anim.png', null, game5Json.bubbleAnimJSon);  
        
        this.load.image('HiddenZone', 'assets/gradeAssets/numbers_int_5_g6/Hiddenzone.png');
        
        
	},

	create:function(){
		
		this.state.start('numbers_int_5_g6l1');
        
    },
}