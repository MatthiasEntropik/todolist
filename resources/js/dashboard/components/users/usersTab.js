import AddUpdate from './AddUpdate'

export default {
    components: {
        AddUpdate
    },
    props: {
        users: {
            default: function () {
                return {}
            },
        },

        user: {
            default: function () {
                return {}
            },

        },

    },

    data() {
        return {
            headers: [{
                text: "Utilisateurs",
                align: "start",
                sortable: false,
                value: "name"
            },
            { text: "email", value: "email" },
            { text: "actions", value: "actions" },
            ],
        }
    },

    methods: {
        update(user) {

            const index = _.findIndex(this.users, { id: user.id });
            this.users.splice(index, 1, user);

        },

        add(user) {
            const index = _.findIndex(this.users, { id: user.id });
            this.users.push(user);
        }
    },
}