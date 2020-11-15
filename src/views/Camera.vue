<template>
    <div>
        <Webcam v-on:takepicture="this.takePicture" />
        <Gallery />
    </div>
</template>

<script>
import Webcam from '@/components/Webcam.vue';
import Gallery from '@/components/Gallery.vue';

export default {
    name: 'camera',
    components: {
        Webcam,
        Gallery
    },
    methods: {
        takePicture () {
            console.log("take picture");
            let ratio = (window.innerHeight < window.innerWidth) ? 16 / 9 : 9 / 16;
            const gallery = document.querySelector("canvas");
            gallery.width = (window.innerWidth < 1280) ? window.innerWidth : 1280
            gallery.height = (window.innerWidth / ratio );
            const ctx = gallery.getContext('2d');
            
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high"
            ctx.drawImage(document.querySelector("video"), 0, 0, gallery.width, gallery.height)

            var canvas = document.getElementById('canvas');
            var dataURL = canvas.toDataURL();
            console.log(dataURL);
        }
    }
}
</script>