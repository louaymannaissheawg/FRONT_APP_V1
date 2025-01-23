import { Component, OnInit, OnDestroy } from "@angular/core";
import { WalletService } from "../service/wallet.service";
import { Subscription, interval } from "rxjs";
import { Router } from "@angular/router";
import { LocalStorageService } from "../service/localStorage.service";

@Component({
  selector: "app-connectwallet",
  templateUrl: "./connectwallet.component.html",
  styleUrls: ["./connectwallet.component.css"],
})
export class ConnectwalletComponent implements OnInit, OnDestroy {
  title = "ng-connect-ethereum-wallet";
  public connectingstat: boolean = false;
  public walletConnected: boolean = false;
  public walletId: string = "";
  public showPenguin: boolean = false;
  private checkInterval: Subscription | null = null;

  constructor(
    private walletService: WalletService,
    private router: Router,
    private localStorage: LocalStorageService
  ) {
    console.error("_________________________hehy ");
  }

  connectToWallet = () => {
    this.connectingstat = true;
    this.walletService.connectWallet().then(() => {
      console.log("connecting....");
      this.checkWalletConnected(); // Check immediately after attempting to connect
    });
  };

  checkWalletConnected = async () => {
    const accounts = await this.walletService.checkWalletConnected();
    if (accounts.length > 0) {
      this.walletConnected = true;
      this.walletId = accounts[0];
      console.error(accounts);
      localStorage.setItem("walletId", this.walletId);
      this.showPenguinAnimation();
    } else {
      this.walletConnected = false;
      this.walletId = "";
    }
  };

  showPenguinAnimation = () => {
    this.connectingstat = false;
    this.showPenguin = true;
    setTimeout(() => {
      window.open("http://localhost:4200/dashboard", "_self");
    }, 1000); // Delay of 1 second before navigating
  };

  ngOnInit() {
    console.error("_________________________hehy ");
    const wallet = this.localStorage.getWalletId("walletId");
    console.error("_________________________hehy ", wallet);
    if (wallet) {
      console.error("_________________________hehy ");
      this.router.navigate(["/dashboard"]);
    }
    //  this.checkWalletConnected();
  }

  ngOnDestroy() {
    if (this.checkInterval) {
      this.checkInterval.unsubscribe();
    }
  }
}
