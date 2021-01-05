import {Component, OnInit} from '@angular/core';
import {LabelService} from '../../_services/label.service';
import {CertificationService} from '../../_services/certification.service';
import {Certification} from '../../_classes/certification';
import {Label} from '../../_classes/label';
import {InfosTransformateurService} from '../../_services/infos-transformateur.service';
import {InfosTransformateur} from '../../_classes/infosTransformateur';
import {Transformateur} from '../../_classes/transformateur';
import {TransformateurService} from '../../_services/transformateur.service';
import {TokenStorageService} from '../../_services/token-storage.service';
import {UserService} from '../../_services/user.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {UrlVideo} from '../../_classes/url-video';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  certificats: Certification[];
  labels: Label[];
  selectedLabels: Label[];
  selectedCertificats: Certification[];
  description: string;
  nbEmployes: string;
  lienFacebook: string;
  lienInsta: string;
  lienTwitter: string;
  lienSite: string;
  infos: InfosTransformateur;
  transformateur: Transformateur;
  appartientGroupe: boolean;
  urlVideoForm: FormGroup;
  urlVideos: UrlVideo[];
  limit: 15;
  selectedFile: File;

  constructor(private labelService: LabelService, private certifService: CertificationService,
              private infosTService: InfosTransformateurService, private transformateurService: TransformateurService,
              private tokenService: TokenStorageService, private userService: UserService, private formBuilder: FormBuilder) {
    this.urlVideoForm = this.formBuilder.group({
      urls: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.labelService.findAll().subscribe((result) => {
      this.labels = result;
    });
    this.certifService.findAll().subscribe((result) => {
      this.certificats = result;
    });
    this.userService.findUserByName(this.tokenService.getUser().username).subscribe((res: any) => {
      this.transformateur = res.transformateur;
    });
}
  saveInfos(): void {
     this.createUrlList (this.urlVideoForm.value.urls);
     this.infos = new InfosTransformateur(this.transformateur, this.description, this.nbEmployes, this.lienSite,
       this.lienInsta, this.lienTwitter, this.lienFacebook, this.appartientGroupe, this.selectedLabels, this.selectedCertificats, this.urlVideos);
     this.infosTService.saveInfosTransformateur(this.infos).subscribe(
      res => {
        alert ('Informations sauvegardées');
      },
      err => {
        console.log('Une erreur s\'est produite lors de l\'enregistrement des informations saisies' );
      }
    );
  }
  createUrlList(urlList): void {
    this.urlVideos = [];
    for (let i = 0; i < urlList.length; i++) {
      if (urlList[i].libelle !== '') {
        this.urlVideos.push(new UrlVideo(urlList[i].libelle));
      }
    }
  }
  validate(ev: KeyboardEvent): void {
    const digits: Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const saisie = ev.key;
    if (digits.indexOf(saisie) === -1) {
      ev.preventDefault();
    }
  }
  urls(): FormArray {
    return this.urlVideoForm.get('urls') as FormArray;
  }
  newUrl(): FormGroup {
    return this.formBuilder.group({
      libelle: ''
    });
  }
  addUrl(): void {
    this.urls().push(this.newUrl());
  }
  removeUrl(i: number): void {
    this.urls().removeAt(i);
  }
  onFileChanged(event): void {
    this.selectedFile = event.target.files[0];
  }
  onUpload(): void{
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  }
}
