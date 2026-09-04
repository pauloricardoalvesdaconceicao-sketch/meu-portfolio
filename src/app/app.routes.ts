import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sobre',
    pathMatch: 'full'
  },

  {
    path: 'sobre',
    loadComponent: () =>
      import('./features/sobre/sobre').then(m => m.Sobre)
  },

  {
    path: 'objetivo-profissional',
    loadComponent: () =>
      import('./features/objetivo-profissional/objetivo-profissional')
        .then(m => m.ObjetivoProfissional)
  },

  {
    path: 'formacao-academica',
    loadComponent: () =>
      import('./features/formacao-academica/formacao-academica')
        .then(m => m.FormacaoAcademica)
  },

  {
    path: 'habilidades',
    loadComponent: () =>
      import('./features/habilidades/habilidades')
        .then(m => m.Habilidades)
  },

  {
    path: 'experiencia',
    loadComponent: () =>
      import('./features/experiencia/experiencia')
        .then(m => m.Experiencia)
  },

  {
    path: 'certificacoes',
    loadComponent: () =>
      import('./features/certificacoes/certificacoes')
        .then(m => m.Certificacoes)
  },

  {
    path: 'qualificacoes',
    loadComponent: () =>
      import('./features/qualificacoes/qualificacoes')
        .then(m => m.Qualificacoes)
  },

  {
    path: 'projetos',
    loadComponent: () =>
      import('./features/projetos/projetos')
        .then(m => m.Projetos)
  },

  {
    path: '**',
    redirectTo: 'sobre'
  }
];