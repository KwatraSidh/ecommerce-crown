import {createSelector} from 'reselect'

const directory = (state)=> state.directory;

const directorySelector = createSelector(
    [directory],
    directory => directory.sections
)

export default directorySelector;