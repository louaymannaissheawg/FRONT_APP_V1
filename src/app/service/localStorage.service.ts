import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {

    setItem(key: string, value: any): void {
        const stringValue = JSON.stringify(value);
        localStorage.setItem(key, stringValue);
    }


    getItem<T>(key: string): T | null {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    getWalletId(key: string): string | null {
        const value = localStorage.getItem(key);
        return value ? value: null;
    }


    removeItem(key: string): void {
        localStorage.removeItem(key);
    }


    clear(): void {
        localStorage.clear();
    }
}
