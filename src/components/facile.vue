<template>
    <quasar-layout>
        <div slot="header" class="toolbar">
            <quasar-toolbar-title :padding="1">

                <button @click="leave">
                    <i>keyboard_arrow_left</i>
                </button>
                facile - {{ signes.length + 1 }} restants
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

    import Signes       from './../signes'
    import { Toast }    from 'quasar'
    import Base         from './../mixins/base'

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
                    return this.end();

                this.history++;

                this.current.obj = this.signes.shift();
                if(Math.random() > 0.5)
                    this.current.potential = this.current.obj.dn;
                else {
                    var id = 0;

                    while(this.ids.contains(id))
                        id = Math.floor(Math.random()*this.descs.length) + 1;

                    if(this.descs[id] === undefined)
                        this.current.potential = this.current.obj.dn; //TODO : debug this shit
                    else {
                        this.ids.push(id);
                        this.current.potential = this.descs[id];
                    }
                }
            },

            nope() {
                if(this.current.obj.dn != this.current.potential)
                    this.score++;
                else
                    Toast.create.negative("C'était juste : " + this.current.obj.dn);
                this.next();
            },

            yup() {

                if(this.current.obj.dn === this.current.potential)
                    this.score++;
                else
                    Toast.create.negative("Faux, c'était : " + this.current.obj.dn);

                this.next();
            }
        }
    }

</script>

<style scoped>

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

    .buttons-m8 {

        display: flex;
        justify-content: space-between;
    }

</style>
