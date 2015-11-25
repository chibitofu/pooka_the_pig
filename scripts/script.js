$(document).ready(function(){
//Preloaded functions.//

  $('#restart').off().on('click', function(){
    playerScore = 0;
    $('#mainText').show();
    $('.scoreBox').text(playerScore);
    $('#mainText').text("");
    $('.startGame').css({'display' : "inline-block"});
    $('#optionOne').prop('disabled', true);
    $('#optionTwo').prop('disabled', true);
    $('#optionOne').text("Pooka the Pig");
    $('#optionTwo').text("Adventures in Hawaii");
    $('#optionOne').css({'background-image' : 'url(http://i.imgur.com/kTQOpBQ.gif)'});
    $('#optionTwo').css({'background-image' : 'url(http://i.imgur.com/HAe2siu.gif)'});
    $('.continue').css({'display' : 'none'});
    $('#mainText').css({'background-image' : 'url(http://i.imgur.com/YG9U9X1.gif)'});
    $('.versusModeStart').show();
    $('.versusScoringArea').hide();
    $('.versusModeFight').hide();
    $('#versusMoves').hide();
    $('.fightStart').hide();
    $('.fightKey').hide();
    $('.playerMove').hide();
    $('.scoreBoard').hide();
    $('.scoringArea').show();
    $('.tiles').hide();
    $('.bossPoints').text("Boss" + " " + bossPoints);
    $('.playerPoints').text("Player" + " " + playerPoints);
    $('#restart').css({'display' : 'none'});
    playerPoints = 0;
    bossPoints = 0;
    startGame();
  });

    startGame();
    versusModeStartButton();

});
//End of preloaded functions.//

var playerScore = 0;

//Boss Battle Variables//
var playerMove;

var bossMove;

var rounds = 3;

var playerPoints = 0;

var bossPoints = 0;

var victor;

var currentBossRoom;

var fightMode;

//VersusMode Variables.//
var versusModeMain = "<p>Versus Mode</p>";

var timeOutIdOne;
var timeOutIdTwo;
var timeOutIdThree;
var timeOutIdFour;

//Tile Set Variables. Mahalo to Loraine Kanervisto for help with story writing and editing.//
//Tile 1A//
var oneAmain = "Pooka the Pig is in trouble! Boar hunters are about to attack his village. He's journeying into Nu'uanu Valley to get a wish granted from the goddess Pele, so that he can save his friends and family.";
var oneAone = "There are hog tracks on this path! Perhaps you can find an ally...";
var oneAtwo = "Head directly into the misty valley...";

//Tile 1B//
var oneBmain = '"Pele is MY girlfriend! No other hog may set eyes upon her!" yells Kamapua\'a, the half-man, half-pig creature. He challenges you to the ancient game of Jan Ken Po.';
var oneBone = "BOSS FIGHT!";
var oneBtwo = "BOSS FIGHT!";

//Tile 1B Win//
var oneBwinMain = 'Kamapua\'a allows you to continue through Nu\'uanu Valley. "Can you deliver this love letter to Pele?" he asks, slipping you an envelope.';
var oneBwinOne = "";
var oneBwinTwo = "";

//Tile 1C Bad End//
var oneCmain = "Pele's spurned lover, Kamapua'a, curses you and transforms you into a kukui tree. He carves 'I <3 Pele' onto your trunk and he wanders off to find her.";
var oneCone = "The End";
var oneCtwo = "The End";

//Tile 2A//
var twoAmain = "What delicious smells! The fragrance of banana and fish is in the air, and Pooka can see lights and hear chanting in the distance.";
var twoAone = "Investigate and see if the folks ahead can help...";
var twoAtwo = "2B Pooka doesn't want any trouble. Take a side path into the trees...";

//Tile 2B//
var twoBmain = "You've stumbled into a heiau, a Hawaiian burial site. It is completely silent here. The hairs on your ears stand up.";
var twoBone = "Jump over the stone wall and get out of the heiau...";
var twoBtwo = "It looks like the valley ends shortly. Rush through the heiau as quickly as possible...";

//Tile 2C//
var twoCmain = "Ghostly torches and ominous chants approach. The night marchers are upon you! According to ancient pig folklore, the only way past these warrior spirits is to beat them at a game of Jan Ken Po.";
var twoCone = "BOSS FIGHT!";
var twoCtwo = "BOSS FIGHT!";

//Tile 2C Win//
var twoCwinMain = "You have defeated the night marchers, but they banish you from the valley.";
var towCwinOne = "";
var twoCwinTwo = "";

//Tile 2D//
var twoDmain = "The night marchers slaughter you and eat your ghost bacon.";
var twoDone = "The End";
var twoDtwo = "The End";

