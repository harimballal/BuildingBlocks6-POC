Game.preloader_int_2=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_int_2.prototype={
	preload:function(){
		
		this.load.atlas('unity2_1_1_backbtn','assets/commonAssets/backbtn.png' ,null,game2Json.backbtnJson);
        this.load.atlas('unity2_1_1a_CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,game2Json.speakerJson);
        this.load.atlas('unity2_1_1a_starAnim','assets/commonAssets/starAnim.png',null,game2Json.starAnimJson);
        this.load.atlas('unity2_1_1a_replay','assets/commonAssets/reply.png' ,null,game2Json.replyJson);
        this.load.atlas('unity2_1_1a_btn','assets/commonAssets/btn.png',null,game2Json.btnJson);
        
        this.load.image('unity2_1_1a_tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('unity2_1_1a_background','assets/commonAssets/bg.png');
        this.load.image('unity2_1_1a_navBar','assets/commonAssets/navBar.png');
        this.load.image('unity2_1_1a_timebg','assets/commonAssets/timebg.png');
        this.load.image('unity2_1_1a_topicOutline','assets/commonAssets/topicOutline.png');
        this.load.image('Transparent','assets/commonAssets/transparent.png');   
        
        this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png', null, game2Json.homebtnJson);
        this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png', null, game2Json.nextbtnJson);     
        //Q2

        this.load.atlas('Numberpad','assets/gradeAssets/numbers_int_2_g6/Numberpad.png',null,game2Json.numberpadJson);
        this.load.image('numpadbg','assets/commonAssets/numbg.png');
        this.load.atlas('ScreenTextBox','assets/gradeAssets/numbers_int_2_g6/ScreenTextBox.png',null,game2Json.ScreenTextBox);

        
        this.load.atlas('bottomfloor', 'assets/gradeAssets/numbers_int_2_g6/Bottom floor.png', null, game2Json.bottomfloorJson); 
        this.load.atlas('topfloor', 'assets/gradeAssets/numbers_int_2_g6/Top floor.png', null, game2Json.topfloorJson); 
        
        this.load.atlas('ball', 'assets/gradeAssets/numbers_int_2_g6/Ball.png', null, game2Json.ball); 
        this.load.atlas('cat', 'assets/gradeAssets/numbers_int_2_g6/Cat.png', null, game2Json.cat); 
        this.load.atlas('dog', 'assets/gradeAssets/numbers_int_2_g6/Dog.png', null, game2Json.dog); 
        this.load.atlas('cloth', 'assets/gradeAssets/numbers_int_2_g6/Cloth.png', null, game2Json.cloth); 
        this.load.atlas('rabbit', 'assets/gradeAssets/numbers_int_2_g6/Rabbit.png', null, game2Json.rabbit);


        this.load.image('zn', 'assets/gradeAssets/numbers_int_2_g6/eg.png');
        this.load.image('floorarea', 'assets/gradeAssets/numbers_int_2_g6/floorarea.png');

        this.load.image('Numbr_-1', 'assets/gradeAssets/numbers_int_2_g6/Numbr_-1.png');
        this.load.image('Numbr_-2', 'assets/gradeAssets/numbers_int_2_g6/Numbr_-2.png');
        this.load.image('Numbr_-3', 'assets/gradeAssets/numbers_int_2_g6/Numbr_-3.png');
        this.load.image('Numbr_-4', 'assets/gradeAssets/numbers_int_2_g6/Numbr_-4.png');
        this.load.image('Numbr_-5', 'assets/gradeAssets/numbers_int_2_g6/Numbr_-5.png');
        this.load.image('Numbr_0', 'assets/gradeAssets/numbers_int_2_g6/Numbr_0.png');
        this.load.image('Numbr_1', 'assets/gradeAssets/numbers_int_2_g6/Numbr_1.png');
        this.load.image('Numbr_2', 'assets/gradeAssets/numbers_int_2_g6/Numbr_2.png');
        this.load.image('Numbr_3', 'assets/gradeAssets/numbers_int_2_g6/Numbr_3.png');
        this.load.image('Numbr_4', 'assets/gradeAssets/numbers_int_2_g6/Numbr_4.png');
        this.load.image('Numbr_5', 'assets/gradeAssets/numbers_int_2_g6/Numbr_5.png');

        this.load.atlas('doganim', 'assets/gradeAssets/numbers_int_2_g6/Dog anim.png', null, game2Json.doganim); 
        this.load.atlas('catanim', 'assets/gradeAssets/numbers_int_2_g6/Cat anim.png', null, game2Json.catanim); 
        this.load.atlas('ballanim', 'assets/gradeAssets/numbers_int_2_g6/Ball anim.png', null, game2Json.ballanim); 
        this.load.atlas('clothanim', 'assets/gradeAssets/numbers_int_2_g6/Cloth anim.png', null, game2Json.clothanim); 
        this.load.atlas('rabbitanim', 'assets/gradeAssets/numbers_int_2_g6/Rabbit anim.png', null, game2Json.rabbitanim); 
        

	},

	create:function(){
		
		this.state.start('numbers_int_2_g6l1');
        
    },
}