import { EventBus } from '../eventBus';
import { apiService } from './apiService'
export const userService = {
    nextPageUsers,
    deleteUser
}

let routeUser = '/api/users';

function nextPageUsers(page, users, pagination) {
    return apiService.get(routeUser + '?page=' + page).then(({ data }) => {
        data.data.forEach(user => {
            users.push(user);
        });
        pagination = data.last_page
        EventBus.$emit('updatePagination', pagination)
    })
}


function deleteUser(user) {
    return apiService.get(routeUser + user.id + '/user')
}