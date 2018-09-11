<template>
    <div class="c-circleprogress" :style="circleStyle">
        <svg viewBox="0 0 120 120" class="c-circleprogress__circle" fill="none" stroke-width="2">
            <circle class="circle__static" :r="radius" cx="60" cy="60" :style="staticCircleStyle" :transform="transform"
                    :stroke-dasharray="staticStrokeDasharray"></circle>
            <circle class="circle__dynamic" :transform="transform" stroke-dasharray="0 329" stroke-dashoffset="0"
                    :r="radius"
                    cx="60" cy="60" :style="dynamicCircleStyle"></circle>
        </svg>
        <div class="c-circleprogress__text" :style="{color: dynamicColor}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      percent: {
        type: [Number,String],
        default: 0
      },
      size: {
        type: [Number,String],
        default: 120
      },
      dynamicWidth: {
        type: [Number,String],
        default: 7
      },
      dynamicColor: {
        default: '#3864EC'
      },
      dynamicShape: {
        type: [String],
        default: 'round'
      },
      staticWidth: {
        type: [Number],
        default: 6
      },
      staticColor: {
        type: [String],
        default: '#E8EAED'
      },
      dashboard: {
        type: [Boolean],
        default: false
      }
    },
    data() {
      return {}
    },
    computed: {
      radius() {
        return 60 - this.staticWidth
      },
      circleStyle() {
        return {
          width: `${this.size}px`,
          height: `${this.size}px`,
        }
      },
      staticCircleStyle() {
        return {
          'stroke-width': this.staticWidth,
          'stroke': this.staticColor
        }
      },
      dynamicCircleStyle() {
        return {
          'stroke-width': this.dynamicWidth,
          'stroke': this.dynamicColor,
          'stroke-dasharray': `${this.dasharray} ${this.circumference}`,
          'stroke-linecap': this.dynamicShape,
        }
      },
      dasharray() {
        let circumference = this.dashboard ? this.dashboardStrokeDasharrayStart : this.circumference
        let percent = this.percent > 100 ? 100 : (this.percent < 0) ? 0 : this.percent
        return (circumference * percent / 100)
      },
      circumference() {
        return Math.PI * 2 * this.radius
      },
      transform() {
        if (this.dashboard) {
          return 'rotate(-225,60,60)'
        } else {
          return 'rotate(-90,60,60)'
        }
      },
      dashboardStrokeDasharrayStart() {
        return this.circumference * 270 / 360
      },
      staticStrokeDasharray() {
        if (this.dashboard) {
          return `${this.dashboardStrokeDasharrayStart} ${this.circumference}`
        } else {
          return '0 0'
        }
      }
    }
  }
</script>

<style lang="scss" type="text/scss">

    .c-circleprogress {
        position: relative;
        box-sizing: border-box;
        &__circle {
            width: 100%;
            height: 100%;
            .circle__static {
                fill: none;
            }
            .circle__dynamic {
                fill: none;
                transition: stroke-dasharray 1s ease;
                animation-delay: 250ms;
            }
        }
        &__text {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000;
            font-size: 14px;
            font-weight: bold;
        }
    }
</style>
