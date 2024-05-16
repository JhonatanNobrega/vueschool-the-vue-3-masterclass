import type { App } from 'vue';
type ComponentModule = { default: any };

export function globalAutomaticComponent(app: App) {
  const components: Record<string, ComponentModule> = import.meta.glob('./../components/App*.vue', {
    eager: true
  });
  Object.keys(components).forEach((path) => {
    const nameMatch = path.match(/\.\/components\/(.*)\.vue$/);
    if (nameMatch && nameMatch[1]) {
      const name = nameMatch[1];
      const component = components[path]?.default;
      if (component) {
        app.component(name, component);
      } else {
        console.error(`Component default export not found for ${name}`);
      }
    } else {
      console.error(`Invalid path format: ${path}`);
    }
  });
}
