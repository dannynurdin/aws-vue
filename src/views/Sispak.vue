<template>
    <div>
        <div>
            <p>gejala yang dirasakan :</p>
            {{li}}
        </div>
        <ul v-for="n in gejala" v-bind:key="n" class=" flex flex-col">
            <li class="flex justify-start">
                <input type="checkbox" :value="n.code" v-model="li" class="ml-3 flex justify-center items-center">
                <label class=" flex px-3 justify-center items-center text-center">{{n.text}}</label>
            </li>
        </ul>
        <button v-on:click="this.sendData" class="bg-purple-600 text-white font-semibold text-md px-3 py-2 rounded-lg leading-5 mb-5">Diagnosa</button>
        <div>
            <p class="text-2xl text-center">Hasil diagnosa</p>
            <span>{{result.body}}</span>
            <span>{{result.information}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            result: '',
            gejala: [
                {
                    code:"G1",
                    text:"Demam"
                },
                {
                    code:"G2",
                    text:"Batuk-batuk"
                },
                {
                    code:"G3",
                    text:"Hidung meler"
                },
                {
                    code:"G4",
                    text:"Pernafasan cepat tidak normal"
                },
                {
                    code:"G5",
                    text:"Bersin-bersin"
                },
                {
                    code:"G6",
                    text:"Muntah-muntah"
                },
                {
                    code:"G7",
                    text:"Dahak kental (kuning-kehijauan)"
                },
                {
                    code:"G8",
                    text:"Anggota tubuh lemas"
                },
                {
                    code:"G9",
                    text:"Otot-otot nyeri"
                },
                {
                    code:"G10",
                    text:"Sinar X pada paru-paru"
                },
                {
                    code:"G11",
                    text:"Sakit kepala"
                },
                {
                    code:"G12",
                    text:"Hidung tersumbat"
                },
                {
                    code:"G13",
                    text:"Tenggorokan sakit"
                },
                {
                    code:"G14",
                    text:"Tenggorokan tidak nyaman"
                },
            ],
            li: []
        }
    },
    methods: {
        sendData () {

            console.log(this.li)
            const axios = require('axios')
            const data = {
                gejala: this.li
            }

            const url = "https://gj5192fdkd.execute-api.ap-southeast-1.amazonaws.com/dev/sispak"

            axios.post(url, data)
            .then(response => (this.result = response.data))

        }
    }
}
</script>
