<template>
    <div class="gallery">
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
export default {
    name: 'gallery',
}
</script>

<style lang="scss" scoped>
.gallery {

    padding: 25px;
    box-sizing: border-box;
    canvas {
        
        width: 100%;
        max-width: 1280px;

        margin: 0 auto;

        box-shadow: 4px 4px 12px 0 transparentize($color: #171717, $amount: 0.75);
    }
}
</style>