<template>
    <div>
        <Webcam v-on:takepicture="this.takePicture" />
        
        <input type="text" v-model="fullname" placeholder="enter your name">
        <input type="text" v-model="group" placeholder="enter your group">
        <Gallery v-on:sendpicture="this.savePicture" />
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
    data() {
        return{
            info: "",
            fullname:"",
            group:""
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
            this.$store.state.dataUrl = dataURL
            var base = dataURL.split(",")
            // console.log(base[1]);
            //var buf = Buffer.from(base[1], 'base64')
            // console.log(buf)
            this.$store.state.baseUrl = base[1];
        },

        savePicture () {
            const axios = require('axios')

            var timestamp = (new Date()).getTime();
            var randomInteger = Math.floor((Math.random() * 1000000) + 1);

            //var buf = Buffer.from(this.$store.state.baseUrl, 'base64')
            

            var postData = {
                bucket: "face-collection-1221",
                name: this.fullname,
                group: this.group,
                body: this.$store.state.baseUrl,
                key: timestamp + "_" + randomInteger + ".JPG",
                //buf: buf,
                // dataurl: this.$store.state.dataUrl
                
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