<template>
    <div class="gallery">
        <canvas id="canvas"></canvas>
        <!-- <button class="take" v-on:click="savePictures">Save Picture</button> -->
        
        <button class="take" v-on:click="$emit('sendpicture')">Save Picture</button>
    </div>
</template>

<script>
export default {
    name: 'gallery',
    methods: {}
}
</script>

<style lang="scss" scoped>
.gallery {
    box-sizing: border-box;
    canvas {
        display: block;
        width: 100%;
        max-width: 1280px;

        margin: 0 auto;

        box-shadow: 4px 4px 12px 0 transparentize($color: #171717, $amount: 0.75);
    }
}
</style>