import Axios from 'axios';
export default {
  data() {
    return {
      email: null,
      has_error: false,
    };
  },
  methods: {
    requestResetPassword() {
      console.log(this.email);
      Axios.post('/api/password/email', { email: this.email}).then(
        (result) => {
          this.response = result.data;
          console.log(result.data);
        },
        (error) => {
          console.error(error);
        }
      );
    },
  },
};