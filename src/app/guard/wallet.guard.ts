import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { LocalStorageService } from "../service/localStorage.service";

export const walletGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorage = inject(LocalStorageService);
  const walletId = localStorage.getWalletId("walletId");
  console.log("_______________", walletId);
  if (!walletId) {
    console.log("_______________", walletId);
    router.navigate(["/connect-wallet"], { replaceUrl: true });
    return false;
  }
  console.log(true);
  return true;
};
