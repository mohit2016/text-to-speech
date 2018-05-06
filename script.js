  $(function(){

        var voicelist = responsiveVoice.getVoices()

        for(var i=0; i< voicelist.length; i++){

        }

 $('#gspeech').on('click', function(){

        var text = $('#text').val();
       responsiveVoice.speak("" + text +"" , "UK English Male");
      //responsiveVoice.speak("hello world");
    });

});

