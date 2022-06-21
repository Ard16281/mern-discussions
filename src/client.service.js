import http from "./axios";
class DiscussionClientservice {
    getAll() {
        return http.get("/tutorials");
      }
      get(id) {
        return http.get(`/tutorials/${id}`);
     }
     Signup(data) {
      console.log("abcd",data)
        return http.post("/signup",data);
     }
     update(id,data) {
        return http.put(`/tutorials/${id}`, data);
     }
     getDiscussions() {
        return http.get(`/getdiscussions`);
     }
     createDiscussion(body) {
        return http.post(`/creatediscussions`,body);
     }
     onLogin(data) {
        return http.post(`/login`,data)
     }

}
export default new DiscussionClientservice;