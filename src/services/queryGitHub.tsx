type GitHubProfile = {
    avatarUrl: string;
    name: string;
    bio: string;
};

export async function fetchGitHubProfile(username: string): Promise<GitHubProfile> {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
        throw new Error(`Nenhum perfil foi encontrado com ese nome de usuário. Tente novamente`);
    }

    const data = await response.json();

    console.log(data)

    return {
        avatarUrl: data.avatar_url,
        name: data.name,
        bio: data.bio,
    };
}