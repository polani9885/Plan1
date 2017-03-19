//Ng table parameter specifying
function createUsingFullOptions(data, ngTableParams) {
    var initialParams = {
        page: 1,
        count: 10 // initial page size
    };
    var initialSettings = {
        // page size buttons (right set of buttons in demo)
        counts: [],
        // determines the pager buttons (left set of buttons in demo)
        paginationMaxBlocks: 13,
        paginationMinBlocks: 2,
        dataset: data
    };
    return new ngTableParams(initialParams, initialSettings);
}