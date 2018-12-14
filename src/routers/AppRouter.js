import React from 'react';
import  {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AddExpensePage from './../components/AddExpensePage';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import EditExpensePage from './../components/EditExpensePage';
import HelpExpensePage from './../components/HelpExpensePage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';


const AppRouter = () => {
    return(
        <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFoundPage}/>            
            </Switch>
        </div>
        </BrowserRouter>
    );
    
};
export default AppRouter;