//Tile 3A//
var threeAmain = "You've arrived in the Menuhune village! They agree to help you if you win the ancient game of Jan Ken Po!";
var threeAone = "BOSS FIGHT!";
var threeAtwo = "BOSS FIGHT!";

//Tile 3A Win//
var threeAwinMain = "The Menehune bless your journey and show you a hidden valley path that will take you closer to Pele.";
var threeAwinOne = "";
var threeAwinTwo = "";

//Tile 3A Lose//
var threeAloseMain = "You lost the ancient game of Jan Ken Po! The village chefs come out wielding knives and chase after you. You squeal and flee into the darkness of the night.";
var threeAloseOne = "You Lose";
var threeAloseTwo = "You Lose";

//Tile 3B//
var threeBmain = "You come across a rushing stream. The only way forward is to cross the stream, but it's dark out and the waters look rough.";
var threeBone = "Jump into the stream and try to cross it....";
var threeBtwo = "Turn around and rush back to your village. Try to save your family before the hunters arrive...";

//Tile 3C//
var threeCmain = "You can't fight the currents, and the stream goes over a cliff. You plummet down the waterfall, never to see your family again.";
var threeCone = "The End";
var threeCtwo = "The End";

//Tile 4A//
var fourAmain = "You're almost through the valley. In the distance, you hear the squealing of pigs and see smoke rising in the direction of your village!";
var fourAone = "Be steadfast in your journey and try to find Pele...";
var fourAtwo = "Run toward your village and try to save your family...";

//Tile 4B//
var fourBmain = "You arrive at your village just in time to save your family. However, the village is destroyed and you must find a new home.";
var fourBone = "The End";
var fourBtwo = "The End";

//Tile 5A//
var fiveAmain = "Pele appears before you. She is beautiful and fearsome. Her eyes are like burning coals and her black hair flows over her shoulders. She agrees to grant you a wish if you can complete your task.";
var fiveAone = "BOSS FIGHT!";
var fiveAtwo = "BOSS FIGHT!";

//Tile 5A Win//
var fiveAwinMain = "Pele grants your village protection so that the hunters can never attack again";
var fiveAwinOne = "Congratulations!";
var fiveAwinTwo = "Congratulations!";

//Tile 5A Lose//
var fiveAloseMain = "You have lost to Pele. She transforms you into a spirit. Pooka the Ghost Pig must wander Nu'uanu valley forever, in search of lost travelers.";
var fiveAloseOne = "The End";
var fiveAloseTwo = "The End";

function startGame(){
  $('.startGame').off().on('click', function(){
    $('#optionOne').prop('disabled', false);
    $('#optionTwo').prop('disabled', false);
    $('#mainText').html(oneAmain);
    $('#optionOne').text(oneAone);
    $('#optionTwo').text(oneAtwo);
    $('#restart').css({'display' : 'inline-block'});
    $('#mainText').css({'background-image' : "none"});
    $('.startGame').hide();
    $('.versusModeStart').hide();
    oneA();
  });
}

function oneA(){
  if ($('#optionOne').off().on('click', function(){
    $('#optionOne').prop('disabled', false);
    $('#optionTwo').prop('disabled', false);
    $('#mainText').text(oneBmain);
    $('#optionOne').text(oneBone);
    $('#optionTwo').text(oneBtwo);
    $('.scoreBox').text(playerScore -= 5);
    oneB();
    return;
  })){
  } if ($('#optionTwo').off().on('click', function(){
    $('#optionOne').prop('disabled', false);
    $('#optionTwo').prop('disabled', false);
    $('#mainText').text(twoAmain);
    $('#optionOne').text(twoAone);
    $('#optionTwo').text(twoAtwo);
    $('.scoreBox').text(playerScore += 15);
    twoA();
    return;
  }));
}

//Room OneB if no boss in the room.//
// function oneB(){
//   if ($('#optionOne').off().on('click', function(){
//     $('#optionOne').prop('disabled', false);
//     $('#optionTwo').prop('disabled', false);
//     $('#mainText').text(oneCmain);
//     $('#optionOne').text(oneCone);
//     $('#optionTwo').text(oneCtwo);
//     $('#scoreBox').text(playerScore -= 80080);
//     oneC();
//     return;
//   })){
//   } if ($('#optionTwo').off().on('click', function(){
//     $('#optionOne').prop('disabled', false);
//     $('#optionTwo').prop('disabled', false);
//     $('#mainText').text(threeBmain);
//     $('#optionOne').text(threeBone);
//     $('#optionTwo').text(threeBtwo);
//     $('#scoreBox').text(playerScore += 18);
//     threeB();
//     return;
//   }));
// }

