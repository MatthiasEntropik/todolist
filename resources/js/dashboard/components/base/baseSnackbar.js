
export default {

    props: {
        contentSnackbar: {
            default: function () {
                return {}
            }
        }
    },

    data() {
        return {
            snackbar: false,
            timeout: 3000,
        }
    },

    created() {
        this.snackbar = true
    }
}