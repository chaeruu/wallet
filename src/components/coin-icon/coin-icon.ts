import { Component, Input } from '@angular/core';

@Component({
  selector: 'coin-icon',
  templateUrl: 'coin-icon.html'
})
export class CoinIconComponent {
  @Input()
  set coin(value: string) {
    this._coin = value;
    this.setCoinPath(this._coin);
  }

  get coin(): string {
    return this._coin;
  }

  @Input()
  network: string;

  private _coin: string;
  public assetUrl: string;

  private setCoinPath(coin: string) {
    this.assetUrl = 'assets/img/currencies/';
    if (this.network === 'testnet' && ['ltc'].includes(coin)) {
      this.assetUrl += 'testnet/';
    }

    this.assetUrl += `${coin}.svg`;
  }
}
