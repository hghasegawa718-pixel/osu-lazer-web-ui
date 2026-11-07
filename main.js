//开始播放logo附近的白条动画
const logobar=document.querySelector(".logo-bar");
async function playbar(){
    try{
        await logobar.play();
    }
    catch (err){
        console.warn("视频播放失效",err);
    }
}
playbar();

  //for循环让每个按钮都可以一次点击触发一次完整闪光
  const Buttons=document.querySelectorAll(".menu-button");
  const Flashstyle=[
{opacity:0.9},
{opacity:0},
];
const Flashtiming={
duration:800,
easing:"ease-out",
iterations:1,
};
  for(const i of Buttons){
const Flash=i.querySelector(".button-flash");
let Animation;
function Flashanimate(){
if(Animation){
    Animation.cancel();
}
Animation=Flash.animate(Flashstyle,Flashtiming);
  }
    i.addEventListener("click",Flashanimate);
}
//让LOGO可以一次点击触发一次完整闪光
const logobuttons=document.querySelector(".logo-button");
    const logoFlash=logobuttons.querySelector(".logo-flash");
let logoAnimation;
function Flashlogo(){
    if (logoAnimation){
        logoAnimation.cancel();
    }
    logoAnimation=logoFlash.animate(Flashstyle,Flashtiming);
}
logobuttons.addEventListener("click", Flashlogo);
//对点击logo的处理（区分首次进入和后续点击）
const band=document.querySelector(".menu-band");
function clicklogo(){
    if(band.hidden){
        band.hidden=false;
document.getElementById("scene").classList.add("is-open");
return;
    }
    const navs=band.querySelectorAll("nav");
    for(const i of navs){
        if(!i.hidden){
            const firstbutton=i.querySelector("button");
            if(firstbutton){
                firstbutton.click();
            }
            return;
        }
    }
}
document.getElementById("logo-button").addEventListener("click",clicklogo);
//对点击不同键切换菜单的处理
function showPlay(){
    document.getElementById("settings").hidden=true;
        document.getElementById("main-menu").hidden=true;
    document.getElementById("play-menu").hidden=false;
    document.getElementById("play-back").hidden=false;
}
document.getElementById("play").addEventListener("click",showPlay);

function playBack(){
    document.getElementById("play-menu").hidden=true;
    document.getElementById("play-back").hidden=true;
    document.getElementById("settings").hidden=false;
    document.getElementById("main-menu").hidden=false;
}
document.getElementById("play-back").addEventListener("click",playBack);

function showEdit(){
    document.getElementById("settings").hidden=true;
    document.getElementById("main-menu").hidden=true;
    document.getElementById("edit-menu").hidden=false;
    document.getElementById("edit-back").hidden=false;
}
document.getElementById("edit").addEventListener("click",showEdit);

function editBack(){
    document.getElementById("edit-menu").hidden=true;
    document.getElementById("edit-back").hidden=true;
    document.getElementById("settings").hidden=false;
    document.getElementById("main-menu").hidden=false;
}
document.getElementById("edit-back").addEventListener("click",editBack);

function showMulti(){
    document.getElementById("play-back").hidden=true;
    document.getElementById("play-menu").hidden=true;
    document.getElementById("multi-menu").hidden=false;
    document.getElementById("multi-back").hidden=false;
}
document.getElementById("multi" ).addEventListener("click",showMulti);

function multiBack(){
    document.getElementById("multi-menu").hidden=true;
    document.getElementById("multi-back").hidden=true;
    document.getElementById("play-back").hidden=false;
    document.getElementById("play-menu").hidden=false;
}
document.getElementById("multi-back").addEventListener("click",multiBack);
//对点击四个不同模式的键的处理
const modebuttons=document.querySelectorAll(".mode-band .sidebar-button");
const modename=["osu","taiko","catch","mania"];
for(let i=0;i<modebuttons.length;i++){
function switchmode(){
    for(let j=0;j<modebuttons.length;j++){
        const eachimg=modebuttons[j].querySelector("img");
        eachimg.src=("assets/image/sidebar/ruleset-"+modename[j]+".png");
    }
    const myimg=modebuttons[i].querySelector("img");
    myimg.src=("assets/image/sidebar/ruleset-"+modename[i]+"-selected.png");
    const indicator=document.getElementById("mode-indicator");
    indicator.style.transform=("translateX("+i*100+"%)");
}
modebuttons[i].addEventListener("click",switchmode);
}
//设置鼠标移入按钮的时候播放音频
const hoveraudio=new Audio("assets/audio/button-hover.wav");
async function playhover(){
        hoveraudio.currentTime=0;
        try{
await    hoveraudio.play();
        }
        catch (err){
            console.warn("音效播放失败",err);
        }
}
for (const i of Buttons){
    i.addEventListener("mouseenter",playhover);
}
//设置鼠标点击大LOGO以及点击按钮时候的播放音频
const buttonaudio=new Audio("assets/audio/button-play-select.wav");
    async function playbutton(){
        buttonaudio.currentTime=0;
        try{
            await buttonaudio.play();
        }
        catch (err){
           console.warn("音效播放失败",err);
        }
    }
    for (const i of Buttons){
        i.addEventListener("click",playbutton);
    }

    const logoaudio=new Audio("assets/audio/osu-logo-select.wav");
async function playlogo(){
    logoaudio.currentTime=0;
    try{
        await logoaudio.play();
    }
    catch (err) {
        console.warn("音效播放失败",err);
    }
}
document.getElementById("logo-button").addEventListener("click",playlogo);
//设置自动播放的开场动画以及背景音乐
const bgm=document.querySelector(".bgm");
async function playvideo(){
try{
    await startupvideo.play();
    document.getElementById("startupscreen").hidden=true;
}
catch (err){
    console.warn("视频播放失效",err);
    document.getElementById("startupscreen").hidden=true;
    startupvideo.hidden=true;
    document.querySelector(".logo-button").disabled=false;
}
}

function display(){
    document.getElementById("startupscreen").hidden=true;
    startupvideo.hidden=true;
    document.querySelector(".logo-button").disabled=false;
}
startupvideo.addEventListener("ended",display);
playvideo();

async function playbgm(){
    try{
        await bgm.play();
    }
        catch (err){
            console.warn("音频播放失效",err);
        }
}
playbgm();

function bgmloop(){
bgm.currentTime=4;
playbgm();
}

   bgm.addEventListener("ended",bgmloop);
   //设置离开时播放退场视频
const exitvideo=document.querySelector(".exitvideo");
   async function Exit(){
    try{
        document.getElementById("exitvideo").hidden=false;
        document.getElementById("menu-band").hidden=true;
    document.querySelector(".logo-button").disabled=true;
bgm.pause();
        await  exitvideo.play();
    }
catch(err){
    console.warn("视频播放失效",err);
}
}
document.getElementById("exit").addEventListener("click",Exit);