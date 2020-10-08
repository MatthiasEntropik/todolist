import { userService } from '../_services/userService'

import AddUpdate from '../components/users/AddUpdate'
import UsersCard from '../components/users/UsersCard'
import UsersTab from '../components/users/UsersTab'
import BaseSnackbar from '../components/base/BaseSnackbar'
import { EventBus } from '../eventBus'

export default {
    components: {
        AddUpdate,
        UsersCard,
        UsersTab,
        BaseSnackbar
    },
    data() {
        return {
            users: [],
            isLoading: false,
            items: [],
            model: null,
            search: '',
            tab: null,
            activeCard: true,
            activeTab: false,
            pagination: {
                page: 1,
                visible: 10,
                pageCount: 0,
            }

        }
    },

    computed: {
        filteredList() {
            return this.users.filter(user => {
                return user.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },

    created() {
        this.nextPageUsers(1);
    },

    methods: {
        nextPageUsers(page) {
            this.users = []
            userService.nextPageUsers(page, this.users, this.pagination.pageCount)
            EventBus.$on('updatePagination', (pagination) => {
                this.pagination.pageCount = pagination

            })
        },

    },
}