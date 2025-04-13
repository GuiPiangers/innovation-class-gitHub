type GitHubProfile = {
    avatarUrl: string;
    name: string;
    bio: string;
  };
  
export async function fetchGitHubProfile(username: string): Promise<GitHubProfile> {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
        throw new Error(`Erro ao buscar o perfil do GitHub: ${response.statusText}`);
    }

    const data = await response.json();

    return {
        avatarUrl: data.avatar_url,
        name: data.name,
        bio: data.bio,
    };
}