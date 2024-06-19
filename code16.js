gdjs.Ending_32SceneCode = {};
gdjs.Ending_32SceneCode.localVariables = [];
gdjs.Ending_32SceneCode.GDbgEndObjects1= [];
gdjs.Ending_32SceneCode.GDbgEndObjects2= [];
gdjs.Ending_32SceneCode.GDdescObjects1= [];
gdjs.Ending_32SceneCode.GDdescObjects2= [];
gdjs.Ending_32SceneCode.GDplayer_9595inputObjects1= [];
gdjs.Ending_32SceneCode.GDplayer_9595inputObjects2= [];
gdjs.Ending_32SceneCode.GDnamenameObjects1= [];
gdjs.Ending_32SceneCode.GDnamenameObjects2= [];
gdjs.Ending_32SceneCode.GDMutedObjects1= [];
gdjs.Ending_32SceneCode.GDMutedObjects2= [];
gdjs.Ending_32SceneCode.GDTimerObjects1= [];
gdjs.Ending_32SceneCode.GDTimerObjects2= [];


gdjs.Ending_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("desc"), gdjs.Ending_32SceneCode.GDdescObjects1);
{for(var i = 0, len = gdjs.Ending_32SceneCode.GDdescObjects1.length ;i < len;++i) {
    gdjs.Ending_32SceneCode.GDdescObjects1[i].resetTimer("TypingSound");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("desc"), gdjs.Ending_32SceneCode.GDdescObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Ending_32SceneCode.GDdescObjects1.length;i<l;++i) {
    if ( gdjs.Ending_32SceneCode.GDdescObjects1[i].getTimerElapsedTimeInSecondsOrNaN("TypingSound") >= 0.05 ) {
        isConditionTrue_0 = true;
        gdjs.Ending_32SceneCode.GDdescObjects1[k] = gdjs.Ending_32SceneCode.GDdescObjects1[i];
        ++k;
    }
}
gdjs.Ending_32SceneCode.GDdescObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Ending_32SceneCode.GDdescObjects1.length;i<l;++i) {
    if ( !(gdjs.Ending_32SceneCode.GDdescObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Ending_32SceneCode.GDdescObjects1[k] = gdjs.Ending_32SceneCode.GDdescObjects1[i];
        ++k;
    }
}
gdjs.Ending_32SceneCode.GDdescObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Ending_32SceneCode.GDdescObjects1 */
{for(var i = 0, len = gdjs.Ending_32SceneCode.GDdescObjects1.length ;i < len;++i) {
    gdjs.Ending_32SceneCode.GDdescObjects1[i].resetTimer("TypingSound");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2d13990f8c40250a463018d3cacda8d099885ff8cbcf31b9a4644079008a19e6_Blip 4.aac", false, 20, 5);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bgEnd"), gdjs.Ending_32SceneCode.GDbgEndObjects1);
gdjs.copyArray(runtimeScene.getObjects("desc"), gdjs.Ending_32SceneCode.GDdescObjects1);
{for(var i = 0, len = gdjs.Ending_32SceneCode.GDbgEndObjects1.length ;i < len;++i) {
    gdjs.Ending_32SceneCode.GDbgEndObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Ending_32SceneCode.GDdescObjects1.length ;i < len;++i) {
    gdjs.Ending_32SceneCode.GDdescObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 0.24);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("desc"), gdjs.Ending_32SceneCode.GDdescObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Ending_32SceneCode.GDdescObjects1.length;i<l;++i) {
    if ( gdjs.Ending_32SceneCode.GDdescObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Ending_32SceneCode.GDdescObjects1[k] = gdjs.Ending_32SceneCode.GDdescObjects1[i];
        ++k;
    }
}
gdjs.Ending_32SceneCode.GDdescObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Ending_32SceneCode.GDdescObjects1 */
{for(var i = 0, len = gdjs.Ending_32SceneCode.GDdescObjects1.length ;i < len;++i) {
    gdjs.Ending_32SceneCode.GDdescObjects1[i].getBehavior("Text").setText("Wow! You scored " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("score")) + " points within " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Timer")) + " seconds!" + gdjs.evtTools.string.newLine() + "Submit your score to have a chance to win exclusive prizes now!");
}
}}

}


};

gdjs.Ending_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Ending_32SceneCode.GDbgEndObjects1.length = 0;
gdjs.Ending_32SceneCode.GDbgEndObjects2.length = 0;
gdjs.Ending_32SceneCode.GDdescObjects1.length = 0;
gdjs.Ending_32SceneCode.GDdescObjects2.length = 0;
gdjs.Ending_32SceneCode.GDplayer_9595inputObjects1.length = 0;
gdjs.Ending_32SceneCode.GDplayer_9595inputObjects2.length = 0;
gdjs.Ending_32SceneCode.GDnamenameObjects1.length = 0;
gdjs.Ending_32SceneCode.GDnamenameObjects2.length = 0;
gdjs.Ending_32SceneCode.GDMutedObjects1.length = 0;
gdjs.Ending_32SceneCode.GDMutedObjects2.length = 0;
gdjs.Ending_32SceneCode.GDTimerObjects1.length = 0;
gdjs.Ending_32SceneCode.GDTimerObjects2.length = 0;

gdjs.Ending_32SceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Ending_32SceneCode'] = gdjs.Ending_32SceneCode;
