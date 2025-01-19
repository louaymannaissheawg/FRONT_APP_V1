import { Component, ViewChild } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { LocalStorageService } from "../service/localStorage.service";
import { Router } from "@angular/router";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent {
  isHandset$: Observable<boolean>;
  walletId: string | null;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map((result) => result.matches),
      shareReplay()
    );

    this.walletId = this.localStorageService.getWalletId("walletId");
  }

  disconnect() {
    this.localStorageService.clear();
    this.router.navigate(["/connect-wallet"]);
  }
}
