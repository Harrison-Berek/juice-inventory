import sendRequest from './send-request';

const BASE_URL = '/api/items';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function add(item) {
    return sendRequest(BASE_URL, 'POST', item, true);
}

export function update(item) {
    return sendRequest(`${BASE_URL}/${item._id}`, 'PUT', item );
}

export function deleteItem(item) {
    return sendRequest(`${BASE_URL}/${item._id}`, 'DELETE', item );
}
