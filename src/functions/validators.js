// const hasUpperCase = (value) => /[A-Z]/.test(val);
import {helpers} from '@vuelidate/validators';
const hasUpperCase = helpers.regex(/[A-Z]/);


export default {hasUpperCase};