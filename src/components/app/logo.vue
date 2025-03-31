<template>
  <div
    :class="['logo', wrapper, height, color, { 'cursor-pointer': to }]"
    @click="to ? navigateTo(to) : null"
  >
    <div :class="graph" v-if="showGraph">
      <span :class="['mask graph', height]"></span>
    </div>
    <div :class="text" v-if="showText">
      <span :class="['mask text', height]"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 属性
 */
type Props = {
  wrapper?: string; // 包装元素上的类
  variant?: 'full' | 'text' | 'graph'; // 变体类型 full: 文本和图标, text: 只显示文本, graph: 只显示图标
  color?: string; // 标志的文本和图标颜色
  height?: string; // 标志的高度
  to?: string; // 链接的路由地址
  text?: string; // 标志文本包装上的类
  graph?: string; // 标志图像上的类
};

const props = withDefaults(defineProps<Props>(), {
  wrapper: 'flex gap-3',
  variant: 'full',
  height: 'h-8',
});

/**
 * 数据
 */
const color = computed(() => {
  let value;

  if (props.color) {
    value = props.color;
  } else {
    value = 'text-black dark:text-white';
  }

  return value;
});

const showText = computed(() => {
  return props.variant === 'full' || props.variant === 'text';
});

const showGraph = computed(() => {
  return props.variant === 'full' || props.variant === 'graph';
});
</script>

<style scoped lang="postcss">
.logo {
  .mask {
    display: inline-block;
    background-color: currentColor;
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
  }

  .graph {
    aspect-ratio: 1 / 1;
    mask-image: url('/images/logo-graph.svg');
  }

  .text {
    aspect-ratio: 16 / 9;
    mask-image: url('/images/logo-text.svg');
  }
}
</style>
