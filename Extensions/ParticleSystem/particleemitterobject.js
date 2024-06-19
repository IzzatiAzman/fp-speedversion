var gdjs;(function(t){class s extends t.RuntimeObject{constructor(e,i){super(e,i);this._jumpForwardInTimeCompleted=!1;this._posDirty=!0;this._angleDirty=!0;this._forceDirty=!0;this._zoneRadiusDirty=!0;this._lifeTimeDirty=!0;this._gravityDirty=!0;this._colorDirty=!0;this._sizeDirty=!0;this._alphaDirty=!0;this._flowDirty=!0;this._tankDirty=!0;this._particleRotationSpeedDirty=!0;this._maxParticlesCountDirty=!0;this._additiveRenderingDirty=!0;this._isEmissionPaused=!1;this._renderer=new t.ParticleEmitterObjectRenderer(e,this,i),this.angleA=i.emitterAngleA,this.angleB=i.emitterAngleB,this.forceMin=i.emitterForceMin,this.forceMax=i.emitterForceMax,this.zoneRadius=i.zoneRadius,this.lifeTimeMin=i.particleLifeTimeMin,this.lifeTimeMax=i.particleLifeTimeMax,this.gravityX=i.particleGravityX,this.gravityY=i.particleGravityY,this.colorR1=i.particleRed1,this.colorR2=i.particleRed2,this.colorG1=i.particleGreen1,this.colorG2=i.particleGreen2,this.colorB1=i.particleBlue1,this.colorB2=i.particleBlue2,this.size1=i.particleSize1,this.size2=i.particleSize2,this.alpha1=i.particleAlpha1,this.alpha2=i.particleAlpha2,this.rendererType=i.rendererType,this.rendererParam1=i.rendererParam1,this.rendererParam2=i.rendererParam2,this.texture=i.textureParticleName,this.flow=i.flow,this.tank=i.tank,this.destroyWhenNoParticles=i.destroyWhenNoParticles,this.particleRotationMinSpeed=i.particleAngle1,this.particleRotationMaxSpeed=i.particleAngle2,this.maxParticlesCount=i.maxParticleNb,this.additiveRendering=i.additive,this.jumpForwardInTimeOnCreation=i.jumpForwardInTimeOnCreation,this._textureDirty=this.texture!=="",this.onCreated()}setX(e){this.x!==e&&(this._posDirty=!0),super.setX(e)}setY(e){this.y!==e&&(this._posDirty=!0),super.setY(e)}setAngle(e){this.angle!==e&&(this._angleDirty=!0),super.setAngle(e)}getRendererObject(){return this._renderer.getRendererObject()}updateFromObjectData(e,i){return e.emitterAngleA!==i.emitterAngleA&&this.setEmitterAngleA(i.emitterAngleA),e.emitterAngleB!==i.emitterAngleB&&this.setEmitterAngleB(i.emitterAngleB),e.emitterForceMin!==i.emitterForceMin&&this.setEmitterForceMin(i.emitterForceMin),e.particleAngle1!==i.particleAngle1&&this.setParticleRotationMinSpeed(i.particleAngle1),e.particleAngle2!==i.particleAngle2&&this.setParticleRotationMaxSpeed(i.particleAngle2),e.maxParticleNb!==i.maxParticleNb&&this.setMaxParticlesCount(i.maxParticleNb),e.additive!==i.additive&&this.setAdditiveRendering(i.additive),e.emitterForceMax!==i.emitterForceMax&&this.setEmitterForceMax(i.emitterForceMax),e.zoneRadius!==i.zoneRadius&&this.setZoneRadius(i.zoneRadius),e.particleLifeTimeMin!==i.particleLifeTimeMin&&this.setParticleLifeTimeMin(i.particleLifeTimeMin),e.particleLifeTimeMax!==i.particleLifeTimeMax&&this.setParticleLifeTimeMax(i.particleLifeTimeMax),e.particleGravityX!==i.particleGravityX&&this.setParticleGravityX(i.particleGravityX),e.particleGravityY!==i.particleGravityY&&this.setParticleGravityY(i.particleGravityY),e.particleRed1!==i.particleRed1&&this.setParticleRed1(i.particleRed1),e.particleRed2!==i.particleRed2&&this.setParticleRed2(i.particleRed2),e.particleGreen1!==i.particleGreen1&&this.setParticleGreen1(i.particleGreen1),e.particleGreen2!==i.particleGreen2&&this.setParticleGreen2(i.particleGreen2),e.particleBlue1!==i.particleBlue1&&this.setParticleBlue1(i.particleBlue1),e.particleBlue2!==i.particleBlue2&&this.setParticleBlue2(i.particleBlue2),e.particleSize1!==i.particleSize1&&this.setParticleSize1(i.particleSize1),e.particleSize2!==i.particleSize2&&this.setParticleSize2(i.particleSize2),e.particleAlpha1!==i.particleAlpha1&&this.setParticleAlpha1(i.particleAlpha1),e.particleAlpha2!==i.particleAlpha2&&this.setParticleAlpha2(i.particleAlpha2),e.textureParticleName!==i.textureParticleName&&this.setTexture(i.textureParticleName,this.getRuntimeScene()),e.flow!==i.flow&&this.setFlow(i.flow),e.tank!==i.tank&&this.setTank(i.tank),e.destroyWhenNoParticles!==i.destroyWhenNoParticles&&(this.destroyWhenNoParticles=i.destroyWhenNoParticles),(e.particleSizeRandomness1!==i.particleSizeRandomness1||e.particleSizeRandomness2!==i.particleSizeRandomness2||e.particleAngle1!==i.particleAngle1||e.particleAngle2!==i.particleAngle2||e.maxParticleNb!==i.maxParticleNb||e.additive!==i.additive||e.rendererType!==i.rendererType||e.rendererParam1!==i.rendererParam1||e.rendererParam2!==i.rendererParam2)&&(this.getInstanceContainer().getLayer(this.layer).getRenderer().removeRendererObject(this._renderer.getRendererObject()),this._renderer.destroy(),this._renderer=new t.ParticleEmitterObjectRenderer(this.getInstanceContainer(),this,i),this._posDirty=this._angleDirty=this._forceDirty=this._zoneRadiusDirty=!0,this._lifeTimeDirty=this._gravityDirty=this._colorDirty=this._sizeDirty=!0,this._alphaDirty=this._flowDirty=this._tankDirty=this._textureDirty=!0),!0}getObjectNetworkSyncData(){return{...super.getObjectNetworkSyncData(),prms:this.particleRotationMinSpeed,prmx:this.particleRotationMaxSpeed,mpc:this.maxParticlesCount,addr:this.additiveRendering,angb:this.angleB,formin:this.forceMin,formax:this.forceMax,zr:this.zoneRadius,ltmin:this.lifeTimeMin,ltmax:this.lifeTimeMax,gravx:this.gravityX,gravy:this.gravityY,colr1:this.colorR1,colr2:this.colorR2,colg1:this.colorG1,colg2:this.colorG2,colb1:this.colorB1,colb2:this.colorB2,size1:this.size1,size2:this.size2,alp1:this.alpha1,alp2:this.alpha2,flow:this.flow,tank:this.tank,text:this.texture,paused:this._isEmissionPaused}}updateFromObjectNetworkSyncData(e){super.updateFromObjectNetworkSyncData(e),e.x!==void 0&&this.setX(e.x),e.y!==void 0&&this.setY(e.y),e.a!==void 0&&this.setAngle(e.a),e.prms!==void 0&&this.setParticleRotationMinSpeed(e.prms),e.prmx!==void 0&&this.setParticleRotationMaxSpeed(e.prmx),e.mpc!==void 0&&this.setMaxParticlesCount(e.mpc),e.addr!==void 0&&this.setAdditiveRendering(e.addr),e.angb!==void 0&&this.setEmitterAngleB(e.angb),e.formin!==void 0&&this.setEmitterForceMin(e.formin),e.formax!==void 0&&this.setEmitterForceMax(e.formax),e.zr!==void 0&&this.setZoneRadius(e.zr),e.ltmin!==void 0&&this.setParticleLifeTimeMin(e.ltmin),e.ltmax!==void 0&&this.setParticleLifeTimeMax(e.ltmax),e.gravx!==void 0&&this.setParticleGravityX(e.gravx),e.gravy!==void 0&&this.setParticleGravityY(e.gravy),e.colr1!==void 0&&this.setParticleRed1(e.colr1),e.colr2!==void 0&&this.setParticleRed2(e.colr2),e.colg1!==void 0&&this.setParticleGreen1(e.colg1),e.colg2!==void 0&&this.setParticleGreen2(e.colg2),e.colb1!==void 0&&this.setParticleBlue1(e.colb1),e.colb2!==void 0&&this.setParticleBlue2(e.colb2),e.size1!==void 0&&this.setParticleSize1(e.size1),e.size2!==void 0&&this.setParticleSize2(e.size2),e.alp1!==void 0&&this.setParticleAlpha1(e.alp1),e.alp2!==void 0&&this.setParticleAlpha2(e.alp2),e.flow!==void 0&&this.setFlow(e.flow),e.tank!==void 0&&this.setTank(e.tank),e.text!==void 0&&this.setTexture(e.text,this.getRuntimeScene()),e.paused!==void 0&&(e.paused?this.stopEmission():this.startEmission())}update(e){if(this._posDirty&&this._renderer.setPosition(this.getX(),this.getY()),this._particleRotationSpeedDirty&&this._renderer.setParticleRotationSpeed(this.particleRotationMinSpeed,this.particleRotationMaxSpeed),this._maxParticlesCountDirty&&this._renderer.setMaxParticlesCount(this.maxParticlesCount),this._additiveRenderingDirty&&this._renderer.setAdditiveRendering(this.additiveRendering),this._angleDirty){const i=this.getAngle();this._renderer.setAngle(i-this.angleB/2,i+this.angleB/2)}this._forceDirty&&this._renderer.setForce(this.forceMin,this.forceMax),this._zoneRadiusDirty&&this._renderer.setZoneRadius(this.zoneRadius),this._lifeTimeDirty&&this._renderer.setLifeTime(this.lifeTimeMin,this.lifeTimeMax),this._gravityDirty&&this._renderer.setGravity(this.gravityX,this.gravityY),this._colorDirty&&this._renderer.setColor(this.colorR1,this.colorG1,this.colorB1,this.colorR2,this.colorG2,this.colorB2),this._sizeDirty&&this._renderer.setSize(this.size1,this.size2),this._alphaDirty&&this._renderer.setAlpha(this.alpha1,this.alpha2),(this._flowDirty||this._tankDirty)&&this._renderer.resetEmission(this.flow,this.tank),this._textureDirty&&this._renderer.setTextureName(this.texture,e),this._posDirty=this._angleDirty=this._forceDirty=this._zoneRadiusDirty=!1,this._lifeTimeDirty=this._gravityDirty=this._colorDirty=this._sizeDirty=!1,this._alphaDirty=this._flowDirty=this._textureDirty=this._tankDirty=!1,this._additiveRenderingDirty=this._maxParticlesCountDirty=this._particleRotationSpeedDirty=!1,this._renderer.update(this.getElapsedTime()/1e3),this.destroyWhenNoParticles&&this.getParticleCount()===0&&this._renderer.hasStarted()&&!this._isEmissionPaused&&this._renderer._mayHaveEndedEmission()&&this.deleteFromScene(e),this.jumpForwardInTimeOnCreation>0&&this._jumpForwardInTimeCompleted===!1&&(this._renderer.update(this.jumpForwardInTimeOnCreation),this._jumpForwardInTimeCompleted=!0)}onDestroyed(){this._renderer.destroy(),super.onDestroyed()}getEmitterForceMin(){return this.forceMin}setEmitterForceMin(e){e<0&&(e=0),this.forceMin!==e&&(this._forceDirty=!0,this.forceMin=e)}getEmitterForceMax(){return this.forceMax}setEmitterForceMax(e){e<0&&(e=0),this.forceMax!==e&&(this._forceDirty=!0,this.forceMax=e)}setParticleRotationMinSpeed(e){this.particleRotationMinSpeed!==e&&(this._particleRotationSpeedDirty=!0,this.particleRotationMinSpeed=e)}getParticleRotationMinSpeed(){return this.particleRotationMinSpeed}setParticleRotationMaxSpeed(e){this.particleRotationMaxSpeed!==e&&(this._particleRotationSpeedDirty=!0,this.particleRotationMaxSpeed=e)}getParticleRotationMaxSpeed(){return this.particleRotationMaxSpeed}setMaxParticlesCount(e){this.maxParticlesCount!==e&&(this._maxParticlesCountDirty=!0,this.maxParticlesCount=e)}getMaxParticlesCount(){return this.maxParticlesCount}setAdditiveRendering(e){this.additiveRendering!==e&&(this._additiveRenderingDirty=!0,this.additiveRendering=e)}getAdditiveRendering(){return this.additiveRendering}getEmitterAngle(){return(this.angleA+this.angleB)/2}setEmitterAngle(e){const i=this.getEmitterAngle();e!==i&&(this._angleDirty=!0,this.angleA+=e-i,this.angleB+=e-i)}getEmitterAngleA(){return this.angleA}setEmitterAngleA(e){this.angleA!==e&&(this._angleDirty=!0,this.angleA=e)}getEmitterAngleB(){return this.angleB}setEmitterAngleB(e){this.angleB!==e&&(this._angleDirty=!0,this.angleB=e)}getConeSprayAngle(){return this.getEmitterAngleB()}setConeSprayAngle(e){this.setEmitterAngleB(e)}getZoneRadius(){return this.zoneRadius}setZoneRadius(e){e<0&&(e=0),this.zoneRadius!==e&&e>0&&(this._zoneRadiusDirty=!0,this.zoneRadius=e)}getParticleLifeTimeMin(){return this.lifeTimeMin}setParticleLifeTimeMin(e){e<0&&(e=0),this.lifeTimeMin!==e&&(this._lifeTimeDirty=!0,this.lifeTimeMin=e)}getParticleLifeTimeMax(){return this.lifeTimeMax}setParticleLifeTimeMax(e){e<0&&(e=0),this.lifeTimeMax!==e&&(this._lifeTimeDirty=!0,this.lifeTimeMax=e)}getParticleGravityX(){return this.gravityX}setParticleGravityX(e){this.gravityX!==e&&(this._gravityDirty=!0,this.gravityX=e)}getParticleGravityY(){return this.gravityY}setParticleGravityY(e){this.gravityY!==e&&(this._gravityDirty=!0,this.gravityY=e)}getParticleGravityAngle(){return Math.atan2(this.gravityY,this.gravityX)*180/Math.PI}setParticleGravityAngle(e){if(this.getParticleGravityAngle()!==e){this._gravityDirty=!0;const r=this.getParticleGravityLength();this.gravityX=r*Math.cos(e*Math.PI/180),this.gravityY=r*Math.sin(e*Math.PI/180)}}getParticleGravityLength(){return Math.sqrt(this.gravityX*this.gravityX+this.gravityY*this.gravityY)}setParticleGravityLength(e){e<0&&(e=0);const i=this.getParticleGravityLength();i!==e&&(this._gravityDirty=!0,this.gravityX*=e/i,this.gravityY*=e/i)}getParticleRed1(){return this.colorR1}setParticleRed1(e){e<0&&(e=0),e>255&&(e=255),this.colorR1!==e&&(this._colorDirty=!0,this.colorR1=e)}getParticleRed2(){return this.colorR2}setParticleRed2(e){e<0&&(e=0),e>255&&(e=255),this.colorR2!==e&&(this._colorDirty=!0,this.colorR2=e)}getParticleGreen1(){return this.colorG1}setParticleGreen1(e){e<0&&(e=0),e>255&&(e=255),this.colorG1!==e&&(this._colorDirty=!0,this.colorG1=e)}getParticleGreen2(){return this.colorG2}setParticleGreen2(e){e<0&&(e=0),e>255&&(e=255),this.colorG2!==e&&(this._colorDirty=!0,this.colorG2=e)}getParticleBlue1(){return this.colorB1}setParticleBlue1(e){e<0&&(e=0),e>255&&(e=255),this.colorB1!==e&&(this._colorDirty=!0,this.colorB1=e)}getParticleBlue2(){return this.colorB2}setParticleBlue2(e){e<0&&(e=0),e>255&&(e=255),this.colorB2!==e&&(this._colorDirty=!0,this.colorB2=e)}setParticleColor1(e){const i=e.split(";");i.length<3||(this.setParticleRed1(parseInt(i[0],10)),this.setParticleGreen1(parseInt(i[1],10)),this.setParticleBlue1(parseInt(i[2],10)))}setParticleColor2(e){const i=e.split(";");i.length<3||(this.setParticleRed2(parseInt(i[0],10)),this.setParticleGreen2(parseInt(i[1],10)),this.setParticleBlue2(parseInt(i[2],10)))}getParticleSize1(){return this.size1}setParticleSize1(e){e<0&&(e=0),this.size1!==e&&(this._sizeDirty=!0,this.size1=e)}getParticleSize2(){return this.size2}setParticleSize2(e){this.size2!==e&&(this._sizeDirty=!0,this.size2=e)}getParticleAlpha1(){return this.alpha1}setParticleAlpha1(e){this.alpha1!==e&&(this._alphaDirty=!0,this.alpha1=e)}getParticleAlpha2(){return this.alpha2}setParticleAlpha2(e){this.alpha2!==e&&(this._alphaDirty=!0,this.alpha2=e)}startEmission(){this._isEmissionPaused=!1,this._renderer.start()}stopEmission(){this._isEmissionPaused=!0,this._renderer.stop()}isEmitting(){return this._renderer.emitter.emit}noMoreParticles(){return!this.isEmitting()}recreateParticleSystem(){this._renderer.recreate()}getFlow(){return this.flow}setFlow(e){this.flow!==e&&(this.flow=e,this._flowDirty=!0)}getParticleCount(){return this._renderer.getParticleCount()}getTank(){return this.tank}setTank(e){this.tank=e,this._tankDirty=!0}getTexture(){return this.texture}setTexture(e,i){this.texture!==e&&this._renderer.isTextureNameValid(e,i)&&(this.texture=e,this._textureDirty=!0)}jumpEmitterForwardInTime(e){this._renderer.update(e)}}t.ParticleEmitterObject=s,t.registerObject("ParticleSystem::ParticleEmitter",t.ParticleEmitterObject)})(gdjs||(gdjs={}));
//# sourceMappingURL=particleemitterobject.js.map
