<template>
    <quasar-layout>
        <div slot="header" class="toolbar">
            <quasar-toolbar-title :padding="1">

                <button @click="leave">
                    <i>keyboard_arrow_left</i>
                </button>
                Difficile - {{ signes.length + 1 }} restants
            </quasar-toolbar-title>
        </div>

        <div class="layout-padding layout-view">
            <div class="card">
                <div class="image">
                    <img v-bind:src="picture" />
                </div>

                <div class="stacked-label">
                    <input placeholder="Filtrer" style="width:100%;" type="text" class="full-width" v-model="input">
                </div>

                <div class="list bordered item-delimiter">
                    <div class="item item-link" v-for="option in descs | filterBy input" track-by="$index" @click="chosen(option)">
                        <div class="item-content">
                                {{ option }} <i>keyboard_arrow_right</i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  </quasar-layout>
</template>

<script>

    import Signes       from './../signes'
    import {Toast}      from 'quasar'
    import Base         from './../mixins/base'

    export default {

        mixins: [
            Base
        ],

        data() {
            return {
                input:      '',
                current:    {
                    obj:        {},
                    descs:      [],
                    potential:  []
                }
            }
        },

        ready() {

            this.descs = Signes.descriptions();
        },

        methods: {

            chosen(option) {
                if(option == this.current.obj.dn)
                    this.score++;
                else
                    Toast.create.negative("Il s'agissait de : " + this.current.obj.dn);

                this.input = '';
                this.next();
            },

            next() {

                if(this.signes.length == 0)
                    return this.end();

                this.history++;
                this.current.obj = this.signes.shift();

                var options = [],
                    descs   = Signes.descriptions(),
                    dummy   = '';

                options.push(this.current.obj.dn);

                while(options.length < 4) {

                    dummy = descs[Math.floor(Math.random()*Signes.signes.length) +1];

                    if(!options.includes(dummy))
                        options.push(dummy);
                }

                this.current.potential = options.shuffle();
            },
        }
    }

</script>

<style>
.image {

    width:100%;
    height:100px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    border-bottom:1px solid #eee;
    background:rgb(250,250,250);
}

.image img {

    display: block;
    margin: auto;
}
</style>
