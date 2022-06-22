/* eslint-disable camelcase */
import { extend } from 'vee-validate';
import { required, email, min_value, length } from 'vee-validate/dist/rules';

extend('email', email);
extend('min_value', min_value);
extend('required', required);
extend('length', length);

// extend('positiveNumber', {
//   validate: (value: number) => {
//     if (value > 0) {
//       return true;
//     }
//     return 'The {_field_} must be a positive number';
//   },
// });

// extend('minLength', {
//   validate(value, args) {
//     if (value.length >= args.length) {
//       return true;
//     }
//     return `Please enter at least ${args.length} chars.`;
//   },
//   params: ['length'],
// });

// extend('required', {
//   validate() {
//     return true;
//   },
//   computesRequired: true,
// });
