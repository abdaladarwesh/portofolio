import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { MainComponent } from './components/main-component/main-component';
import { AboutMe } from './components/about-me/about-me';
import { ProjectsNumbers } from './components/projects-numbers/projects-numbers';
import { InternExperience } from './components/intern-experience/intern-experience';
import { Projects } from './components/projects/projects';
import { ContactMe } from './components/contact-me/contact-me';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, MainComponent, AboutMe, ProjectsNumbers, InternExperience, Projects, ContactMe, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portofolio');
}
