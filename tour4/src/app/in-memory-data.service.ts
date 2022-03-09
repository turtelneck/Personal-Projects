import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Box } from './box';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const boxes: Box[] = [
      { 
        id: 10,
        name: 'Stō Prem Mk I',
        titles: 'Stō® Prem Mk I / MilleniAllōy InfiniStōr / STŌ®',
        price: '330.99',
        description: 'A box for every occasion, especially if that occasion is that you need something to put in the corner of your sci-fi TV set.',
        tech: 'MilleniAllōy is a really cool name for a metal that isn\'t really that cool. It\'s just normal metal, actually. We just get to say it\'s different because we \"invented\" the particular alloy. In fact, the process was so unscientific that this is probably even shittier than something you\'d get elsewhere. We wouldn\'t know—we haven\'t tested it, and we have no plans to do so.',
        search: 'Sto Preem, Mk I',
        imageAddress: 'assets/img/sto-preem-mk-1.jpg',
        imageAltDescription: 'sto preem mk i'
      },
      {
        id: 11,
        name: 'Stō Prem Lite',
        titles: 'Stō® Prem Lite / MilleniAllōy Cōllapsed / STŌ®',
        price: '220.99',
        description: 'The Stō Prem Lite is for those who don\'t have space for the Mk I but still want friends to question their taste in storage furniture.',
        tech: '',
        search: 'Sto Preem Lite',
        imageAddress: 'assets/img/sto-preem-lite.jpg',
        imageAltDescription: 'sto preem lite'
      },
      {
        id: 12,
        name: 'Cargo Stō',
        titles: 'Cargo Stō® / CostPlus Extōrtiōn / STŌ®',
        price: '6150.99',
        description: 'We don\'t actually stock these. If you buy this we\'ll just buy one ourselves and sell it to you at a premium.',
        tech: '',
        search: 'Cargo Sto',
        imageAddress: 'assets/img/cargo-sto.jpg',
        imageAltDescription: 'cargo sto'
    },
      {
        id: 13,
        name: 'Card Stō',
        titles: 'Card Stō® / Nufōld MatteStock / STŌ®',
        price: '80.99',
        description: 'A premium cardboard experience. You may not notice the difference, but your wallet will.',
        tech: '',
        search: 'Card Sto',
        imageAddress: 'assets/img/card-sto.jpg',
        imageAltDescription: 'card sto'
    },
      {
        id: 14,
        name: 'Scrapwood Stō',
        titles: 'Scrapwood Stō® / BristleTōuch Splinterfest / STŌ®',
        price: '90.99',
        description: 'We don\'t know why you\'d want anything made out of scrapwood, but at least if you buy it we won\'t have to look at it anymore.',
        tech: '',
        search: 'Scrapwood Sto',
        imageAddress: 'assets/img/scrapwood-sto.jpg',
        imageAltDescription: 'scrapwood sto'
    },
      {
        id: 15,
        name: 'Scrap Stō',
        titles: 'Scrap Stō® / CostPlus Extōrtiōn / STŌ®',
        price: '2610.99',
        description: 'We only stock these so its name can be a play on "Scrapwood Stō".',
        tech: '',
        search: 'Scrap Sto',
        imageAddress: 'assets/img/scrap-sto.jpg',
        imageAltDescription: 'scrap sto'
    },
      {
        id: 16,
        name: 'Treasure Stō',
        titles: 'Treasure Stō® / FauxLock HSwoodshop / STŌ®',
        price: '300.99',
        description: 'Yes, we messed up while making the locks so these don\'t actually open. No, we\'re not changing the price.',
        tech: '',
        search: 'Treasure Sto',
        imageAddress: 'assets/img/treasure-sto.jpg',
        imageAltDescription: 'treasure sto'
    },
      {
        id: 17,
        name: 'Wally',
        titles: 'Wally® / LiteralWalrus / THE ŌCEAN®',
        price: 'priceless',
        description: 'This is Wally. He loves you. He may not be for sale, but in a way he\'s already yours. Who could put a price on that smile?',
        tech: '',
        search: 'Wally',
        imageAddress: 'assets/img/wally.jpg',
        imageAltDescription: 'wally the walrus' }
    ];
    return {boxes};
  }
}
