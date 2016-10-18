
import Signes from './../signes'

export default {

    data() {
        return {
            history: -1,
            score: 0,
            signes: []
        }
    },

    computed: {
        picture() {
            return 'statics/symboles/' + this.current.obj.id + '.png';
        }
    },

    ready () {
        this.signes = Signes.all().shuffle();
        this.next();
    },

    methods: {

        leave() {

            if(this.signes.length > 0)
                if(confirm("Etes-vous sûr de vouloir quitter ?"))
                    this.end();
        },

        end() {
            alert("Fin, score final : " + this.score + "/" + this.history);
            this.$router.go('/');
        }
    }
}
