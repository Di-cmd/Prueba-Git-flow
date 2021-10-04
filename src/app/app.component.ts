import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';

/*  SOn variables que se crea y estan tipadas, con los diferntes modelos del proyecto    */
/*panelSelected: Panels;
    editNameMode: boolean;
    initializeExtra: string[];
    lang: any;                        // Varaible que almacena el diccionario para la traduccion de la app
    canLeave = true;                  // Variable booleana para validar si se puede salir de la vista
    projectSelect: any;           // Varaible que almacena el proyecto seleccionado

    orientationFlag: any;
    orientationFlag2: any;

    public _portrait: boolean;
    public _landscape: boolean;
    public animateHome: boolean = false;
    activateInput_: boolean;
    mostrar = true;                   // Varaible booleana que valida si muestra la creacion o la edicion de un proyecto
    arrayPanels: any[];               // Funcion que almacena los paneles para seleccionar
    projects: any[];              // Funcion que almacena los proyecto almacenados
    editMode: boolean;                // Varaible booleana que valida si un proyecto se esta modificando

    url: string;

    constructor(

    ){


    }

  navigateRouter(url: string) {
    try {
        if (this.route.url !== url) {
            this.canLeave = true;
            this.route.navigate([url])
        }
    } catch (error) {
        NotificateUtils.messageErrorTry(`${this.lang['ERROR_NAVIGATEROUTER']}`, error)
    }
  }




  async saveProject(showMessage: boolean = true, projectImport?: Project) {
        if (event) {
            event.preventDefault();
        };
        let lContinue: boolean;
        let message: string;
        let indexProject: number;
        let navigate: boolean;
        try {
            // Se valida si se tiene un proyecto importado
            if (projectImport) {
                // Si se tiene un pryecto importado
                // Se cambia el proyecto actual seleccionado por el que se va a importar
                this.projectSelect = projectImport;
                this.editMode = false;
            }
            // Se valida que el proyecto tenga nombre
            if (this.projectSelect.name && this.projectSelect.name !== '') {
                lContinue = true;
            } else {
                message = this.lang['NAME_DISABLED'];
            }

            // Se valida que el campo nombre no este vacio
            if (lContinue) {
                // Si tiene nombre
                // Se valida si tiene un panel seleccionado
                if (!this.projectSelect.panels[0]) {
                    lContinue = false;
                    message = this.lang['PANEL_DISABLED'];
                }
            }

            // Se valida si en realidad tiene todo los campos necesario para guardar el proyecto
            if (lContinue) {
                // Se valida si se esta modificando un  proyecto
                if (this.editMode) {
                    // Si se esta modificando un proyecto
                    // Se busca el proyecto seleccionado
                    indexProject = this.projects.findIndex(m => m.id === this.projectSelect.id);
                    // Se valida que exista el proyecto
                    if (indexProject !== -1) {
                        // Se guardan los cambios
                        this.projects[indexProject] = this.projectSelect;
                        message = this.lang['PROJECT_CHANGES_SAVED_SUCCESSFULLY'];
                    } else {
                        // Se notifica si el proyecto no existe
                        NotificateUtils.messageErrorToast(this.lang['PROJECT_NOT_EXIST']);
                        return;
                    }
                } else {
                    // Si esta creado un proyecto
                    if (!this.projectSelect.id) {
                        // Se genera un id nuevo para el proyecto
                        this.projectSelect.id = ProjectUtils.generateIdProject(this.projects, this.lang);
                    }
                    // Se valida si tiene un nombre ya ingresado
                    let tmpProject = this._projectService.listProjects.find(
                        m => m.name.toUpperCase() === this.projectSelect.name.toUpperCase()
                    );
                    if (tmpProject) {
                        while (true) {
                            let tmpName = ProjectUtils.generateNameProject(
                                this._projectService.listProjects,
                                this.projectSelect,
                                this.lang
                            );
                            let resp = await NotificateUtils.notificateInput(
                                this.lang['NAME_REPEAT'],
                                tmpName,
                                this.lang
                            );
                            if (!resp.dismiss) {
                                if (resp.value) {
                                    // Se valida si tiene un nombre ya ingresado
                                    tmpProject = this._projectService.listProjects.find(
                                        m => m.name.toUpperCase() === resp.value.toUpperCase()
                                    );
                                    if (!tmpProject) {
                                        this.projectSelect.name = resp.value
                                        break;
                                    }
                                } else {
                                    lContinue = false;
                                }
                            } else {
                                lContinue = false;
                            }
                        }
                    }
                    if (lContinue) {
                        // Valido si es un proyecto importado
                        if (!projectImport) {
                            await this.createAdsExtras();
                        }
                        // Se guarda el proyecto
                        this.projects.unshift(this.projectSelect);
                        message = this.lang['SAVE_PROJECT'];
                        navigate = true;
                        // Se valida si se esta en modo de crear para guardar los iconos
                        if (!this.editMode) {
                            if (!this.ls.getItem(LS_ICON)) {
                                this._iconService.createDefaulIcons();
                            }
                        }
                    }
                }
                if (lContinue) {
                    // Se guardan los cambios en el localStorage
                    // TODO de momento se esta usando el localStorage para almacenar
                    this.ls.setItem('projectsPanelManager', this.projects);
                    this._projectService.loadProjects();
                    if (showMessage) {
                        // Se notifca si guardo un proyecto o no
                        NotificateUtils.messageSuccessToast(message);
                    }
                    // Se valida si se puede ir a la vista de editar un proyecto
                    if (navigate) {
                        this.route.navigate([`home/${this.projectSelect.id}`]);
                    }
                }
            } else {
                // Se notifica algun error al almacenar un proyecto
                NotificateUtils.messageErrorToast(message);
            }
        } catch (error) {
            NotificateUtils.messageErrorTry(`${this.lang['ERROR_SAVEPROJECT']}`, error);
        }
    }*/


}
