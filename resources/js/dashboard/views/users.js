import { apiService } from '../_services/apiService'
import AddUpdate from '../components/users/AddUpdate'
import UsersCard from '../components/users/UsersCard'
import UsersTab from '../components/users/UsersTab'
export default {
    components: {
        AddUpdate,
        UsersCard,
        UsersTab
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
            apiService.get('/api/users?page=' + page).then(({ data }) => {
                data.data.forEach(user => {
                    this.users.push(user);
                });
                this.pagination.pageCount = data.last_page
            })
        }

    },
}