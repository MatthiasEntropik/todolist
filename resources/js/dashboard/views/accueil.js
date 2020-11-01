import { mapState, mapMutations, mapActions } from "vuex";

export default {
    computed: {
        ...mapState(["user"]),
    },

    // created() {
    //     this.setUser(3);
    // },
    methods: {
        // ...mapMutations({
        //     setUser: "SET_USER",
        // }),
        getToto() {
            this.$store.dispatch('toto');
        }
    },
}