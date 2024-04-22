import sourceData from '@/data.json';
import type { Thread } from '@/interfaces/Thread';
import type { User } from '@/interfaces/User';
import type { Post } from '@/interfaces/Post';

interface SourceData {
  users: User[];
  threads: Thread[];
  posts: Post[];
}

export function useData(): SourceData {
  if ('users' in sourceData && 'threads' in sourceData && 'posts' in sourceData) {
    return sourceData as SourceData;
  }
  throw new Error('Base de dados inválida!');
}
