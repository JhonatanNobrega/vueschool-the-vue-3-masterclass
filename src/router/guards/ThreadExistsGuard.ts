import { useData } from '@/composables/useData';
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export function ThreadExistsGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const sourceData = useData();
  const threadExists = sourceData.threads.find((thread) => thread.id === to.params.id);
  if (threadExists) {
    return next();
  } else {
    return next({
      name: 'NotFound',
      params: { pathMatch: to.path.substring(1).split('/') },
      query: to.query,
      hash: to.hash
    });
  }
}
