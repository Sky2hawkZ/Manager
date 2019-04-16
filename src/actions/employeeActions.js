import {
    EMPLOYEE_UPDATE
} from './types';

/**
 * Something does stuff
 * @var prop
 * @var value
 */
export const employeeUpdate = ({ prop, value }) => ({
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
});
