/**
 * Created by denis on 18/04/2017.
 */
import {EventEmitter} from 'events';
import _ from 'lodash';
export const SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

const whatwgFetch = self.fetch

let ResultStore = _.extend({}, EventEmitter.prototype, {

    results: [],

    search: function (query) {
        const url = SEARCH_URL + query;

        let that = this;

        whatwgFetch(url)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
            that.results = json.items;
            ResultStore.emitChange();
        }).catch(function (ex) {
            console.error(ex);
        })

    },
// Get all items
    getResults: function () {
        return this.results;
    },

// Emit Change event
    emitChange: function () {
        this.emit('change');
    },

// Add change listener
    addChangeListener: function (callback) {
        this.on('change', callback);
    },

// Remove change listener
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }

});

export default ResultStore;