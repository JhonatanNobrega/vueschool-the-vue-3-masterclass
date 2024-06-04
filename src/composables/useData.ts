import sourceData from '@/data.json';
import type { Thread } from '@/interfaces/Thread';
import type { User } from '@/interfaces/User';
import type { Post } from '@/interfaces/Post';
import type { Forum } from '@/interfaces/Forum';
import type { Category } from '@/interfaces/Category';

interface SourceData {
  users: User[];
  threads: Thread[];
  posts: Post[];
  forums: Forum[];
  categories: Category[];
}

export function useData(): SourceData {
  if (
    'users' in sourceData && 
    'threads' in sourceData && 
    'posts' in sourceData &&
    'forums' in sourceData &&
    'categories' in sourceData
  ) {
    return sourceData as SourceData;
  }
  throw new Error('Base de dados inválida!');
}
