<template>
  <li  :class="$style.item" @click="isOpen = !isOpen">
    <div :class="[$style.header, isOpen && $style.isOpen]">
      <p :class="$style.label">
        {{ question }}
      </p>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99895 7.88294C4.61589 7.33006 5.56422 7.382 6.11709 7.99895L11.8797 14.4294C11.9129 14.4664 11.9404 14.4826 11.9568 14.49C11.9739 14.4977 11.9882 14.5 12 14.5C12.0118 14.5 12.0261 14.4977 12.0432 14.49C12.0597 14.4826 12.0871 14.4664 12.1203 14.4294L17.8829 7.99895C18.4358 7.382 19.3841 7.33006 20.0011 7.88294C20.618 8.43581 20.67 9.38414 20.1171 10.0011L14.3545 16.4315C13.0778 17.8562 10.9223 17.8562 9.64556 16.4315L3.88294 10.0011C3.33006 9.38414 3.382 8.43581 3.99895 7.88294Z" fill="#D20A0A"/>
      </svg>
    </div>
    <p :class="[$style.content, isOpen && $style.isOpen]">
      {{ answer }}
    </p>
  </li>

</template>

<script lang="ts" setup>
import { ref } from "vue";

defineProps({
  question: String,
  answer: String,
})

const isOpen = ref<boolean>(false);


</script>

<style lang="scss" module>

.item {
  font-family: 'RobotoCondensed', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 140%;
  color: #FFFFFF;
  background-color: #1D1D1F;
  cursor: pointer;
}

.header {
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  svg {
    width: 24px;
    height: 24px;
  }

  &.isOpen {
    svg {
      transform: rotate(-90deg);
    }
  }
}

.content {
  padding: 0 56px 0 32px;
  height: 0;
  visibility: hidden;
  &.isOpen {
    padding-bottom: 24px;
    height: auto;
    visibility: visible;
  }
}

@media screen and (max-width: 768px) {
  .item {
    font-size: 16px;
  }
  .header {
    padding: 20px 16px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
  .content {
    padding-right: 36px;
    padding-left: 16px;

    &.isOpen {
      padding-bottom: 20px;
    }
  }
}
</style>