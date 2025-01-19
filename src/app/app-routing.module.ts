import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashviewComponent } from "./dashview/dashview.component";
import { AdviserComponent } from "./adviser/adviser.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ConnectwalletComponent } from "./connectwallet/connectwallet.component";
import { walletGuard } from "./guard/wallet.guard";
import { TokenIntegrationComponent } from "./token-integration/token-integration.component";

const routes: Routes = [
  { path: "dashboard", component: DashviewComponent },
  { path: "adviser", component: AdviserComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "balance", component: TokenIntegrationComponent },
  { path: "connect-wallet", component: ConnectwalletComponent },
  { path: "", redirectTo: "/connect-wallet", pathMatch: "full" },
  { path: "**", redirectTo: "/connect-wallet" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
