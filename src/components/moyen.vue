<template>
    <quasar-layout>
        <div slot="header" class="toolbar">
            <quasar-toolbar-title :padding="1">

                <button @click="leave">
                    <i>keyboard_arrow_left</i>
                </button>
                Moyen - {{ signes.length }} restants
            </quasar-toolbar-title>
        </div>

        <div class="layout-padding layout-view">
            <div class="card">
                <div class="image">
                    <img v-bind:src="picture" />
                </div>

                <div class="list bordered item-delimiter">
                    <div class="item item-link" v-for="option in current.potential" @click="chosen(option)">
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

    import Signes from './../signes'
    import Base   from './../mixins/base'

    export default {

        mixins: [
            Base
        ],

        data() {
            return {
                current:    {
                    obj:        {},
                    potential:  []
                }
            }
        },

        methods: {

            chosen(option) {
                if(option == this.current.obj.dn)
                    this.score++;
                else
                    alert("Eh non, il s'agissait de : " + this.current.obj.dn);

                this.next();
            },

            next() {

                if(this.signes.length == 0)
                    this.end();

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
