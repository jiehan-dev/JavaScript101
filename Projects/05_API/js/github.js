class GitHub {
  constructor() {
    this.client_id = '57ef6cdcc45e2e736b7b';
    this.client_secret = '99cebdbb512166a78d8badae9a536c6b5432bbe0';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profileData,
      repos
    };
  }
}
