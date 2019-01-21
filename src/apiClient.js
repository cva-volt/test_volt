export default class ApiClient {
  async getPosts() {
    return await this.getData("https://jsonplaceholder.typicode.com/posts");
  }

  async getComments(postId) {
    return await this.getData(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }

  async getData(url) {
    const result = await fetch(url);
    const data = await result.json();

    return data;
  }
}
