import { authenticationService } from "../_services/authentication.service";

export default {

    data() {
        return {
            currentUser: null,
            snackbar: false,
            text: '',
            timeout: 3000,
        }
    },
    computed: {
        isChecked() {
            return this.currentUser;
          },
    },
    created() {
        authenticationService.currentUser.subscribe((x) => (this.currentUser = x));
        this.snackCheck();
    },

    methods: {
        snackCheck() {
            this.snackbar = true;
            if (!_.isEmpty(this.currentUser)) {
             this.text = 'vous êtes connecter'
            }
          }
    },
}