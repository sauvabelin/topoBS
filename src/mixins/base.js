
import Signes from './../signes'
import {Toast} from 'quasar'

export default {

    data() {
        return {
            descs: [],
            history:0,
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

        this.$set('descs', Signes.descriptions().shuffle());
        this.$set('signes', Signes.all().shuffle());
        this.next();
    },

    methods: {

        init() {

            var s = Signes.all().shuffle();

            this.history    = 0;
            this.score      = 0;
            this.$set('signes', s);
        },

        leave() {

            if(this.signes.length > 0)
                if(confirm("Etes-vous sûr de vouloir quitter ?"))
                    this.end();
        },

        end() {
            Toast.create.positive({
                html: "Score final : " + this.score + " sur " + this.history,
                timeout: 5000
            });
            this.init();
            this.$router.go('/');
        }
    }
}
