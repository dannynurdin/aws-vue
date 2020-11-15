<template>
    <div class="camera">
        <video autoplay class="feed"></video>
        <button class="btn" v-on:click="$emit('takepicture')">Take Picture</button>
    </div>
</template>

<script>
export default {
    name: 'webcam',
    methods: {
        init () {
            if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
                let constraint = {
                    video: {
                        width: {
                            min: 640    ,
                            ideal: 1280,
                            max: 1920
                        },
                        height: {
                            min: 360,
                            ideal: 720,
                            max: 1080
                        }
                    }
                };
                navigator.mediaDevices.getUserMedia(constraint).then(stream => {
                    const videoPlayer = document.querySelector("video");
                    videoPlayer.srcObject = stream;
                    videoPlayer.play()
                });
            } else {
                alert("alert")
            }
        }
    },
    beforeMount() {
        this.init();
    },
}
</script>

<style lang="scss" scoped>
.camera {

    box-sizing: border-box;

    .feed {
        display: block;
        padding:12px;
        width: 100%;
        max-width: 1280px;

        margin: 0 auto;

        background-color: #171717;
        box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.35);
    }

    .btn {
        margin-top: 15px;
        width: 60px;
        height: 60px;
        border-radius: 50%;

        border: 1px solid #171717;
        background-color: transparentize($color: #FFCE00, $amount: 0.5);
        outline: none;

        cursor: pointer;

        &:hover {
            background-color: #FFCE00;
        }
        &:active {
            background-color: darken($color: #ffce00, $amount: 15);
        }
    }
}
</style>