//Boss Room//
function oneB(){
  $('.fightStart').css({"display": "inline-block"});
  $('#mainText').text(oneBmain);
  $('#optionOne').prop('disabled', true);
  $('#optionTwo').prop('disabled', true);
  $('#optionOne').css({'background-image' : 'url(http://i.imgur.com/GvpUFrF.gif)'});
  $('#optionTwo').css({'background-image' : 'url(http://i.imgur.com/GvpUFrF.gif)'});
  $('.fightStart').off().on('click', function(){
  $('#optionOne').text("Boss Moves");
  $('#optionTwo').text("Player Moves");
  $('#mainText').text("");
  $('#mainText').css({'background-image' : 'url(http://i.imgur.com/YbfNdvJ.gif)'});
  currentBossRoom = "oneBboss";
  startFight();
  });
}

//If you win the boss room in 1B.//
function oneBwin(){
  $('.playerMove').css({"display" : "none"});
  $('.fightKey').css({'display' : "none"});
  $('.scoreBoard').css({'display' : "none"});
  $('.continue').css({"display" : "inline-block"});
  $('#optionOne').css({'background-image' : 'url(http://i.imgur.com/0wwnnax.gif)'});
  $('#optionTwo').css({'background-image' : 'url(http://i.imgur.com/zyFW94Z.gif)'});
  $('#mainText').text(oneBwinMain);
  $('#optionOne').text(oneBwinOne);
  $('#optionTwo').text(oneBwinTwo);
  $('.scoreBox').text(playerScore += 48);

  $('.continue').off().on('click', function(){
    $('#optionOne').css({'background-image' : 'url(http://i.imgur.com/kTQOpBQ.gif)'});
    $('#optionTwo').css({'background-image' : 'url(http://i.imgur.com/HAe2siu.gif)'});
    $('#optionOne').prop('disabled', false);
    $('#optionTwo').prop('disabled', false);
    $('#mainText').text(threeBmain);
    $('#optionOne').text(threeBone);
    $('#optionTwo').text(threeBtwo);
    threeB();
  });
}

//Bad Ending//
function oneC(){
  $('.playerMove').css({"display" : "none"});
  $('.fightKey').css({'display' : "none"});
  $('.scoreBoard').css({'display' : "none"});
  $('.scoreBox').text(playerScore -= 80080);
  $('#optionOne').prop('disabled', true);
  $('#optionTwo').prop('disabled', true);
  $('#mainText').text(oneCmain);
  $('#optionOne').text(oneCone);
  $('#optionTwo').text(oneCtwo);
  return;
}

function twoA(){
  if ($('#optionOne').off().on('click', function(){
    $('#optionOne').prop('disabled', false);
    $('#optionTwo').prop('disabled', false);
    $('#mainText').text(threeAmain);
    $('#optionOne').text(threeAone);
    $('#optionTwo').text(threeAtwo);
    $('.scoreBox').text(playerScore += 25);
    threeA();
    return;
  })){
  } if ($('#optionTwo').off().on('click', function(){
    $('#optionOne').prop('disabled', false);
    $('#optionTwo').prop('disabled', false);
    $('#mainText').text(twoBmain);
    $('#optionOne').text(twoBone);
    $('#optionTwo').text(twoBtwo);
    $('.scoreBox').text(playerScore -= 15);
    twoB();
    return;
  }));
}

function twoB(){
  if ($('#optionOne').off().on('click', function(){
    $('#optionOne').prop('disabled', false);
    $('#optionTwo').prop('disabled', false);
    $('#mainText').text(fourAmain);
    $('#optionOne').text(fourAone);
    $('#optionTwo').text(fourAtwo);
    $('.scoreBox').text(playerScore += 26);
    fourA();
    return;
  })){
  } if ($('#optionTwo').off().on('click', function(){
    $('#optionOne').prop('disabled', false);
    $('#optionTwo').prop('disabled', false);
    $('#mainText').text(twoCmain);
    $('#optionOne').text(twoCone);
    $('#optionTwo').text(twoCtwo);
    $('.scoreBox').text(playerScore -= 27);
    twoC();
    return;
  }));
  return;
}

//Room twoC if no bosss in the room.//
// function twoC(){
//   if ($('#optionOne').off().on('click', function(){
//     $('#optionOne').prop('disabled', false);
//     $('#optionTwo').prop('disabled', false);
//     $('#mainText').text(fourBmain);
//     $('#optionOne').text(fourBone);
//     $('#optionTwo').text(fourBtwo);
//     $('#scoreBox').text(playerScore += 28);
//     fourB();
//     return;
//   }))
//   if ($('#optionTwo').off().on('click', function(){
//     $('#optionOne').prop('disabled', false);
//     $('#optionTwo').prop('disabled', false);
//     $('#mainText').text(twoDmain);
//     $('#optionOne').text(twoDone);
//     $('#optionTwo').text(twoDtwo);
//     $('#scoreBox').text(playerScore -= 377);
//     twoD();
//     return;
//   }));
//   return;
// }

