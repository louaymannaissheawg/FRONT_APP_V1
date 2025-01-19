import { Component, OnInit, ViewChild } from "@angular/core";
import { TokenIntegrationComponent } from "../token-integration/token-integration.component";
import { LocalStorageService } from "../service/localStorage.service";

@Component({
  selector: "app-aboutus",
  templateUrl: "./aboutus.component.html",
  styleUrls: ["./aboutus.component.css"],
})
export class AboutusComponent implements OnInit {
  @ViewChild(TokenIntegrationComponent)
  tokenIntegrationComponent!: TokenIntegrationComponent;
  constructor(private localStorageService: LocalStorageService) {}

  async ngOnInit() {
    const walletId = this.localStorageService.getWalletId("walletId");
    if (walletId) {
      console.info("____________________transaction", typeof walletId);
      // this.tokenIntegrationComponent.branchAddress = walletId;
      //     await this.tokenIntegrationComponent.handleReward(walletId);
    }
  }
}
