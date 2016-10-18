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

    export default {

        data() {
            return {

                history:    [],
                signes:     [],
                ids:        [0],
                score:      0,
                current:    {
                    obj:        {},
                    potential:  ''
                }
            }
        },

        computed: {
            picture() {
                return 'statics/symboles/' + this.current.obj.id + '.png';
            }
        },

        ready () {
            this.signes = Signes.all();
            this.next();
        },

        methods: {

            leave() {

                if(this.signes.length > 0)
                    if(confirm("Etes-vous sûr de vouloir quitter ?"))
                        this.end();
            },

            next() {

                if(this.signes.length == 0)
                    this.end();


                if(this.history.length > 0)
                    this.history.push(this.current);

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

            end() {
                alert("Fin, score final : " +
                this.score + "/" + this.history.length);
                this.$router.go('/');
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


    .image {

        width:100%;
        height:100px;
        display:flex;
        flex-direction:column;
        justify-content: center;
        border-bottom:1px solid #eee;
        background:rgb(250,250,250);
    }

    .buttons-m8 {

        display: flex;
        justify-content: space-between;
    }

    .image img {

        display: block;
        margin: auto;
    }
</style>
