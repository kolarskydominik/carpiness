import { Routes } from '@angular/router';
import { MenuItem, menu } from '../menu';
import { HomeComponent } from '../containers/home/home.component';
import { PageNotFoundComponent } from '../containers/page-not-found/page-not-found.component';

// function generateRoutesFromMenu(menuItems: MenuItem[]): Routes {
//   const routes: Routes = [];

//   for (const menuItem of menuItems) {
//     if (menuItem.path) {
//       console.log(menuItem.path);
//       routes.push({
//         path: menuItem.path,
//         // loadComponent: async () => {
//         //   try {
//         //     const path = `../containers/${menuItem.path}/${menuItem.path}.component.ts`;
//         //     console.log('Importing path: ', path);
//         //     const module = await import(/* @vite-ignore */ path);
//         //     return module.default || module[Object.keys(module)[0]];
//         //     // console.log('Module: ', module);
//         //     return module
//         //   } catch (error) {
//         //     console.error(
//         //       `Error loading component for path: ${menuItem.path}`,
//         //       error,
//         //     );
//         //     throw error;
//         //   }
//         // },
//       });
//     } else {
//       routes.push({
//         path: '',
//         component: HomeComponent,
//       });
//     }

//     if (menuItem.children) {
//       const childRoutes = generateRoutesFromMenu(menuItem.children);
//       routes.push(...childRoutes);
//     }
//   }

//   routes.push({
//     path: '**',
//     component: PageNotFoundComponent,
//   });

//   return routes;
// }

// export const routes: Routes = generateRoutesFromMenu(menu);

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('../containers/about-us/about-us.component').then(
        (m) => m.AboutUsComponent,
      ),
  },
];
