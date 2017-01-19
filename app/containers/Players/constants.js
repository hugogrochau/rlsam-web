/*
 *
 * Players constants
 *
 */

export const PLAYERS_FETCH_REQUESTED = 'sam-rank/Players/PLAYERS_FETCH_REQUESTED';
export const PLAYERS_FETCH_SUCCEEDED = 'sam-rank/Players/PLAYER_FETCH_SUCCEEDED';
export const PLAYERS_FETCH_FAILED = 'sam-rank/Players/PLAYER_FETCH_FAILED';
export const CHANGE_ORDER = 'sam-rank/Players/CHANGE_ORDER';
export const NEXT_PAGE = 'sam-rank/Players/NEXT_PAGE ';
export const PREVIOUS_PAGE = 'sam-rank/Players/PREVIOUS_PAGE';

export const PLAYER_COLUMNS = [
  { name: 'name', type: 'link', linkColumn: 'profileLink' },
  { name: 'platform', type: 'image', imageColumn: 'platformImage' },
  { name: '1v1', sortable: true },
  { name: '2v2', sortable: true },
  { name: '3v3s', sortable: true },
  { name: '3v3', sortable: true },
  { name: 'sum', sortable: true },
  { name: 'profileLink', link: true },
  { name: 'platformImage', image: true },
];
