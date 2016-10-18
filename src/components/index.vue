<template>
    <quasar-layout>
        <div slot="header" class="toolbar">

            <!-- Toolbar title/text -->
            <quasar-toolbar-title :padding="0">
                TopoBS
            </quasar-toolbar-title>
        </div>

        <!-- Replace "div" with "<router-view>" component if using subRoutes -->
        <div class="layout-padding">
            <div class="card">
                <div class="card-title">TopoBS</div>

                <div class="card-content">
                    Bienvenue sur cette petite application toute simple qui va vous aider
                    à réviser vos signes topo histoire de pas vous planter à l'examen !
                </div>

                <div class="list bordered item-delimiter">
                    <div class="item item-link"  v-link="{path: '/facile', exact: true}">
                        <i class="item-primary">local_florist</i>
                        <div class="item-content">
                                Facile - vrai/Faux
                                <i>keyboard_arrow_right</i>
                        </div>
                    </div>
                    <div class="item item-link"  v-link="{path: '/moyen', exact: true}">
                        <i class="item-primary">local_cafe</i>
                        <div class="item-content">
                                Moyen - choix multiples
                                <i>keyboard_arrow_right</i>
                        </div>
                    </div>
                    <div class="item item-link"  v-link="{path: '/difficile', exact: true}">
                        <i class="item-primary">thumb_up</i>
                        <div class="item-content">
                                Difficile
                                <i>keyboard_arrow_right</i>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    </quasar-layout>
</template>

<script>
export default {
  data () {
    return {}
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
