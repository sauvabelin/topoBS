<template>
    <quasar-layout>
        <div slot="header" class="toolbar">
            <quasar-toolbar-title :padding="1">

                <button @click="leave">
                    <i>keyboard_arrow_left</i>
                </button>
                facile - {{ signes.length }} restants
            </quasar-toolbar-title>
        </div>

        <div class="layout-padding layout-view">
            <div class="card">
                <div class="image">
                    <img v-bind:src="picture" />
                </div>
                <div class="card-title bg-teal text-white text-center">{{ current.potential }} ?</div>
            </div>

            <div class="buttons-m8">
                <button class="red circular" @click="nope">
                    <i>clear</i>
                </button>

                <button class="green circular" @click="yup">
                    <i>check</i>
                </button>
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

                ids:        [0],
                current:    {
                    obj:        {},
                    potential:  ''
                }
            }
        },

        methods: {

            next() {

                if(this.signes.length == 0)
                    this.end();

                this.history++;

                this.current.obj = this.signes.shift();
                if(Math.random() > 0.5)
                    this.current.potential = this.current.obj.dn;
                else {
                    var descs   = Signes.descriptions(),
                        id      = 0;

                    while(this.ids.contains(id))
                        id = Math.floor(Math.random()*Signes.signes.length) + 1;

                    this.ids.push(id);
                    this.current.potential = descs[id];
                }
            },

            nope() {
                if(this.current.obj.dn != this.current.potential)
                    this.score++;
                else
                    alert("C'était vrai, il s'agissait de : " + this.current.obj.dn);

                this.next();
            },

            yup() {

                if(this.current.obj.dn === this.current.potential)
                    this.score++;
                else
                    alert("Faux, il s'agissait de : " + this.current.obj.dn);

                this.next();
            }
        }
    }

</script>

<style scoped>

    .buttons-m8 {

        display: flex;
        justify-content: space-between;
    }

</style>