//Boss Room//
function twoC(){
  $('.fightStart').css({"display": "inline-block"});
  $('#mainText').text(twoCmain);
  $('#optionOne').prop('disabled', true);
  $('#optionTwo').prop('disabled', true);

  $('.fightStart').off().on('click', function(){
    $('#optionOne').text("Boss Moves");
    $('#optionTwo').text("Player Moves");
    $('#mainText').text("");
    $('#mainText').css({'background-image' : 'url(http://i.imgur.com/f51jAoK.gif)'});
    $('#optionOne').css({'background-image' : 'url(http://i.imgur.com/GvpUFrF.gif)'});
    $('#optionTwo').css({'background-image' : 'url(http://i.imgur.com/GvpUFrF.gif)'});
    currentBossRoom = "twoCboss";
    startFight();
  });
}

//If you win the boss room in 2C.//
function twoCwin(){
  $('.continue').show();
  $('.playerMove').css({"display" : "none"});
  $('.fightKey').css({'display' : "none"});
  $('.scoreBoard').css({'display' : "none"});
  $('#mainText').css({'background-image' : 'none'});
  $('#optionOne').css({'background-image' : 'url(http://i.imgur.com/0wwnnax.gif)'});
  $('#optionTwo').css({'background-image' : 'url(http://i.imgur.com/zyFW94Z.gif)'});
  $('#mainText').text(twoCwinMain);
  $('#optionOne').text("");
  $('#optionTwo').text("");
  $('.scoreBox').text(playerScore += 148);

  $('.continue').off().on('click', function(){
    $('#optionOne').css({'background-image' : 'url(http://i.imgur.com/kTQOpBQ.gif)'});
    $('#optionTwo').css({'background-image' : 'url(http://i.imgur.com/HAe2siu.gif)'});
    $('#optionOne').prop('disabled', false);
    $('#optionTwo').prop('disabled', false);
    $('#mainText').text(fourBmain);
    $('#optionOne').text(fourBone);
    $('#optionTwo').text(fourBtwo);
    $('.continue').hide();
    fourB();
  });
}

//Bad Ending//
function twoD(){
    $('#optionOne').prop('disabled', true);
    $('#optionTwo').prop('disabled', true);
    $('#mainText').text(twoDmain);
    $('#optionOne').text(twoDone);
    $('#optionTwo').text(twoDtwo);
}

//Room threeA if no boss in the room.//
// function threeA(){
//   if ($('#optionOne').off().on('click', function(){
//     $('#optionOne').prop('disabled', false);
//     $('#optionTwo').prop('disabled', false);
//     $('#mainText').text(threeBmain);
//     $('#optionOne').text(threeBone);
//     $('#optionTwo').text(threeBtwo);
//     $('#scoreBox').text(playerScore -= 23);
//     threeB();
//     return;
//   }))
//   if ($('#optionTwo').off().on('click', function(){
//     $('#optionOne').prop('disabled', false);
//     $('#optionTwo').prop('disabled', false);
//     $('#mainText').text(fourAmain);
//     $('#optionOne').text(fourAone);
//     $('#optionTwo').text(fourAtwo);
//     $('#scoreBox').text(playerScore += 56);
//     fourA();
//     return;
//   }));
// }

//Boss Room//
function threeA(){
  $('.fightStart').css({"display": "inline-block"});
  $('#mainText').text(threeAmain);
  $('#optionOne').prop('disabled', true);
  $('#optionTwo').prop('disabled', true);

  $('.fightStart').off().on('click', function(){
    $('#optionOne').text("Boss Moves");
    $('#optionTwo').text("Player Moves");
    $('#mainText').text("");
    $('#mainText').css({'background-image' : 'url(http://i.imgur.com/MGKBSSj.gif)'});
    $('#optionOne').css({'background-image' : 'url(http://i.imgur.com/GvpUFrF.gif)'});
    $('#optionTwo').css({'background-image' : 'url(http://i.imgur.com/GvpUFrF.gif)'});
    currentBossRoom = "threeAboss";
    startFight();
  });
}

//If you win the boss room in 3A.//
function threeAwin(){
  $('.playerMove').css({"display" : "none"});
  $('.fightKey').css({'display' : "none"});
  $('.scoreBoard').css({'display' : "none"});
  $('.continue').css({"display" : "inline-block"});
  $('#mainText').text(threeAwinMain);
  $('#optionOne').text(threeAwinOne);
  $('#optionTwo').text(threeAwinTwo);
  $('.scoreBox').text(playerScore += 66);
  $('#optionOne').css({'background-image' : 'url(http://i.imgur.com/0wwnnax.gif)'});
  $('#optionTwo').css({'background-image' : 'url(http://i.imgur.com/zyFW94Z.gif)'});

  $('.continue').off().on('click', function(){
    $('#optionOne').css({'background-image' : 'url(http://i.imgur.com/V2qlxRO.gif)'});
    $('#optionTwo').css({'background-image' : 'url(http://i.imgur.com/HAe2siu.gif)'});
    $('#optionOne').prop('disabled', false);
    $('#optionTwo').prop('disabled', false);
    $('#mainText').text(fourAmain);
    $('#optionOne').text(fourAone);
    $('#optionTwo').text(fourAtwo);
    fourA();
  });
}

