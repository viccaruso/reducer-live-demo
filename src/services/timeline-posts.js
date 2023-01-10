import { client, checkError } from './client.js';

export async function getPosts() {
  const response = await client
    .from('timeline-posts')
    .select(`
      *
`)
    .order('created_at', { ascending: false })
  ;
  return checkError(response);
}

export async function getPost(postId) {
  const response = await client
    .from('timeline-posts')
    .select(`
      *
`)
    .match({ id: postId })
    .single()
  ;
  return checkError(response);
}

export async function createPost(user, body) {
  const response = await client
    .from('timeline-posts')
    .insert({
      body,
      user_id: user.id,
    })
  ;
  return checkError(response);
}

export async function updatePost(postId, body) {
  const response = await client
    .from('timeline-posts')
    .update({
      body,
    })
    .eq('id', postId)
  ;
  return checkError(response);
}
