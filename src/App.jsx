 import React, { useState } from 'react';
import './App.css'; 
//All pictures are from the pexels website. I added text and drawings to turn them into memes.
 
import duck from './assets/duck.jpg'; 
import serotonin from './assets/serotonin.jpg'
import raccoon from './assets/raccoon.jpg'
import water from './assets/water.jpg'
import snail from './assets/snail.jpg'
import antarctica from './assets/antarctica.jpg'
import bear from './assets/bear.jpg'
import cat from './assets/cat.jpg'
import frog from './assets/frog.jpg'
import toaster from './assets/toaster.jpg'
import pillows from './assets/pillows.jpg'
import broccoli from './assets/broccoli.jpg'
//BGM is from the pixabay website. Music by Viacheslav Starostin from Pixabay.
import funny_music from './assets/funny_music.mp3'
 

function App() {
  //Each question as its respective meme. 
  const questions_and_memes = [
    {question: "WoUlD You fIGHt 1 DuCk-SIZed lAwyEr or 100 LaWyer-SizED dUCKs?????!!!!", meme: duck},
    {question: "wILL FIgHTiNg God GIVE YoU sErOtonIN?????", meme: serotonin},
    {question: "whAt HAppeNs If you throw 3 rACCOONS at goD???!!!", meme: raccoon},
    {question: "If CoFfEE is FOR THe StrOng, ThEN dOES WaTeR MakE YOu WeaK?!!!", meme: water},
    {question: "dOES DatiNg SnAIlS MEAN YOU HatE ThE frEnCh??!!", meme: snail},
    {question: "A wOrM iN ANtaRCTICA kNOWs yOUR Darkest thoUGhTs. NOW WhAt????!", meme: antarctica},
    {question: "A BEar tOoK oVEr Your coUNtRY. doeS It do jaZZ oR balleT??!!!", meme: bear},
    {question: "wHy dON't caTs spin Like topS?!!!!", meme: cat},
    {question: "HOw mUCh do wE pAY a fROg tO DO YOuR TAXeS??!!!", meme: frog},
    {question: "iF YOUR tOAsTeR StArTs sEnDiNg you eMaILs, dO yOu HaVE tO pAy foR iTs iNtErNeT?", meme: toaster},
    {question: "dOeS YouR pILLoW gEt OfFeNdEd iF YOu bUY a nEW oNe?!", meme: pillows},
    {question: "iF A ZoMbIE aPoCaLyPsE hApPeNs, cAn yOu CoNvInCe tHEm To OnLy eAt BrOcCoLi?!", meme: broccoli}
  ];


  const [current_question_index, set_question_index] = useState(0);
  const [show_meme, set_show_meme] = useState(false);
  const [show_title_page, set_show_title_page] = useState(true);
  const [show_toggle_bgm_page, set_show_toggle_bgm_page] = useState(true);

  const bgm = new Audio(funny_music);
  bgm.loop = true;

 
  /*
   If the screen shows a question and the user clicks, it will then show the question's corresponding meme. 
   If the screen shows a meme and the user clicks, it wil show the next question.
  */
  
  const behavior_on_click = () =>{

    if(!show_title_page && !show_toggle_bgm_page){
      if(!show_meme){
        set_show_meme(true);
      }else{
        set_show_meme(false);
        set_question_index(current_question_index => (current_question_index + 1) % questions_and_memes.length);
      }
       
    }
       
      if(show_title_page){
        set_show_title_page(false);
        
      }else if(!show_title_page && show_toggle_bgm_page){
        set_show_toggle_bgm_page(false);
      }
  }
 
  const appBackgroundStyle = {
    backgroundImage: show_meme ? `url(${questions_and_memes[current_question_index].meme})`
      : 'none',
    backgroundSize: 'contain',
     backgroundRepeat: 'no-repeat',
     backgroundPosition: 'center',
     backgroundColor: show_meme && 'black'
  }

  const play_bgm = () =>{
    bgm.play();
  }
 
 

  return (
 
    <div className="div_size" onClick={behavior_on_click} style={appBackgroundStyle}>
      
      {show_title_page && (
        <>
          <div className = "div_title_page">
              <h1 className="center-text-h1">Welcome to LAuGh YoU hUmAn!!!</h1>
              
              <h2 className = "vibe_tap_girlboss">Just vibe-tap-girlboss~~</h2>
          </div>
           
        </>
      )}
      {(!show_title_page && show_toggle_bgm_page) && (
        <>
          <div className = "div_title_page">
            <h1 className="center-text-h1">You can add funny background music that will loop...FOREVER!!!!! >:3 </h1>
            <button className = "button" onClick = {play_bgm}> aDd FuNnY mUsIc NoW!!! </button>
            <button className = "button"> eW nO!!!! >:((( </button>
          </div>
           
        </>
      )}
      {(!show_meme && !show_title_page && !show_toggle_bgm_page) && (
        <>
          <h1 className="center-text-h1">LAuGh YoU hUmAn!!!</h1>
   
          <div className="div_question_space">
            <h1 className="questions-h1">
              {questions_and_memes[current_question_index].question}
              
            </h1>

            <h2 className = "vibe_tap_girlboss">No need to answer. Just vibe-tap-girlboss~~</h2>
         

          </div>
        </>
      )}
    </div>
  );
}

export default App;