//If you lose the boss room in 3A.//
function threeAlose(){
  $('.playerMove').css({"display" : "none"});
  $('.fightKey').css({'display' : "none"});
  $('.scoreBoard').css({'display' : "none"});
  $('.continue').css({"display" : "inline-block"});
  $('#mainText').text(threeAloseMain);
  $('#optionOne').text(threeAloseOne);
  $('#optionTwo').text(threeAloseTwo);
  $('.scoreBox').text(playerScore -= 125);

  $('.continue').off().on('click', function(){
    $('#optionOne').prop('disabled', false);
    $('#optionTwo').prop('disabled', false);
    $('#mainText').text(threeBmain);
    $('#optionOne').text(threeBone);
    $('#optionTwo').text(threeBtwo);
    threeB();
  });
}

function threeB(){
  $('.continue').css({"display" : "none"});
    if ($('#optionOne').off().on('click', function(){
      $('#mainText').text(threeCmain);
      $('#optionOne').text(threeCone);
      $('#optionTwo').text(threeCtwo);
      $('.scoreBox').text(playerScore -= 150);
      threeC();
      return;
  }))
     if ($('#optionTwo').off().on('click', function(){
      $('#mainText').text(fourBmain);
      $('#optionOne').text(fourBone);
      $('#optionTwo').text(fourBtwo);
      $('.scoreBox').text(playerScore += 66);
      fourB();
      return;
  }));
}

//Bad Ending//
function threeC(){
    $('#mainText').text(threeCmain);
    $('#optionOne').prop('disabled', true);
    $('#optionTwo').prop('disabled', true);
    $('#optionOne').text(threeCone);
    $('#optionTwo').text(threeCtwo);
    return;
}

function fourA(){
  if ($('#optionOne').off().on('click', function(){
    $('#optionOne').prop('disabled', false);
    $('#optionTwo').prop('disabled', false);
    $('#mainText').text(fiveAmain);
    $('#optionOne').text(fiveAone);
    $('#optionTwo').text(fiveAtwo);
    $('.scoreBox').text(playerScore += 241);
    fiveA();
    return;
  })){
  } if ($('#optionTwo').off().on('click', function(){
    $('#optionOne').prop('disabled', false);
    $('#optionTwo').prop('disabled', false);
    $('#mainText').text(fourBmain);
    $('#optionOne').text(fourBone);
    $('#optionTwo').text(fourBtwo);
    $('.scoreBox').text(playerScore += 256);
    fourB();
    return;
  }));
}

//Neutral Ending//
function fourB(){
    $('#mainText').text(fourBmain);
    $('#optionOne').prop('disabled', true);
    $('#optionTwo').prop('disabled', true);
    $('#optionOne').text(fourBone);
    $('#optionTwo').text(fourBtwo);
    return;
}

//Good Ending//
// function fiveA(){
//     $('.continue').css({"display" : "none"});
//     $('#mainText').text(fiveAmain);
//     $('#optionOne').prop('disabled', true);
//     $('#optionTwo').prop('disabled', true);
//     $('#optionOne').text(fiveAone);
//     $('#optionTwo').text(fiveAtwo);
//     return;
// }

//Boss Room//
function fiveA(){
  $('.fightStart').css({"display": "inline-block"});
  $('#mainText').text(fiveAmain);
  $('#optionOne').prop('disabled', true);
  $('#optionTwo').prop('disabled', true);

  $('.fightStart').off().on('click', function(){
    $('#optionOne').text("Boss Moves");
    $('#optionTwo').text("Player Moves");
    $('#mainText').text("");
    $('#mainText').css({'background-image' : 'url(http://i.imgur.com/He0BYKW.gif)'});
    $('#optionOne').css({'background-image' : 'url(http://i.imgur.com/GvpUFrF.gif)'});
    $('#optionTwo').css({'background-image' : 'url(http://i.imgur.com/GvpUFrF.gif)'});
    currentBossRoom = "fiveAboss";
    startFight();
  });
}

function fiveAwin(){
  $('.playerMove').css({"display" : "none"});
  $('.fightKey').css({'display' : "none"});
  $('.scoreBoard').css({'display' : "none"});
  $('.continue').css({"display" : "inline-block"});
  $('#mainText').text(fiveAwinMain);
  $('#optionOne').text(fiveAwinOne);
  $('#optionTwo').text(fiveAwinTwo);
  $('.scoreBox').text(playerScore += 1000);
}

