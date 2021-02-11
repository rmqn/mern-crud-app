import http from "./http-common";

const getAll = () => {
    return http.get("/api/users");
};

const create = data => {
    return http.post("/api/users", data);
};

const update = (id, data) => {
    return http.put(`/api/users/${id}`, data);
};

const remove = id => {
    return http.delete(`/api/users/${id}`);
};


export default {
    getAll,
    create,
    update,
    remove
};