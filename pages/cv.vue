<template>
  <div class="flex pad">
    <h1 class="flex-center flex text">Working on this...</h1>
    <div id="colorwheelCenter" class="pad flex-container loader">
      <div class="loader-inner">
        <div id="colorwheelCenter" class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div id="colorwheelCenter" class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div id="colorwheelCenter" class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div id="colorwheelCenter" class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div id="colorwheelCenter" class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'CVResume',
}
</script>
<style scoped lang="scss">
@import '@/assets/mixins.scss';
@import '@/assets/variables.scss';
.splash {
  @include splash;
}
.highlight {
  @include highlight;
}
.bolden {
  @include bolden;
}
.wrapper {
  display: inline-block;
}
.cardColor {
  @include cardColor;
}
</style>
<style scoped type="text/css">
:root {
  --1-line-size: 15px;
  --2-line-size: calc(var(--1-line-size) * 2);
  --3-line-size: calc(var(--1-line-size) * 3);
  --4-line-size: calc(var(--1-line-size) * 4);
  --5-line-size: calc(var(--1-line-size) * 5);
}
#colorwheelCenter {
  position: absolute;
  bottom: 0;
}
.flex-container {
  flex: 0 1 auto;
  overflow: hidden;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
  justify-content: center;
  align-items: center;
}

.loader {
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
}
.text {
}

.loader-inner {
  margin: auto;
  position: absolute;
  width: 100px;
}

.loader-line-wrap {
  @apply flex;
  animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  box-sizing: border-box;
  height: 400px;
  left: 0;
  right: 0;
  overflow: hidden;
  position: absolute;
  transform-origin: 50% 100%;
  justify-content: center;
  align-items: center;
}
.loader-line {
  @apply flex;
  border: 4px solid transparent;
  border-radius: 100%;
  box-sizing: border-box;
  height: 50%;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
}
.loader-line-wrap:nth-child(1) {
  animation-delay: -50ms;
}
.loader-line-wrap:nth-child(2) {
  animation-delay: -100ms;
}
.loader-line-wrap:nth-child(3) {
  animation-delay: -150ms;
}
.loader-line-wrap:nth-child(4) {
  animation-delay: -200ms;
}
.loader-line-wrap:nth-child(5) {
  animation-delay: -250ms;
}

.loader-line-wrap:nth-child(1) .loader-line {
  border-color: hsl(0, 80%, 60%);
  height: 90px;
  width: 90px;
  top: var(--1-line-size, 56px);
}
.loader-line-wrap:nth-child(2) .loader-line {
  border-color: hsl(60, 80%, 60%);
  height: 76px;
  width: 76px;
  top: var(--2-line-size, 112px);
}
.loader-line-wrap:nth-child(3) .loader-line {
  border-color: hsl(120, 80%, 60%);
  height: 62px;
  width: 62px;
  top: var(--3-line-size, 168px);
}
.loader-line-wrap:nth-child(4) .loader-line {
  border-color: hsl(180, 80%, 60%);
  height: 48px;
  width: 48px;
  top: var(--4-line-size, 224px);
}
.loader-line-wrap:nth-child(5) .loader-line {
  border-color: hsl(240, 80%, 60%);
  height: 34px;
  width: 34px;
  top: var(--5-line-size, 280px);
}

@keyframes spin {
  0%,
  15% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
