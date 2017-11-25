'use strict';

/*
    IMPORTANT: requires Underscore.js (http://underscorejs.org)

    Usage: ng-repeat="item in items | fuzzyFilter: searchText"
*/

const fuzzyFilter = function (items, searchText) {
    if (!searchText) {
        return {};
    };

    let searchWords = searchText.split(' ');

    return _.filter(items, function (item) {
        let itemValues = _.values(item);
        let itemText = itemValues.join(' ');
        let lowerCasedItemText = itemText.toLowerCase();

        return _.every(searchWords, function (searchWord) {
            let lowerCasedSearchWord = searchWord.toLowerCase();

            return lowerCasedItemText.search(lowerCasedSearchWord) !== -1;
        });
    });
};

export { fuzzyFilter };

