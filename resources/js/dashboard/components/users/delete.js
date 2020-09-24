import {apiService} from '../../_services/apiService.js';

export default {
    props: {
        user: {
            default: function () {
                return {}
            },

        },
        users: {
            default: function () {
                return {}
            },

        },
    },

    data() {
        return {
            dialog: false,
            timeout: 3000,
            snackbar: false,
            text: '',
        }
    },

    methods: {
        deleteUser(user) {
            const index = this.users.indexOf(user);
            apiService.get('/api/users/' + user.id + '/user').then(
                this.users.splice(index, 1)
            )
            this.dialog = false
        }
    },

}