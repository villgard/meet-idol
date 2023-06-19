<template>
  <button :class="[$style.button, $style[variant], isMobile && $style.isMobile]" @click="onClick">
    <span :class="[$style.label, isMobile && $style.isMobile]">
      {{ label }}
    </span>
  </button>
</template>

<script lang="ts" setup>

defineProps({
  variant: String,
  label: String,
  isMobile: Boolean,
})

const emit = defineEmits<{
  (e: 'click'): void;
}>();

function onClick() {
  emit('click');
}
</script>

<style lang="scss" module>

.button {
  max-width: 230px;
  width: 100%;
  text-align: center;
  height: 50px;
  position: relative;
  z-index: 2;
  background: transparent;
  cursor: pointer;
  border-radius: 2px;
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    width: 100%;
    inset: 0;
    background: #D20A0A;
    border-radius: 2px;
    transform: skew(-11.31deg);
  }
  &.isMobile {
    max-width: 182px;
    height: 38px;
  }
}

.label {
  position: relative;
  z-index: 2;
  font-family: 'RobotoCondensed', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  &.isMobile {

    font-size: 14px;
    line-height: 16px;
  }
}

.outlined {
  max-width: 228px;

  &::before {
    background: transparent;
    border: 1px solid #D20A0A;
    border-radius: 1.52794px;
  }

  &:hover {
   &::before {
     background: #D20A0A;
   }
  }
}

.outlinedWhite {
  max-width: 228px;

  &::before {
    background: transparent;
    border: 1px solid #FFFFFF;
  }

  &:hover {
    .label {
      color: #000000;
    }
    &::before {
      background: #FFFFFF;
    }
  }
}

.filledWhite {
  .label {
    color: #000000;
  }
  &::before {
    background: #FFFFFF;
  }
}

</style>