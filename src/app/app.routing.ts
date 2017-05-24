import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { LoginRoutes } from './login/index';
import { ThemeRoutes } from './theme/index';
import { UserdetailsRoutes } from './userdetails/index';
import { SettingsRoutes } from './settings/index';
import { ScanReportRoutes } from './scanReport/index';
import { ReportRoutes } from './report/index';
import { PagesRoutes } from './pages/index';
import { TodolistRoutes } from './todolist/index';

const appRoutes: Routes = [
    ...HomeRoutes, ...LoginRoutes, ...SettingsRoutes, ...ScanReportRoutes,
    ...TodolistRoutes, ...ThemeRoutes, ...UserdetailsRoutes, ...PagesRoutes,
    ...ReportRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
