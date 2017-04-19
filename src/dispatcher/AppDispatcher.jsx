import {Dispatcher} from 'flux';


let AppDispatcher = new Dispatcher();

import ResultStore from '../stores/ResultStore';

// Register callback with AppDispatcher
AppDispatcher.register((action) => {

    ResultStore.search(action.searchObject.query);
    return true;

});

export default AppDispatcher;