function fiveAlose(){
  $('.playerMove').css({"display" : "none"});
  $('.fightKey').css({'display' : "none"});
  $('.scoreBoard').css({'display' : "none"});
  $('.continue').css({"display" : "inline-block"});
  $('#mainText').text(fiveAloseMain);
  $('#optionOne').text(fiveAloseOne);
  $('#optionTwo').text(fiveAloseTwo);
  $('.scoreBox').text(playerScore -= 1000);
}

//Starts the boss fight and waits for player input before getting boss move. Also sets bossMove on a delay for better game experience.//
var startFight = function(){
  fightMode = "story";
  $('.fightStart').css({"display" : "none"});
  $('.playerMove').css({"display" : "inline-block"});
  $('.fightKey').css({'display' : "inline-block"});
  $('.scoreBoard').css({'display' : "inline-block"});

  $('.glyphicon-fire').off().on('click', function(){
    playerMove = "fire";
    $('#optionTwo').text(playerMove);
    $('#optionOne').text("");
    setTimeout(bossMoves, 700);
    return playerMove;
  });

  $('.glyphicon-tint').off().on('click', function(){
    playerMove = "water";
    $('#optionTwo').text(playerMove);
    $('#optionOne').text("");
    setTimeout(bossMoves, 700);
    return playerMove;
  });

  $('.glyphicon-leaf').off().on('click', function(){
    playerMove = "grass";
    $('#optionTwo').text(playerMove);
    $('#optionOne').text("");
    setTimeout(bossMoves, 700);
    return playerMove;
  });
};

//Allows you to use setTimeout function while passing variables through getWinner.//
function winnerDelay(){
  setTimeout(function(){
    getWinner(playerMove, bossMove);
  },1000);
}

//Determines what move the boss will play based off a random number.//
function bossMoves(){
  var bossMove;
  var randomNum = Math.random();
  if (randomNum < 0.33) {
      bossMove = "fire";
      $('#optionOne').text(bossMove);
      getWinner(playerMove, bossMove);
      return "fire";
  } else if (randomNum < 0.66) {
      bossMove = "grass";
      $('#optionOne').text(bossMove);
      getWinner(playerMove, bossMove);
      return "grass";
  } else {
      $('#optionOne').text(bossMove);
      bossMove = "water";
      getWinner(playerMove, bossMove);
      return "water";
  }
}

function getWinner(playerMove, bossMove){
  if (bossMove === "fire" && playerMove === "water") {
      victor = "Player";
      playerPoints ++;
      $('#optionOne').text(bossMove + " Loser");
      $('.bossPoints').text("Boss" + " " + bossPoints);
      $('#optionTwo').text(playerMove + " Winner");
      $('.playerPoints').text("Player" + " " + playerPoints);
      $('.playerOneScoreBox').text(bossPoints);
      $('.playerTwoScoreBox').text(playerPoints);
      fightRounds();
  } else if (bossMove === "grass" && playerMove === "fire") {
      victor = "Player";
      playerPoints ++;
      $('#optionOne').text(bossMove + " Loser");
      $('.bossPoints').text("Boss" + " " + bossPoints);
      $('#optionTwo').text(playerMove + " Winner");
      $('.playerPoints').text("Player" + " " + playerPoints);
      $('.playerOneScoreBox').text(bossPoints);
      $('.playerTwoScoreBox').text(playerPoints);
      fightRounds();
  } else if (bossMove === "water" && playerMove === "grass") {
      victor = "Player";
      playerPoints ++;
      $('#optionOne').text(bossMove + " Loser");
      $('.bossPoints').text("Boss" + " " + bossPoints);
      $('#optionTwo').text(playerMove + " Winner");
      $('.playerPoints').text("Player" + " " + playerPoints);
      $('.playerOneScoreBox').text(bossPoints);
      $('.playerTwoScoreBox').text(playerPoints);
      fightRounds();
  } else if (bossMove === "fire" && playerMove === "grass") {
      victor = "Boss";
      bossPoints ++;
      $('#optionOne').text(bossMove + " Winner");
      $('.bossPoints').text("Boss" + " " + bossPoints);
      $('#optionTwo').text(playerMove + " Loser");
      $('.playerPoints').text("Player" + " " + playerPoints);
      $('.playerOneScoreBox').text(bossPoints);
      $('.playerTwoScoreBox').text(playerPoints);
      fightRounds();
  } else if (bossMove === "grass" && playerMove === "water") {
      victor = "Boss";
      bossPoints ++;
      $('#optionOne').text(bossMove + " Winner");
      $('.bossPoints').text("Boss" + " " + bossPoints);
      $('#optionTwo').text(playerMove + " Loser");
      $('.playerPoints').text("Player" + " " + playerPoints);
      $('.playerOneScoreBox').text(bossPoints);
      $('.playerTwoScoreBox').text(playerPoints);
      fightRounds();
  } else if (bossMove === "water" && playerMove === "fire") {
      victor = "Boss";
      bossPoints ++;
      $('#optionOne').text(bossMove + " Winner");
      $('.bossPoints').text("Boss" + " " + bossPoints);
      $('#optionTwo').text(playerMove + " Loser");
      $('.playerPoints').text("Player" + " " + playerPoints);
      $('.playerOneScoreBox').text(bossPoints);
      $('.playerTwoScoreBox').text(playerPoints);
      fightRounds();
  } else if (playerMove === bossMove) {
      victor = "Draw";
      $('#optionOne').text("Draw");
      $('.bossPoints').text("Boss" + " " + bossPoints);
      $('#optionTwo').text("Draw");
      $('.playerPoints').text("Player" + " " + playerPoints);
      fightRounds();
  }
  console.log(playerPoints + bossPoints);
  return victor;
}

