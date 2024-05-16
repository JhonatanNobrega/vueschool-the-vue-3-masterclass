import sourceData from '@/data.json';
import type { Thread } from '@/interfaces/Thread';
import type { User } from '@/interfaces/User';
import type { Post } from '@/interfaces/Post';
import type { Forum } from '@/interfaces/Forum';

interface SourceData {
  users: User[];
  threads: Thread[];
  posts: Post[];
  forums: Forum[];
}

export function useData(): SourceData {
  if (
    'users' in sourceData && 
    'threads' in sourceData && 
    'posts' in sourceData &&
    'forums' in sourceData
  ) {
    return sourceData as SourceData;
  }
  throw new Error('Base de dados inválida!');
}
