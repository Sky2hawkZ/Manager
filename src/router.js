import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import EmployeeList from './components/employeeList';
import EmployeeCreate from './components/employeeCreate';
import EmployeeEdit from './components/employeeEdit';

const RouterComponent = () => (
    <Router>
        <Scene key="root" hideNavBar headerLayoutPreset='center'>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" headerLayoutPreset='center' initial />
            </Scene>
            <Scene key="main">
                <Scene
                    onRight={() => Actions.employeeCreate()}
                    key="employeeList"
                    component={EmployeeList}
                    headerLayoutPreset='center'
                    title="Employees"
                    rightTitle="Add"
                    initial
                />
                <Scene
                    key="employeeCreate"
                    component={EmployeeCreate}
                    headerLayoutPreset='center'
                    title="Create Employee"
                />
                <Scene
                    key="employeeEdit"
                    component={EmployeeEdit}
                    headerLayoutPreset='center'
                    title="Edit Employee"
                />
            </Scene>
        </Scene>
    </Router>
);

export default RouterComponent;
