import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogeServiceService } from '../input-dialoge-service.service';
import { SocialSharing } from '@ionic-native/social-sharing';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery";

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, public alertCtrl: AlertController, 
    public dataService: GroceriesServiceService, public inputDialogeService: InputDialogeServiceService, public socialSharing: SocialSharing) {

  }

  loadItem() {
    return this.dataService.getItems();
  }

  async removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index) 
  }

  async shareItem(item, index) {
    console.log("Sharing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Sharing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    
    let message = "Grocery Item - Name : " + item.name + " - Quantity: " + item.quantity;
    let subject = "Shared via Groceries app"

    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("Shared successfully.")
    }).catch((error) => {
      console.error("Error while sharing ", error);
    });
  }



  async editItem(item, index) {
    console.log("Edit Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.inputDialogeService.showPrompt(item, index);
  }  

  addItem() {
    console.log("Adding Item");
    this.inputDialogeService.showPrompt();
  }


}
