import { Routes } from '@angular/router';
import { MenuItem, menu } from '../menu';
import { Type } from '@angular/core';

async function loadComponent(path: string): Promise<Type<any>> {
  /* @vite-ignore */
  const module = await import(`../containers/${path}/${path}.component`);
  return module[`${path.charAt(0).toUpperCase()}${path.slice(1)}Component`];
}

async function generateRoutesFromMenu(menuItems: MenuItem[]): Promise<Routes> {
  const routes: Routes = [];

  for (const menuItem of menuItems) {
    if (menuItem.path) {
      const component = await loadComponent(menuItem.path);
      console.log(component);
      routes.push({
        path: menuItem.path,
        component: component,
      });
    }

    if (menuItem.children) {
      const childRoutes = await generateRoutesFromMenu(menuItem.children);
      routes.push(...childRoutes);
    }
  }

  return routes;
}

export const routes: Routes = (() => {
  let result: Routes = [];
  (async () => {
    result = await generateRoutesFromMenu(menu);
  })();
  return result;
})();