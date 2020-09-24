import { apiService } from '../_services/apiService'
import AddUpdate from '../components/users/AddUpdate'
import SearchUsers from '../components/users/SearchUsers'
export default {
    components: {
        AddUpdate,
        SearchUsers
    },
    data() {
        return {
            users: [],
            isLoading: false,
            items: [],
            model: null,
            search: '',
            tab: null,
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
        this.getUsers();
    },

    methods: {
        getUsers() {
            apiService.get('/api/users').then(({ data }) => {
                data.forEach(user => {
                    this.users.push(user);
                });
            })
        },

    },
}