
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');




function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

document.getElementById('cn').onclick = function () {
    document.title = '笑话生成器';
    document.getElementById('lbl-customname').textContent = '请输入自定义的名字：';
    document.getElementById('lbl-cn').textContent = '中国';
    document.getElementById('lbl-us').textContent = '美国';
    document.getElementById('lbl-uk').textContent = '英国';
    document.getElementById('customname').placeholder = '李雷';
    document.querySelector('.randomize').textContent = '随机生成笑话';    
};

document.getElementById('us').onclick =
document.getElementById('uk').onclick = function () {
    document.title = 'Silly story generator';
    document.getElementById('lbl-customname').textContent = 'Enter custom name:';
    document.getElementById('lbl-cn').textContent = 'CN';
    document.getElementById('lbl-us').textContent = 'US';
    document.getElementById('lbl-uk').textContent = 'UK';
    document.getElementById('customname').placeholder = 'Bob';
    document.querySelector('.randomize').textContent = 'Generate random story';
};



randomize.addEventListener('click', result);

function result() {
  
  var weight = 900;
  var temperature = 24;

  var playerName="Bob";
  var names = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  var storyUserName = randomValueFromArray(names);
  var places = [ "the soup kitchen","Disneyland","the White House"];
  var place = randomValueFromArray(places);


  if(document.getElementById("cn").checked){
    playerName="鲍勃";
    names = ["怪兽威利", "大老爹", "圣诞老人"];
    storyUserName = randomValueFromArray(names);

    places = [ "救助站","迪士尼","白宫"];
    place = randomValueFromArray(places);

  }

  if(customName.value !== '') {
    playerName = customName.value;
  }
  


  if(document.getElementById("uk").checked) {
    weight = Math.round(300);
    temperature =  Math.round(94);
  }

  var storyInfo;
  if(document.getElementById("cn").checked){
    storyInfo = "外边有"+temperature+"度,"+storyUserName+"出去遛弯。当走到"+place+"时，小伙伴们都惊呆了，他自燃了。 "+playerName+"全程目睹但他并没有慌，因为"+storyUserName+"是一个体重"+weight+"斤的大胖子，天气又辣么热。" 
  }else{
    storyInfo = "It was "+temperature+" fahrenheit outside, so "+storyUserName+" went for a walk. When they got to "+place+", they stared in horror for a few moments, then "+playerName+" saw the whole thing, but was not surprised — "+storyUserName+" weighs "+weight+" pounds, and it was a hot day." 
  }

  story.textContent = storyInfo;
  story.style.visibility = 'visible';
}
