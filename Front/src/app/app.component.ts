import { Component, OnInit } from '@angular/core';
import { Contato } from './models/contato';
import { ContatoService } from './service/contato-service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [ContatoService]
})
export class AppComponent implements OnInit {
	public contato: Contato = new Contato();
	public numeroTela = 1; // 1 = lista de contatos, 2 = Detalhes, 3= alterar, 4 = novo, 5 EXCLUIR, 6 FAVORITO, 7 login
	public listaContatos: Contato[] = [];

	constructor(public contatoService: ContatoService) {

	}

	public ngOnInit() {
		this.buscarContatos();
	}

	public salvar() {
		let novo: boolean = true;
		if (this.contato.id) novo = false;
		if (!this.contato.name && !this.contato.email && !this.contato.twitter && !this.contato.phone) return
		this.contatoService.salvar(this.contato).subscribe((res: Contato) => {
			if (novo) {
				this.listaContatos.push(res);
			} else {
				this.update(res);
			}
			this.mudarTela(1);
			this.contato = new Contato();
		}, err => {
			console.error(err);
		});
	}

	public buscarContatos() {
		this.contatoService.findAll().subscribe((lista: Contato[]) => {
			this.listaContatos = [...lista];
		}, err => {
			console.error(err);
		});
	}

	public mudarTela(tela, newContact?) {
		this.numeroTela = tela;
		if (newContact) {
			this.contato = new Contato();
		}
	}

	public editar(contact) {
		this.contato = new Contato();
		this.contato = contact;
		this.mudarTela(3);
	}
	public detalhes(contact) {
		this.contato = new Contato();
		this.contato = contact;
		this.mudarTela(2);
	}

	public excluir(contato) {
		this.contatoService.remove(contato.id).subscribe(res => {
			for (let i = 0;i < this.listaContatos.length;i++) {
				if (this.listaContatos[i].id == res.id) {
					this.listaContatos.splice(i, 1);
					this.mudarTela(1);
					this.contato = new Contato();
					break;
				}
			}
		}, err => {
			console.error(err);
		})
	}

	public marcarFavorito(contact: Contato) {
		contact.favorite = !contact.favorite;
		this.contatoService.salvar(contact).subscribe((contato: Contato) => {
			this.update(contato);
		}, err => {
			console.error(err);
		})
	}

	public update(contato) {
		for (let i = 0;i < this.listaContatos.length;i++) {
			if (this.listaContatos[i].id == contato.id) {
				this.listaContatos[i] = contato;
				break;
			}
		}
	}

}
