import { Injectable } from '@angular/core';
import { GroceriesServiceService } from '../app/groceries-service.service';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class InputDialogeServiceService {

  constructor(public alertCtrl: AlertController, public dataService: GroceriesServiceService) { }


  async showPrompt(item?, index?) {
    const prompt = await this.alertCtrl.create({
      message: item ? "Please edit item...": "Add Item",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name: null
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item ? item.quantity: null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index != undefined){
              this.dataService.editItem(item, index)
            }
            else {
              this.dataService.addItem(item)
            }
          }
        }
      ]
    });
    prompt.present();
  }  

}
