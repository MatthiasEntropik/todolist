import { authenticationService } from "../_services/authentication.service";
import BaseSnackbar from '../components/base/BaseSnackbar'
export default {
    components: {
        BaseSnackbar
    },
    data() {
        return {
            currentUser: null,
            contentSnackbar: {
                text: '',
                color: 'success'
            }
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
            if (!_.isEmpty(this.currentUser)) {
                this.contentSnackbar.text = 'vous êtes connecter'
            }
        }
    },
}