//Loop to determine who wins the boss fight.//
function fightRounds(){
  if (playerPoints < rounds && bossPoints < rounds && fightMode === "story"){
    startFight();
  }else if (playerPoints < rounds && bossPoints < rounds && fightMode === "versus"){
    versusFight();
  } else if (playerPoints === rounds) {
    playerPoints = 0;
    bossPoints = 0;
    bossRoomWin();
  } else if (bossPoints === rounds) {
    playerPoints = 0;
    bossPoints = 0;
    bossRoomLose();
  }
}

//Determins which room to go to after winning a boss fight.//
function bossRoomWin(){
  $('#mainText').show();
  $('.tiles').hide();
  $('.playerMove').css({"display" : "none"});
  $('.fightKey').css({'display' : "none"});
  $('.scoreBoard').hide();
  $('.continue').css({"display" : "inline-block"});
  $('#optionOne').text("LOSER!");
  $('#optionTwo').text("WINNER!");
  $('.versusModeFight').css({'display' : 'none'});
  $('#versusMoves').css({'display' : "none"});

  $('.continue').off().on('click', function(){
    $('#mainText').css({'background-image' : 'none'});
    $('#optionOne').css({'background-image' : 'url(http://i.imgur.com/kTQOpBQ.gif)'});
    $('#optionTwo').css({'background-image' : 'url(http://i.imgur.com/HAe2siu.gif)'});
    $('.continue').hide();
    $('.bossPoints').text("Boss" + " " + bossPoints);
    $('.playerPoints').text("Player" + " " + playerPoints);
    if (currentBossRoom === "oneBboss"){
      oneBwin();
    } else if (currentBossRoom === "threeAboss"){
      threeAwin();
    } else if (currentBossRoom === "twoCboss"){
      twoCwin();
    } else if (currentBossRoom === "fourAboss"){
      fiveAwin();
    } else if (currentBossRoom === "versusRoom"){
      versusEnd();
    }
  });
}

//Determines which room to go to after losing a boss fight.//
function bossRoomLose(){
  $('#mainText').show();
  $('.tiles').hide();
  $('.playerMove').css({"display" : "none"});
  $('.fightKey').css({'display' : "none"});
  $('#versusMoves').css({'display' : "none"});
  $('.scoreBoard').hide();
  $('.versusModeFight').css({'display' : 'none'});
  $('#optionOne').text("WINNER!");
  $('#optionTwo').text("LOSER!");
  $('.continue').css({"display" : "inline-block"});

  $('.continue').off().on('click', function(){
    $('#mainText').css({'background-image' : 'none'});
    $('#optionOne').css({'background-image' : 'url(http://i.imgur.com/kTQOpBQ.gif)'});
    $('#optionTwo').css({'background-image' : 'url(http://i.imgur.com/HAe2siu.gif)'});
    $('.continue').hide();
    $('.bossPoints').text("Boss" + " " + bossPoints);
    $('.playerPoints').text("Player" + " " + playerPoints);
    if (currentBossRoom === "oneBboss"){
      oneC();
    } else if (currentBossRoom === "threeAboss"){
      threeAlose();
    } else if (currentBossRoom === "twoCboss") {
      twoD();
    } else if (currentBossRoom === "fourAboss"){
      fiveAlose();
    } else if (currentBossRoom === "versusRoom"){
      versusEnd();
    }
  });
}
//End of boss fight fucntions.//

//Versus Mode Jan Ken Po. Player1 = bossMove Player2 = playerMove.//
//Versus Room//
function versusEnd(){
  $('#optionOne').text("versusEnd");
  $('#optionTwo').text("versusEnd");
  $('.continue').css({"display" : "none"});
  $('#mainText').text("Victory Pose");
}

