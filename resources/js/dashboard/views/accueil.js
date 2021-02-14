import Axios from "axios";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    data() {
        return {
            list: null,
            tache: '',
            description: '',
            id: '',
            selectPriorite: '',
            filterSelect: '',
            priorite: [
                {
                    slug: 'haute'
                },
                {
                    slug: 'moyenne'
                },
                {
                    slug: 'faible'
                },
            ],
            date: new Date().toISOString().substr(0, 10),
            modal: false,
        }
    },
    computed: {
        ...mapState(["user"]),

    },
    created() {
        this.getDatas();
    },
    methods: {
        getDatas() {
            axios({
                url: '/graphql',
                method: 'post',
                data: {
                    query: `
                    {
                        lists(
                            orderBy:[{ column: DEADLINE, order: ASC }]
                        ){
                            id
                            task
                            completed
                            description
                            priorite
                            deadline
                        }
                    }
                    `
                }
            }).then(({ data }) => {
                this.list = (data.data.lists)
            });
        },
        updateTask(data) {
            axios({
                url: '/graphql',
                method: 'post',
                data: {
                    query: `
                    mutation{
                        updateTodo(id:`+ data.id + `, completed:` + data.completed + `){
                            completed
                        }
                    }
                    `
                }
            }).then(({ data }) => {
                console.log(data)
            });
        },
        addTask() {
            console.log(this.date)
            axios({
                url: '/graphql',
                method: 'post',
                data: {
                    query: `
                        mutation{
                            createTodo(completed:false,task:"`+ this.tache + `", description:"` + this.description + `",user_id:1, priorite:"` + this.selectPriorite + `", deadline:"` + this.date + `")
                                {
                                    id
                                    task
                                    completed
                                    description
                                    priorite
                                    deadline
                                }
                        }
                        `
                }
            }).then(({ data }) => {
                this.list.push(data.data.createTodo)
                this.tache = ''
                this.description = ''
            });
        },
        updateInputs(data) {
            this.id = data.id
            this.tache = data.task
            this.description = data.description
            this.selectPriorite = data['priorite']
            this.date = data.deadline
            console.log(data)
        },
        updateTaskInfo() {
            axios({
                url: '/graphql',
                method: 'post',
                data: {
                    query: `
                    mutation{
                        updateTodo(id:`+ this.id + `, task:"` + this.tache + `",description:"` + this.description + `", priorite:"` + this.selectPriorite + `",deadline:"` + this.date + `"){
                            id
                            task
                            description
                            completed
                            priorite
                            deadline
                        }
                    }
                    `
                }
            }).then(({ data }) => {
                this.list.forEach(todo => {
                    if (todo.id == data.data.updateTodo.id) {
                        todo.task = data.data.updateTodo.task
                        todo.description = data.data.updateTodo.description
                        todo.date = data.data.updateTodo.deadline
                    }
                })
            });
        },
        filterPriorite() {
            axios({
                url: '/graphql',
                method: 'post',
                data: {
                    query: `
                    {
                        listFilterPriorite(priorite:"`+ this.filterSelect + `")
                        {
                            id
                            task
                            completed
                            priorite
                            deadline
                        }
                    }
                    `
                }
            }).then(({ data }) => {
                this.list = (data.data.listFilterPriorite)
            });
        }
    }
}