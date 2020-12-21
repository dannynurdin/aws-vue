<template>
    <div>
        <Webcam v-on:takepicture="this.takePicture" />
        <Gallery v-on:sendpicture="this.sendPicture" />
    </div>
</template>

<script>
import Webcam from '@/components/Webcam.vue';
import Gallery from '@/components/Gallery.vue';

export default {
    name: 'absent',
    components: {
        Webcam,
        Gallery
    },
    data() {
        return{
            info: "",
        }
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
            var base = dataURL.split(",")
            // console.log(base[1]);
            // var buf = Buffer.from(base[1], 'base64')
            // console.log(buf)
            this.$store.state.baseUrl = base[1];
        },
        sendPicture () {
            const axios = require('axios')

            var timestamp = (new Date()).getTime();
            var randomInteger = Math.floor((Math.random() * 1000000) + 1);

            

            var postData = {
                bucket: "asbent-pool-1221",
                body: this.$store.state.baseUrl,
                key: timestamp + "_" + randomInteger + ".JPG"
            };
            const url = this.$store.state.urlApiV2 + "/dev/upload"
            axios.post(url, postData)
            .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
            console.log("AXIOS ERROR: ", err);
            })

        },
    }
}
</script>