//Versus Fight Functions.//
function versusModeStartButton(){
  $('.versusModeStart').off().on('click', function(){
  $('#optionOne').css({'background-image' : 'url(http://i.imgur.com/GvpUFrF.gif)'});
  $('#optionTwo').css({'background-image' : 'url(http://i.imgur.com/GvpUFrF.gif)'});
  clearTimeout(timeOutIdOne);
  clearTimeout(timeOutIdTwo);
  clearTimeout(timeOutIdThree);
  clearTimeout(timeOutIdFour);
  fightMode = "versus";
  currentBossRoom = "versusRoom";
  playerPoints = 0;
  bossPoints = 0;
  $('.playerOneScoreBox').text(bossPoints);
  $('.playerTwoScoreBox').text(playerPoints);
  $('.versusScoringArea').show();
  $('.versusModeStart').hide();
  $('#versusMoves').css({'display' : 'inline-block'});
  $('#optionOne').prop('disabled', true);
  $('#optionTwo').prop('disabled', true);
  $('#optionOne').text("Versus Mode");
  $('#optionTwo').text("Versus Mode");
    versusFight();

  });
}


function versusFight(){
  $('#restart').css({'display' : 'inline-block'});
  $('#mainText').css({'background-image' : 'url(http://i.imgur.com/Rd0YmdA.gif)'});
  $('.startGame').hide();
  $('.scoringArea').css({'display' : 'none'});
  $('.versusModeFight').css({'display' : 'inline-block'});
  $('.versusScoringArea').css({'display' : 'inline-block'});

  $('.versusModeFight').off().on('click', function(){
    $('.tiles').show();
    $('#mainText').hide();
    $('#setFocus').focus();
      versusStart();

  });
}

//Fades out "this" after a duration. Made to resolve issue with annonymous functions nested in function in funcitons.//
function tileFade(){
  $(this).fadeOut(600);
}

//Grabs Player1 and Player2 moves. Player1 is set to bossMove. Then runs getWnner on a time delay.//
function versusStart(){
  playerMove = "";
  bossMove = "";
  $('.threeTile').show("puff","",250, tileFade);
  timeOutIdOne = setTimeout(function(){
    $('.twoTile').show('puff',"",250, tileFade);
  }, 900);
  timeOutIdTwo = setTimeout(function(){
    $('.oneTile').show('puff',"",250, tileFade);
  }, 1700);
  timeOutIdThree = setTimeout(function(){
    $('.fightTile').show('puff',"",250);
  }, 2500);
    $('.versusKey').keyup(function(event){
      if(event.keyCode == 81){
        $(".glyphicon-fire.playerOneMove").click();
        bossMove = "fire";
      }
    });
    $(".versusKey").keyup(function(event){
      if(event.keyCode == 87){
        $(".glyphicon-leaf.playerOneMove").click();
        bossMove = "grass";
      }
    });
    $(".versusKey").keyup(function(event){
      if(event.keyCode == 69){
        $(".glyphicon-tint.playerOneMove").click();
        bossMove = "water";
      }
    });
    $(".versusKey").keyup(function(event){
      if(event.keyCode == 73){
        $(".glyphicon-fire.playerTwoMove").click();
        playerMove = "fire";
      }
    });
    $(".versusKey").keyup(function(event){
      if(event.keyCode == 79){
        $(".glyphicon-fire.playerTwoMove").click();
        playerMove = "grass";
      }
    });
    $(".versusKey").keyup(function(event){
      if(event.keyCode == 80){
        $(".glyphicon-fire.playerTwoMove").click();
        playerMove = "water";
      }
    });
  timeOutIdFour = setTimeout(function(){
      if (playerMove === "" || bossMove === ""){
        versusStart();
      } else {
      getWinner(playerMove, bossMove);
      }
      $('.fightTile').css({'display' : 'none'});
  }, 3750);
}

//Blinking text. Mahalo to Sebastian Sulinski on http://ssdtutorials.com/ for this code.//
var textObject = {
	delay : 300,
	effect : 'replace',
	classColour : 'blink',
	flash : function(obj, effect, delay) {
		if (obj.length > 0) {
			if (obj.length > 1) {
				jQuery.each(obj, function() {
					effect = effect || textObject.effect;
					delay = delay || textObject.delay;
					textObject.flashExe($(this), effect, delay);
				});
			} else {
				effect = effect || textObject.effect;
				delay = delay || textObject.delay;
				textObject.flashExe(obj, effect, delay);
			}
		}
	},
	flashExe : function(obj, effect, delay) {
		var flash = setTimeout(function() {
			switch(effect) {
				case 'replace':
				obj.toggle();
				break;
				case 'colour':
				obj.toggleClass(textObject.classColour);
				break;
			}
			textObject.flashExe(obj, effect, delay);
		}, delay);
	}
};

$(function() {

	textObject.flash($('.flash'), 'colour', 500);

});
