import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashviewComponent } from "./dashview/dashview.component";
import { AdviserComponent } from "./adviser/adviser.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ConnectwalletComponent } from "./connectwallet/connectwallet.component";
import { walletGuard } from "./guard/wallet.guard";
import { TokenIntegrationComponent } from "./token-integration/token-integration.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashviewComponent,
    canActivate: [walletGuard],
  },
  { path: "adviser", component: AdviserComponent, canActivate: [walletGuard] },
  { path: "aboutus", component: AboutusComponent },
  { path: "balance", component: TokenIntegrationComponent },
  { path: "connect-wallet", component: ConnectwalletComponent },
  { path: "", component: HomePageComponent },
  { path: "**", redirectTo: "" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
