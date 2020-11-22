<template>
    <div>
        <Webcam v-on:takepicture="this.takePicture" />
        
        <input type="text" v-model="fullname" placeholder="enter your name">
        <input type="text" v-model="group" placeholder="enter your group">
        <Gallery v-on:sendpicture="this.savePictures" />
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
            var base = dataURL.split(",")
            // console.log(base[1]);
            // var buf = Buffer.from(base[1], 'base64')
            // console.log(buf)
            this.$store.state.baseUrl = base[1];
        },

        savePictures () {
            var AWS = require('aws-sdk');
            

            var data = this.$store.state.baseUrl;
            var buf = Buffer.from(data, 'base64')
            
            const s3 = new AWS.S3({
                accessKeyId: 'AKIA5O74KBBPY62CWKGX',
                secretAccessKey: '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'
            });
            
            var timestamp = (new Date()).getTime();
            var randomInteger = Math.floor((Math.random() * 1000000) + 1);

            var params = {
                Bucket: 'face-collection-1221',
                Key: timestamp + "_" + randomInteger + ".JPG", 
                Body: buf,
                ContentEncoding: 'base64',
                ContentType: 'image/jpeg',
                Metadata: {
                    'info': this.fullname + '.' + this.group
                }
            };
            s3.upload(params, (err, data) => {
                if (err) { 
                    console.log(err);
                    console.log('Error uploading data: ', data); 
                } else {
                    console.log('successfully uploaded the image!');
                    alert("image uploaded!")
                }
            });
        }

//         savePicture(){
//             var AWS = require('aws-sdk');
//             AWS.config.loadFromPath('./s3_config.json');
//             var s3Bucket = new AWS.S3( { params: {Bucket: 'dannynurdin'} } );
            
//             var timestamp = (new Date()).getTime();
//             var randomInteger = Math.floor((Math.random() * 1000000) + 1);
            
//             var data = {
//                 Key: timestamp + "_" + randomInteger, 
//                 Body: this.$store.state.baseUrl,
//                 ContentEncoding: 'base64',
//                 ContentType: 'image/jpeg'
//             };
//             s3Bucket.putObject(data, function(err, data){
//                 if (err) { 
//                     console.log(err);
//                     console.log('Error uploading data: ', data); 
//                 } else {
//                     console.log('successfully uploaded the image!');
//                 }
//   });


//         }

        // savePicture () {
        //     var AWS = require('aws-sdk');
        //     var config = {
        //     // link penting https://gist.github.com/maephisto/115d4237ada17aef5b8a
        //     "aws" : {
        //             "bucket": "dannynurdin",
        //             "credentials" : {
        //                 "accessKeyId": "AKIA5O74KBBPWS7UXCUO",
        //                 "secretAccessKey": "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"
        //             }
        //         }
        //     };

        //     var getUniqueFilename = function(config) {
        //         var timestamp = (new Date()).getTime();
        //         var randomInteger = Math.floor((Math.random() * 1000000) + 1);

        //         return config.aws.path + timestamp + '_' + randomInteger + '.png';
        //     };
        //     var base64EncodedImage = this.$store.state.baseUrl
        //     module.exports.storeImage = function(base64EncodedImage, config,  callback) {
        //         var buf = new Buffer(base64EncodedImage, 'base64');
        //         AWS.config = config.aws.credentials;
        //         var key = getUniqueFilename(config);
        //         var s3 = new AWS.S3();
        //         s3.putObject({
        //             Bucket: config.aws.bucket,
        //             Key: key,
        //             Body: buf,
        //             ACL: 'public-read',

        //             ContentType: "image/png",
        //             ContentEncoding: "base64"
        //         }, function(error, data) {
        //             callback(data, error, key);
        //         });
        //     };

        // }
    }
}
</script>