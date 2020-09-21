import { authenticationService } from "../_services/authentication.service";

export default {

    data() {
        return {
            currentUser: null,
        }
    },
    created() {
        authenticationService.currentUser.subscribe((x) => (this.currentUser = x));
    },
}